import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle"; // ← make sure this file exists

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white dark:bg-slate-950 shadow-sm sticky top-0 z-50">
      <div className="text-xl font-bold">
        Seller<span className="text-primary">Shield</span>
      </div>
      
      <nav className="hidden md:flex gap-6 text-sm text-slate-800 dark:text-slate-100">
        <a href="/" className="hover:text-primary">Services</a>
        <a href="/" className="hover:text-primary">Contact</a>
        <a href="/blog" className="hover:text-primary">Blog</a>
      </nav>

      <div className="flex items-center gap-2 ml-auto md:ml-0">
        <Button size="sm">📅 Book a Call</Button>
        <ThemeToggle /> {/* ← Toggle placed here */}
      </div>
    </header>
  );
}