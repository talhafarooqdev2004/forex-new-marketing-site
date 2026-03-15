import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { variant?: "newsletter" | "auth-form" | "default" }>(
  ({ className, type, variant = "default", ...props }, ref) => {
    const variants = {
      default: "",
      "auth-form": "bg-white text-foreground placeholder:text-muted-foreground h-12 ps-10 border border-[rgba(30,41,57,0.12)] dark:border-transparent dark:bg-charcoal dark:text-white",
      newsletter: "h-full bg-[rgb(246,247,249)] dark:bg-[#111] border border-solid border-[rgba(30,41,57,0.12)] dark:border-[#1E2939] text-foreground placeholder:text-muted-foreground dark:text-[#FFFFFF80] rounded-xl px-5",
    }
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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
