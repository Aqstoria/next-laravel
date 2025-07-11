'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormLabel from 'react-bootstrap/FormLabel'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateTimePickerDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import FormLabel from 'react-bootstrap/FormLabel'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DateTimePickerDemo() {
  const [startDate1, setStartDate1] = useState<Date | null>(null)
  const [startDate2, setStartDate2] = useState<Date | null>(null)

  return (
    <>
      {/* Time select example with 12-hour time format */}
      <FormLabel htmlFor="timeSelect">Time select example</FormLabel>
      <div className="position-relative mb-3">
        <DatePicker
          selected={startDate1}
          onChange={(date) => setStartDate1(date)}
          showTimeSelect
          dateFormat="MMM d, yyyy hh:mm aa"
          className="form-control form-icon-end"
          id="timeSelect"
          placeholderText="Choose date and time"
          popperPlacement="bottom-start"
        />
        <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3"/>
      </div>

      {/* Time input example with 24-hour time format */}
      <FormLabel htmlFor="timeInput">Time input example</FormLabel>
      <div className="position-relative">
        <DatePicker
          selected={startDate2}
          onChange={(date) => setStartDate2(date)}
          showTimeInput
          dateFormat="MMM d, yyyy HH:mm"
          className="form-control form-icon-end"
          id="timeInput"
          placeholderText="Choose date and time"
          popperPlacement="bottom-start"
        />
        <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3"/>
      </div>
    </>
  )
}`

  const [startDate1, setStartDate1] = useState<Date | null>(null)
  const [startDate2, setStartDate2] = useState<Date | null>(null)

  return (
    <section id="picker-date-time" className="docs-section pb-sm-2 mb-5">
      <h4>Date and time picker</h4>
      <DocsComponentDemo code={code}>
        <FormLabel htmlFor="timeSelect">Time select example</FormLabel>
        <div className="position-relative mb-3" style={{ maxWidth: 400 }}>
          <DatePicker
            selected={startDate1}
            onChange={(date) => setStartDate1(date)}
            showTimeSelect
            dateFormat="MMM d, yyyy hh:mm aa"
            className="form-control form-icon-end"
            id="timeSelect"
            placeholderText="Choose date and time"
            popperPlacement="bottom-start"
          />
          <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3" />
        </div>
        <FormLabel htmlFor="timeInput">Time input example</FormLabel>
        <div className="position-relative" style={{ maxWidth: 400 }}>
          <DatePicker
            selected={startDate2}
            onChange={(date) => setStartDate2(date)}
            showTimeInput
            dateFormat="MMM d, yyyy HH:mm"
            className="form-control form-icon-end"
            id="timeInput"
            placeholderText="Choose date and time"
            popperPlacement="bottom-start"
          />
          <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3" />
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default DateTimePickerDemo
