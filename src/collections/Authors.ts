import type { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Forfatter',
    plural: 'Forfattere',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Navn',
      type: 'text',
      required: true,
    },
    {
      name: 'presentation',
      label: 'Presentasjon',
      admin: {
        description: 'Kort tekst om forfatteren',
      },
      type: 'textarea',
      required: true,
    },
  ],
}
