'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Accordion from 'react-bootstrap/Accordion'
import Stack from 'react-bootstrap/Stack'
import FormControl from 'react-bootstrap/FormControl'
import RangeSlider from '@/components/forms/range-slider'

const ShopFiltersRangeSliderDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Stack from 'react-bootstrap/Stack'
import FormControl from 'react-bootstrap/FormControl'
import RangeSlider from '@/components/forms/range-slider'

export default function ShopFiltersRangeSliderDemo() {
  const [values, setValues] = useState([50, 150])

  const handleInputChange = (index: number, value: string) => {
    const numericValue = Math.max(0, Math.min(1000, Number(value)))
    const updatedValues = [...values]
    updatedValues[index] = numericValue
    setValues(updatedValues)
  }

  return (
    <Accordion defaultActiveKey="0" style={{ maxWidth: 280 }}>
      <Accordion.Item className="border-0" eventKey="0">
        <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingPrice">
          Price
        </Accordion.Button>
        <Accordion.Body className="pt-4" aria-labelledby="headingPrice">
          <RangeSlider
            min={0}
            max={200}
            step={1}
            value={values}
            onValueChange={setValues}
            minStepsBetweenThumbs={1}
            tooltipPrefix="$"
            className="pt-1 mt-0"
          />
          <Stack direction="horizontal" gap={2}>
            <div className="position-relative w-50">
              <i className="ci-dollar-sign position-absolute top-50 start-0 translate-middle-y ms-3"/>
              <FormControl
                type="number"
                min={0}
                max={values[1] - 1}
                value={values[0]}
                onChange={(e) => handleInputChange(0, e.target.value)}
                className="form-icon-start"
              />
            </div>
            <i className="ci-minus text-body-emphasis mx-2"/>
            <div className="position-relative w-50">
              <i className="ci-dollar-sign position-absolute top-50 start-0 translate-middle-y ms-3"/>
              <FormControl
                type="number"
                min={values[0] + 1}
                max={1000}
                value={values[1]}
                onChange={(e) => handleInputChange(1, e.target.value)}
                className="form-icon-start"
              />
            </div>
          </Stack>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}`

  const [values, setValues] = useState([50, 150])

  const handleInputChange = (index: number, value: string) => {
    const numericValue = Math.max(0, Math.min(1000, Number(value)))
    const updatedValues = [...values]
    updatedValues[index] = numericValue
    setValues(updatedValues)
  }

  return (
    <section id="filter-range-slider" className="docs-section pb-sm-2 mb-5">
      <h4>Range slider</h4>
      <DocsComponentDemo code={code}>
        <Accordion defaultActiveKey="0" style={{ maxWidth: 280 }}>
          <Accordion.Item className="border-0" eventKey="0">
            <Accordion.Button as="h3" className="h6 cursor-pointer p-0" id="headingPrice">
              Price
            </Accordion.Button>
            <Accordion.Body className="pt-4" aria-labelledby="headingPrice">
              <RangeSlider
                min={0}
                max={200}
                step={1}
                value={values}
                onValueChange={setValues}
                minStepsBetweenThumbs={1}
                tooltipPrefix="$"
                className="pt-1 mt-0"
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
                    max={1000}
                    value={values[1]}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                    className="form-icon-start"
                  />
                </div>
              </Stack>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </DocsComponentDemo>
    </section>
  )
}

export default ShopFiltersRangeSliderDemo
