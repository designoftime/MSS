import { getProject, projects } from "@/lib/projects"
import { PageHeader } from "@/components/sections/page-header"
import { Container } from "@/components/ui/container"
import { CTA } from "@/components/sections/cta"
import Image from "next/image"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-midnight-950">
      <PageHeader
        title={project.title}
        subtitle={project.location + " • " + project.size}
        backgroundImage={project.image}
      />

      <section className="py-24 border-b border-white/5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {project.stats.map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">{stat.value}</div>
                <div className="text-white/60 uppercase tracking-widest text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-2xl font-bold font-heading text-white mb-6">The Challenge</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-12">
                {project.challenge}
              </p>
              
              <h2 className="text-2xl font-bold font-heading text-white mb-6">The Solution</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>
            
            <div className="grid gap-6">
              {project.images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image src={img} alt={`Detail ${i}`} fill className="object-cover" />
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
