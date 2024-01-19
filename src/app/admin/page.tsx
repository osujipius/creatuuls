"use client";

import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import Logout from "./Logout";

export default function AdminPage() {
  const { user, signOut } = useClerk();
  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center space-y-10 px-3 pt-5">
      <H1 className="text-center">
        Welcome {user?.primaryEmailAddress?.emailAddress}
      </H1>
      <p className="text-center">
        Welcome to the Admin Dashboard for Creatuuls jobs.
        <br /> Here, you have the ability to create, manage, and post new job
        opportunities.
        <br /> Click on the button below to create a job posting
      </p>
      <div className="flex gap-3">
        <Button className="p-6">
          <Link href="/admin/jobs/new">Post Job</Link>
        </Button>
        <Logout />
      </div>
    </main>
  );
}
