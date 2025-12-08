import { PageHeader } from "@/components/sections/page-header"
import { Container } from "@/components/ui/container"
import { CTA } from "@/components/sections/cta"
import Image from "next/image"

export const metadata = {
  title: "About Us | Mega Solar Solutions",
  description: "Our mission is to accelerate the world's transition to sustainable energy.",
}

const team = [
  { name: "Robert Fox", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" },
  { name: "Esther Howard", role: "Chief Engineer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" },
  { name: "Cameron Williamson", role: "Head of Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
]

export default function AboutPage() {
  return (
    <div className="bg-midnight-950">
      <PageHeader
        title="Our Story"
        subtitle="Founded on the belief that energy independence is a fundamental right. We are engineers, designers, and environmentalists dedicated to a brighter future."
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <span className="text-gold-400 text-sm font-medium tracking-wider uppercase mb-4 block">Who We Are</span>
              <h2 className="text-4xl font-heading font-bold text-white mb-6">Pioneering the New Energy Era</h2>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Mega Solar Solutions began in 2010 with a single truck and a vision. Today, we are the region's premier solar integrator, known for our uncompromising quality and aesthetic approach to energy.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We believe that solar shouldn't just be functional—it should be beautiful. Every system we design is a marriage of state-of-the-art engineering and architectural harmony.
              </p>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2670&auto=format&fit=crop"
                alt="Engineers planning"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-32">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { label: "Systems Installed", value: "5,000+" },
                 { label: "Megawatts Generated", value: "85 MW" },
                 { label: "Years in Business", value: "15" },
                 { label: "Happiness Rating", value: "4.9/5" },
               ].map((stat, i) => (
                 <div key={i} className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl">
                   <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-500 mb-2">{stat.value}</div>
                   <div className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</div>
                 </div>
               ))}
             </div>
          </div>

          <div>
             <div className="text-center mb-16">
               <h2 className="text-4xl font-heading font-bold text-white mb-6">Meet the Visionaries</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {team.map((member, i) => (
                 <div key={i} className="group text-center">
                   <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 border border-white/10 mx-auto max-w-sm bg-midnight-900">
                     {/* Gradient Placeholder for Team Member */}
                     <div className={`absolute inset-0 bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-500 ${
                       i === 0 ? "from-gold-900/40 via-midnight-900 to-midnight-800" :
                       i === 1 ? "from-blue-900/40 via-midnight-900 to-midnight-800" :
                       "from-purple-900/40 via-midnight-900 to-midnight-800"
                     }`} />
                     
                     {/* Headshot Silhouette/Icon */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:scale-105">
                        <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                     </div>

                     <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 to-transparent" />
                   </div>
                   <h3 className="text-xl font-bold text-white">{member.name}</h3>
                   <p className="text-gold-400 text-sm">{member.role}</p>
                 </div>
               ))}
             </div>
          </div>
        </Container>
      </section>

      <CTA />
    </div>
  )
}
