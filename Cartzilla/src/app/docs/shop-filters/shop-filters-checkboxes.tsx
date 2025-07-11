'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Accordion from 'react-bootstrap/Accordion'
import Stack from 'react-bootstrap/Stack'
import FormCheck from 'react-bootstrap/FormCheck'
import SearchFilter from '@/components/search-filter'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const ShopFiltersCheckboxesDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Stack from 'react-bootstrap/Stack'
import FormCheck from 'react-bootstrap/FormCheck'
import SearchFilter from '@/components/search-filter'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export default function ShopFiltersCheckboxesDemo() {

  // Brands (checkboxes) array
  const brands = [
    { name: 'Adidas', quantity: 425, selected: true },
    { name: 'Ann Taylor', quantity: 15 },
    { name: 'Armani', quantity: 18 },
    { name: 'Banana Republic', quantity: 103 },
    { name: 'Bilabong', quantity: 27, selected: true },
    { name: 'Birkenstock', quantity: 10 },
    { name: 'Calvin Klein', quantity: 365 },
    { name: 'Columbia', quantity: 508 },
    { name: 'Converse', quantity: 176 },
    { name: 'Dockers', quantity: 54 },
    { name: 'Fruit of the Loom', quantity: 739 },
    { name: 'Hanes', quantity: 92 },
    { name: 'Jimmy Choo', quantity: 17 },
    { name: "Levi's", quantity: 361 },
    { name: "Men's Wearhouse", quantity: 75 },
    { name: 'New Balance', quantity: 218 },
    { name: 'Nike', quantity: 810 },
  ]

  const [filteredBrands, setFilteredBrands] = useState(brands)

  // Function to filter brands based on the query
  const filterBrands = (brand: (typeof brands)[number], query: string): boolean => {
    return brand.name.toLowerCase().includes(query)
  }

  return (
    <Accordion defaultActiveKey="0" style={{ maxWidth: 280 }}>
      <Accordion.Item className="border-0" eventKey="0">
        <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingBrands">
          Brands
        </Accordion.Button>
        <Accordion.Body aria-labelledby="headingBrands">
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
                    <FormCheck key={index} id={\`brand-\${index}\`}>
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
  )
}`

  const brands = [
    { name: 'Adidas', quantity: 425, selected: true },
    { name: 'Ann Taylor', quantity: 15 },
    { name: 'Armani', quantity: 18 },
    { name: 'Banana Republic', quantity: 103 },
    { name: 'Bilabong', quantity: 27, selected: true },
    { name: 'Birkenstock', quantity: 10 },
    { name: 'Calvin Klein', quantity: 365 },
    { name: 'Columbia', quantity: 508 },
    { name: 'Converse', quantity: 176 },
    { name: 'Dockers', quantity: 54 },
    { name: 'Fruit of the Loom', quantity: 739 },
    { name: 'Hanes', quantity: 92 },
    { name: 'Jimmy Choo', quantity: 17 },
    { name: "Levi's", quantity: 361 },
    { name: "Men's Wearhouse", quantity: 75 },
    { name: 'New Balance', quantity: 218 },
    { name: 'Nike', quantity: 810 },
  ]

  const [filteredBrands, setFilteredBrands] = useState(brands)

  const filterBrands = (brand: (typeof brands)[number], query: string): boolean => {
    return brand.name.toLowerCase().includes(query)
  }

  return (
    <section id="filter-checkboxes" className="docs-section pb-sm-2 mb-5">
      <h4>Checkboxes</h4>
      <DocsComponentDemo code={code}>
        <Accordion defaultActiveKey="0" style={{ maxWidth: 280 }}>
          <Accordion.Item className="border-0" eventKey="0">
            <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingBrands">
              Brands
            </Accordion.Button>
            <Accordion.Body aria-labelledby="headingBrands">
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
      </DocsComponentDemo>
    </section>
  )
}

export default ShopFiltersCheckboxesDemo
