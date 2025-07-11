'use client'

import * as React from 'react'
import * as Slider from '@radix-ui/react-slider'

interface RangeSliderProps extends React.ComponentPropsWithoutRef<typeof Slider.Root> {
  tooltips?: boolean
  tooltipPrefix?: string
  tooltipSuffix?: string
  pips?: boolean
}

const RangeSlider = React.forwardRef<React.ComponentRef<typeof Slider.Root>, RangeSliderProps>(
  (
    {
      tooltips = true,
      tooltipPrefix,
      tooltipSuffix,
      pips = false,
      min,
      max,
      orientation = 'horizontal',
      className,
      ...props
    },
    ref
  ) => {
    const values = props.value || props.defaultValue || [0]

    if (min === undefined || max === undefined) {
      throw new Error('RangeSlider requires both min and max props to be defined.')
    }

    const pipsArray = [min, min + (max - min) / 4, min + (max - min) / 2, min + (3 * (max - min)) / 4, max]

    return (
      <Slider.Root
        ref={ref}
        orientation={orientation}
        min={min}
        max={max}
        data-pips={pips}
        className={`range-slider${className ? ` ${className}` : ''}`}
        {...props}
      >
        <Slider.Track className="range-slider-track">
          <Slider.Range className="range-slider-connect" />
        </Slider.Track>
        {pips && orientation === 'horizontal' && (
          <ul className="range-slider-pips list-unstyled position-absolute w-100 m-0">
            {pipsArray.map((pip, index) => (
              <li key={index} className="position-absolute text-center">
                <span className="range-slider-pip-value">{pip}</span>
              </li>
            ))}
          </ul>
        )}
        {values.map((_, index) => (
          <Slider.Thumb
            key={index}
            className="range-slider-handle"
            data-tooltip={tooltips}
            data-tooltip-prefix={tooltipPrefix}
            data-tooltip-suffix={tooltipSuffix}
          />
        ))}
      </Slider.Root>
    )
  }
)

RangeSlider.displayName = 'RangeSlider'

export default RangeSlider
