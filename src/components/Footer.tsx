import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Yellowhammer Tech Jobs</h3>
            <p className="text-sm text-muted-foreground">
              Connecting Alabama&apos;s Tech Talent
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            {/* <Link href="/about" className="hover:underline">
              About Us
            </Link> */}
            <a href="https://www.jacobbenson.dev/" className="hover:underline">
              Contact
            </a>
            {/* <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link> */}
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <a href="https://www.jacobbenson.dev/" className="underline">
            Jacob Benson
          </a>{" "}
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
