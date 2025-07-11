'use client'

import { useState } from 'react'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import Link from 'next/link'
import Image from 'next/image'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Stack from 'react-bootstrap/Stack'
import RangeSlider from '@/components/forms/range-slider'
import SearchFilter from '@/components/search-filter'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

// Categories (accordion) array
const categories = [
  {
    image: '/img/shop/grocery/categories/01.png',
    title: 'Bakery & bread',
    links: [
      ['Shop all', '#'],
      ['Bread', '#'],
      ['Pastries', '#'],
      ['Bakery cookies', '#'],
      ['Cupcakes', '#'],
      ['Buns', '#'],
      ['Rolls', '#'],
    ],
  },
  {
    image: '/img/shop/grocery/categories/02.png',
    title: 'Vegetables',
    links: [
      ['Shop all', '#'],
      ['Leafy greens', '#'],
      ['Root vegetables', '#'],
      ['Allium vegetables', '#'],
      ['Peppers and tomatoes', '#'],
      ['Cruciferous', '#'],
      ['Seasonal squashes', '#'],
    ],
  },
  {
    image: '/img/shop/grocery/categories/03.png',
    title: 'Fresh fruits',
    links: [
      ['Shop all', '#'],
      ['Citrus fruits', '#'],
      ['Berries', '#'],
      ['Tropical fruits', '#'],
      ['Stone fruits', '#'],
      ['Exotic fruits', '#'],
      ['Melons', '#'],
    ],
  },
  {
    image: '/img/shop/grocery/categories/04.png',
    title: 'Meet Italian dinner',
    links: [
      ['Shop all', '#'],
      ['Pasta & sauces', '#'],
      ['Italian cheeses', '#'],
      ['Italian meats', '#'],
      ['Antipasti & appetizers', '#'],
      ['Fresh produce', '#'],
      ['Desserts & beverages', '#'],
    ],
  },
  {
    image: '/img/shop/grocery/categories/05.png',
    title: 'Beverages',
    links: [
      ['Shop all', '#'],
      ['Soft drinks', '#'],
      ['Juices', '#'],
      ['Sports & energy drinks', '#'],
      ['Tea and coffee', '#'],
      ['Water', '#'],
      ['Alcoholic beverages', '#'],
    ],
  },
  {
    image: '/img/shop/grocery/categories/06.png',
    title: 'Meat products',
    links: [
      ['Shop all', '#'],
      ['Fresh meat', '#'],
      ['Processed meat', '#'],
      ['Seafood', '#'],
      ['Poultry products', '#'],
      ['Exotic meats', '#'],
      ['Prepared meat', '#'],
    ],
  },
  {
    image: '/img/shop/grocery/categories/07.png',
    title: 'Sauces and ketchup',
    links: [
      ['Shop all', '#'],
      ['Tomato-based sauces', '#'],
      ['International sauces', '#'],
      ['Condiments', '#'],
      ['Salad dressings', '#'],
      ['Hot sauces', '#'],
      ['Specialty sauces', '#'],
    ],
  },
]

// Brands (checkboxes) array
const brands = [
  { name: 'Coca-Cola', selected: false },
  { name: 'Pepsi', selected: false },
  { name: 'Nestlé', selected: false },
  { name: "Hershey's", selected: false },
  { name: 'General Mills', selected: false },
  { name: 'Barilla', selected: false },
  { name: 'Kraft Heinz', selected: false },
  { name: 'Unilever', selected: false },
  { name: 'Danone', selected: false },
  { name: 'Campbell', selected: false },
  { name: 'Basso', selected: false },
  { name: "Kellogg's", selected: false },
  { name: 'Mondelez', selected: false },
  { name: 'Dr Pepper Snapple', selected: false },
  { name: 'Heineken', selected: false },
  { name: 'Mars', selected: false },
  { name: 'Ferrero', selected: false },
  { name: 'Red Bull', selected: false },
  { name: 'Suntory', selected: false },
  { name: 'Diageo', selected: false },
]

