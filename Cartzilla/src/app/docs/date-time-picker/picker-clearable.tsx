'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormLabel from 'react-bootstrap/FormLabel'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerClearableDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import FormLabel from 'react-bootstrap/FormLabel'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DatePickerClearableDemo() {
  const [startDate, setStartDate] = useState<Date | null>(new Date())

  return (
    <>
      <FormLabel htmlFor="clearableInput">Choose date</FormLabel>
      <div className="position-relative">
        <i className="ci-calendar position-absolute top-50 start-0 translate-middle-y z-1 ms-3"/>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          isClearable
          className="form-control form-icon-start"
          id="clearableInput"
          placeholderText="Choose date"
          popperPlacement="bottom-start"
        />
      </div>
    </>
  )
}`

  const [startDate, setStartDate] = useState<Date | null>(new Date())

  return (
    <section id="picker-clearable" className="docs-section pb-sm-2 mb-5">
      <h4>Clearable input</h4>
      <DocsComponentDemo code={code}>
        <FormLabel htmlFor="clearableInput">Choose date</FormLabel>
        <div className="position-relative" style={{ maxWidth: 400 }}>
          <i className="ci-calendar position-absolute top-50 start-0 translate-middle-y z-1 ms-3" />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            isClearable
            className="form-control form-icon-start"
            id="clearableInput"
            placeholderText="Choose date"
            popperPlacement="bottom-start"
          />
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default DatePickerClearableDemo
