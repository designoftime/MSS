import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { HowItWorks } from "@/components/sections/how-it-works"
import { CalculatorSection } from "@/components/sections/roi-calculator"
import { ProjectsTeaser } from "@/components/sections/projects-teaser"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <HowItWorks />
      <CalculatorSection />
      <ProjectsTeaser />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  )
}
