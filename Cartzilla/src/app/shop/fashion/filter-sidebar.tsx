'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import ToggleButton from 'react-bootstrap/ToggleButton'
import RangeSlider from '@/components/forms/range-slider'
import SearchFilter from '@/components/search-filter'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

// Brands (checkboxes) array
const brands = [
  { name: 'Adidas', quantity: 425, selected: true },
  { name: 'Ann Taylor', quantity: 15, selected: false },
  { name: 'Armani', quantity: 18, selected: false },
  { name: 'Banana Republic', quantity: 103, selected: false },
  { name: 'Bilabong', quantity: 27, selected: true },
  { name: 'Birkenstock', quantity: 10, selected: false },
  { name: 'Calvin Klein', quantity: 365, selected: false },
  { name: 'Columbia', quantity: 508, selected: false },
  { name: 'Converse', quantity: 176, selected: false },
  { name: 'Dockers', quantity: 54, selected: false },
  { name: 'Fruit of the Loom', quantity: 739, selected: false },
  { name: 'Hanes', quantity: 92, selected: false },
  { name: 'Jimmy Choo', quantity: 17, selected: false },
  { name: "Levi's", quantity: 361, selected: false },
  { name: "Men's Wearhouse", quantity: 75, selected: false },
  { name: 'New Balance', quantity: 218, selected: false },
  { name: 'Nike', quantity: 810, selected: false },
  { name: 'Old Navy', quantity: 147, selected: false },
  { name: 'Puma', quantity: 370, selected: false },
  { name: 'Skechers', quantity: 209, selected: false },
  { name: 'Tommy Hilfiger', quantity: 487, selected: false },
  { name: 'Under Armour', quantity: 90, selected: false },
]

