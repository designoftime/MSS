"use client"

import { Container } from "@/components/ui/container"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Do you offer financing options?",
    answer: "Yes, we partner with top-tier financial institutions to offer $0-down solar loans with competitive interest rates. We can also help you navigate PACE financing and lease options."
  },
  {
    question: "How long does installation take?",
    answer: "Most residential installations are completed in 1-2 days. The entire project timeline, including permitting and utility approval, typically takes 4-8 weeks."
  },
  {
    question: "What happens if I sell my home?",
    answer: "Solar systems increase property value. If you purchased the system, it transfers to the new owner. Leased systems can also be transferred with a simple credit check."
  },
  {
    question: "Is maintenance required?",
    answer: "Solar panels are very low maintenance. We recommend an annual cleaning and inspection to ensure maximum production, which is included in our premium support package."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-midnight-950">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
             <span className="text-gold-400 text-sm font-medium tracking-wider uppercase mb-4 block">Common Questions</span>
             <h2 className="text-4xl font-heading font-bold text-white mb-6">Expert Answers</h2>
             <p className="text-white/60 text-lg leading-relaxed mb-8">
               Transitioning to solar is a big decision. We believe in total transparency. If you don&apos;t see your question here, give us a call anywhere.
             </p>
             <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
               <h3 className="text-white font-bold text-xl mb-4">Still have questions?</h3>
               <p className="text-white/60 mb-6">Our energy consultants are ready to help you understand your specific needs.</p>
               <a href="/contact" className="text-gold-400 font-medium hover:underline">Contact Support &rarr;</a>
             </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="group border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <button className="flex items-center justify-between w-full p-6 text-left focus:outline-none">
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-gold-400 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-white/40 group-hover:text-white shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-white/60 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
