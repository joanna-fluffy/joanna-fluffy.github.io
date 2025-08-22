"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundLilyGarden } from "@/components/background-lily-garden";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { getArtworkBySlug, getRelatedArtworks } from "@/data/artworks";
import { useParams } from "next/navigation";

export default function ArtworkPage() {
  const params = useParams();
  const slug =
    typeof params.slug === "string"
      ? params.slug
      : Array.isArray(params.slug)
      ? params.slug[0]
      : "";
  const [scrollProgress, setScrollProgress] = useState(0);
  const artwork = getArtworkBySlug(slug);
  const relatedArtworks = getRelatedArtworks(slug, 3);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!artwork) {
    notFound();
  }

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

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header
          className="sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-500"
          style={{
            backgroundColor: `rgba(240, 224, 232, ${
              0.9 + scrollProgress * 0.1
            })`,
            borderBottomColor: `rgba(224, 200, 208, ${
              0.5 + scrollProgress * 0.3
            })`,
          }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="text-2xl font-serif text-[#8070A0]">
                Joanna Gong
              </div>
              <div className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-[#9080B0] hover:text-[#8070A0] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/portfolio"
                  className="text-[#9080B0] hover:text-[#8070A0] transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/#about"
                  className="text-[#9080B0] hover:text-[#8070A0] transition-colors"
                >
                  About
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Artwork Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/portfolio">
              <Button
                variant="ghost"
                className="text-[#9080B0] hover:text-[#8070A0] hover:bg-[#E8D8E0]/30"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div
              className="backdrop-blur-sm rounded-3xl p-8 border transition-all duration-1000"
              style={{
                backgroundColor: `rgba(248, 240, 248, ${
                  0.4 + scrollProgress * 0.2
                })`,
                borderColor: `rgba(224, 200, 208, ${
                  0.4 + scrollProgress * 0.3
                })`,
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Details */}
            <div
              className="backdrop-blur-sm rounded-3xl p-8 border transition-all duration-1000"
              style={{
                backgroundColor: `rgba(240, 224, 232, ${
                  0.4 + scrollProgress * 0.2
                })`,
                borderColor: `rgba(224, 200, 208, ${
                  0.4 + scrollProgress * 0.3
                })`,
              }}
            >
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-serif text-[#8070A0] mb-2">
                    {artwork.title}
                  </h1>
                  <p className="text-xl text-[#9080B0] mb-4">{artwork.year}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-[#8070A0]">Medium:</span>
                    <p className="text-[#9080B0]">{artwork.medium}</p>
                  </div>
                  <div>
                    <span className="font-medium text-[#8070A0]">Size:</span>
                    <p className="text-[#9080B0]">{artwork.size}</p>
                  </div>
                  <div>
                    <span className="font-medium text-[#8070A0]">
                      Technique:
                    </span>
                    <p className="text-[#9080B0]">{artwork.technique}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-[#8070A0] mb-2">
                    Description
                  </h3>
                  <p className="text-[#9080B0] leading-relaxed">
                    {artwork.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-[#8070A0] mb-2">
                    Artist's Note
                  </h3>
                  <p className="text-[#9080B0] leading-relaxed">
                    {artwork.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-[#8070A0] mb-2">
                    Inspiration
                  </h3>
                  <p className="text-[#9080B0] leading-relaxed">
                    {artwork.inspiration}
                  </p>
                </div>

                {artwork.exhibitions && artwork.exhibitions.length > 0 && (
                  <div>
                    <h3 className="font-medium text-[#8070A0] mb-2">
                      Exhibitions
                    </h3>
                    <ul className="text-[#9080B0] space-y-1">
                      {artwork.exhibitions.map((exhibition, index) => (
                        <li key={index}>• {exhibition}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {artwork.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#E8D8E0]/50 text-[#8070A0] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Works */}
          {relatedArtworks.length > 0 && (
            <div
              className="backdrop-blur-sm rounded-3xl p-8 border transition-all duration-1000"
              style={{
                backgroundColor: `rgba(232, 216, 224, ${
                  0.3 + scrollProgress * 0.2
                })`,
                borderColor: `rgba(216, 200, 208, ${
                  0.4 + scrollProgress * 0.2
                })`,
              }}
            >
              <h2 className="text-3xl font-serif text-[#8070A0] mb-8 text-center">
                Related Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArtworks.map((relatedArtwork) => (
                  <Link
                    key={relatedArtwork.id}
                    href={`/portfolio/${relatedArtwork.slug}`}
                  >
                    <div className="group cursor-pointer">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-3">
                        <Image
                          src={relatedArtwork.image || "/placeholder.svg"}
                          alt={relatedArtwork.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-serif text-[#8070A0] group-hover:text-[#7060A0] transition-colors">
                        {relatedArtwork.title}
                      </h3>
                      <p className="text-sm text-[#9080B0]">
                        {relatedArtwork.year}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer
          className="py-8 px-4 backdrop-blur-sm text-[#F0E0E8] border-t transition-all duration-500"
          style={{
            backgroundColor: `rgba(128, 112, 160, ${
              0.8 + scrollProgress * 0.2
            })`,
            borderTopColor: `rgba(216, 200, 208, ${
              0.3 + scrollProgress * 0.2
            })`,
          }}
        >
          <div className="container mx-auto text-center">
            <p className="text-[#E8D8E0]">
              © {new Date().getFullYear()} Joanna Gong. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
