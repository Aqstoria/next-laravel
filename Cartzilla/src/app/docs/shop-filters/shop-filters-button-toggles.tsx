'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Accordion from 'react-bootstrap/Accordion'
import Stack from 'react-bootstrap/Stack'
import ToggleButton from 'react-bootstrap/ToggleButton'

const ShopFiltersButtonTogglesDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Stack from 'react-bootstrap/Stack'
import ToggleButton from 'react-bootstrap/ToggleButton'

export default function ShopFiltersButtonTogglesDemo() {
  const [selectedColors, setSelectedColors] = useState<string[]>(['Green'])
  const [selectedSizes, setSelectedSizes] = useState<string[]>(['XXS'])

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
      {/* Collapsible list of color filters based on <ToggleButton> */}
      <Accordion defaultActiveKey="0" style={{ maxWidth: 280 }}>
        <Accordion.Item className="border-0" eventKey="0">
          <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingColor">
            Color
          </Accordion.Button>
          <Accordion.Body aria-labelledby="headingColor">
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
                    id={\`color-\${index}\`}
                    variant="color fs-xl"
                    value={colorName}
                    checked={selectedColors.includes(colorName)}
                    onChange={() => handleColorToggle(colorName)}
                    style={{ color: colorHex }}
                  />
                  <label htmlFor={\`color-\${index}\`} className="fs-sm ms-2">
                    {colorName}
                  </label>
                </div>
              ))}
            </Stack>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Collapsible list of size filters based on <ToggleButton> */}
        <Accordion className="w-100" defaultActiveKey="0" style={{ maxWidth: 280 }}>
          <Accordion.Item className="border-0" eventKey="0">
            <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingSize">
              Size
            </Accordion.Button>
            <Accordion.Body aria-labelledby="headingSize">
              <Stack direction="horizontal" gap={2} className="flex-wrap">
                {['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '40', '42', '44', '45', '46', '48', '50', '52'].map(
                  (size, index) => (
                    <ToggleButton
                      key={index}
                      type="checkbox"
                      id={\`size-\${index}\`}
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
    </>
  )
}`

  const [selectedColors, setSelectedColors] = useState<string[]>(['Green'])
  const [selectedSizes, setSelectedSizes] = useState<string[]>(['XXS'])

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
    <section id="filter-button-toggles" className="docs-section pb-sm-2 mb-5">
      <h4>Button toggles</h4>
      <DocsComponentDemo code={code}>
        <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-5">
          <Accordion className="w-100" defaultActiveKey="0" style={{ maxWidth: 280 }}>
            <Accordion.Item className="border-0" eventKey="0">
              <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingColor">
                Color
              </Accordion.Button>
              <Accordion.Body aria-labelledby="headingColor">
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
          <Accordion className="w-100" defaultActiveKey="0" style={{ maxWidth: 280 }}>
            <Accordion.Item className="border-0" eventKey="0">
              <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingSize">
                Size
              </Accordion.Button>
              <Accordion.Body aria-labelledby="headingSize">
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
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default ShopFiltersButtonTogglesDemo
