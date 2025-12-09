"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      //Image Scale & Reveal
      tl.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power2.inOut" }
      )

      // Overlay gradient sweep
      tl.fromTo(
        overlayRef.current,
        { opacity: 0, x: "-10%" },
        { opacity: 1, x: "0%", duration: 2, ease: "power2.out" },
        "-=1.5"
      )

      // FIXED TEXT REVEAL — removed clipPath (was clipping descenders)
      if (textRef.current?.children) {
        tl.fromTo(
          Array.from(textRef.current.children),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
          },
          "-=1.5"
        )
      }

      //Parallax Effect
      gsap.to(imageRef.current, {
        yPercent: 15,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] min-h-[700px] w-full overflow-hidden bg-midnight-950 flex items-center"
    >
      {/* Background Image with Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none will-change-transform"
      >
        <Image
          src="/hero-solar.png"
          alt="Premium Solar Panels"
          fill
          className="object-cover"
          priority
          quality={100}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/90 via-midnight-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-950/80 via-transparent to-midnight-950/30" />

        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-tr from-gold-500/0 via-gold-500/10 to-gold-400/20 mix-blend-overlay opacity-0"
        />
      </div>

      <Container className="relative z-10 pt-24 md:pt-32 lg:pt-36">
        <div ref={textRef} className="max-w-4xl">
          <div className="overflow-hidden mb-4">
            <span className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gold-400 text-sm font-medium tracking-wide uppercase">
              The Future of Energy
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white leading-[0.9] tracking-tight mb-8 drop-shadow-2xl">
            Power Your World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500">
              With Pure Sunlight
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/80 max-w-2xl mb-10 leading-relaxed font-light mix-blend-plus-lighter">
            Engineered for aesthetics, designed for performance. Experience the
            ultimate energy independence with our premium solar solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-[0_0_30px_rgba(251,191,36,0.2)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all duration-500"
            >
              Get Your Custom Proposal
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6 backdrop-blur-md bg-white/5 hover:bg-white/10 border-white/20 group"
            >
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse opacity-60">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </div>
    </section>
  )
}
