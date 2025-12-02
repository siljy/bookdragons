import type { CollectionConfig } from 'payload'

export const BookCovers: CollectionConfig = {
  slug: 'bookcovers',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Bokomslag',
    plural: 'Bokomslag',
  },
  upload: {
    staticDir: 'book-covers',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 200,
        height: 300,
        position: 'centre',
      },
      {
        name: 'mobile',
        width: 400,
        height: 600,
        position: 'centre',
      },
      {
        name: 'desktop',
        width: 600,
        height: 900,
        position: 'centre',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
