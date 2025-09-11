import React from 'react'
import Image from 'next/image'

export interface Artwork {
  id: number
  title: string
  medium: string
  size: string
  year: string
  image: string
  description: string
  longDescription: string
  technique?: string
  inspiration?: string
  process: React.ComponentType
  dimensions: { width: number; height: number; depth: number }
  exhibitions?: string[]
  tags: string[]
  slug: string
}

export const artworksData: Record<string, Artwork> = {
  "circle-of-harmony": {
    id: 1,
    title: "Circle of Harmony",
    medium: "Gouache",
    size: '7.9" x 5.5"',
    year: "2025",
    image: "/IMG_1771.jpeg",
    description:
      "Colorful koi swimming among lilypads, capturing light, movement, and energy.",
    longDescription:
      "Circle of Harmony depicts a vibrant koi pond, exploring the interplay of light and shadow to bring the fish and water to life. The bright oranges and whites of the koi contrast with the deep blues and greens of the water and lilypads, creating a lively, three-dimensional effect. By arranging the fish in a circular flow, I aimed to capture movement and rhythm, giving the composition a dynamic energy. The overall mood is playful, colorful, and energetic, reflecting the beauty and vitality of koi swimming in a pond.",
    inspiration: "This work was inspired by reference images found on Pinterest, which guided my exploration of color, composition, and texture.",
    process: () => (
      <div className="space-y-6">
        <div className="relative w-full max-w-2xl mx-auto">
          <Image
            src="/IMG_9331.JPG"
            alt="Circle of Harmony - Creative Process"
            width={600}
            height={800}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <p className="text-[#9080B0] leading-relaxed">
          I began by studying the reference images, focusing on the way light plays across the water surface and the koi's scales. Using gouache allowed me to build up rich, opaque colors that could capture both the vibrant oranges of the koi and the deep, reflective blues of the water.
        </p>
        <p className="text-[#9080B0] leading-relaxed">
          I started with loose washes to establish the water's movement, then layered more opaque colors for the fish. The circular composition emerged naturally as I painted, with each koi positioned to guide the eye around the pond. The lilypads were added last, using quick, confident brushstrokes to maintain the painting's spontaneous energy.
        </p>
      </div>
    ),
    dimensions: { width: 5.5, height: 7.9, depth: 2 },
    tags: ["Koi", "vibrant", "lake", "movement", "lively"],
    slug: "circle-of-harmony",
  },
  "fluffy-adventure": {
    id: 10,
    title: "Fluffy's First Adventure",
    medium: "Acrylic on Canvas",
    size: '12" x 12"',
    year: "2025",
    image: "/IMG_1757.jpg",
    description: "A dreamy sunset unfolding over a majestic mountain, mirrored by the still waters of a tranquil lake.",
    longDescription:
      "Fluffy’s First Adventure captures the calm beauty of Johnson Lake in Banff, where the mountains rise strong and the water rests in stillness. The sunset paints the scene in warm colors, reflecting both the strength of nature and the peace of the lake. This piece marks my dog Fluffy’s first road trip, making the moment even more meaningful and full of memory.",
    inspiration: "Late night sunsets with a stunning view.",
    process: () => (
      <div className="space-y-4">
        <p className="text-[#9080B0] leading-relaxed">
          I started with a rough sketch to outline the composition, focusing on the balance between the mountains, lake, and sky. Using acrylics allowed me to layer colors effectively, starting with broad washes for the sky and water to establish the overall mood.
        </p>
        <p className="text-[#9080B0] leading-relaxed">
          I gradually built up the details of the mountains and reflections, using a mix of warm and cool tones to create depth and contrast. The brushwork varied from smooth blends in the sky to more textured strokes for the mountains and foreground, capturing the natural elements' different qualities. The final touches involved refining the reflections in the water and adding highlights to enhance the sense of light and atmosphere.
        </p>
      </div>
    ),
    dimensions: { width: 12, height: 12, depth: 1.5 },
    tags: ["sunset", "last light", "colorful", "landscape", "atmospheric", "Banff"],
    slug: "fluffy-adventure",
  },
   "Niki": {
    id: 11,
    title: "The Brightest Star",
    medium: "Graphite",
    size: '7.9" x 5.5"',
    year: "2025",
    image: "/IMG_8168.jpg",
    description: "A realistic portrait of Ni-ki from Enhypen.",
    longDescription:
      "The Brightest Star captures the luminous presence of Ni-ki as he stands against a radiant backdrop, the light framing him like a celestial glow. Rather than emphasizing his face, the sketch softens his features to create an atmospheric aura, letting the brilliance of the scene take center stage. The attention to the delicate folds and textures of his clothing grounds the piece in detail, while the glowing light transforms him into the embodiment of a star. This work celebrates both the ethereal beauty of the moment and the quiet strength of Ni-ki’s presence, turning a fleeting scene into something timeless."
    process: () => (
      <div className="space-y-4">
        <p className="text-[#9080B0] leading-relaxed">
          I began by studying the reference image, focusing on the way light interacts with Ni-ki's figure and clothing. Using graphite allowed me to achieve a range of tones, from deep shadows to bright highlights, which was essential for capturing the luminous quality of the scene. I started with a light sketch to outline the composition, then gradually built up layers of shading to create depth and texture. The folds in the clothing were rendered with careful attention to detail, using varied pencil strokes to convey the fabric's softness and movement. The background was kept minimal to emphasize the glowing light around Ni-ki, enhancing the ethereal atmosphere of the piece.
        </p>
      </div>
    ),
    dimensions: { width: 5.5, height: 7.9, depth: 0 },
    tags: ["sketch", "graphite", "black & white", "Ni-ki", "Enhypen", "portrait"],
    slug: "Niki",
  },
  "sunghoon": {
    id: 4,
    title: "Piercing Gaze",
    medium: "Graphite",
    size: '7.9" x 5.5"',
    year: "2025",
    image: "/IMG_1773.jpeg",
    description: "A realistic 3/4 portrait of Sunghoon from Enhypen",
    longDescription:
      "Piercing Gaze is a realistic graphite portrait of Sunghoon, created with attention to detail, shading, and simulated texture. I focused on capturing facial structure, expression, and the play of light and shadow, making adjustments to personalize the portrait. Using layered pencil strokes, blending, and varied pressure, I aimed to convey depth and realism while expressing the subject’s presence and character. This work reflects my interest in realistic portraiture and my fascination with translating references into expressive, hand-rendered artworks.",
    inspiration: "The reference image was from Pinterest, with added personal flair for originality.",
    process: () => (
      <div className="space-y-4">
        <p className="text-[#9080B0] leading-relaxed">
          I began by lightly sketching the basic shapes and proportions of Sunghoon's face, ensuring that the placement of features was accurate. Using a range of graphite pencils, I built up layers of shading to create depth and dimension, paying close attention to the way light interacted with his facial structure. I employed blending techniques to achieve smooth transitions between light and shadow, while also using varied pencil strokes to simulate texture in the hair and clothing. Throughout the process, I made adjustments to capture Sunghoon's unique expression and presence, aiming to create a portrait that felt both realistic and personal.
        </p>
      </div>
    ),
    dimensions: { width: 5.5, height: 7.9, depth: 0 },
    exhibitions: [],
    tags: ["Portrait", "Graphite", "Realism", "Enhypen", "Sunghoon"],
    slug: "sunghoon"
  },
  "whispers-field": {
    id: 12,
    title: "Whispers of the Field",
    medium: "Oil pastel",
    size: '6.5" x 4"',
    year: "2025",
    image: "/IMG_1758 2.jpeg",
    description: "Tranquil landscape of open fields bathed in soft light.",
    longDescription:
      "This piece is an exploration of color, texture, and light using oil pastels, marking my first experience with this medium. The composition depicts a serene field with clusters of wildflowers in the foreground and a line of trees in the distance, under a sky alive with soft clouds. Through bold strokes and layered colors, I aimed to capture the natural rhythm, depth, and movement of the landscape, creating a sense of space and atmosphere. This work reflects both my curiosity as an artist experimenting with new media and my continuing interest in landscapes that balance calmness with lively, colorful detail.",
    inspiration: "Inspired by an oil pastel artist I discovered online, I was drawn to the material’s vibrant pigments and the way it allows for layering and blending in a tactile, expressive manner.",
    process: () => (
      <div className="space-y-4">
        <p className="text-[#9080B0] leading-relaxed">
          I began by sketching the basic layout of the landscape, focusing on the placement of the horizon, trees, and clusters of wildflowers. Using oil pastels, I started with broad strokes to establish the main areas of color, layering different hues to create depth and texture. The foreground flowers were built up with vibrant colors and varied strokes to convey their lively presence, while the distant trees were rendered with softer, more blended tones to suggest depth. The sky was created using a mix of light blues and whites, applied in sweeping motions to capture the movement of clouds. Throughout the process, I embraced the tactile nature of oil pastels, allowing for spontaneous blending and layering to achieve a rich, dynamic surface.
        </p>
      </div>
    ),
    dimensions: { width: 4, height: 6.5, depth: 0 },
    tags: ["Oil pastel", "Landscape", "calm", "scenery", "dreamy"],
    slug: "whispers-field",
  },
      "eyes-speak": {
    id: 13,
    title: "Eyes Speak",
    medium: "Graphite",
    size: '6" x 5.5"',
    year: "2025",
    image: "/IMG_1774.jpeg",
    description: "Realistic pencil portrait showing dual emotions through a single face.",
    longDescription:
      "Eyes Speak is a realistic pencil portrait of Gong Yoo, capturing two contrasting emotions within a single face. The left side conveys arrogance and confidence, while the right side reveals fear and vulnerability, expressed most powerfully through the eyes. Careful shading, blending, and varied pencil strokes emphasize contrasts in light, texture, and form, creating depth and dimensionality. Through balance, value, and contrast, the portrait explores the tension between strength and fragility, showing how one gaze can hold both power and vulnerability at once.",
    inspiration: "This piece was inspired by the intense character portrayal in Squid Game.",
    process: () => (
      <div className="space-y-4">
        <p className="text-[#9080B0] leading-relaxed">
          I began by selecting a reference image of Gong Yoo that captured a strong emotional expression. I lightly sketched the basic outline of his face, ensuring accurate proportions and symmetry. Using a range of graphite pencils, I built up layers of shading to create depth and dimension, focusing on the eyes to convey the dual emotions. I employed blending techniques to achieve smooth transitions between light and shadow, while also using varied pencil strokes to simulate texture in the hair and clothing. Throughout the process, I made adjustments to capture the subtle nuances of expression, aiming to create a portrait that felt both realistic and emotionally resonant.
        </p>
      </div>
    ),
    dimensions: { width: 5.5, height: 6, depth: 0 },
    tags: ["Squid Game", "Realism", "Portrait", "Gong Yoo", "Graphite"],
    slug: "eyes-speak",
  },
}

