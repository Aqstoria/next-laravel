'use client'

import { useState, useMemo } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormControl from 'react-bootstrap/FormControl'
import Table from 'react-bootstrap/Table'
import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  SortingFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  sortingFns,
  useReactTable,
} from '@tanstack/react-table'
import { RankingInfo, rankItem, compareItems } from '@tanstack/match-sorter-utils'

type Person = {
  id: number
  firstName: string
  lastName: string
  position: string
  phone: string
}

declare module '@tanstack/react-table' {
  // Add fuzzy filter to the filterFns
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

const TableSearchDemo = () => {
  const persons: Person[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', position: 'CEO, Founder', phone: '+3 555 68 70' },
    { id: 2, firstName: 'Anna', lastName: 'Cabana', position: 'Designer', phone: '+3 434 65 93' },
    { id: 3, firstName: 'Kale', lastName: 'Thornton', position: 'Developer', phone: '+3 285 42 88' },
    { id: 4, firstName: 'Jane', lastName: 'Birkins', position: 'Support', phone: '+3 774 28 50' },
    { id: 5, firstName: 'Robert', lastName: 'Smith', position: 'Marketing', phone: '+3 623 87 19' },
    { id: 6, firstName: 'Emily', lastName: 'Johnson', position: 'Sales', phone: '+3 911 50 62' },
    { id: 7, firstName: 'Matthew', lastName: 'Brown', position: 'Analyst', phone: '+3 329 49 75' },
    { id: 8, firstName: 'Olivia', lastName: 'Davis', position: 'Finance', phone: '+3 146 91 27' },
    { id: 9, firstName: 'William', lastName: 'Garcia', position: 'Project Manager', phone: '+3 509 76 39' },
    { id: 10, firstName: 'Sophia', lastName: 'Adams', position: 'HR', phone: '+3 687 25 81' },
  ]

  const [data, setData] = useState<Person[]>(persons)
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)

    addMeta({ itemRank })

