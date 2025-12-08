"use client"

import { useState } from "react"
import { PageHeader } from "@/components/sections/page-header"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
// Standard shadcn Input/Textarea are usually requested. 
// I'll style standard elements for speed and reduced file count, or create a 'contact-form' component.

import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    // Simulate API call
    setTimeout(() => {
      setFormState("success")
    }, 1500)
  }

  return (
    <div className="bg-midnight-950">
      <PageHeader
        title="Get in Touch"
        subtitle="Ready to take control of your energy? Start the conversation with our expert team today."
        backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             {/* Contact Info */}
             <div>
               <h2 className="text-3xl font-heading font-bold text-white mb-8">Contact Information</h2>
               <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <MapPin className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Visit Us</h3>
                      <p className="text-white/60">123 Solar Blvd, Suite 100<br />Energy City, CA 90210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Phone className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Call Us</h3>
                      <p className="text-white/60">+1 (800) 555-0123</p>
                      <p className="text-white/40 text-sm">Mon-Fri, 8am - 6pm PST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Mail className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Email Us</h3>
                      <p className="text-white/60">hello@megasolar.com</p>
                    </div>
                  </div>
               </div>

               <div className="p-8 bg-gradient-to-br from-midnight-900 to-midnight-800 rounded-2xl border border-white/10">
                  <h3 className="text-white font-bold mb-4">Why choose us?</h3>
                  <ul className="space-y-3">
                    {['Free onsite analysis', 'Zero-pressure consultation', 'Detailed savings breakdown'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/70">
                        <CheckCircle className="w-4 h-4 text-gold-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
             </div>

             {/* Form */}
             <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
                {formState === "success" ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-white/60 mb-8">We&apos;ve received your inquiry and will be in touch within 24 hours.</p>
                    <Button onClick={() => setFormState("idle")} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <label htmlFor="firstName" className="text-sm font-medium text-white/80">First Name</label>
                         <input 
                           required 
                           id="firstName"
                           className="w-full bg-midnight-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400/50 transition-colors"
                           placeholder="John" 
                         />
                       </div>
                       <div className="space-y-2">
                         <label htmlFor="lastName" className="text-sm font-medium text-white/80">Last Name</label>
                         <input 
                           required 
                           id="lastName"
                           className="w-full bg-midnight-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400/50 transition-colors"
                           placeholder="Doe" 
                         />
                       </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                      <input 
                        required 
                        type="email"
                        id="email"
                        className="w-full bg-midnight-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400/50 transition-colors"
                        placeholder="john@example.com" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-white/80">Phone</label>
                      <input 
                        required 
                        type="tel"
                        id="phone"
                        className="w-full bg-midnight-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400/50 transition-colors"
                        placeholder="(555) 000-0000" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="interest" className="text-sm font-medium text-white/80">Interested In</label>
                      <select 
                        id="interest"
                        className="w-full bg-midnight-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400/50 transition-colors appearance-none"
                      >
                        <option>Residential Solar</option>
                        <option>Commercial Solar</option>
                        <option>Battery Storage</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                      <textarea 
                        required 
                        id="message"
                        rows={4}
                        className="w-full bg-midnight-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400/50 transition-colors resize-none"
                        placeholder="Tell us about your project..." 
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full is-active" disabled={formState === "submitting"}>
                      {formState === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
             </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