// Helper function to get all artworks as an array
export const getAllArtworks = (): Artwork[] => {
  return Object.values(artworksData)
}

// Helper function to get artworks by year
export const getArtworksByYear = (): Record<string, Artwork[]> => {
  const artworks = getAllArtworks()
  const groupedByYear: Record<string, Artwork[]> = {}

  artworks.forEach((artwork) => {
    if (!groupedByYear[artwork.year]) {
      groupedByYear[artwork.year] = []
    }
    groupedByYear[artwork.year].push(artwork)
  })

  return groupedByYear
}

// Helper function to get artwork by slug
export const getArtworkBySlug = (slug: string): Artwork | undefined => {
  return artworksData[slug]
}

// Helper function to get related artworks (same year or similar tags)
export const getRelatedArtworks = (currentSlug: string, limit = 3): Artwork[] => {
  const currentArtwork = artworksData[currentSlug]
  if (!currentArtwork) return []

  const allArtworks = getAllArtworks().filter((artwork) => artwork.slug !== currentSlug)

  // Score artworks based on similarity
  const scoredArtworks = allArtworks.map((artwork) => {
    let score = 0

    // Same year gets higher score
    if (artwork.year === currentArtwork.year) score += 3

    // Same medium gets points
    if (artwork.medium === currentArtwork.medium) score += 2

    // Shared tags get points
    const sharedTags = artwork.tags.filter((tag) => currentArtwork.tags.includes(tag))
    score += sharedTags.length

    return { artwork, score }
  })

  // Sort by score and return top results
  return scoredArtworks
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.artwork)
}
