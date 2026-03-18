export interface CosmicFile {
  url: string
  imgix_url: string
}

export type CosmicSelectValue = {
  key: string
  value: string
} | string

export interface CosmicObject {
  id: string
  slug: string
  title: string
  type?: string
  created_at?: string
  modified_at?: string
  metadata?: Record<string, unknown>
}

export interface Trail extends CosmicObject {
  type?: 'trails'
  metadata?: {
    trail_name?: string
    difficulty?: CosmicSelectValue
    distance_km?: number
    duration?: string
    description?: string
    featured_image?: CosmicFile
  }
}

export interface Attraction extends CosmicObject {
  type?: 'attractions'
  metadata?: {
    attraction_name?: string
    category?: CosmicSelectValue
    location?: string
    short_description?: string
    featured_image?: CosmicFile
  }
}

export interface Stay extends CosmicObject {
  type?: 'stays'
  metadata?: {
    stay_name?: string
    stay_type?: CosmicSelectValue
    price_range?: CosmicSelectValue
    booking_url?: string
    description?: string
    featured_image?: CosmicFile
  }
}

export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit?: number
  skip?: number
}