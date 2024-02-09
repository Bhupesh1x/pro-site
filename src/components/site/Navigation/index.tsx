import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "./shared/ModeToogle";

function Navigation() {
  return (
    <nav className="p-4 flex items-center justify-between relative">
      <aside className="flex items-center gap-2">
        <Image src="/assets/logo.svg" alt="logo" height={40} width={40} />
        <span className="text-2xl font-bold">ProSite</span>
      </aside>
      <aside className="flex items-center gap-2">
        <Link
          href="/agency"
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80 transition"
        >
          Login
        </Link>
        <ModeToggle />
      </aside>
    </nav>
  );
}

export default Navigation;
