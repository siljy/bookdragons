import type { Bookcover } from '@/payload-types'

type GuardTypes = {
  sizes: {
    thumbnail: {
      url: string
      width: number
      height: number
    }
  }
}

//Framgangsmåte hentet fra MinGA https://lms.gokstadakademiet.no/course/view.php?id=349#module-16132
//Under Bildebehandling med Payload og Sharp/Hente frem bilder i Frontend
export function hasThumbnail(photo: unknown): photo is Bookcover & GuardTypes {
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