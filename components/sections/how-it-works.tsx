"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Container } from "@/components/ui/container"
import { Calculator, ClipboardCheck, Sun, Wrench } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: Calculator,
    title: "Consultation & Savings Estimate",
    description: "We analyze your energy usage and roof potential to provide a custom savings report. No pressure, just data.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
  },
  {
    icon: ClipboardCheck,
    title: "Design & Permitting",
    description: "Our engineers design a system for maximum efficiency. We handle all city permits and utility approvals for you.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2670&auto=format&fit=crop"
  },
  {
    icon: Wrench,
    title: "Premium Installation",
    description: "Our certified master installers complete the job in 1-2 days using high-end mounting hardware that protects your roof.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop"
  },
  {
    icon: Sun,
    title: "Activation & Monitoring",
    description: "We flip the switch and give you access to our smart app to track your production and savings in real-time.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2332&auto=format&fit=crop"
  }
]

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the left column (Content) while scrolling through images on the right?
      // Actually, let's pin the IMAGE (Right) and scroll the TEXT (Left) or vice versa.
      // Typical scroll-telling: Sticky Image on right, scrolling text on left.
      
      const mm = gsap.matchMedia()
      
      mm.add("(min-width: 1024px)", () => {
        // Pin the right column (Images)
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: rightColRef.current,
          pinSpacing: false, // Right col matches height of container, but we want it sticky
        })

        // We need to coordinate sections.
        // Actually, easiest way: One big container.
        // Right side is sticky.
        // Left side scrolls.
        // Images change based on scroll position of left sections.

        const imgContainer = rightColRef.current
        const stepSections = gsap.utils.toArray<HTMLElement>(".step-section")
        const stepImages = gsap.utils.toArray<HTMLElement>(".step-image")

        // Progress Bar
        gsap.fromTo(progressBarRef.current, 
          { height: "0%" },
          { 
            height: "100%", 
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: true
            }
          }
        )

        stepSections.forEach((section, i) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => {
              if (self.isActive) {
                // Show corresponding image
                gsap.to(stepImages, { opacity: 0, duration: 0.5, overwrite: true })
                gsap.to(stepImages[i], { opacity: 1, duration: 0.5, overwrite: true })
                
                // Highlight text
                gsap.to(section, { opacity: 1, x: 0, duration: 0.5 })
              } else {
                 // Dim text
                 // gsap.to(section, { opacity: 0.3, x: 0, duration: 0.5 }) 
                 // Keeping it simpler: just active state logic
              }
            }
          })
        })
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="bg-midnight-950 py-32 relative">
      <Container>
        <div className="mb-20 text-center">
           <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Simple 4-Step Process</h2>
           <p className="text-white/60 max-w-2xl mx-auto">From our first conversation to energy independence, we make the journey seamless and exciting.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column: Steps (Scrolling) */}
          <div ref={leftColRef} className="w-full lg:w-1/2 relative pl-12 border-l border-white/10">
            {/* Progress Bar */}
            <div className="absolute left-[-1px] top-0 w-[3px] bg-gold-500 h-0" ref={progressBarRef} />

            <div className="space-y-[50vh] pb-[20vh]"> {/* Spacing to separate steps */}
              {steps.map((step, i) => (
                <div key={i} className="step-section opacity-50 transition-opacity duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-midnight-950 font-bold text-xl">
                      {i + 1}
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-xl text-white/70 leading-relaxed mb-8">{step.description}</p>
                   {/* Mobile Integration of Image within flow? No, stick to desktop split. Mobile can just stack. */}
                  <div className="lg:hidden relative aspect-video rounded-2xl overflow-hidden mb-8">
                     <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Images (Sticky) */}
          <div className="hidden lg:block w-1/2 relative">
            <div ref={rightColRef} className="sticky top-[20vh] h-[60vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {steps.map((step, i) => (
                <div key={i} className="step-image absolute inset-0 w-full h-full opacity-0 first:opacity-100">
                  <Image src={step.image} alt={step.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/60 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
