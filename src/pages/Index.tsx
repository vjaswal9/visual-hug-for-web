// src/pages/Index.tsx
import {
  Target,
  Shield,
  Rocket,
  BarChart3,
  Brain,
  FileCheck,
  Settings,
  ListChecks,
  Users,
  ClipboardCheck,
  Mail,
  Linkedin,
  ArrowDown,
  Menu,
  X,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import outcomesBg from "@/assets/outcomes-boardroom.jpg";
import servicesBg from "@/assets/services-collaboration.jpg";
import heroBg from "@/assets/hero-abstract.jpg";
import howWeWorkBg from "@/assets/how-we-work.jpg";
import aboutBg from "@/assets/about-leader.jpg";
import { useEffect, useState } from "react";
import kudoLogo from "@/assets/kudo-logo.png";

/* ─── Scroll-animated wrapper ─── */
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.12);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Data ─── */
const outcomes = [
  { icon: Target, title: "Strategic clarity", desc: "A clear AI roadmap tied to business outcomes, not hype." },
  { icon: Shield, title: "Defensible governance", desc: "Policies and guardrails your board and regulators will trust." },
  { icon: Rocket, title: "Accelerated delivery", desc: "AI initiatives that ship — not stall in committee." },
  { icon: BarChart3, title: "Measurable ROI", desc: "Clear metrics linking AI spend to business value." },
];

const services = [
  { icon: Brain, title: "AI Strategy", desc: "Align AI initiatives with business goals and board expectations." },
  { icon: FileCheck, title: "Policy & Governance", desc: "Build frameworks that satisfy regulators and enable innovation." },
  { icon: Settings, title: "Operating Model Design", desc: "Structure teams and processes to scale AI responsibly." },
  { icon: ListChecks, title: "Use Case Prioritisation", desc: "Identify and rank high-impact AI opportunities by feasibility." },
  { icon: Users, title: "Leadership Enablement", desc: "Equip your C-suite with practical AI literacy and confidence." },
  { icon: ClipboardCheck, title: "Delivery Assurance", desc: "Keep AI programmes on track with hands-on oversight." },
];

const steps = [
  { num: "01", title: "Clarify", desc: "We assess your AI maturity, align stakeholders, and define a clear roadmap." },
  { num: "02", title: "Govern", desc: "We build the policies, guardrails, and governance structures you need." },
  { num: "03", title: "Deliver", desc: "We embed with your team to turn plans into measurable progress." },
];

/* ─── Page ─── */
const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#outcomes", label: "Outcomes" },
    { href: "#services", label: "Services" },
    { href: "#how", label: "How We Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  // ESC to close + prevent background scroll while overlay is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 min-w-0" aria-label="Kudo Advisory home">
            <img src={kudoLogo} alt="Kudo Advisory" className="h-12 sm:h-16 w-auto" />
          </a>

          {/* Desktop / tablet nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* ── Full-screen mobile overlay menu (no right-side drawer) ── */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-200 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMobileMenu}
          className="absolute inset-0 bg-background/70 backdrop-blur-xl"
        />

        {/* Panel content (full-screen, clean) */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={`relative h-full w-full px-6 pt-6 pb-10 transition-transform duration-200 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <div className="max-w-md mx-auto h-full flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <img src={kudoLogo} alt="Kudo Advisory" className="h-11 w-auto" />
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Close menu" onClick={closeMobileMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Primary CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-primary px-5 text-base font-medium text-primary-foreground hover:bg-primary/90"
              >
                Book a Discovery Call
              </a>
            </div>

            {/* Nav links */}
            <div className="mt-7 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-2xl border border-border bg-card/60 px-4 py-4 text-base hover:bg-secondary transition-colors"
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="text-muted-foreground">→</span>
                </a>
              ))}
            </div>

            {/* Footer actions */}
            <div className="mt-auto pt-10 space-y-3">
              <a
                href="mailto:vijay@kudoadvisory.com"
                className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
              >
                <Mail className="w-4 h-4" /> vijay@kudoadvisory.com
              </a>
              <a
                href="https://www.linkedin.com/in/vijayjaswal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <header className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        <div className="relative z-10 max-w-3xl text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">AI Advisory for Leaders</p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Turn AI intent into <span className="text-gradient-gold">forward motion</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Kudo is a Japanese word (駆動) — it means <em>driving force</em>. We help leadership teams go from AI ambition to governed,
            measurable progress — without the buzzwords.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 px-2">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base">
              <a href="#contact">Book a Discovery Call</a>
            </Button>
            <Button asChild variant="outline" className="border-border hover:bg-secondary px-8 py-3 text-base">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </header>

      {/* ── Outcomes — split layout ── */}
      <section id="outcomes" className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">What You Get</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">Executive-ready outcomes</h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={outcomesBg}
                  alt="Leadership team in boardroom with data visualizations"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>
            </AnimatedSection>

            <div className="grid gap-5">
              {outcomes.map((o, i) => (
                <AnimatedSection key={o.title} delay={i * 120}>
                  <div className="flex gap-5 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <o.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{o.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services — rows with image banner ── */}
      <section id="services" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">Services</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {services.slice(0, 3).map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 100}>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="relative rounded-xl overflow-hidden mb-10 shadow-2xl">
              <img src={servicesBg} alt="Team collaborating around AI dashboards" className="w-full h-56 md:h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-background/70" />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(3).map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 100}>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section id="how" className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative rounded-xl overflow-hidden mb-16 shadow-2xl">
              <img src={howWeWorkBg} alt="Team planning and collaborating" className="w-full h-56 md:h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80" />
            </div>
          </AnimatedSection>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">Our Approach</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">How We Work</h2>
          </AnimatedSection>

          <div className="space-y-0">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 150}>
                <div className="flex gap-8 items-start group">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-primary">{s.num}</span>
                    {i < steps.length - 1 && (
                      <div className="w-px h-20 bg-border mt-3">
                        <ArrowDown className="w-4 h-4 text-muted-foreground -ml-[7px] mt-16" />
                      </div>
                    )}
                  </div>
                  <div className="pb-12">
                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 md:py-32 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">About Us</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Practical AI advisory for enterprise leaders</h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img src={aboutBg} alt="Advisory leadership" className="w-full h-[340px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                <p className="text-3xl">駆動</p>
                <p className="text-muted-foreground leading-relaxed">
                  Kudo — Japanese for <em>driving force</em>. The power that turns intent into forward motion.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Kudo Advisory was founded to bridge the gap between AI ambition and enterprise reality. We work with CIOs, CDOs, and
                  transformation leads to build AI strategies that are governed, measurable, and actually get delivered.
                </p>
                <p className="text-muted-foreground leading-relaxed">No buzzwords. No vendor lock-in. Just clear-headed advice that moves the needle.</p>
              </div>
              <div className="grid gap-4">
                {[
                  { title: "Outcome-led", desc: "Every engagement ties to a measurable business result." },
                  { title: "Governed", desc: "Responsible AI isn't optional — it's built into our approach." },
                  { title: "Delivery-first", desc: "We ship outcomes, not slide decks." },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-2">Get in Touch</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's talk about your AI ambitions</h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether you're just starting your AI journey or need help governing what you've already built, we'd love to hear from you.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex gap-6 mb-10 flex-wrap">
              <a href="mailto:vijay@kudoadvisory.com" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <Mail className="w-5 h-5" /> vijay@kudoadvisory.com
              </a>
              <a
                href="https://www.linkedin.com/in/vijayjaswal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                />
              </div>
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Send Message
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Kudo Advisory. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
