import Link from "next/link"; // ← this is what you're missing
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white dark:bg-slate-950 shadow-sm sticky top-0 z-50">
      <div className="text-xl font-bold">
        <Link href="/" className="hover:text-primary">Seller<span className="text-primary">Shield</span></Link>
        
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