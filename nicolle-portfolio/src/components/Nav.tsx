import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "tools", label: "Tools" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Portfolio" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/75 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <button onClick={() => go("home")} className="flex flex-col items-start text-left">
          <span className="font-display text-2xl leading-none">Nicolle</span>
          <span className="text-eyebrow mt-1">Virtual Assistant</span>
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-[0.72rem] tracking-luxe uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button onClick={() => go("contact")} className="btn-luxe">
            Let&apos;s Work Together
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-end gap-1.5"
        >
          <span className={`h-px bg-foreground transition-all ${open ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`} />
          <span className={`h-px bg-foreground transition-all ${open ? "opacity-0" : "w-4"}`} />
          <span className={`h-px bg-foreground transition-all ${open ? "w-6 -rotate-45 -translate-y-[7px]" : "w-5"}`} />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-background/95 backdrop-blur-xl ${
          open ? "max-h-[600px] border-t border-border" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-left text-sm tracking-luxe uppercase text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => go("contact")} className="btn-luxe mt-2 self-start">
            Let&apos;s Work Together
          </button>
        </nav>
      </div>
    </header>
  );
}
