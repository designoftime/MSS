"use client"

import { Container } from "@/components/ui/container"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Mega Solar Solutions handled everything with incredible professionalism. The system aesthetic is unmatched and the savings are real.",
    author: "Sarah Jenkins",
    role: "Homeowner, Palo Alto",
    rating: 5
  },
  {
    quote: "Our operating costs dropped by 40% in the first quarter. This was the best investment for our manufacturing facility this decade.",
    author: "Marcus Chen",
    role: "CEO, TechFlow Systems",
    rating: 5
  }
  // Add more if implementing carousel
]

export function Testimonials() {
  return (
    <section className="py-32 bg-midnight-900 border-y border-white/5">
      <Container>
        <div className="text-center mb-20">
          <span className="text-gold-400 text-sm font-medium tracking-wider uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Trusted by Visionaries</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl relative">
              <Quote className="absolute top-10 right-10 w-12 h-12 text-gold-500/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-xl text-white/90 leading-relaxed font-light mb-8">
                &quot;{t.quote}&quot;
              </p>
              <div>
                <div className="font-heading font-bold text-white">{t.author}</div>
                <div className="text-gold-400/80 text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
