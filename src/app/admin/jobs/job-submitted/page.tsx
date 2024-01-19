import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import Link from "next/link";

export default function Page() {
  return (
    <main className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center">
      <H1>Job submitted</H1>
      <p>Your job posting has been submitted.</p>
      <Button className="p-6">
        <Link href="/admin">Return to Dashboard</Link>
      </Button>
    </main>
  );
}
