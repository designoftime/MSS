"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Container } from "@/components/ui/container"
import { ShieldCheck, Zap, Leaf, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: ShieldCheck,
    title: "25-Year Warranty",
    description: "Industry-leading protection for your peace of mind. We stand behind our quality."
  },
  {
    icon: Zap,
    title: "Maximum Efficiency",
    description: "Premium panels that capture more sunlight, generating up to 30% more power."
  },
  {
    icon: Leaf,
    title: "Sustainable Future",
    description: "Reduce your carbon footprint immediately. Clean energy for a cleaner world."
  }
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-midnight-950 relative overflow-hidden z-20">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-midnight-950 to-midnight-900 pointer-events-none" />

      <Container>
        
        {/* 3 Pillars */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 relative z-10">
          {[
            {
              src: "/icon-warranty.png",
              title: "25-Year Warranty",
              description: "Industry-leading protection for your peace of mind. We stand behind our quality."
            },
            {
              src: "/icon-efficiency.png",
              title: "Maximum Efficiency",
              description: "Premium panels that capture more sunlight, generating up to 30% more power."
            },
            {
              src: "/icon-sustainability.png",
              title: "Sustainable Future",
              description: "Reduce your carbon footprint immediately. Clean energy for a cleaner world."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm
                         hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 
                              flex items-center justify-center mb-6 group-hover:scale-110 
                              transition-transform duration-500 border border-gold-500/10">
                <Image src={feature.src} alt={feature.title} width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Split Feature: Residential vs Commercial */}
        <div className="space-y-32">
          
       
          {/*RESIDENTIAL SECTION (Fixed Overlapping Box) */} 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text block */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative z-10 mt-30"
            >
              <span className="text-gold-400 text-sm font-medium tracking-wider uppercase mb-4 block">
                Residential Solutions
              </span>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Transform Your Home<br />Into a Power Plant
              </h2>

              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Slash your electricity bills and increase your property value with our
                aesthetically designed solar systems. We handle everything from permits to activation.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Zero-down financing options',
                  'Smart monitoring app included',
                  'Backup battery integration'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild>
                <Link href="/residential">
                  Explore Residential <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            {/* FIXED BOX */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                order-1 lg:order-2 
                relative 
                w-full 
                h-auto 
                max-h-[450px]
                rounded-3xl 
                overflow-hidden 
                bg-midnight-900 
                border border-white/5 
                flex items-center justify-center
              "
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-midnight-950 via-midnight-800 to-gold-900/20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <ShieldCheck className="w-32 h-32 text-gold-500/20" />
              </div>
            </motion.div>

          </div>

          {/* COMMERCIAL SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-auto max-h-[450px] rounded-3xl overflow-hidden 
                         group bg-midnight-900 border border-white/5 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-midnight-950 via-midnight-800 to-gold-900/20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <Zap className="w-32 h-32 text-gold-500/20" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <span className="text-gold-400 text-sm font-medium tracking-wider uppercase mb-4 block">
                Commercial Solutions
              </span>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Scale Your Business<br />With Clean Energy
              </h2>

              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Take control of your operating costs. Our commercial solar solutions deliver high ROI and demonstrate your commitment to sustainability.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Tax incentives & depreciation',
                  'Scalable megawatt systems',
                  'O&M packages available'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild>
                <Link href="/commercial">
                  Explore Commercial <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  )
}
