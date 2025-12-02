import type { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Bok',
    plural: 'Bøker',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Boktittel',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Beskrivelse',
      admin: {
        description: 'Kort beskrivelse av boka',
      },
      type: 'textarea',
      required: true,
    },
    {
      name: 'cover',
      label: 'Bokomslag',
      type: 'relationship',
      relationTo: 'bookcovers',
      required: true,
    },
    {
      name: 'author',
      label: 'Forfatter',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
    },
    {
      name: 'genre',
      label: 'Sjanger',
      type: 'relationship',
      relationTo: 'genres',
      required: true,
    },
    {
      name: 'theme',
      label: 'Bokens tema',
      admin: {
        description: 'Stikkord om bokas tema',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'ages',
      label: 'Aldersgruppe',
      admin: {
        description: 'Aldersgruppe anbefalt for boka: barn, ungdom eller voksen.',
      },
      type: 'select',
      options: ['Barn', 'Ungdom', 'Voksen'],
      required: true,
    },
    {
      name: 'stock',
      label: 'Lagerbeholdning',
      admin: {
        description: 'Hvor mange av denne boken er på lager?',
      },
      type: 'number',
      required: true,
    },
  ],
}
