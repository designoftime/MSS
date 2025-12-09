import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import type { Metadata } from "next"
import ReactMarkdown from "react-markdown"

import { blogPosts } from "@/data/blog"
import { Container } from "@/components/ui/container"
import { CTA } from "@/components/sections/cta"

// Force static generation
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export const dynamicParams = false

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    openGraph: {
      images: [post.seo.ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-midnight-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/80 to-transparent" />
        
        <Container className="relative z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-white/60 hover:text-gold-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
              <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-white/60 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center text-white/60 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed border-l-4 border-gold-500 pl-6">
              {post.excerpt}
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Article */}
            <article className="lg:col-span-8">
              <div className="prose prose-lg prose-invert max-w-none 
                prose-headings:font-heading prose-headings:font-bold prose-headings:text-white
                prose-p:text-white/70 prose-p:leading-relaxed
                prose-strong:text-gold-400
                prose-ul:text-white/70 prose-li:marker:text-gold-500
                prose-blockquote:border-l-gold-500 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic
              ">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </article>

            {/* Sidebar / Author */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-24">
                <h3 className="text-sm uppercase tracking-wider text-white/40 mb-4 font-bold">Written By</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-midnight-950 font-bold text-xl">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-white font-bold text-lg">{post.author}</span>
                    <span className="block text-white/40 text-sm">Energy Specialist</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      <CTA />
    </div>
  )
}