const FilterSidebarFashion = () => {
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const [values, setValues] = useState([40, 150])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>(['XXS'])
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

  const handleColorToggle = (colorName: string) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(colorName) ? prevColors.filter((color) => color !== colorName) : [...prevColors, colorName]
    )
  }

  const handleSizeToggle = (sizeName: string) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(sizeName) ? prevSizes.filter((size) => size !== sizeName) : [...prevSizes, sizeName]
    )
  }

  return (
    <>
      <Offcanvas
        show={isOpen('filtersFashion')}
        onHide={() => closeOffcanvas('filtersFashion')}
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
          {/* Selected filters + Sorting */}
          <div className="pb-4 mb-2 mb-xl-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h4 className="h6 mb-0">Filter</h4>
              <Button
                variant="secondary"
                size="sm"
                className="bg-transparent border-0 text-decoration-underline p-0 ms-2"
              >
                Clear all
              </Button>
            </div>
            <Stack direction="horizontal" gap={2} className="flex-wrap">
              {['Sale', 'Adidas', 'Bilabong', 'Size: XXS', '$40 - $150'].map((filter, index) => (
                <Button key={index} variant="outline-secondary" size="sm">
                  <i className="ci-close fs-sm ms-n1 me-1" />
                  {filter}
                </Button>
              ))}
            </Stack>
          </div>

          {/* Categories */}
          <Accordion defaultActiveKey="categories" className="mb-1 mb-xxl-2">
            <Accordion.Item className="border-0" eventKey="categories">
              <Accordion.Button as="h4" className="h6 cursor-pointer p-0" id="headingCategories">
                Categories
              </Accordion.Button>
              <Accordion.Body className="p-0 pb-4 mb-1 mb-xl-2" aria-labelledby="headingCategories">
                <SimpleBar data-simplebar-auto-hide="false" style={{ height: 220 }}>
                  <Nav className="flex-column gap-2 pe-3">
                    {[
                      ['Blazers & Suits', '235', '#'],
                      ['Blouses', '169', '#'],
                      ['Cardigans & Jumpers', '107', '#'],
                      ['Dresses', '93', '#'],
                      ['Hoodie & Sweatshirts', '122', '#'],
                      ['Jackets & Coats', '116', '#'],
                      ['Jeans', '215', '#'],
                      ['Lingerie', '150', '#'],
                      ['Maternity Wear', '8', '#'],
                      ['Nightwear', '26', '#'],
                      ['Shirts & Tops', '164', '#'],
                      ['Shorts', '147', '#'],
                      ['Socks & Tights', '139', '#'],
                      ['Sportswear', '65', '#'],
                      ['Swimwear', '18', '#'],
                      ['T-shirts & Vests', '209', '#'],
                      ['Trousers', '105', '#'],
                      ['Underwear', '87', '#'],
                    ].map((item, index) => (
                      <Nav.Item key={index} as="li" className="mb-1">
                        <Nav.Link as={Link} href={item[2]} active={false} className="d-block fw-normal p-0">
                          {item[0]}
                          <span className="fs-xs text-body-secondary ms-1">({item[1]})</span>
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </SimpleBar>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Price range */}
          <Accordion defaultActiveKey="price" className="mb-1 mb-xxl-2">
            <Accordion.Item className="border-0" eventKey="price">
              <Accordion.Button as="h4" className="h6 cursor-pointer p-0" id="headingPrice">
                Pice
              </Accordion.Button>
              <Accordion.Body className="p-0 py-4 mb-1 mb-xl-2" aria-labelledby="headingPrice">
                <RangeSlider
                  min={0}
                  max={200}
                  step={1}
                  value={values}
                  onValueChange={setValues}
                  minStepsBetweenThumbs={1}
                  tooltipPrefix="$"
                  className="transform-none pt-1 mt-0"
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
                      max={200}
                      value={values[1]}
                      onChange={(e) => handleInputChange(1, e.target.value)}
                      className="form-icon-start"
                    />
                  </div>
                </Stack>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Brands (checkboxes) */}
          <Accordion defaultActiveKey="brands" className="mb-1 mb-xxl-2">
            <Accordion.Item className="border-0" eventKey="brands">
              <Accordion.Button as="h4" className="h6 cursor-pointer p-0" id="headingBrands">
                Brands
              </Accordion.Button>
              <Accordion.Body className="p-0 pb-4 mb-1 mb-xl-2" aria-labelledby="headingBrands">
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
                        {filteredBrands.map(({ name, quantity, selected }, index) => (
                          <FormCheck key={index} id={`brand-${index}`}>
                            <FormCheck.Input defaultChecked={selected} />
                            <FormCheck.Label className="text-body-emphasis">
                              {name}
                              <span className="fs-xs text-body-secondary ms-1">({quantity})</span>
                            </FormCheck.Label>
                          </FormCheck>
                        ))}
                      </>
                    ) : (
                      <p className="fs-sm text-body-secondary mb-0">Nothing found</p>
                    )}
                  </Stack>
                </SimpleBar>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Size */}
          <Accordion defaultActiveKey="size" className="mb-1 mb-xxl-2">
            <Accordion.Item className="border-0" eventKey="size">
              <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingSize">
                Size
              </Accordion.Button>
              <Accordion.Body className="p-0 pb-4 mb-1 mb-xl-2" aria-labelledby="headingSize">
                <Stack direction="horizontal" gap={2} className="flex-wrap">
                  {['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '40', '42', '44', '45', '46', '48', '50', '52'].map(
                    (size, index) => (
                      <ToggleButton
                        key={index}
                        type="checkbox"
                        id={`size-${index}`}
                        variant="outline-secondary"
                        size="sm"
                        value={size}
                        checked={selectedSizes.includes(size)}
                        onChange={() => handleSizeToggle(size)}
                        style={{ letterSpacing: -0.6 }}
                      >
                        {size}
                      </ToggleButton>
                    )
                  )}
                </Stack>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Color */}
          <Accordion defaultActiveKey="color" className="mb-1 mb-xxl-2">
            <Accordion.Item className="border-0" eventKey="color">
              <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingColor">
                Color
              </Accordion.Button>
              <Accordion.Body className="p-0 pb-4 mb-1 mb-xl-2" aria-labelledby="headingColor">
                <Stack gap={2}>
                  {[
                    { colorName: 'Green', colorHex: '#8cd1ab' },
                    { colorName: 'Coral red', colorHex: '#ee7976' },
                    { colorName: 'Pink', colorHex: '#df8fbf' },
                    { colorName: 'Sky blue', colorHex: '#9acbf1' },
                    { colorName: 'Black', colorHex: '#364254' },
                    { colorName: 'White', colorHex: '#e0e5eb' },
                  ].map(({ colorName, colorHex }, index) => (
                    <div key={index} className="d-flex align-items-center mb-1">
                      <ToggleButton
                        type="checkbox"
                        id={`color-${index}`}
                        variant="color fs-xl"
                        value={colorName}
                        checked={selectedColors.includes(colorName)}
                        onChange={() => handleColorToggle(colorName)}
                        style={{ color: colorHex }}
                      />
                      <label htmlFor={`color-${index}`} className="fs-sm ms-2">
                        {colorName}
                      </label>
                    </div>
                  ))}
                </Stack>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Status */}
          <Accordion defaultActiveKey="status">
            <Accordion.Item className="border-0" eventKey="status">
              <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingStatus">
                Status
              </Accordion.Button>
              <Accordion.Body className="p-0 pb-2 pb-lg-0" aria-labelledby="headingStatus">
                <Stack gap={1}>
                  {[
                    { label: 'In stock', selected: true },
                    { label: '% Sale', selected: false },
                    { label: 'Free delivery', selected: false },
                  ].map(({ label, selected }, index) => (
                    <FormCheck key={index} id={`status-${index}`}>
                      <FormCheck.Input defaultChecked={selected} />
                      <FormCheck.Label className="text-body-emphasis">{label}</FormCheck.Label>
                    </FormCheck>
                  ))}
                </Stack>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Sidebar offcanvas toggle that is visible on screens < 992px wide (lg breakpoint) */}
      <Button
        variant="dark"
        size="lg"
        className="fixed-bottom z-sticky w-100 border-0 border-top border-light border-opacity-10 rounded-0 pb-4 d-lg-none"
        data-bs-theme="light"
        onClick={() => openOffcanvas('filtersFashion')}
      >
        <i className="ci-filter fs-base me-2" />
        Filters
      </Button>
    </>
  )
}

export default FilterSidebarFashion
