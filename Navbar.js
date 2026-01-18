import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold tracking-wide text-cyan-400">Cyber Infrastructure Solutions</div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6 text-slate-300" /> : <Menu className="w-6 h-6 text-slate-300" />}
          </button>
        </div>

        <div className={`md:flex gap-6 text-sm text-slate-300 ${menuOpen ? "flex flex-col absolute top-full left-0 w-full bg-slate-950/90 py-4 px-6 md:relative md:flex-row md:bg-transparent md:py-0 md:px-0" : "hidden md:flex"}`}>
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-white">Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-white">Services</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white">About</Link>
          <Link href="/experience" onClick={() => setMenuOpen(false)} className="hover:text-white">Experience</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
