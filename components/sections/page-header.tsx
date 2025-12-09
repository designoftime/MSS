import Link from "next/link"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle: string
  backgroundImage: string
  className?: string
  children?: React.ReactNode
}

export function PageHeader({ title, subtitle, backgroundImage, className, children }: PageHeaderProps) {
  return (
    <section className={cn("relative py-32 md:py-48 bg-midnight-950 overflow-hidden flex items-center", className)}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 z-0 bg-midnight-950/60" /> {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-midnight-950 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-white/60 hover:text-gold-400 transition-colors text-sm font-medium">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-gold-400 text-sm font-medium">{title}</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          {children && <div className="mt-10">{children}</div>}
        </div>
      </Container>
    </section>
  )
}
