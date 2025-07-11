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
import RangeSlider from '@/components/forms/range-slider'

const FilterSidebarElectronics = () => {
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const [values, setValues] = useState([340, 1250])

  const handleInputChange = (index: number, value: string) => {
    const numericValue = Math.max(0, Math.min(1600, Number(value)))
    const updatedValues = [...values]
    updatedValues[index] = numericValue
    setValues(updatedValues)
  }

  return (
    <>
      <Offcanvas
        show={isOpen('filtersElectronics')}
        onHide={() => closeOffcanvas('filtersElectronics')}
        responsive="lg"
        placement="start"
        aria-labelledby="filtersSidebar"
      >
        <Offcanvas.Header closeButton className="py-3">
          <Offcanvas.Title as="h5" id="filtersSidebar">
            Filter and sort
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="flex-column pt-2 py-lg-0">
          {/* Status */}
          <div className="w-100 border rounded p-3 p-xl-4 mb-3 mb-xl-4">
            <h4 className="h6">Status</h4>
            <Stack direction="horizontal" gap={2} className="flex-wrap">
              <Button variant="outline-secondary" size="sm">
                <i className="ci-percent fs-sm me-1 ms-n1" />
                Sale
              </Button>
              <Button variant="outline-secondary" size="sm">
                Same Day Delivery
              </Button>
              <Button variant="outline-secondary" size="sm">
                Available to Order
              </Button>
            </Stack>
          </div>

          {/* Categories */}
          <div className="w-100 border rounded p-3 p-xl-4 mb-3 mb-xl-4">
            <h4 className="h6 mb-2">Categories</h4>
            <ul className="list-unstyled d-block m-0">
              {[
                ['Smartphones', '218', '#'],
                ['Accessories', '372', '#'],
                ['Tablets', '110', '#'],
                ['Wearable Electronics', '142', '#'],
                ['Computers & Laptops', '205', '#'],
                ['Cameras, Photo & Video', '78', '#'],
                ['Headphones', '121', '#'],
                ['Video Games', '89', '#'],
              ].map((item, index) => (
                <Nav key={index} className="d-block pt-2 mt-1">
                  <Nav.Link
                    as={Link}
                    href={item[2]}
                    active={false}
                    className="nav-link animate-underline fw-normal p-0"
                  >
                    <span className="animate-target text-truncate me-3">{item[0]}</span>
                    <span className="text-body-secondary fs-xs ms-auto">{item[1]}</span>
                  </Nav.Link>
                </Nav>
              ))}
            </ul>
          </div>

          {/* Price range */}
          <div className="w-100 border rounded p-3 p-xl-4 mb-3 mb-xl-4">
            <h4 className="h6 mb-2" id="slider-label">
              Price
            </h4>
            <RangeSlider
              min={0}
              max={1600}
              step={1}
              value={values}
              onValueChange={setValues}
              minStepsBetweenThumbs={1}
              tooltipPrefix="$"
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
                  max={1600}
                  value={values[1]}
                  onChange={(e) => handleInputChange(1, e.target.value)}
                  className="form-icon-start"
                />
              </div>
            </Stack>
          </div>

          {/* Brand (checkboxes) */}
          <div className="w-100 border rounded p-3 p-xl-4 mb-3 mb-xl-4">
            <h4 className="h6">Brand</h4>
            <Stack gap={1}>
              {[
                { name: 'Apple', quantity: 64, selected: true },
                { name: 'Asus', quantity: 310, selected: false },
                { name: 'Bang & Olufsen', quantity: 47, selected: false },
                { name: 'Bosh', quantity: 112, selected: false },
                { name: 'Cobra', quantity: 96, selected: false },
                { name: 'Dell', quantity: 178, selected: false },
                { name: 'Foxconn', quantity: 95, selected: false },
              ].map(({ name, quantity, selected }, index) => (
                <div key={index} className="d-flex align-items-center justify-content-between">
                  <FormCheck id={`brand-${index}`}>
                    <FormCheck.Input defaultChecked={selected} />
                    <FormCheck.Label className="text-body-emphasis">{name}</FormCheck.Label>
                  </FormCheck>
                  <span className="fs-xs text-body-secondary ms-1">{quantity}</span>
                </div>
              ))}
              <Accordion className="mb-n2">
                <Accordion.Item eventKey="moreBrands" className="border-0">
                  <Accordion.Collapse eventKey="moreBrands">
                    <Stack gap={1}>
                      {[
                        { name: 'Hewlett Packard', quantity: 61, selected: false },
                        { name: 'Huawei', quantity: 417, selected: false },
                        { name: 'Panasonic', quantity: 123, selected: false },
                        { name: 'Samsung', quantity: 284, selected: false },
                        { name: 'Sony', quantity: 133, selected: false },
                        { name: 'Toshiba', quantity: 39, selected: false },
                        { name: 'Xiaomi', quantity: 421, selected: false },
                      ].map(({ name, quantity, selected }, index) => (
                        <div key={index} className="d-flex align-items-center justify-content-between">
                          <FormCheck id={`moreBrand-${index}`}>
                            <FormCheck.Input defaultChecked={selected} />
                            <FormCheck.Label className="text-body-emphasis">{name}</FormCheck.Label>
                          </FormCheck>
                          <span className="fs-xs text-body-secondary ms-1">{quantity}</span>
                        </div>
                      ))}
                    </Stack>
                  </Accordion.Collapse>
                  <div className="accordion-header">
                    <Accordion.Button className="w-auto fs-sm fw-medium animate-underline py-2">
                      <span
                        className="animate-target me-2"
                        data-label-collapsed="Show all"
                        data-label-expanded="Show less"
                      ></span>
                    </Accordion.Button>
                  </div>
                </Accordion.Item>
              </Accordion>
            </Stack>
          </div>

          {/* SSD size (checkboxes) */}
          <div className="w-100 border rounded p-3 p-xl-4 mb-3 mb-xl-4">
            <h4 className="h6">SSD size</h4>
            <Stack gap={1}>
              {[
                { name: '2 TB', quantity: 13, selected: false },
                { name: '1 TB', quantity: 28, selected: false },
                { name: '512 GB', quantity: 47, selected: true },
                { name: '256 GB', quantity: 56, selected: false },
                { name: '128 GB', quantity: 69, selected: false },
                { name: '64 GB or less', quantity: 141, selected: false },
              ].map(({ name, quantity, selected }, index) => (
                <div key={index} className="d-flex align-items-center justify-content-between">
                  <FormCheck id={`size-${index}`}>
                    <FormCheck.Input defaultChecked={selected} />
                    <FormCheck.Label className="text-body-emphasis">{name}</FormCheck.Label>
                  </FormCheck>
                  <span className="fs-xs text-body-secondary ms-1">{quantity}</span>
                </div>
              ))}
            </Stack>
          </div>

          {/* Color */}
          <div className="w-100 border rounded p-3 p-xl-4 mb-3 mb-xl-4">
            <h4 className="h6">Color</h4>
            <Nav className="d-block mt-n2">
              {[
                { name: 'Green', color: '#8bc4ab' },
                { name: 'Coral red', color: '#ee7976' },
                { name: 'Light pink', color: '#df8fbf' },
                { name: 'Sky blue', color: '#9acbf1' },
                { name: 'Black', color: '#364254' },
                { name: 'White', color: '#ffffff' },
              ].map(({ name, color }, index) => (
                <Nav.Link
                  key={index}
                  as="button"
                  type="button"
                  className="w-auto animate-underline fw-normal pt-2 pb-0 px-0"
                  active={false}
                >
                  <span
                    className="border rounded-circle me-2"
                    style={{ width: '.875rem', height: '.875rem', marginTop: '.125rem', backgroundColor: color }}
                  ></span>
                  <span className="animate-target">{name}</span>
                </Nav.Link>
              ))}
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Sidebar offcanvas toggle that is visible on screens < 992px wide (lg breakpoint) */}
      <Button
        variant="dark"
        size="lg"
        className="fixed-bottom z-sticky w-100 border-0 border-top border-light border-opacity-10 rounded-0 pb-4 d-lg-none"
        data-bs-theme="light"
        onClick={() => openOffcanvas('filtersElectronics')}
      >
        <i className="ci-filter fs-base me-2" />
        Filters
      </Button>
    </>
  )
}

export default FilterSidebarElectronics
