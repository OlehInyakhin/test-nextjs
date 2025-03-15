import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/providers/theme-provider"
import { Footer } from "@/shared/components/footer"
import { Header } from "@/shared/components/header"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Company Name",
  description: "Your company description",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <div className="page-container flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}