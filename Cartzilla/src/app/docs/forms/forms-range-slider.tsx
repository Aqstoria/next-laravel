'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import Stack from 'react-bootstrap/Stack'
import RangeSlider from '@/components/forms/range-slider'

const FormsRangeSliderDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import Stack from 'react-bootstrap/Stack'
import RangeSlider from '@/components/forms/range-slider'

export default function FormsRangeSliderDemo() {
  const [values, setValues] = useState([250, 680])

  const handleInputChange = (index: number, value: string) => {
    const numericValue = Math.max(0, Math.min(1000, Number(value)))
    const updatedValues = [...values]
    updatedValues[index] = numericValue
    setValues(updatedValues)
  }

  return (
    <>
      {/* Two handles + slider with scale (pips) + bind inputs */}
      <FormLabel id="range-slider-label">Price range</FormLabel>
      <RangeSlider
        min={0}
        max={1000}
        step={1}
        pips
        value={values}
        onValueChange={setValues}
        minStepsBetweenThumbs={1}
        tooltipPrefix="$"
        aria-labelledby="range-slider-label"
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

      {/* Slider with one handle + no bind inputs */}
      <RangeSlider
        min={0}
        max={1000}
        step={1}
        defaultValue={[450]}
        minStepsBetweenThumbs={1}
        tooltipPrefix="$"
      />
    </>
  )
}`

  const [values1, setValues1] = useState([280, 720])
  const [values2, setValues2] = useState([250, 680])

  const handleInputChange = (sliderIndex: number, index: number, value: string) => {
    const numericValue = Math.max(0, Math.min(1000, Number(value)))

    const updatedValues = sliderIndex === 1 ? [...values1] : [...values2]
    updatedValues[index] = numericValue

    if (sliderIndex === 1) {
      setValues1(updatedValues)
    } else {
      setValues2(updatedValues)
    }
  }

  return (
    <section id="forms-range-slider" className="docs-section pb-sm-2 mb-5">
      <h4>Range slider</h4>
      <div className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-3">
        <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
        <div className="ps-sm-3 pe-sm-5 w-100">
          <p>
            The RangeSlider is powered by the{' '}
            <a
              href="https://www.radix-ui.com/primitives/docs/components/slider"
              className="fw-semibold text-dark-emphasis"
              target="_blank"
              rel="noreferrer"
            >
              Radix UI Slider
            </a>{' '}
            component.
          </p>
          <div className="h6 pb-1 mb-2">Available props:</div>
          <ul className="text-body mb-0">
            <li>
              <code>value={'{number[]}'}</code> -{' '}
              <span className="fs-sm">
                The current values of the slider thumbs. This prop controls the slider externally via state.
              </span>
            </li>
            <li>
              <code>defaultValue={'{number[]}'}</code> -{' '}
              <span className="fs-sm">The initial values of the slider thumbs for uncontrolled usage.</span>
            </li>
            <li>
              <code>min={'{number}'}</code> -{' '}
              <span className="fs-sm">The minimum value allowed on the slider. This prop is required.</span>
            </li>
            <li>
              <code>max={'{number}'}</code> -{' '}
              <span className="fs-sm">The maximum value allowed on the slider. This prop is required.</span>
            </li>
            <li>
              <code>step={'{number}'}</code> -{' '}
              <span className="fs-sm">
                The increment between values when the slider is moved. Default is <code>1</code>.
              </span>
            </li>
            <li>
              <code>minStepsBetweenThumbs={'{number}'}</code> -{' '}
              <span className="fs-sm">Specifies the minimum number of steps required between slider thumbs.</span>
            </li>
            <li>
              <code>onValueChange={'{(values: number[]) => void}'}</code> -{' '}
              <span className="fs-sm">
                Callback triggered whenever the slider values change. Receives the updated array of values.
              </span>
            </li>
            <li>
              <code>orientation={'{"horizontal" | "vertical"}'}</code> -{' '}
              <span className="fs-sm">
                The orientation of the slider. Defaults to <code>&quot;horizontal&quot;</code>.
              </span>
            </li>
            <li>
              <code>tooltips={'{boolean}'}</code> -{' '}
              <span className="fs-sm">
                Whether to show tooltips on the slider thumbs. Default is <code>true</code>.
              </span>
            </li>
            <li>
              <code>tooltipPrefix={'{string}'}</code> -{' '}
              <span className="fs-sm">Optional prefix text displayed in tooltips.</span>
            </li>
            <li>
              <code>tooltipSuffix={'{string}'}</code> -{' '}
              <span className="fs-sm">Optional suffix text displayed in tooltips.</span>
            </li>
            <li>
              <code>pips={'{boolean}'}</code> -{' '}
              <span className="fs-sm">
                Whether to display a scale (pips) on the slider. Default is <code>false</code>.
              </span>
            </li>
            <li>
              <code>dir={'{"ltr" | "rtl"}'}</code> -{' '}
              <span className="fs-sm">
                Specifies the text direction for the slider. Default is <code>&quot;ltr&quot;</code>.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <DocsComponentDemo code={code}>
        <div style={{ maxWidth: 350 }}>
          <div className="pb-2 mb-4">
            <FormLabel id="slider-label-1">Two handles + inputs</FormLabel>
            <RangeSlider
              min={0}
              max={1000}
              step={1}
              value={values1}
              onValueChange={setValues1}
              minStepsBetweenThumbs={1}
              tooltipPrefix="$"
              aria-labelledby="slider-label-1"
            />
            <Stack direction="horizontal" gap={2}>
              <div className="position-relative w-50">
                <i className="ci-dollar-sign position-absolute top-50 start-0 translate-middle-y ms-3" />
                <FormControl
                  type="number"
                  min={0}
                  max={values1[1] - 1}
                  value={values1[0]}
                  onChange={(e) => handleInputChange(1, 0, e.target.value)}
                  className="form-icon-start"
                />
              </div>
              <i className="ci-minus text-body-emphasis mx-2" />
              <div className="position-relative w-50">
                <i className="ci-dollar-sign position-absolute top-50 start-0 translate-middle-y ms-3" />
                <FormControl
                  type="number"
                  min={values1[0] + 1}
                  max={1000}
                  value={values1[1]}
                  onChange={(e) => handleInputChange(1, 1, e.target.value)}
                  className="form-icon-start"
                />
              </div>
            </Stack>
          </div>
          <div className="pb-2 mb-4">
            <FormLabel id="slider-label-1">With value scale (pips)</FormLabel>
            <RangeSlider
              min={0}
              max={1000}
              step={1}
              pips
              value={values2}
              onValueChange={setValues2}
              minStepsBetweenThumbs={1}
              tooltipPrefix="$"
              aria-labelledby="slider-label-1"
            />
            <Stack direction="horizontal" gap={2}>
              <div className="position-relative w-50">
                <i className="ci-dollar-sign position-absolute top-50 start-0 translate-middle-y ms-3" />
                <FormControl
                  type="number"
                  min={0}
                  max={values2[1] - 1}
                  value={values2[0]}
                  onChange={(e) => handleInputChange(2, 0, e.target.value)}
                  className="form-icon-start"
                />
              </div>
              <i className="ci-minus text-body-emphasis mx-2" />
              <div className="position-relative w-50">
                <i className="ci-dollar-sign position-absolute top-50 start-0 translate-middle-y ms-3" />
                <FormControl
                  type="number"
                  min={values2[0] + 1}
                  max={1000}
                  value={values2[1]}
                  onChange={(e) => handleInputChange(2, 1, e.target.value)}
                  className="form-icon-start"
                />
              </div>
            </Stack>
          </div>
          <FormLabel id="slider-label-3">One handle + no inputs</FormLabel>
          <RangeSlider
            min={0}
            max={1000}
            step={1}
            defaultValue={[450]}
            minStepsBetweenThumbs={1}
            tooltipPrefix="$"
            aria-labelledby="slider-label-3"
          />
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsRangeSliderDemo
