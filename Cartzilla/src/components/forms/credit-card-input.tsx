'use client'

import { useState, useEffect } from 'react'
import type { CommonComponentProps } from '@/types/common-component-props'
import Cleave from 'cleave.js/react'
import { Props as CleaveProps, ChangeEvent, ReactInstanceWithCleave } from 'cleave.js/react/props'

interface CreditCardInputProps extends CommonComponentProps {
  size?: 'sm' | 'lg'
  placeholder?: string
  inputClassName?: string
  value?: string
  name?: string
  minLength?: number
  maxLength?: number
  required?: boolean
  disabled?: boolean
  onCardTypeChange?: (type: string) => void
  onCardNumberChange?: (number: string) => void
}

const CreditCardInput = ({
  size,
  placeholder,
  inputClassName,
  id,
  value,
  name,
  minLength,
  maxLength,
  required,
  disabled,
  className,
  onCardTypeChange,
  onCardNumberChange,
  ...props
}: CreditCardInputProps) => {
  const [creditCardType, setCreditCardType] = useState<string>('')
  const [creditCardRawValue, setCreditCardRawValue] = useState<string>('')

  useEffect(() => {
    if (onCardTypeChange) {
      onCardTypeChange(creditCardType)
    }
    if (onCardNumberChange) {
      onCardNumberChange(creditCardRawValue)
    }
  }, [creditCardType, creditCardRawValue, onCardTypeChange, onCardNumberChange])

  const onCreditCardChange: CleaveProps['onChange'] = (event: ChangeEvent<HTMLInputElement>) => {
    setCreditCardRawValue(event.target.rawValue)
  }

  const onCreditCardTypeChanged = (type: string) => {
    setCreditCardType(type)
  }

  const cardPlaceholder = (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 3H3C1.3 3 0 4.3 0 6v12c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm1.2 15c0 .7-.6 1.2-1.2 1.2H3c-.7 0-1.2-.6-1.2-1.2V6c0-.7.6-1.2 1.2-1.2h18c.7 0 1.2.6 1.2 1.2v12z" />
      <path d="M7 16.1H4c-.5 0-.9.4-.9.9s.4.9.9.9h3c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm13-9H4c-.5 0-.9.4-.9.9s.4.9.9.9h16c.5 0 .9-.4.9-.9s-.4-.9-.9-.9z" />
    </svg>
  )

  const cardTypeIcons = {
    amex: (
      <svg width="1.25em" height="1.25em" viewBox="0 0 24 24">
        <path
          d="M22.2,20.1H1.8c-1,0-1.8-0.8-1.8-1.8V5.8C0,4.8,0.8,4,1.8,4h20.5c1,0,1.8,0.8,1.8,1.8v12.6C24,19.3,23.2,20.1,22.2,20.1z"
          fill="#1f72cd"
        />
        <path
          d="M2.8,9l-2.7,6.2h3.3l0.4-1h1l0.4,1h3.5v-0.7L9,15.1h1.8l0.4-0.7v0.7h7.4l0.8-1l0.8,1H24l-2.7-3L24,9h-3.8l-0.8,1l-0.8-1h-8l-0.7,1.6L9.2,9H5.9v0.7L5.6,9H2.8z M13.8,9.9h4.2l1.3,1.5l1.3-1.5h1.3l-1.9,2.2l1.9,2.2h-1.3l-1.3-1.5l-1.3,1.5h-4.2V9.9z M14.9,11.6v-0.8l0,0h2.7l1.2,1.3l-1.2,1.3H15v-0.8h2.3v-0.8h-2.4V11.6z M3.4,9.9H5l1.8,4.1V9.9h1.7l1.3,3l1.3-3h1.7v4.4h-1.1v-3.5l-1.6,3.5H9.4l-1.6-3.5v3.5H5.7l-0.4-1H3.1l-0.4,1H1.6L3.4,9.9z M3.5,12.4l0.7-1.8L5,12.4H3.5z"
          fill="#ffffff"
        />
      </svg>
    ),
    visa: (
      <svg width="1.375em" height="1.375em" viewBox="0 0 24 24" fill="#2152c1">
        <path d="M6,15.6H3.9L2.4,9.9C2.3,9.6,2.2,9.4,1.9,9.3C1.4,9,0.7,8.8,0,8.7V8.5h3.3c0.5,0,0.8,0.3,0.9,0.7L5,13.3l2.1-4.8h2L6,15.6z M10.2,15.6H8.3l1.6-7.2h1.9L10.2,15.6z M14.3,10.5c0.1-0.4,0.4-0.6,0.8-0.6c0.6-0.1,1.3,0.1,1.9,0.3l0.3-1.5c-0.6-0.2-1.2-0.3-1.8-0.3c-1.9,0-3.3,1-3.3,2.4c0,1,1,1.6,1.7,1.9c0.7,0.3,1,0.6,1,0.9c0,0.5-0.6,0.7-1.1,0.7c-0.7,0-1.4-0.2-2-0.4l-0.3,1.5c0.7,0.3,1.4,0.4,2.1,0.4c2.1,0.1,3.4-0.9,3.4-2.4C17,11.4,14.3,11.3,14.3,10.5z M23.8,15.6l-1.5-7.2h-1.7c-0.3,0-0.7,0.2-0.8,0.6L17,15.6h2l0.4-1h2.5l0.2,1H23.8z M20.9,10.4l0.6,2.7h-1.6L20.9,10.4z" />
      </svg>
    ),
    mastercard: (
      <svg width="1.25em" height="1.25em" viewBox="0 0 24 24">
        <path
          d="M12,17.6c-1.3,1.1-2.9,1.8-4.7,1.8c-4,0-7.3-3.3-7.3-7.4c0-4.1,3.3-7.4,7.3-7.4c1.8,0,3.5,0.7,4.7,1.8c1.3-1.1,2.9-1.8,4.7-1.8c4,0,7.3,3.3,7.3,7.4c0,4.1-3.3,7.4-7.3,7.4C14.9,19.4,13.3,18.7,12,17.6z"
          fill="#ed0006"
        />
        <path
          d="M12,17.6c1.6-1.4,2.6-3.4,2.6-5.6s-1-4.3-2.6-5.6c1.3-1.1,2.9-1.8,4.7-1.8c4,0,7.3,3.3,7.3,7.4c0,4.1-3.3,7.4-7.3,7.4C14.9,19.4,13.3,18.7,12,17.6z"
          fill="#f9a000"
        />
        <path
          d="M12,17.6c1.6-1.4,2.6-3.4,2.6-5.6s-1-4.3-2.6-5.6C10.4,7.7,9.4,9.8,9.4,12S10.4,16.3,12,17.6z"
          fill="#ff5e00"
        />
      </svg>
    ),
    diners: (
      <svg width="1.125em" height="1.125em" viewBox="0 0 24 24">
        <path
          d="M14.1,21.5c5.2,0,9.9-4.2,9.9-9.4c0-5.7-4.7-9.6-9.9-9.6H9.6C4.3,2.5,0,6.4,0,12.1c0,5.2,4.3,9.4,9.6,9.4H14.1"
          fill="#0079be"
        />
        <path
          d="M11.6,17.1V6.8c2.1,0.8,3.5,2.8,3.5,5.1C15.1,14.3,13.7,16.3,11.6,17.1 M4.1,12c0-2.3,1.5-4.3,3.5-5.1v10.3C5.6,16.3,4.1,14.3,4.1,12 M9.6,3.3c-4.8,0-8.7,3.9-8.7,8.7c0,4.8,3.9,8.7,8.7,8.7c4.8,0,8.7-3.9,8.7-8.7C18.3,7.2,14.4,3.3,9.6,3.3"
          fill="#ffffff"
        />
      </svg>
    ),
    jcb: (
      <svg width="1.25em" height="1.25em" viewBox="0 0 24 24">
        <path d="M7.3,3.3v14.2c0,1.8-1.7,3.2-3.2,3.2H0V6.6c0-2.1,1.4-3.3,3.3-3.3H7.3z" fill="#0f549d" />
        <path d="M15.6,3.3v14.2c0,1.8-1.7,3.2-3.2,3.2H8.3V6.6c0-2.1,1.4-3.3,3.3-3.3H15.6z" fill="#b41f36" />
        <path d="M24,3.3v14.2c0,1.8-1.7,3.2-3.2,3.2h-4.2V6.6c0-2.1,1.4-3.3,3.3-3.3H24z" fill="#329947" />
        <path
          d="M6,9.3v3c0,1.7-2.1,2.5-3.7,2.5c-0.9,0-1.7-0.3-2.4-0.7v-1.5c0.2,0.7,0.9,1.3,1.8,1.3c1,0,1.7-0.7,1.7-1.6v-3H6z"
          fill="#ffffff"
        />
        <path
          d="M21.5,11.9c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3h-4.9v5.1h4.9c0.8,0,1.4-0.6,1.4-1.2C22.9,12.4,22.3,11.9,21.5,11.9z M17.9,9.8h1.8c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9h-1.8V9.8z M19.8,13.8L19.8,13.8l-1.8,0V12h1.8c0.5,0,0.9,0.4,0.9,0.9C20.7,13.4,20.2,13.8,19.8,13.8z"
          fill="#ffffff"
        />
        <path
          d="M9.8,11.8c0,1.1,0.9,2,2,2c0.5,0,1.5-0.1,2.6-0.3v0.9H9.9c-0.6,0-1.2-0.2-1.7-0.6V9.9c0.4-0.4,1-0.6,1.7-0.6h4.4v0.9c-1.1-0.2-2.1-0.4-2.6-0.4C10.7,9.8,9.8,10.7,9.8,11.8z"
          fill="#ffffff"
        />
      </svg>
    ),
    discover: (
      <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
        <path
          d="M21.9,19.6H2.1c-1.1,0-2.1-0.9-2.1-2.1V6.2C0,5,0.9,4.1,2.1,4.1h19.8C23.1,4.1,24,5,24,6.2v11.4C24,18.7,23.1,19.6,21.9,19.6z"
          fill="#e0e5eb"
        />
        <path
          d="M1.9,10.2h-1v3.6h1c0.6,0,1-0.1,1.3-0.4c0.4-0.3,0.7-0.9,0.7-1.4C3.8,11,3,10.2,1.9,10.2z M2.7,12.9c-0.2,0.2-0.5,0.3-1,0.3H1.5v-2.4h0.2c0.5,0,0.7,0.1,1,0.3c0.2,0.2,0.4,0.6,0.4,0.9S2.9,12.7,2.7,12.9z"
          fill="#010101"
        />
        <rect x="4.1" y="10.2" width="0.7" height="3.6" fill="#010101" />
        <path
          d="M6.6,11.6C6.2,11.4,6,11.3,6,11.1c0-0.2,0.2-0.4,0.5-0.4c0.2,0,0.4,0.1,0.6,0.3l0.4-0.5c-0.3-0.3-0.7-0.4-1.1-0.4c-0.6,0-1.1,0.4-1.1,1c0,0.5,0.2,0.8,0.9,1c0.3,0.1,0.4,0.2,0.5,0.2c0.1,0.1,0.2,0.2,0.2,0.4c0,0.3-0.2,0.5-0.6,0.5c-0.3,0-0.6-0.2-0.8-0.5l-0.5,0.4c0.3,0.5,0.7,0.7,1.3,0.7c0.7,0,1.3-0.5,1.3-1.2C7.6,12.2,7.4,11.9,6.6,11.6L6.6,11.6z"
          fill="#010101"
        />
        <path
          d="M7.9,12c0,1.1,0.8,1.9,1.9,1.9c0.3,0,0.6-0.1,0.9-0.2v-0.8c-0.3,0.3-0.5,0.4-0.9,0.4c-0.7,0-1.2-0.5-1.2-1.3c0-0.7,0.5-1.3,1.2-1.3c0.3,0,0.6,0.1,0.9,0.4v-0.8c-0.3-0.2-0.6-0.2-0.9-0.2C8.7,10.1,7.9,11,7.9,12L7.9,12z"
          fill="#010101"
        />
        <polygon points="16.3,12.7 15.4,10.2 14.6,10.2 16.1,13.9 16.5,13.9 18.1,10.2 17.3,10.2" fill="#010101" />
        <polygon
          points="18.4,13.9 20.4,13.9 20.4,13.2 19.1,13.2 19.1,12.2 20.4,12.2 20.4,11.6 19.1,11.6 19.1,10.8 20.4,10.8 20.4,10.2 18.4,10.2"
          fill="#010101"
        />
        <path
          d="M23.2,11.3c0-0.7-0.5-1.1-1.3-1.1h-1.1v3.6h0.7v-1.5h0.1l1,1.5h0.9l-1.1-1.5C22.9,12.2,23.2,11.8,23.2,11.3zM21.8,11.9h-0.2v-1.1h0.2c0.4,0,0.7,0.2,0.7,0.5C22.5,11.7,22.3,11.9,21.8,11.9z"
          fill="#010101"
        />
        <path
          d="M14.8,12c0,1.1-0.9,1.9-1.9,1.9s-1.9-0.9-1.9-1.9s0.9-1.9,1.9-1.9S14.8,11,14.8,12L14.8,12z"
          fill="#f79234"
        />
      </svg>
    ),
  }

  const cardIcon = cardTypeIcons[creditCardType.toLowerCase() as keyof typeof cardTypeIcons] || cardPlaceholder

  return (
    <div {...props} className={`position-relative${className ? ` ${className}` : ''}`}>
      <Cleave
        options={{
          creditCard: true,
          onCreditCardTypeChanged,
          ...props,
        }}
        value={value}
        name={name}
        id={id}
        className={`form-control form-icon-end${size ? ` form-control-${size}` : ''}${inputClassName ? ` ${inputClassName}` : ''}`}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        disabled={disabled}
        onChange={onCreditCardChange}
      />
      <span className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3">
        {cardIcon}
      </span>
    </div>
  )
}

export default CreditCardInput
