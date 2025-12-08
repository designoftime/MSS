import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/sections/page-header"
import { Container } from "@/components/ui/container"
import { CTA } from "@/components/sections/cta"
import { blogPosts } from "@/data/blog"
import { ArrowRight, Clock } from "lucide-react"

export const metadata = {
  title: "Blog | Mega Solar Solutions",
  description: "Industry insights, technology updates, and guides to energy independence.",
}

export default function BlogPage() {
  return (
    <div className="bg-midnight-950">
      <PageHeader
        title="Energy Insights"
        subtitle="Stay ahead of the curve with the latest news on solar technology, policy changes, and energy management strategies."
        backgroundImage="https://images.unsplash.com/photo-1473341304170-5799ed149cb7?q=80&w=2669&auto=format&fit=crop"
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col h-full">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-midnight-900">
                  <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 group-hover:opacity-90 ${
                    post.category === "Technology" ? "from-blue-900/40 via-midnight-900 to-midnight-800" :
                    post.category === "Finance" ? "from-green-900/40 via-midnight-900 to-midnight-800" :
                    post.category === "Residential" ? "from-gold-900/40 via-midnight-900 to-midnight-800" :
                    "from-gray-800 via-midnight-900 to-midnight-800"
                  }`} />
                  
                  {/* Category Badge/Icon */}
                  <div className="absolute top-4 left-4 inline-flex px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80">
                    {post.category}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform duration-700">
                    {post.category === "Technology" && <div className="w-20 h-20 rounded-full border-2 border-white/20" />}
                    {post.category === "Finance" && <div className="w-20 h-20 rotate-45 border-2 border-white/20" />}
                    {post.category === "Residential" && <div className="w-20 h-20 rounded-xl border-2 border-white/20" />}
                    {post.category === "Maintenance" && <div className="w-20 h-20 border-2 border-dashed border-white/20" />}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-sm text-gold-400 mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gold-400" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center text-white/50 text-sm font-medium group-hover:text-white transition-colors">
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </div>
  )
}
