"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/profile", label: "Profile" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="header gf-header">
      <Link href="/#home" className="brand" onClick={() => setOpen(false)} aria-label="Gioele Friggia, home">GF<span>®</span></Link>
      <button
        type="button"
        className={`gf-menu-toggle${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls="gf-site-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((current) => !current)}
      >
        <span/><span/><span/>
      </button>
      <nav id="gf-site-navigation" className={`gf-site-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
        {links.map(({href,label}) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <Link className="header-contact-cta" href="/contact">LET’S TALK ↗</Link>
    </header>
  );
}
