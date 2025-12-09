import { ButtonHTMLAttributes, forwardRef, cloneElement, isValidElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gold-500 text-midnight-950 hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]",
        secondary: "bg-white/10 text-white backdrop-blur-sm border border-white/10 hover:bg-white/20 hover:border-white/20",
        outline: "border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500",
        ghost: "hover:bg-white/5 text-white/80 hover:text-white",
        link: "text-gold-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, loading, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string; children?: React.ReactNode }>
      return cloneElement(child, {
        className: cn(buttonVariants({ variant, size, className }), child.props.className),
        ref,
        ...props,
        children: (
          <>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {child.props.children}
          </>
        )
      } as any)
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
