import Image from "next/image";
import Link from "next/link";
import alabama from "@/assets/alabama.svg";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={alabama}
            alt="Yellowhammer Tech Jobs Logo"
            width={40}
            height={60}
          />
          <span className="text-xl font-bold tracking-tight">
            Yellowhammer Tech Jobs
          </span>
        </Link>
        <Button asChild>
          <Link href="/jobs/new">Post a Job</Link>
        </Button>
      </nav>
    </header>
  );
}
