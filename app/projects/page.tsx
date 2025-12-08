"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { PageHeader } from "@/components/sections/page-header"
import { Container } from "@/components/ui/container"
import { projects } from "@/lib/projects"
import { cn } from "@/lib/utils"
import { CTA } from "@/components/sections/cta"

const categories = ["All", "Residential", "Commercial", "Industrial"]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  
  const filteredProjects = projects.filter(p => 
    filter === "All" ? true : p.category === filter
  )

  return (
    <div className="bg-midnight-950 min-h-screen">
      <PageHeader
        title="Our Projects"
        subtitle="A showcase of engineering excellence. Browse our portfolio of high-performance solar installations across residential, commercial, and industrial sectors."
        backgroundImage="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-24">
        <Container>
           {/* Filter */}
           <div className="flex flex-wrap gap-4 justify-center mb-16">
             {categories.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={cn(
                   "px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300",
                   filter === cat
                     ? "bg-gold-500 border-gold-500 text-midnight-950"
                     : "bg-transparent border-white/20 text-white/60 hover:border-gold-400 hover:text-gold-400"
                 )}
               >
                 {cat}
               </button>
             ))}
           </div>

           {/* Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
             <AnimatePresence mode="popLayout">
               {filteredProjects.map((project) => (
                 <motion.div
                   layout
                   key={project.slug}
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.3 }}
                 >
                   <Link href={`/projects/${project.slug}`} className="block group h-full">
                     <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10">
                       <Image
                         src={project.image}
                         alt={project.title}
                         fill
                         className="object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-midnight-950/20 group-hover:bg-transparent transition-colors" />
                       <div className="absolute top-4 left-4 px-3 py-1 bg-midnight-950/80 backdrop-blur text-xs text-white rounded-full border border-white/10 uppercase tracking-wider">
                         {project.category}
                       </div>
                     </div>
                     
                     <h3 className="text-2xl font-bold font-heading text-white mb-2 group-hover:text-gold-400 transition-colors">
                       {project.title}
                     </h3>
                     <p className="text-white/60 text-sm mb-4">{project.location}</p>
                     
                     <div className="flex items-center gap-4 text-sm text-white/40 border-t border-white/10 pt-4">
                       <span>{project.size}</span>
                     </div>
                   </Link>
                 </motion.div>
               ))}
             </AnimatePresence>
           </div>
           
           {filteredProjects.length === 0 && (
             <div className="text-center py-20 text-white/40">
               No projects found in this category.
             </div>
           )}
        </Container>
      </section>
      
      <CTA />
    </div>
  )
}
