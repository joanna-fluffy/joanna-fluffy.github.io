"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BackgroundLilyGarden } from "@/components/background-lily-garden"
import { useEffect, useState } from "react"
import { getArtworksByYear } from "@/data/artworks"

export default function PortfolioPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const artworksByYear = getArtworksByYear()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="min-h-screen relative transition-all duration-1000 ease-out"
      style={{
        background: `linear-gradient(180deg, 
          rgba(168, 218, 181, ${0.1 + scrollProgress * 0.2}) 0%,
          rgba(232, 184, 200, ${0.2 + scrollProgress * 0.3}) 50%,
          rgba(160, 180, 220, ${0.3 + scrollProgress * 0.2}) 100%
        )`,
      }}
    >
      {/* Animated Background */}
      <BackgroundLilyGarden />

      {/* Content with backdrop for readability */}
      <div className="relative z-10">
        {/* Header */}
        <header
          className="sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-500"
          style={{
            backgroundColor: `rgba(240, 224, 232, ${0.9 + scrollProgress * 0.1})`,
            borderBottomColor: `rgba(224, 200, 208, ${0.5 + scrollProgress * 0.3})`,
          }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="text-2xl font-serif text-[#8070A0]">Joanna Gong</div>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-[#9080B0] hover:text-[#8070A0] transition-colors">
                  Home
                </Link>
                <Link href="/portfolio" className="text-[#8070A0] font-medium transition-colors">
                  Portfolio
                </Link>
                <Link href="/#about" className="text-[#9080B0] hover:text-[#8070A0] transition-colors">
                  About
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Portfolio Header */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex items-center mb-8">
              <Link href="/">
                <Button variant="ghost" className="text-[#9080B0] hover:text-[#8070A0] hover:bg-[#E8D8E0]/30">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <div
              className="text-center mb-16 backdrop-blur-sm rounded-3xl p-12 border transition-all duration-1000"
              style={{
                backgroundColor: `rgba(240, 224, 232, ${0.3 + scrollProgress * 0.2})`,
                borderColor: `rgba(224, 200, 208, ${0.4 + scrollProgress * 0.3})`,
              }}
            >
              <h1 className="text-4xl md:text-6xl font-serif text-[#8070A0] mb-6">Portfolio</h1>
              <p className="text-xl text-[#9080B0] max-w-3xl mx-auto leading-relaxed">
                A collection of art throughout the years.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio by Year */}
        <div className="container mx-auto px-4 pb-20">
          {Object.entries(artworksByYear)
            .sort(([a], [b]) => Number.parseInt(b) - Number.parseInt(a))
            .map(([year, artworks]) => (
              <section key={year} className="mb-20">
                <div className="flex items-center mb-12">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D8B8C0] to-transparent"></div>
                  <h2 className="text-3xl md:text-4xl font-serif text-[#8070A0] mx-8">{year}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D8B8C0] to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {artworks.map((artwork) => (
                    <Card
                      key={artwork.id}
                      className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
                      style={{
                        backgroundColor: `rgba(248, 240, 248, ${0.8 + scrollProgress * 0.1})`,
                        borderColor: `rgba(224, 200, 208, ${0.3 + scrollProgress * 0.2})`,
                      }}
                    >
                      <Link href={`/portfolio/${artwork.slug}`}>
                        <div className="relative overflow-hidden">
                          <Image
                            src={artwork.images[0] || "/placeholder.svg"}
                            alt={artwork.title}
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#8070A0]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                              <Eye className="w-4 h-4 text-[#8070A0]" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <CardContent className="p-6">
                        <Link href={`/portfolio/${artwork.slug}`}>
                          <h3 className="text-xl font-serif text-[#8070A0] mb-2 hover:text-[#7060A0] transition-colors">
                            {artwork.title}
                          </h3>
                        </Link>
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-[#9080B0] text-sm">{artwork.medium}</p>
                        </div>
                        <p className="text-[#9080B0] text-sm mb-1">{artwork.size}</p>
                        <p className="text-[#A090C0] text-sm mb-3">{artwork.year}</p>
                        <p className="text-[#9080B0] text-sm leading-relaxed mb-4">{artwork.description}</p>
                        <Link href={`/portfolio/${artwork.slug}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full bg-[#F0E0E8]/50 border-[#D8B8C0] text-[#8070A0] hover:bg-[#E8D8E0]/70"
                          >
                            View Details
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
        </div>

        {/* Footer */}
        <footer
          className="py-8 px-4 backdrop-blur-sm text-[#F0E0E8] border-t transition-all duration-500"
          style={{
            backgroundColor: `rgba(128, 112, 160, ${0.8 + scrollProgress * 0.2})`,
            borderTopColor: `rgba(216, 200, 208, ${0.3 + scrollProgress * 0.2})`,
          }}
        >
          <div className="container mx-auto text-center">
            <p className="text-[#E8D8E0]">© {new Date().getFullYear()} Joanna Gong. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
