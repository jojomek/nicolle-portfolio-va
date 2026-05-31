import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroBackdrop from "@/assets/hero-backdrop.jpg";
import profilePhoto from "@/assets/nicolle-profile.jpg";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { VideoCard } from "@/components/VideoCard";
import { PreviewCard } from "@/components/PreviewCard";
import { usePreview } from "@/components/PreviewProvider";
import {
  experience,
  toolCategories,
  services,
  videos,
  sheets,
  pdfs,
  projectImages,
  certificates,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nicolle — Virtual Assistant for Discerning Founders" },
      {
        name: "description",
        content:
          "Nicolle is a senior virtual assistant supporting founders across the US, Australia, and Canada with administrative ops, e-commerce, and social media management.",
      },
      { property: "og:title", content: "Nicolle — Virtual Assistant" },
      {
        property: "og:description",
        content:
          "Premium virtual assistance for founders who need precision, discretion, and momentum.",
      },
    ],
  }),
  component: Home,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-eyebrow">{label}</div>
      <div className="font-display text-4xl md:text-5xl">{value}</div>
    </div>
  );
}

function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />

      {/* HERO */}
      <section id="home" className="relative min-h-screen w-full overflow-hidden grain">
        <div className="absolute inset-0">
          <img src={heroBackdrop} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-44 pb-20 min-h-screen flex flex-col justify-center">
          <Reveal>
            <div className="text-eyebrow mb-6">Nicolle — Virtual Assistant</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-[14vw] sm:text-[10vw] lg:text-[8.5rem] leading-[0.95] tracking-tight max-w-5xl">
              Quiet Precision.<br />
              <span className="italic text-muted-foreground">Powerful Results.</span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              I&apos;m Nicolle — a senior virtual assistant for founders who need
              the engine room of their business handled with discretion, taste,
              and uncommon attention to detail.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a href="#contact" onClick={(e)=>{e.preventDefault();document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});}} className="btn-luxe btn-luxe-accent">
                Let&apos;s Work Together
                <span aria-hidden>→</span>
              </a>
              <a href="#portfolio" onClick={(e)=>{e.preventDefault();document.getElementById("portfolio")?.scrollIntoView({behavior:"smooth"});}} className="btn-luxe">
                View Portfolio
              </a>
            </div>
          </Reveal>

          <div className="absolute bottom-10 left-6 lg:left-10 right-6 lg:right-10 flex items-end justify-between text-eyebrow">
            <span>Baguio, PH — Remote Worldwide</span>
            <span className="hidden md:block">Scroll ↓</span>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {[
            { t: "Independence", d: "I handle the details so you can focus on the bigger picture." },
            { t: "Integrity", d: "Clear communication, faithful follow-through, zero theatrics." },
            { t: "Precision", d: "High standards, audit-ready files, work I'm proud to sign." },
            { t: "Discretion", d: "Your business stays your business. Always." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 100}>
              <div className="bg-background p-8 lg:p-10 h-full">
                <div className="text-eyebrow mb-6">0{i + 1}</div>
                <h3 className="font-display text-2xl mb-4">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 border-t border-b border-border py-14">
          <Reveal><Stat value="5+" label="Years Experience" /></Reveal>
          <Reveal delay={80}><Stat value="100+" label="Visa Applications" /></Reveal>
          <Reveal delay={160}><Stat value="98%" label="Client Satisfaction" /></Reveal>
          <Reveal delay={240}><Stat value="3" label="Continents Served" /></Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div>
              <div className="text-eyebrow mb-6">About</div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-8">
                Where calm <span className="italic text-muted-foreground">meets</span> execution.
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed max-w-xl">
                <p>
                  For five years I&apos;ve been the steady hand behind founders in
                  e-commerce, retail, immigration, and hospitality — across the
                  United States, Australia, and Canada.
                </p>
                <p>
                  My background is administrative operations, e-commerce, CRM
                  pipelines, and multi-channel customer support. My instinct is
                  to bring order — to inboxes, to spreadsheets, to the parts of
                  your business that have been waiting for someone to actually
                  care about them.
                </p>
                <p>The result: fewer dropped balls. More signed deals. Time you can finally spend on growth.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <img src={profilePhoto} alt="Nicolle — Virtual Assistant" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-eyebrow mb-2">Premium Virtual Assistance</div>
                <div className="font-display text-2xl">Built to Simplify Your Workflow</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-32 px-6 lg:px-10 bg-card">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-eyebrow mb-6">Services</div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-16 max-w-3xl">
              The work, <span className="italic text-muted-foreground">handled.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="bg-card p-10 h-full hover-lift border border-transparent">
                  <div className="font-display text-3xl text-accent mb-4">0{i + 1}</div>
                  <h3 className="font-display text-2xl mb-4">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-eyebrow mb-6">Toolkit</div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-4 max-w-3xl">
              The stack I run on.
            </h2>
            <p className="text-muted-foreground max-w-xl mb-16">
              Fluent across the platforms today&apos;s remote operations actually live in.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {toolCategories.map((cat, i) => (
              <Reveal key={cat.label} delay={i * 60}>
                <div className="bg-background p-7 h-full">
                  <div className="text-eyebrow mb-5">{cat.label}</div>
                  <ul className="space-y-2.5">
                    {cat.tools.map((t) => (
                      <li key={t} className="text-sm flex items-start gap-2.5">
                        <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <ExperienceSection />

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-eyebrow mb-6">Selected Work</div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-16 max-w-3xl">
              The portfolio.
            </h2>
          </Reveal>

          {/* Videos */}
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <h3 className="font-display text-3xl">Video & Social Reels</h3>
              <span className="text-eyebrow hidden sm:block">{videos.length} Samples</span>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {videos.map((v, i) => (
              <Reveal key={v.src} delay={i * 60}>
                <VideoCard {...v} />
              </Reveal>
            ))}
          </div>

          {/* Spreadsheets */}
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <h3 className="font-display text-3xl">Spreadsheets & Trackers</h3>
              <span className="text-eyebrow hidden sm:block">Operational Tools</span>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {sheets.map((s, i) => (
              <Reveal key={s.image} delay={i * 60}>
                <PreviewCard {...s} kind="Spreadsheet" />
              </Reveal>
            ))}
          </div>

          {/* PDFs / Research */}
          <Reveal>
            <h3 className="font-display text-3xl mb-8">Research & Documents</h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {pdfs.map((p, i) => (
              <Reveal key={p.image} delay={i * 60}>
                <PreviewCard {...p} kind="PDF" />
              </Reveal>
            ))}
            {projectImages.map((p, i) => (
              <Reveal key={p.image} delay={(pdfs.length + i) * 60}>
                <PreviewCard {...p} kind="Image" />
              </Reveal>
            ))}
          </div>

          {/* Certificates */}
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <h3 className="font-display text-3xl">Certifications & Training</h3>
              <span className="text-eyebrow hidden sm:block">{certificates.length} Credentials</span>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((c, i) => (
              <Reveal key={c.image} delay={i * 50}>
                <PreviewCard {...c} kind="Certificate" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <ResumeSection />



      {/* CTA */}
      <section id="contact" className="relative py-28 lg:py-40 px-6 lg:px-10 border-t border-border overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={heroBackdrop} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="text-eyebrow mb-6">Contact</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8">
              Ready to <span className="italic text-muted-foreground">reclaim</span><br />your time?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground max-w-xl mx-auto mb-12">
              Send a note. I reply within one business day with a clear next
              step — never a sales script.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="grid sm:grid-cols-3 gap-px bg-border max-w-3xl mx-auto border border-border mb-12 text-left">
              <a
                href="mailto:nicoelljnkr@gmail.com"
                className="bg-background p-7 hover-lift block group"
              >
                <div className="text-eyebrow mb-3">Email</div>
                <div className="font-display text-lg group-hover:text-accent transition-colors break-all">nicoelljnkr@gmail.com</div>
              </a>
              <a
                href="tel:+639152446695"
                className="bg-background p-7 hover-lift block group"
              >
                <div className="text-eyebrow mb-3">Phone</div>
                <div className="font-display text-lg group-hover:text-accent transition-colors">+63 915 244 6695</div>
              </a>
              <a
                href="https://www.linkedin.com/in/gene-nicolle-salonga"
                target="_blank" rel="noopener noreferrer"
                className="bg-background p-7 hover-lift block group"
              >
                <div className="text-eyebrow mb-3">LinkedIn</div>
                <div className="font-display text-lg group-hover:text-accent transition-colors">in/gene-nicolle-salonga</div>
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <a href="mailto:nicoelljnkr@gmail.com" className="btn-luxe btn-luxe-accent">
              Start the Conversation →
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="font-display text-3xl">Nicolle</div>
            <div className="text-eyebrow mt-1">Virtual Assistant</div>
          </div>
          <div className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Nicolle. All rights reserved. Built with intention.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ExperienceSection() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section id="experience" className="py-24 lg:py-32 px-6 lg:px-10 bg-card">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-eyebrow mb-6">Experience</div>
          <h2 className="font-display text-5xl md:text-6xl leading-tight mb-16 max-w-3xl">
            Five years. Three continents. <span className="italic text-muted-foreground">Receipts.</span>
          </h2>
        </Reveal>
        <div className="border-t border-border">
          {experience.map((e, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={e.role + i} delay={i * 50}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-start justify-between gap-6 py-8 text-left group"
                  >
                    <div className="flex-1 grid lg:grid-cols-[1fr_1fr_auto] gap-2 lg:gap-8 items-baseline">
                      <h3 className="font-display text-2xl md:text-3xl group-hover:text-accent transition-colors">{e.role}</h3>
                      <div className="text-sm text-muted-foreground">{e.company}</div>
                      <div className="text-eyebrow whitespace-nowrap">{e.period}</div>
                    </div>
                    <span className={`text-3xl font-display leading-none mt-1 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-10 pl-1 max-w-3xl">
                        <div className="text-eyebrow mb-4">{e.location}</div>
                        <ul className="space-y-3">
                          {e.points.map((p, j) => (
                            <li key={j} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                              <span className="text-accent mt-2 w-1.5 h-px bg-accent flex-shrink-0" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ResumeSection() {
  const { open } = usePreview();
  const resumeSrc = "/documents/Gene_Nicolle_Salonga_Resume.pdf";
  return (
    <section id="resume" className="py-24 lg:py-32 px-6 lg:px-10 bg-card border-t border-border">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
        <Reveal>
          <div>
            <div className="text-eyebrow mb-6">Resume</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-8">
              The full <span className="italic text-muted-foreground">dossier.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mb-10">
              Five years of operational depth across e-commerce, immigration,
              hospitality, and customer success — distilled into a single
              document. Preview it inline or download a copy for your records.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => open({ kind: "pdf", src: resumeSrc, title: "Gene Nicolle Salonga — Resume" })}
                className="btn-luxe btn-luxe-accent"
              >
                Preview Resume <span aria-hidden>→</span>
              </button>
              <a href={resumeSrc} download className="btn-luxe">
                Download PDF
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <button
            onClick={() => open({ kind: "pdf", src: resumeSrc, title: "Gene Nicolle Salonga — Resume" })}
            className="group relative block w-full text-left border border-border bg-background hover-lift overflow-hidden aspect-[4/5]"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 1h11l7 7v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                  <path d="M14 1v7h7"/>
                </svg>
              </div>
              <div className="text-eyebrow">PDF · 1 file</div>
              <div className="font-display text-2xl leading-tight">
                Gene Nicolle Salonga<br />
                <span className="italic text-muted-foreground">Resume</span>
              </div>
              <div className="text-[0.7rem] tracking-luxe uppercase text-muted-foreground group-hover:text-accent transition-colors mt-2">
                Click to Preview →
              </div>
            </div>
          </button>
        </Reveal>
      </div>
    </section>
  );
}

