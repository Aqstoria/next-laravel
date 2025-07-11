'use client'

import { useState } from 'react'
import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import FormLabel from 'react-bootstrap/FormLabel'
import ToggleButton from 'react-bootstrap/ToggleButton'

const FormsButtonsTogglesDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import Image from 'next/image'
import Stack from 'react-bootstrap/Stack'
import FormLabel from 'react-bootstrap/FormLabel'
import ToggleButton from 'react-bootstrap/ToggleButton'

export default function FormsButtonsTogglesDemo() {
  const [sizeValue, setSizeValue] = useState('XL')
  const [modelValue, setModelValue] = useState('64 GB')
  const [colorValue, setColorValue] = useState('Gray blue')
  const [colorImageValue, setColorImageValue] = useState('Viridian')

  return (
    <>
      {/* Size options made of <ToggleButton> */}
      <FormLabel className="pb-1 mb-2">Sizes</FormLabel>
      <Stack direction="horizontal" gap={2} className="flex-wrap mb-4">
        {['XL', 'L', 'M', 'S', 'XS'].map((size, index) => (
          <ToggleButton
            key={index}
            type="radio"
            id={\`size-\${index}\`}
            variant="outline-secondary btn-icon"
            size="sm"
            name="size-options"
            value={size}
            checked={sizeValue === size}
            onChange={(e) => setSizeValue(e.currentTarget.value)}
            disabled={size === 'S' && true}
          >
            {size}
          </ToggleButton>
        ))}
      </Stack>

      {/* Model options made of <ToggleButton> */}
      <FormLabel className="pb-1 mb-2">Model</FormLabel>
      <Stack direction="horizontal" gap={2} className="flex-wrap mb-4">
        {['64 GB', '128 GB', '256 GB', '512 GB'].map((model, index) => (
          <ToggleButton
            key={index}
            type="radio"
            id={\`model-\${index}\`}
            variant="outline-secondary"
            size="sm"
            name="model-options"
            value={model}
            checked={modelValue === model}
            onChange={(e) => setModelValue(e.currentTarget.value)}
            disabled={model === '512 GB' && true}
          >
            {model}
          </ToggleButton>
        ))}
      </Stack>

      {/* Color options made of <ToggleButton> with binded label */}
      <FormLabel className="pb-1 mb-2">
        Color: <span className="text-body fw-normal">{colorValue}</span>
      </FormLabel>
      <Stack direction="horizontal" gap={2} className="flex-wrap mb-4">
        {[
          { colorName: 'Gray blue', colorHex: '#5a7aa1' },
          { colorName: 'Pink', colorHex: '#ee7976' },
          { colorName: 'Light blue', colorHex: '#9acbf1' },
          { colorName: 'Green', colorHex: '#8cd1ab' },
        ].map(({ colorName, colorHex }, index) => (
          <ToggleButton
            key={index}
            type="radio"
            id={\`color-\${index}\`}
            variant="color fs-xl"
            name="color-options"
            value={colorName}
            checked={colorValue === colorName}
            onChange={(e) => setColorValue(e.currentTarget.value)}
            style={{ color: colorHex }}
          >
            <span className="visually-hidden">{colorName}</span>
          </ToggleButton>
        ))}
      </Stack>

      {/* Color options made of <ToggleButton> with binded label */}
      <FormLabel className="pb-1 mb-2">
        Color: <span className="text-body fw-normal">{colorImageValue}</span>
      </FormLabel>
      <Stack direction="horizontal" gap={2} className="flex-wrap">
        {[
          { image: '/img/shop/furniture/product/colors/color01.png', color: 'Viridian' },
          { image: '/img/shop/furniture/product/colors/color02.png', color: 'Green' },
          { image: '/img/shop/furniture/product/colors/color03.png', color: 'Blue' },
        ].map(({ image, color }, index) => (
          <ToggleButton
            key={index}
            type="radio"
            id={\`color-image-\${index}\`}
            variant="image p-0"
            name="color-image-options"
            value={color}
            checked={colorImageValue === color}
            onChange={(e) => setColorImageValue(e.currentTarget.value)}
          >
            <Image src={image} width={56} height={56} alt={color} />
            <span className="visually-hidden">{color}</span>
          </ToggleButton>
        ))}
      </Stack>
    </>
  )
}`

  const [sizeValue, setSizeValue] = useState('XL')
  const [modelValue, setModelValue] = useState('64 GB')
  const [colorValue, setColorValue] = useState('Gray blue')
  const [colorImageValue, setColorImageValue] = useState('Viridian')

  return (
    <section id="forms-btns" className="docs-section pb-sm-2 mb-5">
      <h4>Button toggles (Color, size options)</h4>
      <DocsComponentDemo code={code}>
        <FormLabel className="pb-1 mb-2">Sizes</FormLabel>
        <Stack direction="horizontal" gap={2} className="flex-wrap mb-4">
          {['XL', 'L', 'M', 'S', 'XS'].map((size, index) => (
            <ToggleButton
              key={index}
              type="radio"
              id={`size-${index}`}
              variant="outline-secondary btn-icon"
              size="sm"
              name="size-options"
              value={size}
              checked={sizeValue === size}
              onChange={(e) => setSizeValue(e.currentTarget.value)}
              disabled={size === 'S' && true}
            >
              {size}
            </ToggleButton>
          ))}
        </Stack>
        <FormLabel className="pb-1 mb-2">Model</FormLabel>
        <Stack direction="horizontal" gap={2} className="flex-wrap mb-4">
          {['64 GB', '128 GB', '256 GB', '512 GB'].map((model, index) => (
            <ToggleButton
              key={index}
              type="radio"
              id={`model-${index}`}
              variant="outline-secondary"
              size="sm"
              name="model-options"
              value={model}
              checked={modelValue === model}
              onChange={(e) => setModelValue(e.currentTarget.value)}
              disabled={model === '512 GB' && true}
            >
              {model}
            </ToggleButton>
          ))}
        </Stack>
        <FormLabel className="pb-1 mb-2">
          Color: <span className="text-body fw-normal">{colorValue}</span>
        </FormLabel>
        <Stack direction="horizontal" gap={2} className="flex-wrap mb-4">
          {[
            { colorName: 'Gray blue', colorHex: '#5a7aa1' },
            { colorName: 'Pink', colorHex: '#ee7976' },
            { colorName: 'Light blue', colorHex: '#9acbf1' },
            { colorName: 'Green', colorHex: '#8cd1ab' },
          ].map(({ colorName, colorHex }, index) => (
            <ToggleButton
              key={index}
              type="radio"
              id={`color-${index}`}
              variant="color fs-xl"
              name="color-options"
              value={colorName}
              checked={colorValue === colorName}
              onChange={(e) => setColorValue(e.currentTarget.value)}
              style={{ color: colorHex }}
            >
              <span className="visually-hidden">{colorName}</span>
            </ToggleButton>
          ))}
        </Stack>
        <FormLabel className="pb-1 mb-2">
          Color: <span className="text-body fw-normal">{colorImageValue}</span>
        </FormLabel>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          {[
            { image: '/img/shop/furniture/product/colors/color01.png', color: 'Viridian' },
            { image: '/img/shop/furniture/product/colors/color02.png', color: 'Green' },
            { image: '/img/shop/furniture/product/colors/color03.png', color: 'Blue' },
          ].map(({ image, color }, index) => (
            <ToggleButton
              key={index}
              type="radio"
              id={`color-image-${index}`}
              variant="image p-0"
              name="color-image-options"
              value={color}
              checked={colorImageValue === color}
              onChange={(e) => setColorImageValue(e.currentTarget.value)}
            >
              <Image src={image} width={56} height={56} alt={color} />
              <span className="visually-hidden">{color}</span>
            </ToggleButton>
          ))}
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsButtonsTogglesDemo
