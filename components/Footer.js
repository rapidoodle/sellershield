export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <p>© {new Date().getFullYear()} SellerShield. All rights reserved.</p>
      <p className="mt-1">Built with care by the SellerShield team</p>
      <p className="mt-2">
        <a href="/blog" className="text-blue-600 underline">Visit our Blog</a>
      </p>
    </footer>
  );
}