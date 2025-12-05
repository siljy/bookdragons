import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  access: {
    read: () => true,
    create: () => true,
  },
  labels: {
    singular: 'Bestilling',
    plural: 'Bestillinger',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Bestillingens innhold',
      fields: [
        {
          name: 'book',
          type: 'relationship',
          relationTo: 'books',
          label: 'Bok',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
          label: 'Antall',
          required: true,
        },
      ],
    },
    {
      name: 'customer',
      label: 'Kunde',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Kundens navn',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          label: 'Kundens epost',
          required: true,
        },
      ],
    },
  ],
}
