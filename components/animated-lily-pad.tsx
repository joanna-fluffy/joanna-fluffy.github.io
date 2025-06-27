"use client"

import { useEffect, useState } from "react"

export function AnimatedLilyPad() {
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

  // Calculate bloom progress (starts blooming after 20% scroll)
  const bloomProgress = Math.max(0, (scrollProgress - 0.2) / 0.6)
  const petalScale = 0.3 + bloomProgress * 0.7
  const petalOpacity = 0.4 + bloomProgress * 0.6
  const centerScale = 0.5 + bloomProgress * 0.5

  return (
    <div className="fixed bottom-8 right-8 z-30 pointer-events-none">
      <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
        {/* Lily Pad */}
        <ellipse
          cx="60"
          cy="85"
          rx="45"
          ry="25"
          fill="url(#lilyPadGradient)"
          opacity="0.8"
          style={{
            transform: `scale(${0.8 + scrollProgress * 0.2})`,
            transformOrigin: "center",
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Lily Pad Notch */}
        <path
          d="M60 85 L75 70 L60 60 L45 70 Z"
          fill="url(#lilyPadGradient)"
          opacity="0.6"
          style={{
            transform: `scale(${0.8 + scrollProgress * 0.2})`,
            transformOrigin: "center",
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Water Lily Petals - Outer Layer */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
          <ellipse
            key={`outer-${index}`}
            cx="60"
            cy="45"
            rx="8"
            ry="20"
            fill="url(#petalGradientOuter)"
            opacity={petalOpacity}
            style={{
              transform: `rotate(${rotation}deg) scale(${petalScale})`,
              transformOrigin: "60px 60px",
              transition: "all 0.5s ease-out",
            }}
          />
        ))}

        {/* Water Lily Petals - Inner Layer */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((rotation, index) => (
          <ellipse
            key={`inner-${index}`}
            cx="60"
            cy="50"
            rx="6"
            ry="15"
            fill="url(#petalGradientInner)"
            opacity={petalOpacity * 0.9}
            style={{
              transform: `rotate(${rotation}deg) scale(${petalScale * 0.8})`,
              transformOrigin: "60px 60px",
              transition: "all 0.6s ease-out",
            }}
          />
        ))}

        {/* Flower Center */}
        <circle
          cx="60"
          cy="60"
          r="4"
          fill="url(#centerGradient)"
          style={{
            transform: `scale(${centerScale})`,
            transformOrigin: "center",
            transition: "transform 0.4s ease-out",
          }}
        />

        {/* Stamens */}
        {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
          <circle
            key={`stamen-${index}`}
            cx="60"
            cy="57"
            r="1"
            fill="#F4D03F"
            opacity={bloomProgress}
            style={{
              transform: `rotate(${rotation}deg) scale(${centerScale})`,
              transformOrigin: "60px 60px",
              transition: "all 0.5s ease-out",
            }}
          />
        ))}

        {/* Gradients */}
        <defs>
          <radialGradient id="lilyPadGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#A8E6CF" />
            <stop offset="50%" stopColor="#7FCDCD" />
            <stop offset="100%" stopColor="#6B9B7F" />
          </radialGradient>

          <radialGradient id="petalGradientOuter" cx="0.3" cy="0.2">
            <stop offset="0%" stopColor="#FFE5F1" />
            <stop offset="40%" stopColor="#F8BBD9" />
            <stop offset="100%" stopColor="#E8A5C8" />
          </radialGradient>

          <radialGradient id="petalGradientInner" cx="0.3" cy="0.2">
            <stop offset="0%" stopColor="#FFF0F8" />
            <stop offset="40%" stopColor="#F5D5E8" />
            <stop offset="100%" stopColor="#E6C2D6" />
          </radialGradient>

          <radialGradient id="centerGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="50%" stopColor="#F7DC6F" />
            <stop offset="100%" stopColor="#F4D03F" />
          </radialGradient>
        </defs>
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-200 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: bloomProgress * 0.6,
              transform: `translateY(${-scrollProgress * 20}px)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
