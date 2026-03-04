import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        login: "text-[#99A1AF]",
        "get-started":
          "bg-[#00C663] rounded-3xl font-semibold",
        "hero-get-started":
          "bg-[#00C663] rounded-xl font-normal text-base",
        "watch-video":
          "bg-[rgba(255,255,255,0.05)] border border-solid border-[rgba(255,255,255,0.10)] rounded-xl text-base",
        "get-started-in-minutes":
          "bg-[#1A1A1A] rounded-3xl border border-solid border-[rgba(0,166,62,0.30)] text-base text-greenDark",
        "newsletter-subscribe":
          "bg-[#00C663] rounded-2xl",
        "dialog-switch": "text-lg font-semibold text-[#FFFFFF80] border-b-2 border-transparent transition-colors rounded-none",
        "auth-submit": "bg-[#00E37166] border border-greenDark",
      },
      size: {
        default: "h-12 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        "login": "px-0 py-0",
        "get-started": "h-10 px-6 py-3",
        "hero-get-started": "h-12 px-8 py-3",
        "watch-video": "h-12 px-6 py-3",
        "get-started-in-minutes": "h-12 px-10 py-3",
        "newsletter-subscribe": "h-full px-[15px] py-3",
        "dialog-switch": "px-3 pb-[6px]",
        "auth-submit": "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
