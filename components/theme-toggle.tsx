"use client"

import { Button } from "@/components/ui/button"
import { Moon } from "lucide-react"

export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9 rounded-md hover:bg-accent/20 transition-colors cursor-default"
      aria-label="Dark theme active"
      disabled
    >
      <Moon className="h-4 w-4 text-primary" />
    </Button>
  )
}
