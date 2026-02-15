import "./globals.css"
import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

export const metadata = {
  title: "AI Contact Center",
  description: "Production-grade AI AI Contact Center Chat UI",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen w-screen overflow-hidden bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex h-full w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