    return itemRank.passed
  }

  const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
    let dir = 0
    if (rowA.columnFiltersMeta[columnId]) {
      dir = compareItems(rowA.columnFiltersMeta[columnId]?.itemRank!, rowB.columnFiltersMeta[columnId]?.itemRank!)
    }

    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
  }

  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        cell: (info) => info.getValue(),
        header: '#',
        sortingFn: fuzzySort,
        filterFn: 'fuzzy',
      },
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue(),
        header: 'First',
        sortingFn: fuzzySort,
        filterFn: 'fuzzy',
      },
      {
        accessorKey: 'lastName',
        cell: (info) => info.getValue(),
        header: 'Last',
        sortingFn: fuzzySort,
        filterFn: 'fuzzy',
      },
      {
        accessorKey: 'position',
        cell: (info) => info.getValue(),
        header: 'Position',
        sortingFn: fuzzySort,
        filterFn: 'fuzzy',
      },
      {
        accessorKey: 'phone',
        cell: (info) => info.getValue(),
        header: 'Phone',
        sortingFn: fuzzySort,
        filterFn: 'fuzzy',
        enableSorting: false,
      },
    ],
    []
  )

  const table = useReactTable({
    columns,
    data,
    state: {
      columnFilters,
      globalFilter,
    },
    filterFns: {
      fuzzy: fuzzyFilter, // define as a filter function that can be used in column definitions
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: 'fuzzy', // apply fuzzy filter to the global filter (most common use case for fuzzy filter)
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const code = `'use client'

import { useState, useMemo } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormControl from 'react-bootstrap/FormControl'
import Table from 'react-bootstrap/Table'
import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  SortingFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  sortingFns,
  useReactTable,
} from '@tanstack/react-table'
import { RankingInfo, rankItem, compareItems } from '@tanstack/match-sorter-utils'

type Person = {
  id: number
  firstName: string
  lastName: string
  position: string
  phone: string
}

declare module '@tanstack/react-table' {
  // Add fuzzy filter to the filterFns
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

export default function TableSearchDemo() {
  const persons: Person[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', position: 'CEO, Founder', phone: '+3 555 68 70' },
    { id: 2, firstName: 'Anna', lastName: 'Cabana', position: 'Designer', phone: '+3 434 65 93' },
    { id: 3, firstName: 'Kale', lastName: 'Thornton', position: 'Developer', phone: '+3 285 42 88' },
    { id: 4, firstName: 'Jane', lastName: 'Birkins', position: 'Support', phone: '+3 774 28 50' },
    { id: 5, firstName: 'Robert', lastName: 'Smith', position: 'Marketing', phone: '+3 623 87 19' },
    { id: 6, firstName: 'Emily', lastName: 'Johnson', position: 'Sales', phone: '+3 911 50 62' },
    { id: 7, firstName: 'Matthew', lastName: 'Brown', position: 'Analyst', phone: '+3 329 49 75' },
    { id: 8, firstName: 'Olivia', lastName: 'Davis', position: 'Finance', phone: '+3 146 91 27' },
    { id: 9, firstName: 'William', lastName: 'Garcia', position: 'Project Manager', phone: '+3 509 76 39' },
    { id: 10, firstName: 'Sophia', lastName: 'Adams', position: 'HR', phone: '+3 687 25 81' },
  ]

  const [data, setData] = useState<Person[]>(persons)
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)

    addMeta({ itemRank })

    return itemRank.passed
  }

  const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
    let dir = 0
    if (rowA.columnFiltersMeta[columnId]) {
      dir = compareItems(rowA.columnFiltersMeta[columnId]?.itemRank!, rowB.columnFiltersMeta[columnId]?.itemRank!)
    }

    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
  }

  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        cell: (info) => info.getValue(),
        header: '#',
        sortingFn: fuzzySort,
        filterFn: 'fuzzy',
      },
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue(),
        header: 'First',
        sortingFn: fuzzySort,
        filterFn: 'fuzzy',
      },
      {
        accessorKey: 'lastName',
        cell: (info) => info.getValue(),
        header: 'Last',
        sortingFn: fuzzySort,
        filterFn: 'fuzzy',
      },
      {
        accessorKey: 'position',
        cell: (info) => info.getValue(),
        header: 'Position',
        sortingFn: fuzzySort,
        filterFn: 'fuzzy',
      },
      {
        accessorKey: 'phone',
        cell: (info) => info.getValue(),
        header: 'Phone',
        sortingFn: fuzzySort,
        filterFn: 'fuzzy',
        enableSorting: false,
      },
    ],
    []
  )

  const table = useReactTable({
    columns,
    data,
    state: {
      columnFilters,
      globalFilter,
    },
    filterFns: {
      fuzzy: fuzzyFilter, // define as a filter function that can be used in column definitions
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: 'fuzzy', // apply fuzzy filter to the global filter (most common use case for fuzzy filter)
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <>
      <div className="position-relative mb-2" style={{ maxWidth: 280 }}>
        <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
        <FormControl
          type="text"
          className="form-icon-start"
          value={globalFilter ?? ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setGlobalFilter(e.target.value)
          }}
          placeholder="Search table"
        />
        {globalFilter && (
          <button
            className="btn btn-sm btn-outline-secondary w-auto border-0 p-1 position-absolute top-50 end-0 translate-middle-y me-2"
            onClick={() => setGlobalFilter('')}
            aria-label="Clear search"
          >
            <svg className="opacity-75" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.619 5.381a.875.875 0 0 1 0 1.238l-12 12A.875.875 0 0 1 5.38 17.38l12-12a.875.875 0 0 1 1.238 0Z"></path>
              <path d="M5.381 5.381a.875.875 0 0 1 1.238 0l12 12a.875.875 0 1 1-1.238 1.238l-12-12a.875.875 0 0 1 0-1.238Z"></path>
            </svg>
          </button>
        )}
      </div>
      <div className="table-responsive overflow-auto" style={{ height: 300 }}>
        <Table>
          <thead className="position-sticky top-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        {header.column.getCanSort() ? (
                          <div
                            className={header.column.getCanSort() ? 'cursor-pointer text-nowrap select-none' : ''}
                            onClick={header.column.getToggleSortingHandler()}
                            title={
                              header.column.getCanSort()
                                ? header.column.getNextSortingOrder() === 'asc'
                                  ? 'Sort ascending'
                                  : header.column.getNextSortingOrder() === 'desc'
                                    ? 'Sort descending'
                                    : 'Clear sorting'
                                : undefined
                            }
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            <span className="fs-sm opacity-75 ms-1">
                              {' '}
                              {{ asc: '↑', desc: '↓' }[header.column.getIsSorted() as string] ?? (
                                <i className="ci-sort align-middle" />
                              )}
                            </span>
                          </div>
                        ) : (
                          flexRender(header.column.columnDef.header, header.getContext())
                        )}
                      </>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}`

  return (
    <section id="table-search" className="docs-section pb-sm-2 mb-5">
      <h4>Fuzzy search</h4>
      <DocsComponentDemo code={code}>
        <div className="position-relative mb-2" style={{ maxWidth: 280 }}>
          <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
          <FormControl
            type="text"
            className="form-icon-start"
            value={globalFilter ?? ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setGlobalFilter(e.target.value)
            }}
            placeholder="Search table"
          />
          {globalFilter && (
            <button
              className="btn btn-sm btn-outline-secondary w-auto border-0 p-1 position-absolute top-50 end-0 translate-middle-y me-2"
              onClick={() => setGlobalFilter('')}
              aria-label="Clear search"
            >
              <svg className="opacity-75" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.619 5.381a.875.875 0 0 1 0 1.238l-12 12A.875.875 0 0 1 5.38 17.38l12-12a.875.875 0 0 1 1.238 0Z"></path>
                <path d="M5.381 5.381a.875.875 0 0 1 1.238 0l12 12a.875.875 0 1 1-1.238 1.238l-12-12a.875.875 0 0 1 0-1.238Z"></path>
              </svg>
            </button>
          )}
        </div>
        <div className="table-responsive overflow-auto" style={{ height: 300 }}>
          <Table>
            <thead className="position-sticky top-0">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <>
                          {header.column.getCanSort() ? (
                            <div
                              className={header.column.getCanSort() ? 'cursor-pointer text-nowrap select-none' : ''}
                              onClick={header.column.getToggleSortingHandler()}
                              title={
                                header.column.getCanSort()
                                  ? header.column.getNextSortingOrder() === 'asc'
                                    ? 'Sort ascending'
                                    : header.column.getNextSortingOrder() === 'desc'
                                      ? 'Sort descending'
                                      : 'Clear sorting'
                                  : undefined
                              }
                            >
                              {flexRender(header.column.columnDef.header, header.getContext())}
                              <span className="fs-sm opacity-75 ms-1">
                                {' '}
                                {{ asc: '↑', desc: '↓' }[header.column.getIsSorted() as string] ?? (
                                  <i className="ci-sort align-middle" />
                                )}
                              </span>
                            </div>
                          ) : (
                            flexRender(header.column.columnDef.header, header.getContext())
                          )}
                        </>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default TableSearchDemo
