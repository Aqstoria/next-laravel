'use client'

import { useState, type ChangeEvent } from 'react'
import type { CommonComponentProps } from '@/types/common-component-props'

interface SearchFilterProps<T> extends CommonComponentProps {
  items: T[]
  filterFn: (item: T, query: string) => boolean
  onFilteredItems: (filteredItems: T[]) => void
  placeholder?: string
  size?: 'sm' | 'lg'
  clearable?: boolean
  inputClassName?: string
}

const SearchFilter = <T,>({
  items,
  filterFn,
  onFilteredItems,
  placeholder = 'Search...',
  clearable = true,
  size,
  className,
  inputClassName,
}: SearchFilterProps<T>) => {
  const [query, setQuery] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value.toLowerCase()
    setQuery(newQuery)
    const filtered = items.filter((item) => filterFn(item, newQuery))
    onFilteredItems(filtered)
  }

  const clearSearch = () => {
    setQuery('')
    onFilteredItems(items)
  }

  const iconSizeClass = size === 'sm' ? 'fs-sm ms-2' : size === 'lg' ? 'fs-lg ms-3' : 'ms-3'
  const inputSizeClass = size === 'sm' ? 'form-control-sm' : size === 'lg' ? 'form-control-lg' : ''

  return (
    <div className={`position-relative${className ? ` ${className}` : ''}`}>
      <i
        className={`ci-search position-absolute top-50 start-0 translate-middle-y ${iconSizeClass ? ` ${iconSizeClass}` : ''}`}
      />
      <input
        type="search"
        className={`form-control form-icon-start${inputSizeClass ? ` ${inputSizeClass}` : ''}${inputClassName ? ` ${inputClassName}` : ''}`}
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
      {clearable && query && (
        <button
          className="btn btn-sm btn-outline-secondary w-auto border-0 p-1 position-absolute top-50 end-0 translate-middle-y me-2"
          onClick={clearSearch}
        >
          <svg className="opacity-75" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.619 5.381a.875.875 0 0 1 0 1.238l-12 12A.875.875 0 0 1 5.38 17.38l12-12a.875.875 0 0 1 1.238 0Z"></path>
            <path d="M5.381 5.381a.875.875 0 0 1 1.238 0l12 12a.875.875 0 1 1-1.238 1.238l-12-12a.875.875 0 0 1 0-1.238Z"></path>
          </svg>
        </button>
      )}
    </div>
  )
}

export default SearchFilter
