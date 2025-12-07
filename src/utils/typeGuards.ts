import type { Bookcover, Author, Genre } from '@/payload-types'

type CoverGuardTypes = {
  sizes: {
    thumbnail: {
      url: string
      width: number
      height: number
    }
    mobile: {
      url: string
      width: number
      height: number
    }
  }
}

//Framgangsmåte hentet fra MinGA https://lms.gokstadakademiet.no/course/view.php?id=349#module-16132
//Under Bildebehandling med Payload og Sharp/Hente frem bilder i Frontend
export function hasThumbnail(photo: unknown): photo is Bookcover & CoverGuardTypes {
  if (!photo || typeof photo !== 'object' || !('sizes' in photo)) {
    return false
  }

  const sizes = (photo as any).sizes
  const thumbnail = sizes?.thumbnail

  return (
    thumbnail &&
    typeof thumbnail.url === 'string' &&
    typeof thumbnail.width === 'number' &&
    typeof thumbnail.height === 'number'
  )
}

export function hasMobileSize(photo: unknown): photo is Bookcover & CoverGuardTypes {
  if (!photo || typeof photo !== 'object' || !('sizes' in photo)) {
    return false
  }
  const sizes = (photo as any).sizes
  const mobile = sizes?.mobile

  return (
    mobile &&
    typeof mobile.url === 'string' &&
    typeof mobile.width === 'number' &&
    typeof mobile.height === 'number'
  )
}

export function hasAuthor(author: unknown): author is Author {
  if (!author || typeof author !== 'object') {
    return false
  }

  return (
    'name' in author &&
    'presentation' in author &&
    typeof author.name === 'string' &&
    typeof author.presentation === 'string'
  )
}

export function hasGenre(genre: unknown): genre is Genre {
  if (!genre || typeof genre !== 'object') {
    return false
  }

  return (
    'name' in genre &&
    'presentation' in genre &&
    typeof genre.name === 'string' &&
    typeof genre.presentation === 'string'
  )
}
