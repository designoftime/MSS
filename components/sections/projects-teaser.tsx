"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects"

export function ProjectsTeaser() {
  const featuredProjects = projects.slice(0, 3)

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
           {featuredProjects.map((project, i) => (
             <motion.div
               key={project.slug}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               viewport={{ once: true }}
               className="group relative"
             >
               <Link href={`/projects/${project.slug}`} className="block h-full">
                 <div className="aspect-[4/5] overflow-hidden rounded-2xl relative bg-midnight-900 border border-white/5">
                   {/* Real Image using next/image */}
                   <Image
                     src={project.heroImage}
                     alt={project.title}
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-105"
                     sizes="(max-width: 768px) 100vw, 33vw"
                   />
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/20 to-transparent opacity-90" />
                   
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
                 
                 <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                   <ArrowUpRight className="text-white w-5 h-5" />
                 </div>
               </Link>
             </motion.div>
           ))}
         </div>
      </Container>
    </section>
  )
}
