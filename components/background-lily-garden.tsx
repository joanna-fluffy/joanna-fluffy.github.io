"use client";

import { useEffect, useState } from "react";

export function BackgroundLilyGarden() {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // Calculate bloom progress for different flowers
  const bloomProgress1 = Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.4));
  const bloomProgress2 = Math.max(0, Math.min(1, (scrollProgress - 0.3) / 0.4));
  const bloomProgress3 = Math.max(0, Math.min(1, (scrollProgress - 0.5) / 0.4));

  // Dynamic gradient based on scroll
  const gradientOpacity = 0.6 + scrollProgress * 0.4;
  const gradientShift = scrollProgress * 100;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Multi-layered background inspired by the Monet painting */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(ellipse at 20% ${
              20 + gradientShift * 0.3
            }%, rgba(168, 218, 181, ${
            0.4 + scrollProgress * 0.3
          }) 0%, transparent 50%),
            radial-gradient(ellipse at 80% ${
              60 + gradientShift * 0.2
            }%, rgba(216, 184, 192, ${
            0.3 + scrollProgress * 0.4
          }) 0%, transparent 40%),
            radial-gradient(ellipse at 40% ${
              80 + gradientShift * 0.1
            }%, rgba(186, 162, 200, ${
            0.2 + scrollProgress * 0.3
          }) 0%, transparent 60%),
            linear-gradient(180deg, 
              rgba(168, 218, 181, ${0.3 + scrollProgress * 0.2}) 0%,
              rgba(200, 180, 160, ${0.2 + scrollProgress * 0.3}) 25%,
              rgba(232, 184, 200, ${0.4 + scrollProgress * 0.2}) 50%,
              rgba(200, 160, 200, ${0.3 + scrollProgress * 0.3}) 75%,
              rgba(160, 180, 220, ${0.4 + scrollProgress * 0.2}) 100%
            )
          `,
        }}
      />

      {/* Water surface texture overlay */}
      <div
        className="absolute inset-0 opacity-20 transition-opacity duration-1000"
        style={{
          opacity: 0.1 + scrollProgress * 0.2,
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.1) 2px,
              rgba(255, 255, 255, 0.1) 4px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 3px,
              rgba(200, 180, 200, 0.1) 3px,
              rgba(200, 180, 200, 0.1) 6px
            )
          `,
        }}
      />

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        className="absolute inset-0 w-full h-full"
      >
        {/* Scattered small lily pads inspired by the painting */}
        {[...Array(12)].map((_, i) => (
          <ellipse
            key={`small-pad-${i}`}
            cx={100 + ((i * 100) % 1000)}
            cy={100 + ((i * 80) % 600)}
            rx={15 + (i % 3) * 10}
            ry={8 + (i % 2) * 5}
            fill="url(#smallLilyPadGradient)"
            opacity={0.2 + scrollProgress * 0.3}
            style={{
              transform: `rotate(${i * 30}deg) scale(${
                0.8 + scrollProgress * 0.4
              })`,
              transformOrigin: `${100 + ((i * 100) % 1000)}px ${
                100 + ((i * 80) % 600)
              }px`,
              transition: "transform 0.5s ease-out",
            }}
          />
        ))}

        {/* Large Lily Pad 1 - Center */}
        <ellipse
          cx="600"
          cy="400"
          rx="200"
          ry="120"
          fill="url(#lilyPadGradient1)"
          opacity={0.3 + scrollProgress * 0.2}
          style={{
            transform: `scale(${0.8 + scrollProgress * 0.3}) rotate(${
              scrollProgress * 10
            }deg)`,
            transformOrigin: "600px 400px",
            transition: "transform 0.5s ease-out",
          }}
        />

        {/* Large Lily Pad 2 - Left */}
        <ellipse
          cx="200"
          cy="300"
          rx="150"
          ry="90"
          fill="url(#lilyPadGradient2)"
          opacity={0.25 + scrollProgress * 0.25}
          style={{
            transform: `scale(${0.7 + scrollProgress * 0.2}) rotate(${
              -scrollProgress * 8
            }deg)`,
            transformOrigin: "200px 300px",
            transition: "transform 0.5s ease-out",
          }}
        />

        {/* Large Lily Pad 3 - Right */}
        <ellipse
          cx="1000"
          cy="500"
          rx="180"
          ry="100"
          fill="url(#lilyPadGradient3)"
          opacity={0.2 + scrollProgress * 0.3}
          style={{
            transform: `scale(${0.6 + scrollProgress * 0.25}) rotate(${
              scrollProgress * 12
            }deg)`,
            transformOrigin: "1000px 500px",
            transition: "transform 0.5s ease-out",
          }}
        />

        {/* Water Lily Flower 1 - Main Center */}
        <g
          style={{
            transform: `translate(600px, 400px) scale(${
              0.5 + bloomProgress1 * 1.5
            })`,
            transformOrigin: "0 0",
            transition: "transform 0.8s ease-out",
          }}
        >
          {/* Outer petals */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
            (rotation, index) => (
              <ellipse
                key={`outer1-${index}`}
                cx="0"
                cy="-40"
                rx="12"
                ry="35"
                fill="url(#petalGradient1)"
                opacity={0.4 + bloomProgress1 * 0.4}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: "0 0",
                  transition: "opacity 0.6s ease-out",
                }}
              />
            )
          )}

          {/* Inner petals */}
          {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map(
            (rotation, index) => (
              <ellipse
                key={`inner1-${index}`}
                cx="0"
                cy="-25"
                rx="8"
                ry="22"
                fill="url(#petalGradient2)"
                opacity={0.5 + bloomProgress1 * 0.4}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: "0 0",
                  transition: "opacity 0.7s ease-out",
                }}
              />
            )
          )}

          {/* Center */}
          <circle
            cx="0"
            cy="0"
            r="8"
            fill="url(#centerGradient)"
            opacity={0.6 + bloomProgress1 * 0.4}
          />
        </g>

        {/* Water Lily Flower 2 - Left */}
        <g
          style={{
            transform: `translate(200px, 300px) scale(${
              0.3 + bloomProgress2 * 1.0
            })`,
            transformOrigin: "0 0",
            transition: "transform 0.8s ease-out",
          }}
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
            <ellipse
              key={`outer2-${index}`}
              cx="0"
              cy="-30"
              rx="10"
              ry="25"
              fill="url(#petalGradient3)"
              opacity={0.3 + bloomProgress2 * 0.5}
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "0 0",
              }}
            />
          ))}
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="url(#centerGradient2)"
            opacity={0.5 + bloomProgress2 * 0.4}
          />
        </g>

        {/* Water Lily Flower 3 - Right */}
        <g
          style={{
            transform: `translate(1000px, 500px) scale(${
              0.4 + bloomProgress3 * 1.2
            })`,
            transformOrigin: "0 0",
            transition: "transform 0.8s ease-out",
          }}
        >
          {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((rotation, index) => (
            <ellipse
              key={`outer3-${index}`}
              cx="0"
              cy="-35"
              rx="11"
              ry="28"
              fill="url(#petalGradient4)"
              opacity={0.25 + bloomProgress3 * 0.45}
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "0 0",
              }}
            />
          ))}
          <circle
            cx="0"
            cy="0"
            r="7"
            fill="url(#centerGradient3)"
            opacity={0.4 + bloomProgress3 * 0.5}
          />
        </g>

        {/* Floating particles with scroll-based movement */}
        {[...Array(25)].map((_, i) => (
          <circle
            key={i}
            cx={50 + ((i * 60) % 1100)}
            cy={100 + ((i * 40) % 600)}
            r="1.5"
            fill="url(#particleGradient)"
            opacity={0.2 + scrollProgress * 0.4}
            style={{
              transform: `translateY(${
                -scrollProgress * 40 - i * 3
              }px) translateX(${Math.sin(scrollProgress * 6.28 + i) * 10}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
        ))}

        {/* Gradients inspired by the Monet painting */}
        <defs>
          {/* Small lily pad gradient */}
          <radialGradient id="smallLilyPadGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#A8DAB5" />{" "}
            {/* Soft green from painting */}
            <stop offset="50%" stopColor="#98C8A8" />
            <stop offset="100%" stopColor="#88B898" />
          </radialGradient>

          {/* Lily Pad Gradients - Using greens and blue-grays from the painting */}
          <radialGradient id="lilyPadGradient1" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#B8D8C8" /> {/* Soft green-blue */}
            <stop offset="50%" stopColor="#A8C8B8" />
            <stop offset="100%" stopColor="#98B8A8" />
          </radialGradient>

          <radialGradient id="lilyPadGradient2" cx="0.4" cy="0.2">
            <stop offset="0%" stopColor="#C8D8D0" /> {/* Gentle gray-green */}
            <stop offset="50%" stopColor="#B8C8C0" />
            <stop offset="100%" stopColor="#A8B8B0" />
          </radialGradient>

          <radialGradient id="lilyPadGradient3" cx="0.2" cy="0.4">
            <stop offset="0%" stopColor="#D0C8D8" /> {/* Soft mauve-gray */}
            <stop offset="50%" stopColor="#C0B8C8" />
            <stop offset="100%" stopColor="#B0A8B8" />
          </radialGradient>

          {/* Petal Gradients - Using the pink/rose tones from the painting */}
          <radialGradient id="petalGradient1" cx="0.3" cy="0.2">
            <stop offset="0%" stopColor="#F0D8E8" />{" "}
            {/* Soft pink like the lilies */}
            <stop offset="40%" stopColor="#E8C8D8" />
            <stop offset="100%" stopColor="#E0B8C8" />
          </radialGradient>

          <radialGradient id="petalGradient2" cx="0.3" cy="0.2">
            <stop offset="0%" stopColor="#E8D0E0" /> {/* Gentle rose */}
            <stop offset="40%" stopColor="#E0C0D0" />
            <stop offset="100%" stopColor="#D8B0C0" />
          </radialGradient>

          <radialGradient id="petalGradient3" cx="0.3" cy="0.2">
            <stop offset="0%" stopColor="#E0C8D8" /> {/* Muted pink */}
            <stop offset="40%" stopColor="#D8B8C8" />
            <stop offset="100%" stopColor="#D0A8B8" />
          </radialGradient>

          <radialGradient id="petalGradient4" cx="0.3" cy="0.2">
            <stop offset="0%" stopColor="#E8C0D8" /> {/* Soft rose */}
            <stop offset="40%" stopColor="#E0B0C8" />
            <stop offset="100%" stopColor="#D8A0B8" />
          </radialGradient>

          {/* Center Gradients - Using warm tones from the painting */}
          <radialGradient id="centerGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#F8E8D8" /> {/* Warm center */}
            <stop offset="50%" stopColor="#F0D8C8" />
            <stop offset="100%" stopColor="#E8C8B8" />
          </radialGradient>

          <radialGradient id="centerGradient2" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#E8D8E0" /> {/* Gentle pink-gray */}
            <stop offset="50%" stopColor="#E0C8D0" />
            <stop offset="100%" stopColor="#D8B8C0" />
          </radialGradient>

          <radialGradient id="centerGradient3" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#F0C8D8" /> {/* Soft pink */}
            <stop offset="50%" stopColor="#E8B8C8" />
            <stop offset="100%" stopColor="#E0A8B8" />
          </radialGradient>

          {/* Particle Gradient */}
          <radialGradient id="particleGradient" cx="0.5" cy="0.5">
            <stop offset="0%" stopColor="#F0E0E8" />
            <stop offset="100%" stopColor="#E8D0D8" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
