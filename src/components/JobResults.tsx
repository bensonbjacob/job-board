import { JobFilterValues } from "@/lib/validation";
import JobListItem from "./JobListItem";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import Link from "next/link";

interface JobResultsProps {
  filterValues: JobFilterValues;
}

export default async function JobResults({
  filterValues: { q, type, location, remote },
}: JobResultsProps) {
  const searchString = q
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  const searchFilter: Prisma.JobWhereInput = searchString
    ? {
        OR: [
          { title: { search: searchString } },
          { companyName: { search: searchString } },
          { type: { search: searchString } },
          { locationType: { search: searchString } },
          { location: { search: searchString } },
        ],
      }
    : {};

  const where: Prisma.JobWhereInput = {
    AND: [
      searchFilter,
      type ? { type } : {},
      location ? { location } : {},
      remote ? { locationType: "Remote" } : {},
      { approved: true },
    ],
  };

  const jobs = await prisma?.job.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="grow space-y-4">
      {jobs?.map((job) => (
        <Link href={`/jobs/${job.slug}`} key={job.id} className="block">
          <JobListItem job={job} />
        </Link>
      ))}

      {jobs?.length === 0 && (
        <p className="m-auto text-center">
          No jobs found for the selected filters.
        </p>
      )}
    </div>
  );
}
