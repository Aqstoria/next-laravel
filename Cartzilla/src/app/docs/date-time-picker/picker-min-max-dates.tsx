'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormLabel from 'react-bootstrap/FormLabel'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerMinMaxDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import FormLabel from 'react-bootstrap/FormLabel'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DatePickerMinMaxDemo() {
  const [startDate, setStartDate1 = useState<Date | null>(null)

  return (
    <>
      <FormLabel htmlFor="minMaxDates">Choose date</FormLabel>
      <div className="position-relative">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date('01/01/2025')}
          maxDate={new Date('01/31/2025')}
          className="form-control form-icon-end"
          id="minMaxDates"
          placeholderText="Select a date in Jan 2025"
          popperPlacement="bottom-start"
        />
        <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3"/>
      </div>
    </>
  )
}`

  const [startDate, setStartDate] = useState<Date | null>(null)

  return (
    <section id="picker-min-max-dates" className="docs-section pb-sm-2 mb-5">
      <h4>Min and max dates</h4>
      <DocsComponentDemo code={code}>
        <FormLabel htmlFor="minMaxDates">Choose date</FormLabel>
        <div className="position-relative" style={{ maxWidth: 400 }}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date('01/01/2025')}
            maxDate={new Date('01/29/2025')}
            className="form-control form-icon-end"
            id="minMaxDates"
            placeholderText="Select a date in Jan 2025"
            popperPlacement="bottom-start"
          />
          <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3" />
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default DatePickerMinMaxDemo
