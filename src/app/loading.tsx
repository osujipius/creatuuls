"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div
      role="status"
      className="border-red flex !h-screen w-screen items-center justify-center border pb-10"
    >
      <Loader2 size={60} className="animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
