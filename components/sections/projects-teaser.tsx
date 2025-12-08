"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Apex Tech Campus",
    location: "San Francisco, CA",
    size: "1.2 MW System",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=2574&auto=format&fit=crop",
    category: "Commercial"
  },
  {
    title: "The Highland Estate",
    location: "Aspen, CO",
    size: "45 kW System + Storage",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2670&auto=format&fit=crop",
    category: "Residential"
  },
  {
    title: "Marina Logistics Hub",
    location: "Long Beach, CA",
    size: "850 kW System",
    image: "https://images.unsplash.com/photo-1628135899882-629b718991b1?q=80&w=2670&auto=format&fit=crop",
    category: "Industrial"
  }
]

export function ProjectsTeaser() {
  return (
    <section className="py-32 bg-midnight-950">
      <Container>
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div>
             <span className="text-gold-400 text-sm font-medium tracking-wider uppercase mb-4 block">Selected Works</span>
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Powering Ambition</h2>
           </div>
           <Button variant="outline" asChild>
             <Link href="/projects">View All Projects</Link>
           </Button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {projects.map((project, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               viewport={{ once: true }}
               className="group relative cursor-pointer"
             >
               <div className="aspect-[4/5] overflow-hidden rounded-2xl relative bg-midnight-900 border border-white/5">
                 {/* Placeholder Gradient instead of potentially broken external image */}
                 <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 opacity-80 group-hover:opacity-100 ${
                   i === 0 ? "from-midnight-900 via-midnight-800 to-gold-900/30" :
                   i === 1 ? "from-midnight-950 via-midnight-900 to-gold-600/20" :
                   "from-midnight-900 via-midnight-800 to-blue-900/20"
                 }`} />
                 
                 {/* Decorative Pattern */}
                 <div className="absolute inset-0 opacity-[0.03] bg-[url('/grain.png')]" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-30 transition-opacity transform group-hover:scale-110 duration-700">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" className="text-white" />
                      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" className="text-gold-500" />
                      <path d="M100 0L100 200" stroke="currentColor" strokeWidth="1" className="text-white/20" />
                      <path d="M0 100L200 100" stroke="currentColor" strokeWidth="1" className="text-white/20" />
                    </svg>
                 </div>

                 <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent opacity-90" />
                 
                 <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-300 group-hover:-translate-y-2">
                   <div className="mb-2 inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
                     {project.category}
                   </div>
                   <h3 className="text-2xl font-heading font-bold text-white mb-2">{project.title}</h3>
                   <div className="flex items-center justify-between text-white/60 text-sm">
                     <span>{project.location}</span>
                     <span>{project.size}</span>
                   </div>
                 </div>
               </div>
               
               <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <ArrowUpRight className="text-white w-5 h-5" />
               </div>
             </motion.div>
           ))}
         </div>
      </Container>
    </section>
  )
}
