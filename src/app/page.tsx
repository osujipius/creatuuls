import H1 from "@/components/ui/h1";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex justify-center gap-5 bg-white py-24 sm:py-32">
      <Link href={"/admin"} passHref prefetch>
        <div className="flex min-h-24 w-80 cursor-pointer flex-col justify-between gap-x-16 gap-y-2 rounded-2xl border border-gray-300 bg-gray-50 p-8 text-center">
          <h1 className="text-xl font-bold">Post jobs</h1>
          <p>Login as admin and create jobs for amazing talents</p>
        </div>
      </Link>

      <Link href={"/jobs-list"} passHref prefetch>
        <div className="flex min-h-24 w-80 cursor-pointer flex-col justify-between gap-x-16 gap-y-2 rounded-2xl border border-gray-300 bg-gray-50 p-8 text-center">
          <h1 className="text-xl font-bold">View jobs</h1>
          <p>Get access to an amazing list of jobs and opportunities</p>
        </div>
      </Link>
    </div>
  );
}
