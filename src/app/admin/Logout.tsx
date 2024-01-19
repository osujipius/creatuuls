"use client";

import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Logout() {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <Button
      className="p-6"
      onClick={async () => {
        await signOut();
        router.push("/");
      }}
    >
      Log Out
    </Button>
  );
}
