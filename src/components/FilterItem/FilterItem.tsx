'use client'

import styles from "./FilterItem.module.css"
import { FilterOption } from '@/types/filter'

type FilterItemProps = {
  title: string
  value: string
  name: string
  options: FilterOption[]
  onChange?: (evt: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function FilterItem({ title, value, name, options, onChange }: FilterItemProps) {
  return (
    <div className={styles.filterItem}>
      <label htmlFor={name}>{title}</label>
      <select name={name} id={name} value={value} onChange={onChange}>
        <option value="all">Vis alle</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
