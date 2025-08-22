"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { BackgroundLilyGarden } from "@/components/background-lily-garden"
import { useEffect, useState } from "react"

export default function ArtistPortfolio() {
  const [scrollProgress, setScrollProgress] = useState(0)

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
                <Link href="#home" className="text-[#9080B0] hover:text-[#8070A0] transition-colors">
                  Home
                </Link>
                <Link href="/portfolio" className="text-[#9080B0] hover:text-[#8070A0] transition-colors">
                  Portfolio
                </Link>
                <Link href="#about" className="text-[#9080B0] hover:text-[#8070A0] transition-colors">
                  About
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div
              className="max-w-4xl mx-auto backdrop-blur-sm rounded-3xl p-12 border transition-all duration-1000"
              style={{
                backgroundColor: `rgba(240, 224, 232, ${0.3 + scrollProgress * 0.2})`,
                borderColor: `rgba(224, 200, 208, ${0.4 + scrollProgress * 0.3})`,
              }}
            >
              <h1 className="text-5xl md:text-7xl font-serif text-[#8070A0] mb-6 leading-tight drop-shadow-sm">
                Joanna Gong
              </h1>
              <p className="text-xl md:text-2xl text-[#9080B0] mb-8 font-light drop-shadow-sm">
                Contemporary Artist & Impressionist Painter
              </p>
              <p className="text-lg text-[#A090C0] mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                Creating dreamy landscapes and ethereal compositions inspired by the beauty of nature and the fleeting
                moments of light and color.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C1C6DE] to-[#C1C6DE] hover:from-[#9CA4CB] hover:to-[#D0B0B8] text-[#8070A0] px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                <Link href="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto">
            <div
              className="backdrop-blur-sm rounded-3xl p-12 border transition-all duration-1000"
              style={{
                backgroundColor: `rgba(232, 216, 224, ${0.4 + scrollProgress * 0.3})`,
                borderColor: `rgba(216, 200, 208, ${0.5 + scrollProgress * 0.2})`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-serif text-[#8070A0] mb-8 drop-shadow-sm">
                    About the Artist
                  </h2>
                  <p className="text-lg text-[#9080B0] leading-relaxed drop-shadow-sm">
                    Joanna Gong is a student artist whose work explores light, atmosphere, and detail with an impressionistic touch. 
                    Inspired by both classical influences such as Claude Monet and contemporary storytelling, she is passionate about 
                    creating realistic portrait sketches that capture presence and personality. Alongside this, her art balances soft, 
                    atmospheric glow with intricate detail, reflecting both her curiosity as a learner and her growing voice as an artist.
                  </p>
                  <p className="text-lg text-[#9080B0] leading-relaxed drop-shadow-sm">
                    Her artistic journey began in childhood, sketching the gardens near her home. Today, she continues
                    to find inspiration in natural landscapes, particularly water gardens, morning mist, and the
                    interplay of light on water surfaces.
                  </p>
                  <p className="text-lg text-[#9080B0] leading-relaxed drop-shadow-sm">
                    Working primarily in graphite and acrylics, Joanna's technique emphasizes loose brushwork and a dreamy
                    quality that invites viewers into a world of serene contemplation, while she also enjoys focusing on the
                    finer details to bring depth and realism to her work.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-[#E0C8D0]/50 to-[#D8B8C0]/50 backdrop-blur-sm border border-[#E8D8E0]/40">
                    <Image
                      src="/IMG_1806.jpeg"
                      alt="Joanna Gong"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#D8B8C0]/40 to-[#D0B0B8]/40 rounded-full backdrop-blur-sm" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#E8D8E0]/40 to-[#E0C8D0]/40 rounded-full backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </div>
        </section>

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
