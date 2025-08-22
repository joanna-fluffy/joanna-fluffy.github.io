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
  "morning-mist": {
    id: 100,
    title: "Morning Mist",
    medium: "Oil on Canvas",
    size: '30" x 40"',
    year: "2028",
    price: "$3,200",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center",
    description:
      "Ethereal mist rising from a quiet lake at daybreak, creating an atmosphere of mystery and tranquility.",
    longDescription:
      "In the early hours of morning, when the world is still wrapped in silence, mist rises from the water like spirits dancing. This large-scale work invites viewers into a world of quiet contemplation, where the boundaries between water, air, and light become beautifully blurred. The painting captures that magical moment when day begins to emerge from night.",
    technique: "Sfumato technique with soft blending and atmospheric perspective",
    inspiration: "Early morning fishing trips and the mystery of dawn",
    dimensions: { width: 30, height: 40, depth: 2 },
    availability: "Available",
    exhibitions: ["Atmospheric Paintings 2026", "Morning Light Series"],
    tags: ["mist", "morning", "lake", "ethereal", "atmospheric"],
    slug: "morning-mist",
  },
  "ethereal-pond": {
    id: 4,
    title: "Ethereal Pond",
    medium: "Watercolor",
    size: '16" x 20"',
    year: "2026",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=500&fit=crop&crop=center",
    description: "Watercolor study of lily pads floating on still water, demonstrating the medium's natural fluidity.",
    longDescription:
      "This intimate watercolor study explores the natural affinity between the medium and its subject. The transparent washes of color seem to flow like water itself, creating lily pads that appear to float not just on the painted water, but on the paper itself. The piece demonstrates the artist's mastery of watercolor's unique properties.",
    technique: "Wet-on-wet watercolor with controlled bleeding",
    inspiration: "Studies from life at the botanical garden pond",
    dimensions: { width: 16, height: 20, depth: 0 },
    availability: "Available",
    exhibitions: ["Watercolor Masters 2026"],
    tags: ["watercolor", "lily pads", "study", "fluid", "transparent"],
    slug: "ethereal-pond",
  },
  "blooming-serenity": {
    id: 6,
    title: "Blooming Serenity",
    medium: "Acrylic on Canvas",
    size: '20" x 24"',
    year: "2026",
    price: "$1,600",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=480&h=400&fit=crop&crop=center",
    description: "A peaceful garden corner with blooming flowers in soft pastels.",
    longDescription:
      "This tranquil composition invites viewers into a secret garden where time moves slowly and peace reigns supreme. The soft pastel palette creates a sense of gentle warmth, while the loose, impressionistic brushwork suggests the gentle movement of flowers in a light breeze. It's a painting that speaks to the soul's need for quiet moments of beauty.",
    technique: "Acrylic impasto with soft glazing layers",
    inspiration: "A hidden corner of the artist's own garden during peak bloom",
    dimensions: { width: 20, height: 24, depth: 1.5 },
    availability: "Available",
    exhibitions: ["Garden Serenity 2026", "Peaceful Moments Exhibition"],
    tags: ["garden", "serenity", "pastels", "flowers", "peaceful"],
    slug: "blooming-serenity",
  },
  "fluffy-adventure": {
    id: 9,
    title: "Fluffy's First Adventure",
    medium: "Acrylic on Canvas",
    size: '12" x 12"',
    year: "2025",
    image: "/IMG_1757.jpg",
    description: "A dreamy sunset unfolding over a majestic mountain, mirrored by the still waters of a tranquil lake.",
    longDescription:
      "Fluffy’s First Adventure captures the calm beauty of Johnson Lake in Banff, where the mountains rise strong and the water rests in stillness. The sunset paints the scene in warm colors, reflecting both the strength of nature and the peace of the lake. This piece marks my dog Fluffy’s first road trip, making the moment even more meaningful and full of memory.",
    technique: "Atmospheric acrylic painting with subtle color transitions",
    inspiration: "Late night sunsets with a stunning view.",
    dimensions: { width: 12, height: 12, depth: 1.5 },
    tags: ["sunset", "last light", "colorful", "landscape", "atmospheric", "Banff"],
    slug: "fluffy-adventure",
  },
   "Niki": {
    id: 10,
    title: "The Brightest Star",
    medium: "Graphite on paper",
    size: '7.9" x 5.5"',
    year: "2025",
    image: "/IMG_8168.jpg",
    description: "A realistic portrait of Ni-ki from Enhypen.",
    longDescription:
      "The Brightest Star captures the luminous presence of Ni-ki as he stands against a radiant backdrop, the light framing him like a celestial glow. Rather than emphasizing his face, the sketch softens his features to create an atmospheric aura, letting the brilliance of the scene take center stage. The attention to the delicate folds and textures of his clothing grounds the piece in detail, while the glowing light transforms him into the embodiment of a star. This work celebrates both the ethereal beauty of the moment and the quiet strength of Ni-ki’s presence, turning a fleeting scene into something timeless.",
    technique: "Atmospheric graphite sketch with luminous shading",
    inspiration: "My muse Ni-ki, and all of Enhypen.",
    dimensions: { width: 5.5, height: 7.9 },
    tags: ["sketch", "graphite", "black & white", "Ni-ki", "Enhypen", "portrait"],
    slug: "Niki",
  },
  "dreaming-in-blue": {
    id: 11,
    title: "Dreaming in Blue",
    medium: "Watercolor",
    size: '14" x 18"',
    year: "2025",
    price: "$900",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=450&h=360&fit=crop&crop=center",
    description: "Abstract interpretation of water and sky in various shades of blue.",
    longDescription:
      "Sometimes the boundary between water and sky becomes so blurred that they seem to merge into one endless blue dream. This abstract watercolor explores that liminal space where earth meets heaven, where the tangible world dissolves into pure color and emotion. It's a meditation on the infinite possibilities contained within a single hue.",
    technique: "Abstract watercolor with wet-on-wet techniques",
    inspiration: "The endless variations of blue in nature",
    dimensions: { width: 14, height: 18, depth: 0 },
    availability: "Available",
    exhibitions: ["Blue Studies 2025", "Abstract Impressions"],
    tags: ["abstract", "blue", "watercolor", "sky", "dreamy"],
    slug: "dreaming-in-blue",
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
