import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import pageLogo from "./../assets/page-logo.webp";

export default function Navbar() {
  return (
    <header className="border-b border-gray-100 shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={pageLogo}
            width={150}
            height={150}
            alt="Creatuuls Jobs logo"
          />
        </Link>
      </nav>
    </header>
  );
}
