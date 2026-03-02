import { Button } from "@/components/ui/button";
import aboutLeader from "@/assets/about-leader.jpg";
import vijayImage from "@/assets/vijay-presenting.jpg";

export default function Index() {
  return (
    <div className="flex flex-col">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Turn AI intent into forward motion.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            AI Advisory, AI Consultancy & Enterprise AI Strategy in Dubai and the Middle East.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Book a Call</a>
          </Button>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT SECTION */}
      <section id="about" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT - FOUNDER CARD */}
            <div className="rounded-3xl border border-foreground/10 bg-background shadow-2xl overflow-hidden">
              <div className="p-8">

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-[180px] shrink-0">
                    <img
                      src={vijayImage}
                      alt="Vijay Jaswal presenting on AI strategy"
                      className="w-full h-[220px] sm:h-[180px] object-cover rounded-2xl shadow-lg"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Founder
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      Vijay Jaswal
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
                      Kudo Advisory helps organisations move from AI ambition to measurable outcomes —
                      through pragmatic strategy, governance and disciplined execution.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Button asChild>
                        <a href="#contact">Book a call</a>
                      </Button>

                      <Button variant="outline" asChild>
                        <a
                          href="https://www.linkedin.com/in/vijayjaswal"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View LinkedIn
                        </a>
                      </Button>
                    </div>

                    <div className="mt-5 text-xs text-muted-foreground">
                      Based in Dubai • Serving UAE & Middle East
                    </div>
                  </div>
                </div>

                {/* VALUE HIGHLIGHTS */}
                <div className="mt-10 grid sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-foreground/10 p-4">
                    <div className="text-sm font-medium">Strategy</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Outcome-led AI roadmaps
                    </div>
                  </div>

                  <div className="rounded-2xl border border-foreground/10 p-4">
                    <div className="text-sm font-medium">Governance</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Risk controls & guardrails
                    </div>
                  </div>

                  <div className="rounded-2xl border border-foreground/10 p-4">
                    <div className="text-sm font-medium">Delivery</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Execution discipline that scales
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT - SUPPORTING BRAND IMAGE */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-foreground/10">
                <img
                  src={aboutLeader}
                  alt="Enterprise AI advisory leadership"
                  className="w-full h-[320px] md:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-8">
                <h2 className="text-3xl md:text-4xl font-bold">
                  About Kudo Advisory
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Kudo Advisory works with organisations unsure where to start with AI
                  or struggling to extract real value from it. We provide end-to-end advisory
                  across strategy, policy, value identification and solution delivery.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Kudo is a Japanese word (駆動) — the driving force that turns intent
                  into forward motion. We exist to make AI move.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12">What We Deliver</h2>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p>• AI Strategy Advisory</p>
            <p>• AI Governance & Policy Design</p>
            <p>• Enterprise AI Operating Model Design</p>
            <p>• AI Use Case Prioritisation</p>
            <p>• AI Programme Delivery Assurance</p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 px-6 bg-muted/30 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to make AI move?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let’s define your AI strategy, governance and execution roadmap.
          </p>

          <Button size="lg" asChild>
            <a href="mailto:info@kudoadvisory.com">
              Email info@kudoadvisory.com
            </a>
          </Button>
        </div>
      </section>

    </div>
  );
}
