"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { HelpCircle, DollarSign, Sun, Calculator } from "lucide-react"

export function CalculatorSection() {
  const [bill, setBill] = useState(200)
  const [generated, setGenerated] = useState<number | null>(null)

  const calculateSavings = () => {
    // Very rough estimation formula
    // Bill * 12 months * 25 years * 1.05 inflation / 2 (savings ratio approx)
    const annualCost = bill * 12
    const total25Year = annualCost * 25 * 1.5 // Assuming utility rates rise
    const solarCost = annualCost * 8 // Roughly system cost is 8 years of bills
    const savings = total25Year - solarCost
    
    // Animate the number in a real implementation
    setGenerated(Math.round(savings))
  }

  return (
    <section className="py-24 bg-midnight-900 relative">
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.03] pointer-events-none" />
      
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-midnight-800 to-midnight-950 border border-white/10 p-8 md:p-16">
          <div className="absolute top-0 right-0 p-32 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="text-gold-400 text-sm font-medium tracking-wider uppercase mb-4 block">Savings Estimator</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Calculate Your Solar Potential
              </h2>
              <p className="text-white/70 mb-8 text-lg">
                Stop renting your power. Own it. Enter your average monthly electric bill to see how much you could save over 25 years.
              </p>
              
              <div className="space-y-8">
                <div>
                   <label className="block text-white font-medium mb-4 flex items-center gap-2">
                     Average Monthly Bill
                     <HelpCircle className="w-4 h-4 text-white/40" />
                   </label>
                   <div className="relative max-w-md">
                     <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
                     <input 
                       type="range" 
                       min="50" 
                       max="1000" 
                       step="10" 
                       value={bill} 
                       onChange={(e) => {
                         setBill(Number(e.target.value))
                         setGenerated(null)
                       }}
                       className="w-full mb-4 accent-gold-500"
                     />
                     <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-xl p-4">
                        <span className="text-3xl font-bold text-white">${bill}</span>
                        <span className="text-white/40 text-sm">/ month</span>
                     </div>
                   </div>
                </div>
                
                <Button size="lg" onClick={calculateSavings} className="w-full max-w-md text-lg h-14">
                  Calculate Savings
                </Button>
                
                <p className="text-xs text-white/30 italic max-w-md">
                  *Estimates are based on national averages and 4% annual utility rate increase. Actual savings vary by location and roof type.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
              {generated !== null ? (
                 <motion.div
                   initial={{ scale: 0.8, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="space-y-4"
                 >
                   <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-400">
                     <Sun className="w-10 h-10 animate-spin-slow" />
                   </div>
                   <h3 className="text-white/60 text-xl font-medium">Estimated 25-Year Savings</h3>
                   <div className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-500">
                     ${generated.toLocaleString()}
                   </div>
                   <p className="text-green-400 font-medium pt-4 flex items-center justify-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-400" />
                     Waitlist Approved
                   </p>
                   <Button variant="link" className="mt-8 text-white/50 hover:text-white">
                     Get a detailed breakdown &rarr;
                   </Button>
                 </motion.div>
              ) : (
                <div className="text-white/30 space-y-4">
                  <Calculator className="w-16 h-16 mx-auto opacity-50" />
                  <p>Enter your bill amount to see your savings potential.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
