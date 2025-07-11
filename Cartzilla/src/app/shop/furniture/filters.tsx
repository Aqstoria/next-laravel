'use client'

import { useState, Fragment, useCallback } from 'react'
import { useProductView } from '@/contexts/product-view-context'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Stack from 'react-bootstrap/Stack'
import FormCheck from 'react-bootstrap/FormCheck'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Accordion from 'react-bootstrap/Accordion'
import SelectBox from '@/components/forms/select-box'

type FlatFilterItem = {
  name: string
  quantity: number
  selected: boolean
  color?: string
}

type SizeFilterItem = {
  name: string
  quantity: number
  selected: boolean
}

type SizeFilterGroup = {
  group: string
  options: SizeFilterItem[]
}

type Filters = {
  categories: FlatFilterItem[]
  types: FlatFilterItem[]
  colors: FlatFilterItem[]
  prices: FlatFilterItem[]
  sizes: SizeFilterGroup[]
  materials: FlatFilterItem[]
}

const FiltersFurniture = () => {
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const { isRoomView, setView } = useProductView()
  const [sortby, setSortby] = useState('popular')

  // Define all filter states
  const [filters, setFilters] = useState<Filters>({
    categories: [
      { name: 'Living room', quantity: 657, selected: true },
      { name: 'Bedroom', quantity: 528, selected: true },
      { name: 'Kitchen', quantity: 342, selected: false },
      { name: 'Office', quantity: 283, selected: false },
      { name: 'Lighting', quantity: 395, selected: true },
      { name: 'Decoration', quantity: 204, selected: false },
      { name: 'Accessories', quantity: 190, selected: true },
    ],
    types: [
      { name: 'Armchair', quantity: 324, selected: false },
      { name: 'Sofa', quantity: 275, selected: false },
      { name: 'Ottoman', quantity: 117, selected: false },
      { name: 'Bench', quantity: 86, selected: false },
      { name: 'Bed frame', quantity: 263, selected: false },
      { name: 'Lamp', quantity: 415, selected: false },
      { name: 'Stool', quantity: 104, selected: false },
    ],
    colors: [
      { name: 'Emerald', color: '#32808e', quantity: 97, selected: false },
      { name: 'Dark gray', color: '#6a6f7b', quantity: 346, selected: false },
      { name: 'Light gray', color: '#bdc5da', quantity: 291, selected: false },
      { name: 'Brown', color: '#af8d6a', quantity: 105, selected: false },
      { name: 'Blue', color: '#216aae', quantity: 84, selected: false },
      { name: 'Green', color: '#187c1c', quantity: 69, selected: false },
      { name: 'Beige', color: '#bdaB9e', quantity: 173, selected: false },
    ],
    prices: [
      { name: '$0.00 - 99.99', quantity: 241, selected: false },
      { name: '$100.00 - 199.99', quantity: 398, selected: false },
      { name: '$200.00 - 299.99', quantity: 253, selected: false },
      { name: '$300.00 - 399.99', quantity: 197, selected: false },
      { name: '$400.00 - 499.99', quantity: 152, selected: false },
      { name: '$500.00+', quantity: 138, selected: false },
    ],
    sizes: [
      {
        group: 'Width',
        options: [
          { name: '0 - 19 "', quantity: 27, selected: false },
          { name: '20 - 24 "', quantity: 89, selected: false },
          { name: '25 - 29 "', quantity: 145, selected: false },
          { name: '30 - 34 "', quantity: 106, selected: false },
          { name: '35+ "', quantity: 73, selected: false },
        ],
      },
      {
        group: 'Height',
        options: [
          { name: '0 - 24 "', quantity: 85, selected: false },
          { name: '25 - 29 "', quantity: 67, selected: false },
          { name: '30 - 34 "', quantity: 210, selected: false },
          { name: '35 - 39 "', quantity: 132, selected: false },
          { name: '40+ "', quantity: 19, selected: false },
        ],
      },
    ],
    materials: [
      { name: 'Fabric', quantity: 482, selected: false },
      { name: 'Wood', quantity: 537, selected: false },
      { name: 'Leather', quantity: 256, selected: false },
      { name: 'Metal', quantity: 175, selected: false },
      { name: 'Plastic', quantity: 279, selected: false },
    ],
  })

  const sortbyOptions = [
    { value: 'popular', label: 'Most popular' },
    { value: 'match', label: 'Best match' },
    { value: 'new', label: 'New arrivals' },
    { value: 'price-asc', label: 'Price ascending' },
    { value: 'price-desc', label: 'Price descending' },
  ]

  // Filter toggle function
  const toggleFilter = (
    filterType: keyof Filters,
    groupIndex: number = 0,
    optionIndex: number,
    isNestedFilter: boolean = false
  ) => {
    setFilters((prevFilters) => {
      // Create a deep copy of the filters to ensure immutability
      const updatedFilters = JSON.parse(JSON.stringify(prevFilters))

      if (isNestedFilter && filterType === 'sizes') {
        // Toggle for nested filters (sizes)
        const currentSelected = updatedFilters.sizes[groupIndex].options[optionIndex].selected
        updatedFilters.sizes[groupIndex].options[optionIndex].selected = !currentSelected
      } else {
        // Toggle for flat filters
        const currentSelected = updatedFilters[filterType][optionIndex].selected
        updatedFilters[filterType][optionIndex].selected = !currentSelected
      }

      return updatedFilters
    })
  }

  // Count selected filters for a specific filter type
  const countSelectedFilters = (filterType: keyof Filters): number => {
    const filterGroup = filters[filterType]

    // Handle nested filters (like sizes)
    if (filterType === 'sizes') {
      return (filterGroup as SizeFilterGroup[]).reduce(
        (total, group) => total + group.options.filter((option) => option.selected).length,
        0
      )
    }

    // Handle flat filters
    return (filterGroup as FlatFilterItem[]).filter((item) => item.selected).length
  }

  // Handle Product/Room view toggling
  const handleProductClick = () => {
    if (isRoomView) setView(false)
  }
  const handleRoomClick = () => {
    if (!isRoomView) setView(true)
  }

  // Render filter checkboxes
  const renderFilterCheckboxes = (filterType: keyof Filters, isNestedFilter = false, idSlud?: string) => {
    const filterGroup = filters[filterType]

    // Handle nested filters (like sizes)
    if (isNestedFilter && filterType === 'sizes') {
      return (filterGroup as SizeFilterGroup[]).map(({ group, options }, groupIndex) => (
        <Fragment key={group}>
          <div className={`fs-sm fw-semibold text-body-emphasis ${groupIndex === 0 ? 'pb-2' : 'py-2'}`}>{group}</div>
          {options.map((option, optionIndex) => (
            <FormCheck
              key={`${group}-${option.name}`}
              id={`${filterType}-${group.replace(/\s+/g, '').toLowerCase()}${idSlud ? `-${idSlud}` : ''}-${optionIndex}`}
              className="m-0"
            >
              <FormCheck.Input
                className="fs-base"
                checked={option.selected}
                onChange={() => toggleFilter(filterType, groupIndex, optionIndex, true)}
              />
              <FormCheck.Label className="d-flex align-items-end">
                {option.name}
                <span className="fs-xs text-body-secondary ps-2 ms-auto">{option.quantity}</span>
              </FormCheck.Label>
            </FormCheck>
          ))}
        </Fragment>
      ))
    }

    // Handle flat filters
    return (filterGroup as FlatFilterItem[]).map((item, index) => (
      <FormCheck key={item.name} id={`${filterType}${idSlud ? `-${idSlud}` : ''}-${index}`} className="m-0">
        <FormCheck.Input
          className="fs-base"
          checked={item.selected}
          onChange={() => toggleFilter(filterType, 0, index)}
        />
        <FormCheck.Label className="d-flex align-items-end">
          {item.color && (
            <span
              className="align-self-center rounded-circle border border-2 p-1 me-2"
              style={
                {
                  '--cz-border-color': item.color,
                  backgroundColor: item.color,
                } as React.CSSProperties
              }
            />
          )}
          {item.name}
          <span className="fs-xs text-body-secondary ps-2 ms-auto">{item.quantity}</span>
        </FormCheck.Label>
      </FormCheck>
    ))
  }

  return (
    <Fragment>
      <div className="sticky-top bg-body mb-3 mb-sm-4" style={{ marginTop: '-4.5rem' }}>
        <Row className="align-items-center pt-5">
          <Col xs={5} sm={8} md={9} className="d-flex gap-2 pb-3 mt-4">
            <div className="d-none d-sm-block w-100 me-1">
              <SelectBox
                choices={sortbyOptions}
                value={sortby}
                onChange={(value) => setSortby(value as string)}
                inputClassName="filter-select rounded-pill"
                placeholder="Sort by"
                aria-label="Sorting"
              />
            </div>
            {(['categories', 'types', 'colors'] as const).map((filterType, index) => {
              const selectedCount = countSelectedFilters(filterType)
              const responsiveClasses = ['d-none d-md-block', 'd-none d-lg-block', 'd-none d-xl-block']
              return (
                <Dropdown key={filterType} className={`w-100 ${responsiveClasses[index]} me-1`}>
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    className="filter-select justify-content-between w-100 text-body fw-normal rounded-pill px-3"
                    style={
                      selectedCount > 0
                        ? ({
                            '--cz-btn-border-color': 'var(--cz-heading-color)',
                            '--cz-btn-hover-border-color': 'var(--cz-heading-color)',
                          } as React.CSSProperties)
                        : undefined
                    }
                  >
                    {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                    {selectedCount > 0 && ` (${selectedCount})`}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100 p-3">
                    <Stack gap={2}>{renderFilterCheckboxes(filterType)}</Stack>
                  </Dropdown.Menu>
                </Dropdown>
              )
            })}
            <Nav>
              <Nav.Link className="animate-underline px-2" onClick={() => openOffcanvas('filtersFurniture')}>
                <i className="ci-filter me-1" />
                <span className="animate-target text-nowrap">All filters</span>
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={7} sm={4} md={3}>
            <Nav
              as="ul"
              variant="underline"
              activeKey={isRoomView ? 'room' : 'product'}
              className="flex-nowrap justify-content-end"
            >
              <Nav.Item as="li">
                <Nav.Link eventKey="product" onClick={handleProductClick}>
                  Product
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="room" onClick={handleRoomClick}>
                  Room
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </div>

      {/* All filters offcanvas */}
      <Offcanvas
        show={isOpen('filtersFurniture')}
        onHide={() => closeOffcanvas('filtersFurniture')}
        placement="end"
        className="pb-sm-2 px-sm-2"
        aria-labelledby="filtersSidebar"
      >
        <Offcanvas.Header closeButton className="py-3">
          <Offcanvas.Title as="h5" id="filtersSidebar">
            Filter and sort
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pt-0">
          <SelectBox
            choices={sortbyOptions}
            value={sortby}
            onChange={(value) => setSortby(value as string)}
            inputClassName="form-select-lg form-select-flush text-body-emphasis fw-medium py-3 px-0"
            placeholder="Sort by"
            aria-label="Sorting"
          />
          <Accordion>
            {Object.keys(filters).map((filterType) => {
              const selectedCount = countSelectedFilters(filterType as keyof Filters)
              return (
                <Accordion.Item key={filterType} eventKey={filterType}>
                  <Accordion.Button as="h6" className="fw-medium cursor-pointer m-0" id={`${filterType}Filter`}>
                    <span className="d-flex align-items-end">
                      {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                      {selectedCount > 0 && <span className="text-body fs-sm fw-normal ms-1">({selectedCount})</span>}
                    </span>
                  </Accordion.Button>
                  <Accordion.Body className="d-flex flex-column gap-2 px-1" aria-labelledby={`${filterType}Filter`}>
                    {renderFilterCheckboxes(filterType as keyof Filters, filterType === 'sizes', 'offcanvas')}
                  </Accordion.Body>
                </Accordion.Item>
              )
            })}
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  )
}

export default FiltersFurniture
