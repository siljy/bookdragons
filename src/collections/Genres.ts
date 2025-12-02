import type { CollectionConfig } from 'payload'

export const Genres: CollectionConfig = {
  slug: 'genres',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Sjanger',
    plural: 'Sjangre',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Sjanger',
      type: 'text',
      required: true,
    },
    {
      name: 'presentation',
      label: 'Presentasjon',
      admin: {
        description: 'Kort tekst om sjangeren',
      },
      type: 'textarea',
      required: true,
    },
  ],
}
