"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { BackgroundLilyGarden } from "@/components/background-lily-garden"
import { useEffect, useState } from "react"

export default function ArtistPortfolio() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showCV, setShowCV] = useState(false)

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
                Student Artist | Paintings & Sketches
              </p>
              <p className="text-lg text-[#A090C0] mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                Capturing presence and place through detailed graphite portraits and atmospheric landscapes.
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
                    I am a student artist inspired by Claude Monet, particularly his use of color, mood, and natural landscapes. 
                    While Monet influences my sense of atmosphere and harmony, I am also deeply drawn to realism in portraiture. 
                    I work mainly with graphite, focusing on line, proportion, and value to create portraits that balance 
                    precision with expression.
                  </p>              
                  <p className="text-lg text-[#9080B0] leading-relaxed drop-shadow-sm">                    
                    Today, I continue to develop my practice through both portraits and landscapes. I enjoy creating scenes of lakes,
                    mountains, and open spaces, exploring unity, contrast, and the interplay of light and shadow. By combining the 
                    intimacy of portraiture with the expansiveness of nature, my work reflects my dedication to realism while capturing
                    atmosphere, balance, and form.
                  </p>
                </div>
                <div className="space-y-6">
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
                  <div className="text-center">
                    <Button
                      onClick={() => setShowCV(true)}
                      className="bg-gradient-to-r from-[#C1C6DE] to-[#C1C6DE] hover:from-[#9CA4CB] hover:to-[#D0B0B8] text-[#8070A0] px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                    >
                      View CV
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CV Modal YOU CAN EDIT THIS SECTION */}
        {showCV && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-sm rounded-3xl p-8 border relative"
              style={{
                backgroundColor: `rgba(240, 224, 232, 0.95)`,
                borderColor: `rgba(224, 200, 208, 0.6)`,
              }}
            >
              <Button
                onClick={() => setShowCV(false)}
                className="absolute top-4 right-4 bg-[#8070A0] hover:bg-[#7060A0] text-white rounded-full p-2"
              >
                ✕
              </Button>
              
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-4xl font-serif text-[#8070A0] mb-2">Curriculum Vitae</h2>
                  <h3 className="text-2xl text-[#9080B0]">Joanna Gong</h3>
                  <p className="text-[#A090C0]">Student Artist</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-serif text-[#8070A0] mb-3 border-b border-[#D0B0B8] pb-1">Education</h4>
                    <div className="space-y-2 text-[#9080B0]">
                      <p>Currently pursuing studies in Visual Arts</p>
                      <p>Self-taught in graphite portraiture and landscape painting</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif text-[#8070A0] mb-3 border-b border-[#D0B0B8] pb-1">Artistic Focus</h4>
                    <div className="space-y-2 text-[#9080B0]">
                      <p>• Graphite realism with emphasis on portraiture</p>
                      <p>• Atmospheric landscape painting inspired by Impressionist techniques</p>
                      <p>• Exploration of light, shadow, and natural forms</p>
                      <p>• Integration of precision with expressive composition</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif text-[#8070A0] mb-3 border-b border-[#D0B0B8] pb-1">Artistic Influences</h4>
                    <div className="space-y-2 text-[#9080B0]">
                      <p>• Claude Monet - Color, mood, and natural landscapes</p>
                      <p>• Classical realist traditions in portraiture</p>
                      <p>• Contemporary graphite artists</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif text-[#8070A0] mb-3 border-b border-[#D0B0B8] pb-1">Technical Skills</h4>
                    <div className="space-y-2 text-[#9080B0]">
                      <p>• Graphite drawing and shading techniques</p>
                      <p>• Oil pastel painting</p>
                      <p>• Gouache painting</p>
                      <p>• Acrylic painting</p>
                      <p>• Composition and color theory</p>
                      <p>• Portrait anatomy and proportions</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif text-[#8070A0] mb-3 border-b border-[#D0B0B8] pb-1">Recent Works (2025)</h4>
                    <div className="space-y-2 text-[#9080B0]">
                      <p>• "Circle of Harmony" - Gouache koi pond study</p>
                      <p>• "Fluffy's First Adventure" - Acrylic landscape of Johnson Lake, Banff</p>
                      <p>• "The Brightest Star" - Graphite portrait study</p>
                      <p>• "Piercing Gaze" - Realistic graphite portrait</p>
                      <p>• "Whispers of the Field" - Oil pastel landscape exploration</p>
                      <p>• "Eyes Speak" - Dual-emotion graphite portrait</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif text-[#8070A0] mb-3 border-b border-[#D0B0B8] pb-1">Artistic Philosophy</h4>
                    <div className="text-[#9080B0]">
                      <p>My work seeks to bridge the gap between precise realism and atmospheric expression. Through careful observation of light, texture, and form, I aim to create pieces that capture not just the physical appearance of subjects, but their essence and the mood of the moment. Whether working on detailed portraits or expansive landscapes, I strive to balance technical skill with emotional resonance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
