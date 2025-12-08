import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-gradient-to-r from-gold-500 to-gold-600 relative overflow-hidden">
       {/* Abstract Patterns */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
       
       <Container>
         <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
           <div className="max-w-2xl">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-midnight-950 mb-6">
               Ready to Power Your Future?
             </h2>
             <p className="text-midnight-900/80 text-xl font-medium leading-relaxed">
               Get a custom solar design and savings estimate in 24 hours. No commitment required.
             </p>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-4 shrink-0">
             <Button size="lg" className="bg-midnight-950 text-white hover:bg-midnight-900 h-14 px-10 text-lg shadow-xl" asChild>
               <Link href="/contact">Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
             </Button>
             <Button variant="outline" size="lg" className="border-midnight-950 text-midnight-950 hover:bg-midnight-950/10 h-14 px-10 text-lg font-bold" asChild>
               <Link href="/projects">View Our Work</Link>
             </Button>
           </div>
         </div>
       </Container>
    </section>
  )
}
