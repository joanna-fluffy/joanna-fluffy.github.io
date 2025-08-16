export interface Artwork {
  id: number
  title: string
  medium: string
  size: string
  year: string
  price: string
  image: string
  description: string
  longDescription: string
  technique: string
  inspiration: string
  dimensions: { width: number; height: number; depth: number }
  availability: "Available" | "Sold" | "On Hold"
  exhibitions: string[]
  tags: string[]
  slug: string
}

export const artworksData: Record<string, Artwork> = {
  "water-lilies-at-dawn": {
    id: 1,
    title: "Water Lilies at Dawn",
    medium: "Oil on Canvas",
    size: '24" x 36"',
    year: "2027",
    price: "$2,400",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center",
    description:
      "A serene morning scene capturing the delicate interplay of light on water lilies. This piece explores the ephemeral quality of dawn light as it dances across the water's surface, creating a symphony of soft pinks and gentle blues.",
    longDescription:
      "Painted during the early morning hours at a secluded pond, this work represents a meditation on the fleeting beauty of natural light. The composition draws the viewer into a world of tranquil contemplation, where time seems suspended in the gentle ripples of water. The brushwork is deliberately loose and expressive, allowing the colors to blend and flow like the water itself.",
    technique: "Alla prima technique with palette knife details",
    inspiration: "Inspired by Monet's water lily series and the peaceful moments of dawn at Giverny",
    dimensions: { width: 24, height: 36, depth: 1.5 },
    availability: "Available",
    exhibitions: ["Spring Gallery Show 2027", "Impressionist Visions Exhibition"],
    tags: ["water lilies", "dawn", "impressionism", "nature", "tranquil"],
    slug: "water-lilies-at-dawn",
  },
  "garden-dreams": {
    id: 2,
    title: "Garden Dreams",
    medium: "Acrylic on Canvas",
    size: '18" x 24"',
    year: "2027",
    price: "$1,800",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=450&h=600&fit=crop&crop=center",
    description:
      "An impressionistic view of a blooming garden in soft morning light, where reality blends with dreams.",
    longDescription:
      "This piece captures the magical quality of a garden awakening to morning light. The soft, diffused brushstrokes create an almost dreamlike quality, inviting viewers to lose themselves in the gentle interplay of color and form. Each bloom seems to pulse with life, rendered in delicate pastels that speak to the tender beauty of nature's awakening.",
    technique: "Layered acrylic glazes with dry brush highlights",
    inspiration: "The artist's childhood garden and memories of summer mornings",
    dimensions: { width: 18, height: 24, depth: 1.5 },
    availability: "Available",
    exhibitions: ["Garden Visions 2027"],
    tags: ["garden", "flowers", "morning light", "dreams", "pastels"],
    slug: "garden-dreams",
  },
  "sunset-reflections": {
    id: 5,
    title: "Sunset Reflections",
    medium: "Oil on Canvas",
    size: '22" x 28"',
    year: "2027",
    price: "$2,200",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&h=550&fit=crop&crop=center",
    description: "Golden hour reflections dancing across a tranquil pond surface, capturing the magic of day's end.",
    longDescription:
      "As the day draws to a close, the water becomes a mirror for the sky's final performance. This painting celebrates the transformative power of light, showing how the same pond can become a completely different world as the sun sets. The warm golds and soft purples create a sense of peaceful closure, a moment of perfect harmony between earth and sky.",
    technique: "Wet-on-wet oil painting with glazing techniques",
    inspiration: "Evening walks by the local pond during golden hour",
    dimensions: { width: 22, height: 28, depth: 1.5 },
    availability: "Sold",
    exhibitions: ["Sunset Series 2027", "Light and Water Exhibition"],
    tags: ["sunset", "reflections", "golden hour", "pond", "peaceful"],
    slug: "sunset-reflections",
  },
  "spring-awakening": {
    id: 7,
    title: "Spring Awakening",
    medium: "Oil on Canvas",
    size: '20" x 30"',
    year: "2027",
    price: "$2,000",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop&crop=center",
    description:
      "Cherry blossoms in full bloom, painted with delicate brushstrokes that capture spring's gentle arrival.",
    longDescription:
      "The arrival of spring brings with it a sense of renewal and hope. This painting captures that magical moment when cherry blossoms burst into bloom, transforming the landscape with their delicate beauty. The soft, feathery brushstrokes mirror the lightness of the petals themselves, creating a work that seems to breathe with the gentle rhythms of spring.",
    technique: "Impressionistic brushwork with palette knife accents",
    inspiration: "The cherry blossom festival and the joy of seasonal renewal",
    dimensions: { width: 20, height: 30, depth: 1.5 },
    availability: "Available",
    exhibitions: ["Spring Celebration 2027"],
    tags: ["cherry blossoms", "spring", "renewal", "delicate", "pink"],
    slug: "spring-awakening",
  },
  "morning-mist": {
    id: 3,
    title: "Morning Mist",
    medium: "Oil on Canvas",
    size: '30" x 40"',
    year: "2026",
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
  "autumn-whispers": {
    id: 8,
    title: "Autumn Whispers",
    medium: "Oil on Canvas",
    size: '26" x 32"',
    year: "2026",
    price: "$2,800",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=520&h=450&fit=crop&crop=center",
    description: "Fall foliage reflected in calm waters with golden light.",
    longDescription:
      "As autumn arrives with its palette of golds and russets, the water becomes a perfect mirror for nature's grand finale. This painting captures the bittersweet beauty of the season's transition, where every leaf seems to glow with inner fire. The reflection in the water doubles the magic, creating a world where reality and its mirror image dance together in perfect harmony.",
    technique: "Classical oil painting with modern impressionistic touches",
    inspiration: "The changing seasons and the beauty of reflection",
    dimensions: { width: 26, height: 32, depth: 1.5 },
    availability: "Available",
    exhibitions: ["Autumn Reflections 2026", "Seasonal Changes Exhibition"],
    tags: ["autumn", "reflections", "golden light", "foliage", "seasonal"],
    slug: "autumn-whispers",
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
    exhibitions: ["Dawn Series 2025", "Light Studies Exhibition"],
    tags: ["sunset", "last light", "colorful", "landscape", "atmospheric", "Banff"],
    slug: "fluffy-adventure",
  },
  "peaceful-waters": {
    id: 10,
    title: "Peaceful Waters",
    medium: "Acrylic on Canvas",
    size: '16" x 24"',
    year: "2025",
    price: "$1,400",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center",
    description: "A quiet stream meandering through a lush garden setting.",
    longDescription:
      "Water has always been a source of peace and contemplation for the artist. This gentle stream, winding its way through a lush garden, represents the flow of life itself - sometimes rushing, sometimes still, but always moving forward. The painting invites viewers to pause and listen to the quiet music of flowing water.",
    technique: "Acrylic painting with fluid brushwork",
    inspiration: "A small stream discovered during a garden walk",
    dimensions: { width: 16, height: 24, depth: 1.5 },
    availability: "Available",
    exhibitions: ["Water Studies 2025"],
    tags: ["stream", "peaceful", "garden", "flowing water", "tranquil"],
    slug: "peaceful-waters",
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
