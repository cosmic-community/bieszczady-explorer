import { createBucketClient } from '@cosmicjs/sdk'
import {
  Attraction,
  CosmicResponse,
  Stay,
  Trail,
  CosmicSelectValue
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string
})

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function getTrails(): Promise<Trail[]> {
  try {
    const response: CosmicResponse<Trail> = await cosmic.objects
      .find({ type: 'trails' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Trail[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch trails')
  }
}

export async function getTrailBySlug(slug: string): Promise<Trail | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'trails', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.object as Trail
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch trail')
  }
}

export async function getAttractions(): Promise<Attraction[]> {
  try {
    const response: CosmicResponse<Attraction> = await cosmic.objects
      .find({ type: 'attractions' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Attraction[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch attractions')
  }
}

export async function getAttractionBySlug(
  slug: string
): Promise<Attraction | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'attractions', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.object as Attraction
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch attraction')
  }
}

export async function getStays(): Promise<Stay[]> {
  try {
    const response: CosmicResponse<Stay> = await cosmic.objects
      .find({ type: 'stays' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Stay[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch stays')
  }
}

export async function getStayBySlug(slug: string): Promise<Stay | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'stays', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.object as Stay
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch stay')
  }
}

export type { CosmicSelectValue }