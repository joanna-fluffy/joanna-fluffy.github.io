export interface Artwork {
  id: number
  title: string
  medium: string
  size: string
  year: string
  image: string
  description: string
  longDescription: string
  technique: string
  inspiration: string
  dimensions: { width: number; height: number; depth: number }
  exhibitions: string[]
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
      "The Brightest Star captures the luminous presence of Ni-ki as he stands against a radiant backdrop, the light framing him like a celestial glow. Rather than emphasizing his face, the sketch softens his features to create an atmospheric aura, letting the brilliance of the scene take center stage. The attention to the delicate folds and textures of his clothing grounds the piece in detail, while the glowing light transforms him into the embodiment of a star. This work celebrates both the ethereal beauty of the moment and the quiet strength of Ni-ki’s presence, turning a fleeting scene into something timeless.",
    inspiration: "My muse Ni-ki, and all of Enhypen.",
    dimensions: { width: 5.5, height: 7.9 },
    tags: ["sketch", "graphite", "black & white", "Ni-ki", "Enhypen", "portrait"],
    slug: "Niki",
  },
  "sunghoon": {
    id: 4,
    title: "Eyes Speak",
    medium: "Graphite",
    size: '7.9" x 5.5"',
    year: "2025",
    image: "/IMG_1773.jpeg",
    description: "A realistic 3/4 portrait of Sunghoon from Enhypen",
    longDescription:
      "Eyes Speak is a realistic graphite portrait of Sunghoon, created with attention to detail, shading, and simulated texture. I focused on capturing facial structure, expression, and the play of light and shadow, making adjustments to personalize the portrait. Using layered pencil strokes, blending, and varied pressure, I aimed to convey depth and realism while expressing the subject’s presence and character. This work reflects my interest in realistic portraiture and my fascination with translating references into expressive, hand-rendered artworks.",
    inspiration: "The reference image was from Pinterest, with added personal flair for originality.",
    dimensions: { width: 5.5, height: 7.9, depth: 0 },
    tags: ["Portrait", "Graphite", "Realistic", "Enhypen", "Sunghoon"],
    slug: sunghoon",
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
      "This piece is an exploration of color, texture, and light using oil pastels, marking my first experience with this medium. The composition depicts a serene field with clusters of wildflowers in the foreground and a line of trees in the distance, under a sky alive with soft clouds. Through bold strokes and layered colors, I aimed to capture the natural rhythm, depth, and movement of the landscape, creating a sense of space and atmosphere. This work reflects both my curiosity as an artist experimenting with new media and my continuing interest in landscapes that balance calmness with lively, colorful detail.
    inspiration: "Inspired by an oil pastel artist I discovered online, I was drawn to the material’s vibrant pigments and the way it allows for layering and blending in a tactile, expressive manner.",
    dimensions: { width: 4, height: 6.5, depth: 0 },
    tags: ["Oil pastel", "Landscape", "calm", "scenery", "dreamy"],
    slug: "whispers-field",
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
