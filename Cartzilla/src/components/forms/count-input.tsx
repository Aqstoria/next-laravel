'use client'

import { useState, useEffect } from 'react'
import type { CommonComponentProps } from '@/types/common-component-props'

interface CountInputProps extends CommonComponentProps {
  defaultValue?: number
  value?: number
  min?: number
  max?: number
  size?: 'sm' | 'lg'
  collapsible?: boolean
  disabled?: boolean
  incrementBtnLabel?: string
  decrementBtnLabel?: string
  onChange?: (value: number) => void
  onIncrement?: (value: number) => void
  onDecrement?: (value: number) => void
}

const CountInput = ({
  defaultValue,
  value,
  min = 0,
  max = Infinity,
  size,
  collapsible,
  disabled = false,
  incrementBtnLabel,
  decrementBtnLabel,
  onChange,
  onIncrement,
  onDecrement,
  className,
  ...props
}: CountInputProps) => {
  const [internalValue, setInternalValue] = useState<number>(defaultValue || min)

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value)
    }
  }, [value])

  const handleIncrement = () => {
    if (internalValue < max && !disabled) {
      const newValue = internalValue + 1
      onChange?.(newValue)
      setInternalValue(newValue)
      onIncrement?.(newValue)
    }
  }

  const handleDecrement = () => {
    if (internalValue > min && !disabled) {
      const newValue = internalValue - 1
      onChange?.(newValue)
      setInternalValue(newValue)
      onDecrement?.(newValue)
    }
  }

  const isDecrementDisabled = internalValue <= min || disabled
  const isIncrementDisabled = internalValue >= max || disabled

  const inputClass = size ? `form-control form-control-${size}` : 'form-control'
  const buttonClass = size ? `btn btn-icon btn-${size}` : 'btn btn-icon'

  return (
    <div
      className={`count-input
      ${className ? className : ''}
      ${collapsible ? 'count-input-collapsible justify-content-between w-100 bg-transparent border-0 rounded-2' : ''}
      ${internalValue > 0 ? '' : 'collapsed'}
      ${disabled ? 'disabled' : ''}`
        .trim()
        .replace(/\s+/g, ' ')}
      {...props}
    >
      <button
        type="button"
        className={`${buttonClass}${collapsible ? ' btn-primary' : ''} ${isDecrementDisabled ? 'disabled' : ''}`}
        onClick={handleDecrement}
        aria-label={decrementBtnLabel || 'Decrement quantity'}
        disabled={isDecrementDisabled}
        data-decrement
      >
        <i className="ci-minus" />
      </button>
      <input
        type="number"
        className={`${inputClass}${collapsible ? ' bg-primary text-white w-100' : ''}`}
        value={value !== undefined ? value : internalValue}
        min={min}
        max={max}
        readOnly
        disabled={disabled}
      />
      <button
        type="button"
        className={`${buttonClass}${collapsible ? ' product-card-button btn-secondary ms-auto' : ''} ${isIncrementDisabled ? 'disabled' : ''}`}
        onClick={handleIncrement}
        aria-label={incrementBtnLabel || 'Increment quantity'}
        disabled={isIncrementDisabled}
        data-increment
      >
        {collapsible && internalValue > 0 && (
          <span data-count-input-value>{value !== undefined ? value : internalValue}</span>
        )}
        <i className="ci-plus" />
      </button>
    </div>
  )
}

export default CountInput
