import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { variant?: "newsletter" | "auth-form" | "default" }>(
  ({ className, type, variant = "default", ...props }, ref) => {
    const variants = {
      default: "",
      "auth-form": "bg-charcoal h-12 ps-10",
      newsletter: "h-full bg-[#111] border border-solid border-[#1E2939] text-[#FFFFFF80] rounded-xl px-5",
    }
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md text-white bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
