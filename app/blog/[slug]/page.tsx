import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { PageHeader } from "@/components/sections/page-header"
import { Container } from "@/components/ui/container"
import { CTA } from "@/components/sections/cta"
import { getBlogPost, blogPosts } from "@/lib/blog"
import { ArrowLeft, Clock } from "lucide-react"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-midnight-950">
      <div className="pt-32 pb-10 sm:pt-40">
        <Container>
          <Link href="/blog" className="inline-flex items-center text-white/50 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          
          <div className="max-w-4xl">
             <div className="flex items-center gap-4 text-sm text-gold-400 mb-6">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gold-400" />
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {post.readTime}</span>
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
               {post.title}
             </h1>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden relative">
                  {/* Placeholder for author avatar */}
                  <div className="absolute inset-0 bg-gold-500" />
               </div>
               <div>
                 <div className="text-white font-medium">{post.author}</div>
                 <div className="text-white/40 text-xs uppercase tracking-wider">Author</div>
               </div>
             </div>
          </div>
        </Container>
      </div>

      <div className="relative w-full h-[50vh] min-h-[400px] bg-midnight-900 overflow-hidden">
         <div className={`absolute inset-0 bg-gradient-to-br ${
            post.category === "Technology" ? "from-blue-950 via-midnight-950 to-midnight-900" :
            post.category === "Finance" ? "from-green-950 via-midnight-950 to-midnight-900" :
            post.category === "Residential" ? "from-gold-950 via-midnight-950 to-midnight-900" :
            "from-gray-900 via-midnight-950 to-midnight-900"
          }`} />
         
         <div className="absolute inset-0 opacity-[0.05] bg-[url('/grain.png')]" />
         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-midnight-950 to-transparent" />
         
         <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[100px] opacity-20 bg-gradient-to-tr ${
              post.category === "Technology" ? "from-blue-500 to-cyan-500" :  
              post.category === "Finance" ? "from-green-500 to-emerald-500" :
              "from-gold-500 to-orange-500"
            }`} />
         </div>
      </div>

      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-lg prose-gold max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
            
            <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-white/50 text-sm">
              <div>Share this article</div>
              <div className="flex gap-4">
                <button className="hover:text-white transition-colors">Twitter</button>
                <button className="hover:text-white transition-colors">LinkedIn</button>
                <button className="hover:text-white transition-colors">Facebook</button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </div>
  )
}
