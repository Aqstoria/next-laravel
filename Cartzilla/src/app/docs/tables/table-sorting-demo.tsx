'use client'

import { useState, useMemo } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Table from 'react-bootstrap/Table'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'

type Person = {
  id: number
  firstName: string
  lastName: string
  position: string
  phone: string
}

const TableSortingDemo = () => {
  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        cell: (info) => info.getValue(),
        header: '#',
        sortingFn: 'alphanumeric',
      },
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue(),
        header: 'First',
        sortingFn: 'textCaseSensitive',
      },
      {
        accessorKey: 'lastName',
        cell: (info) => info.getValue(),
        header: 'Last',
        sortingFn: 'textCaseSensitive',
      },
      {
        accessorKey: 'position',
        cell: (info) => info.getValue(),
        header: 'Position',
        sortingFn: 'textCaseSensitive',
      },
      {
        accessorKey: 'phone',
        cell: (info) => info.getValue(),
        header: 'Phone',
        enableSorting: false,
      },
    ],
    []
  )

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
  const [sorting, setSorting] = useState<SortingState>([])
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    // This is not required for this demo,
    // however we declared it in <TableSearchDemo /> for the fuzzy filter
    // example and now we need to declare it here as well.
    filterFns: {
      fuzzy: () => true,
    },
  })

  const code = `'use client'

import { useState, useMemo } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Table from 'react-bootstrap/Table'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'

type Person = {
  id: number
  firstName: string
  lastName: string
  position: string
  phone: string
}

export default function TableSortingDemo() {
  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        cell: (info) => info.getValue(),
        header: '#',
        sortingFn: 'alphanumeric',
      },
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue(),
        header: 'First',
        sortingFn: 'textCaseSensitive',
      },
      {
        accessorKey: 'lastName',
        cell: (info) => info.getValue(),
        header: 'Last',
        sortingFn: 'textCaseSensitive',
      },
      {
        accessorKey: 'position',
        cell: (info) => info.getValue(),
        header: 'Position',
        sortingFn: 'textCaseSensitive',
      },
      {
        accessorKey: 'phone',
        cell: (info) => info.getValue(),
        header: 'Phone',
        enableSorting: false,
      },
    ],
    []
  )

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
  const [sorting, setSorting] = useState<SortingState>([])
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    filterFns: {
      fuzzy: () => true,
    },
  })

  return (
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
  )
}`

  return (
    <section id="table-sorting" className="docs-section pb-sm-2 mb-5">
      <h4>Sorting</h4>
      <DocsComponentDemo code={code}>
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

export default TableSortingDemo
