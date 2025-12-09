import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { CTA } from "@/components/sections/cta";
import { blogPosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog | Mega Solar Solutions",
  description: "Industry insights, technology updates, and guides to energy independence.",
};

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
                
                {/* Image Section */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-midnight-900">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 inline-flex px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80">
                    {post.category}
                  </div>
                </div>

                {/* Text Section */}
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
  );
}