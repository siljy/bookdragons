'use client'

import styles from './FilterSection.module.css'
import { useRouter, useSearchParams } from 'next/navigation'
import FilterItem from '../FilterItem/FilterItem'
import { FilterOption } from '@/types/filter'

type FilterSectionProps = {
  authors: FilterOption[]
  genres: FilterOption[]
}

export default function FilterSection({ authors, genres }: FilterSectionProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handleFilterChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    const name = evt.target.name
    const value = evt.target.value
    const params = new URLSearchParams(searchParams.toString())

    if (value === 'all') {
      params.delete(name)
    } else {
      params.set(name, value)
    }

    router.push(`?${params.toString()}`)
  }

  return (
    <section className={styles.filterSection}>
      <FilterItem
        title="Filtrer etter forfatter"
        name="author"
        options={authors}
        value={searchParams.get('author') || 'all'}
        onChange={handleFilterChange}
      ></FilterItem>
      <FilterItem
        title="Filtrer etter sjanger"
        name="genre"
        options={genres}
        value={searchParams.get('genre') || 'all'}
        onChange={handleFilterChange}
      ></FilterItem>
    </section>
  )
}
