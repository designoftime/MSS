import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import type { Metadata } from "next"

import { projects } from "@/data/projects"
import { Container } from "@/components/ui/container"
import { CTA } from "@/components/sections/cta"

// Force static generation for these paths
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// Disallow dynamic params (404 for unknown slugs)
export const dynamicParams = false

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
    openGraph: {
      images: [project.seo.ogImage],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-midnight-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/60 to-transparent" />
        
        <Container className="relative z-10">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-white/60 hover:text-gold-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium rounded-full">
                {project.category}
              </span>
              <span className="text-white/40 text-sm">{project.location}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              {project.excerpt}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar Stats */}
            <div className="lg:col-span-4 space-y-8">
               <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-24">
                 <h3 className="text-xl font-bold text-white mb-6 font-heading">Project Specs</h3>
                 <div className="space-y-6">
                   <div className="border-b border-white/10 pb-4">
                     <span className="block text-white/40 text-sm mb-1">System Size</span>
                     <span className="text-gold-400 font-medium text-lg">{project.size}</span>
                   </div>
                   <div className="border-b border-white/10 pb-4">
                     <span className="block text-white/40 text-sm mb-1">Completion Date</span>
                     <span className="text-white font-medium">{project.date}</span>
                   </div>
                   
                   {/* Dynamically render stats from sections if available */}
                   {project.sections.map((section, idx) => {
                     if (section.type === "stats" && section.items) {
                       return section.items.map((item, i) => (
                         <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                           <span className="block text-white/40 text-sm mb-1">{item.label}</span>
                           <span className="text-white font-medium">{item.value}</span>
                         </div>
                       ))
                     }
                     return null
                   })}
                 </div>
               </div>
            </div>

            {/* Content Blocks */}
            <div className="lg:col-span-8 space-y-20">
              {project.sections.map((section, index) => {
                if (section.type === "challenge-solution") {
                  return (
                    <div key={index} className="space-y-4">
                      <h2 className="text-3xl font-bold text-white font-heading">{section.title}</h2>
                      <p className="text-white/70 leading-relaxed text-lg">
                        {section.content}
                      </p>
                    </div>
                  )
                }
                
                if (section.type === "gallery" && section.images) {
                  return (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.images.map((img, i) => (
                        <div key={i} className={`relative rounded-xl overflow-hidden ${i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'}`}>
                           <Image
                             src={img}
                             alt={`${project.title} gallery image ${i+1}`}
                             fill
                             className="object-cover hover:scale-105 transition-transform duration-700"
                             sizes="(max-width: 768px) 100vw, 50vw"
                           />
                        </div>
                      ))}
                    </div>
                  )
                }
                
                return null
              })}
            </div>

          </div>
        </Container>
      </section>

      <CTA />
    </div>
  )
}
