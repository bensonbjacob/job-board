import FormSubmitButton from "@/components/FormSubmitButton";
import { Job } from "@prisma/client";

interface AdminSideBarProps {
  job: Job;
}

export default function AdminSideBar({ job }: AdminSideBarProps) {
  return (
    <aside className="flex w-[200px] flex-none flex-row items-center gap-2 md:flex-col md:items-stretch">
      {job.approved ? (
        <span className="text-center font-semibold text-green-500">
          Approved
        </span>
      ) : (
        <ApproveSubmissionButton jobId={job.id} />
      )}
    </aside>
  );
}

interface AdminButtonProps {
  jobId: number;
}

function ApproveSubmissionButton({ jobId }: AdminButtonProps) {
  return (
    <form>
      <input type="hidden" name="jobId" value={jobId} />
      <FormSubmitButton className="w-full bg-green-500 hover:bg-gray-600">
        Approve
      </FormSubmitButton>
    </form>
  );
}
