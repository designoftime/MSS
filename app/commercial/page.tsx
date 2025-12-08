import { PageHeader } from "@/components/sections/page-header"
import { Container } from "@/components/ui/container"
import { CTA } from "@/components/sections/cta"
import { ArrowUpRight, BarChart3, Building2, Coins } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Commercial Solar | Mega Solar Solutions",
  description: "Scalable solar energy solutions for businesses. High ROI and sustainable operations.",
}

export default function CommercialPage() {
  return (
    <div className="bg-midnight-950">
      <PageHeader
        title="Commercial Solutions"
        subtitle="Reduce operating costs and protect your bottom line against rising energy prices. Our commercial systems are engineered for maximum reliability and ROI."
        backgroundImage="/commercial-building.png"
      />

      <section className="py-24">
        <Container>
           {/* Key Benefits Grid */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
             {[
               { icon: Coins, title: "High ROI", desc: "Most systems pay for themselves in 4-6 years, delivering free electricity for decades thereafter." },
               { icon: Building2, title: "Asset Value", desc: "Increases the value of your commercial property and can improve LEED certification status." },
               { icon: BarChart3, title: "Tax Incentives", desc: "Take advantage of the 30% Federal ITC and accelerated depreciation (MACRS) to offset costs." }
             ].map((item, i) => (
               <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                 <item.icon className="w-8 h-8 text-gold-400 mb-4" />
                 <h3 className="text-xl font-bold font-heading text-white mb-3">{item.title}</h3>
                 <p className="text-white/60">{item.desc}</p>
               </div>
             ))}
           </div>

           {/* Performance Snapshot Section */}
            <div className="bg-gradient-to-br from-midnight-900 to-midnight-950 border border-white/10 rounded-3xl p-8 lg:p-16 mb-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <span className="text-gold-400 text-sm font-medium tracking-wider uppercase mb-4 block">Performance Snapshot</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Real-Time Monitoring & Reporting</h2>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Every commercial system includes our enterprise-grade monitoring suite. Track production across multiple sites, export reports for ESG compliance, and receive instant alerts if performance dips.
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-white font-medium">System Uptime</span>
                      <span className="text-green-400 font-bold">99.98%</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-white font-medium">Average ROI</span>
                      <span className="text-gold-400 font-bold">18.5%</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-white font-medium">CO2 Offset (Annual)</span>
                      <span className="text-white font-bold">450 Tons</span>
                    </li>
                  </ul>
                </div>
                
                {/* Visual Chart Placeholder */}
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                   <div className="flex justify-between items-end h-[300px] gap-4">
                     {[40, 65, 50, 80, 60, 90, 85].map((h, i) => (
                       <div key={i} className="flex-1 bg-gold-500/20 rounded-t-lg relative group overflow-hidden">
                         <div 
                           className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gold-600 to-gold-400 transition-all duration-1000"
                           style={{ height: `${h}%` }}
                         />
                       </div>
                     ))}
                   </div>
                   <div className="flex justify-between mt-4 text-xs text-white/40 uppercase tracking-widest">
                     <span>Mon</span>
                     <span>Tue</span>
                     <span>Wed</span>
                     <span>Thu</span>
                     <span>Fri</span>
                     <span>Sat</span>
                     <span>Sun</span>
                   </div>
                   <div className="mt-8 text-center text-sm text-white/60">
                     Live Production Data (Example Site)
                   </div>
                </div>
             </div>
           </div>
           
           {/* Case Study Teaser */}
           <div className="text-center">
             <h3 className="text-2xl font-bold font-heading text-white mb-8">Industries We Serve</h3>
             <div className="flex flex-wrap justify-center gap-4">
                {['Manufacturing', 'Warehousing', 'Agriculture', 'Retail', 'Education', 'Healthcare'].map((tag) => (
                  <span key={tag} className="px-6 py-3 rounded-full border border-white/10 text-white/70 hover:border-gold-400 hover:text-gold-400 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
             </div>
           </div>

        </Container>
      </section>

      <CTA />
    </div>
  )
}
