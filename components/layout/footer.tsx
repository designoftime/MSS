import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Sun, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-midnight-950 border-t border-white/5 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-gold-400 to-gold-600">
                <Sun className="w-5 h-5 text-midnight-950" />
              </div>
              <span className="text-xl font-bold font-heading text-white">MSS</span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Powering the future with premium solar solutions for residential and commercial properties. Experience the difference of true energy independence.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-400 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Projects', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-gold-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {['Residential Solar', 'Commercial Solar', 'Battery Storage', 'Maintenance', 'Energy Audit'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-white/60 hover:text-gold-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
                <span>123 Solar Blvd, Energy City, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <span>+1 (800) 555-0123</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                <span>hello@megasolar.com</span>
              </li>
            </ul>
            
            <div className="relative">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full bg-white/5 border border-white/10 rounded-full h-11 px-4 pr-12 text-sm text-white focus:outline-none focus:border-gold-400/50 transition-colors placeholder:text-white/30"
               />
               <button className="absolute right-1 top-1 h-9 w-9 rounded-full bg-gold-500 flex items-center justify-center hover:bg-gold-400 transition-colors">
                 <Sun className="w-4 h-4 text-midnight-950" />
               </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Mega Solar Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