const FilterSidebarGrocery = () => {
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const [values, setValues] = useState([1, 30])
  const [filteredBrands, setFilteredBrands] = useState(brands)

  const handleInputChange = (index: number, value: string) => {
    const numericValue = Math.max(0, Math.min(200, Number(value)))
    const updatedValues = [...values]
    updatedValues[index] = numericValue
    setValues(updatedValues)
  }

  const filterBrands = (brand: (typeof brands)[number], query: string): boolean => {
    return brand.name.toLowerCase().includes(query)
  }

  return (
    <>
      <Offcanvas
        show={isOpen('filtersGrocery')}
        onHide={() => closeOffcanvas('filtersGrocery')}
        responsive="lg"
        placement="start"
        className="pe-lg-4"
        aria-labelledby="filtersSidebar"
      >
        <Offcanvas.Header closeButton className="py-3">
          <Offcanvas.Title as="h5" id="filtersSidebar">
            Filter products
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="flex-column pt-2 py-lg-0">
          {/* Category */}
          <Accordion className="pb-2">
            {categories.map(({ image, title, links }, index) => (
              <Accordion.Item key={index} eventKey={`category-${index}`} className="border-0 mb-3">
                <Accordion.Button as="h4" className="h6 cursor-pointer p-0 m-0" id={`categoryFilter${index}`}>
                  <span
                    className="d-flex align-items-center justify-content-center bg-body-secondary rounded-circle me-3"
                    style={{ width: 56, height: 56 }}
                  >
                    <span className="d-flex" style={{ width: 40 }}></span>
                    <Image src={image} width={80} height={80} alt="Image" />
                  </span>
                  <span className="fs-sm">{title}</span>
                </Accordion.Button>
                <Accordion.Body className="ps-4 pb-0" aria-labelledby={`categoryFilter${index}`}>
                  <Nav as="ul" className="flex-column gap-2 border-start px-4 pb-1 ms-1 mb-0">
                    {links.map((link, index) => (
                      <Nav.Item key={index} as="li" className="pb-1 ps-3 ms-1">
                        <Nav.Link as={Link} href={link[1]} className="hover-effect-underline fw-normal p-0">
                          {link[0]}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          {/* Other filters */}
          <Accordion className="border-top mb-4">
            {/* Price range */}
            <Accordion.Item eventKey="price">
              <Accordion.Header as="h4" id="priceFilter">
                Price
              </Accordion.Header>
              <Accordion.Body aria-labelledby="priceFilter">
                <RangeSlider
                  min={0}
                  max={100}
                  step={1}
                  value={values}
                  onValueChange={setValues}
                  minStepsBetweenThumbs={1}
                  tooltipPrefix="$"
                  className="transform-none pt-4 mt-1"
                />
                <Stack direction="horizontal" gap={2}>
                  <div className="position-relative w-50">
                    <i className="ci-dollar-sign position-absolute top-50 start-0 translate-middle-y ms-3" />
                    <FormControl
                      type="number"
                      min={0}
                      max={values[1] - 1}
                      value={values[0]}
                      onChange={(e) => handleInputChange(0, e.target.value)}
                      className="form-icon-start"
                    />
                  </div>
                  <i className="ci-minus text-body-emphasis mx-2" />
                  <div className="position-relative w-50">
                    <i className="ci-dollar-sign position-absolute top-50 start-0 translate-middle-y ms-3" />
                    <FormControl
                      type="number"
                      min={values[0] + 1}
                      max={100}
                      value={values[1]}
                      onChange={(e) => handleInputChange(1, e.target.value)}
                      className="form-icon-start"
                    />
                  </div>
                </Stack>
              </Accordion.Body>
            </Accordion.Item>

            {/* Brand */}
            <Accordion.Item eventKey="brand">
              <Accordion.Header as="h4" id="brandFilter">
                Brand
              </Accordion.Header>
              <Accordion.Body aria-labelledby="brandFilter">
                <SearchFilter
                  items={brands}
                  filterFn={filterBrands}
                  onFilteredItems={setFilteredBrands}
                  placeholder="Search"
                  className="mb-3"
                />
                <SimpleBar data-simplebar-auto-hide="false" style={{ height: 210 }}>
                  <Stack gap={2}>
                    {filteredBrands.length > 0 ? (
                      <>
                        {filteredBrands.map(({ name, selected }, index) => (
                          <FormCheck key={index} id={`brand-${index}`} label={name} defaultChecked={selected} />
                        ))}
                      </>
                    ) : (
                      <p className="fs-sm text-body-secondary mb-0">Nothing found</p>
                    )}
                  </Stack>
                </SimpleBar>
              </Accordion.Body>
            </Accordion.Item>

            {/* Special needs */}
            <Accordion.Item eventKey="special">
              <Accordion.Header as="h4" id="specialFilter">
                Special diet needs
              </Accordion.Header>
              <Accordion.Body aria-labelledby="specialFilter">
                <Stack gap={2}>
                  {[
                    { label: 'Gluten-free', selected: false },
                    { label: 'Plant based', selected: false },
                    { label: 'Vegan', selected: false },
                    { label: 'Keto diet', selected: false },
                  ].map(({ label, selected }, index) => (
                    <FormCheck key={index} id={`special-${index}`} label={label} defaultChecked={selected} />
                  ))}
                </Stack>
              </Accordion.Body>
            </Accordion.Item>

            {/* Status */}
            <Accordion.Item eventKey="status">
              <Accordion.Header as="h4" id="statusFilter">
                Status
              </Accordion.Header>
              <Accordion.Body aria-labelledby="statusFilter">
                <Stack gap={2}>
                  {[
                    { label: 'In stock', selected: false },
                    { label: '% Sale', selected: false },
                    { label: 'Free delivery', selected: false },
                  ].map(({ label, selected }, index) => (
                    <FormCheck key={index} id={`status-${index}`} label={label} defaultChecked={selected} />
                  ))}
                </Stack>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Banner */}
          <div className="rounded-4 overflow-hidden" style={{ backgroundColor: '#a6cddc' }} data-bs-theme="light">
            <div className="pt-3 px-3 mt-3 mx-3">
              <h4 className="mb-2 mb-xl-3">Make breakfast healthy and easy</h4>
              <Nav>
                <Nav.Link as={Link} href="#" className="animate-underline stretched-link px-0" active={false}>
                  <span className="animate-target">Shop now</span>
                  <i className="ci-chevron-right fs-base mt-1 ms-1" />
                </Nav.Link>
              </Nav>
            </div>
            <div className="mt-n2">
              <Image src="/img/shop/grocery/banner.jpg" width={564} height={480} alt="Banner" />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Sidebar offcanvas toggle that is visible on screens < 992px wide (lg breakpoint) */}
      <Button
        variant="dark"
        size="lg"
        className="fixed-bottom z-sticky w-100 border-0 border-top border-light border-opacity-10 rounded-0 pb-4 d-lg-none"
        data-bs-theme="light"
        onClick={() => openOffcanvas('filtersGrocery')}
      >
        <i className="ci-filter fs-base me-2" />
        Filters
      </Button>
    </>
  )
}

export default FilterSidebarGrocery
