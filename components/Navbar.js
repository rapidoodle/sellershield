import Link from "next/link"; // ← this is what you're missing
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white dark:bg-slate-950 shadow-sm sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logoo.png" // Make sure your logo file is in /public and named accordingly
            alt="SellerShield Logo"
            width={160} // Adjust width/height to fit your design
            height={40}
            priority
          />
        </Link>
      </div>

      <nav className="hidden md:flex gap-6 text-sm text-slate-800 dark:text-slate-100">
        <Link href="/" className="hover:text-primary">Services</Link>
        <Link href="/" className="hover:text-primary">Contact</Link>
        <Link href="/blog" className="hover:text-primary">Blog</Link>
      </nav>

      <div className="flex items-center gap-2 ml-auto md:ml-0">
        <Button size="sm">📅 Book a Call</Button>
        <ThemeToggle />
      </div>
    </header>
  );
}