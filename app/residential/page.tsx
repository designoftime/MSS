import { PageHeader } from "@/components/sections/page-header"
import { Features } from "@/components/sections/features" // Reusing portions or logic? Features is Home specific.
// I'll create custom sections for this page.
import { Container } from "@/components/ui/container"
import { CTA } from "@/components/sections/cta"
import Image from "next/image"
import { CheckCircle2, Battery, Home as HomeIcon, Zap } from "lucide-react"

export const metadata = {
  title: "Residential Solar | Mega Solar Solutions",
  description: "Premium solar energy systems for your home. Save money and increase property value.",
}

const benefits = [
  {
    icon: Zap,
    title: "Bill Elimination",
    description: "Offset up to 100% of your electricity usage and say goodbye to rising utility rates."
  },
  {
    icon: HomeIcon,
    title: "Increased Value",
    description: "Solar homes sell for 4.1% more on average than comparable non-solar homes."
  },
  {
    icon: Battery,
    title: "Energy Security",
    description: "Add battery storage to keep your lights on during grid outages and blackouts."
  }
]

export default function ResidentialPage() {
  return (
    <div className="bg-midnight-950">
      <PageHeader
        title="Residential Solar"
        subtitle="Turn your roof into a revenue-generating asset. We design custom solar systems that blend seamlessly with your home's architecture while delivering maximum efficiency."
        backgroundImage="/residential-home.png"
      />

      <section className="py-24">
        <Container>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
             {benefits.map((b, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                 <b.icon className="w-10 h-10 text-gold-400 mb-6" />
                 <h3 className="text-2xl font-heading font-bold text-white mb-4">{b.title}</h3>
                 <p className="text-white/60 leading-relaxed">{b.description}</p>
               </div>
             ))}
           </div>

           {/* Integrated Process/Detail Section */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
             <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
               <Image 
                 src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2670&auto=format&fit=crop"
                 alt="Solar panel installation close-up"
                 fill
                 className="object-cover"
               />
             </div>
             <div>
               <h2 className="text-4xl font-heading font-bold text-white mb-6">Designed for Performance & Aesthetics</h2>
               <p className="text-lg text-white/70 mb-8 leading-relaxed">
                 We don't just slap panels on your roof. Our engineers consider shading, roof orientation, and local weather patterns to build a system that produces maximum power. We use all-black panels and hidden mounting hardware for a sleek, premium look.
               </p>
               <ul className="space-y-4">
                 {[
                   "All-black premium tier-1 panels",
                   "Enphase microinverters for individual panel optimization",
                   "Critter guards & skirt kits included",
                   "25-year comprehensive system warranty"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                      {item}
                   </li>
                 ))}
               </ul>
             </div>
           </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-midnight-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">Recent Installations</h2>
            <p className="text-white/60 max-w-2xl mx-auto">See how our systems enhance the look of modern homes across the region.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="relative aspect-video rounded-2xl overflow-hidden group">
               <Image src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2672&auto=format&fit=crop" alt="House 1" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
             </div>
             <div className="relative aspect-video rounded-2xl overflow-hidden group">
               <Image src="https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?q=80&w=2670&auto=format&fit=crop" alt="House 2" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
             </div>
          </div>
        </Container>
      </section>

      <CTA />
    </div>
  )
}
