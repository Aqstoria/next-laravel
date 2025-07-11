'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormLabel from 'react-bootstrap/FormLabel'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import FormLabel from 'react-bootstrap/FormLabel'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DatePickerDemo() {
  const [startDate1, setStartDate1] = useState<Date | null>(null)
  const [startDate2, setStartDate2] = useState<Date | null>(null)
  const [startDate3, setStartDate3] = useState<Date | null>(null)

  return (
    <>
      {/* Default date format: m/d/Y */}
      <FormLabel htmlFor="date-1">
        Choose date <span className="text-body-secondary fs-xs fw-normal">(m/d/yyyy default format)</span>
      </FormLabel>
      <div className="position-relative mb-3">
        <DatePicker
          selected={startDate1}
          onChange={(date) => setStartDate1(date)}
          className="form-control form-icon-end"
          id="date-1"
          placeholderText="Choose date"
          popperPlacement="bottom-start"
        />
        <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3"/>
      </div>

      {/* Date format: MMMM d, Y */}
      <FormLabel htmlFor="date-2">
        Choose date <span className="text-body-secondary fs-xs fw-normal">(MMMM d, yyyy format)</span>
      </FormLabel>
      <div className="position-relative mb-3">
        <DatePicker
          selected={startDate2}
          onChange={(date) => setStartDate2(date)}
          dateFormat="MMMM d, yyyy"
          className="form-control form-icon-end"
          id="date-2"
          placeholderText="Choose date"
          popperPlacement="bottom-start"
        />
        <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3"/>
      </div>

      {/* Date format: MMM do, Y */}
      <FormLabel htmlFor="date-3">
        Choose date <span className="text-body-secondary fs-xs fw-normal">(MMM do, yyyy format)</span>
      </FormLabel>
      <div className="position-relative">
        <DatePicker
          selected={startDate3}
          onChange={(date) => setStartDate3(date)}
          dateFormat="MMM do, yyyy"
          className="form-control form-icon-end"
          id="date-3"
          placeholderText="Choose date"
          popperPlacement="bottom-start"
        />
        <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3"/>
      </div>
    </>
  )
}`

  const [startDate1, setStartDate1] = useState<Date | null>(null)
  const [startDate2, setStartDate2] = useState<Date | null>(null)
  const [startDate3, setStartDate3] = useState<Date | null>(null)

  return (
    <section id="picker-date" className="docs-section pb-sm-2 mb-5">
      <h4>Date picker</h4>
      <DocsComponentDemo code={code}>
        <FormLabel htmlFor="date-1">
          Choose date <span className="text-body-secondary fs-xs fw-normal">(m/d/yyyy default format)</span>
        </FormLabel>
        <div className="position-relative mb-3" style={{ maxWidth: 400 }}>
          <DatePicker
            selected={startDate1}
            onChange={(date) => setStartDate1(date)}
            className="form-control form-icon-end"
            id="date-1"
            placeholderText="Choose date"
            popperPlacement="bottom-start"
          />
          <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3" />
        </div>
        <FormLabel htmlFor="date-2">
          Choose date <span className="text-body-secondary fs-xs fw-normal">(MMMM d, yyyy format)</span>
        </FormLabel>
        <div className="position-relative mb-3" style={{ maxWidth: 400 }}>
          <DatePicker
            selected={startDate2}
            onChange={(date) => setStartDate2(date)}
            dateFormat="MMMM d, yyyy"
            className="form-control form-icon-end"
            id="date-2"
            placeholderText="Choose date"
            popperPlacement="bottom-start"
          />
          <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3" />
        </div>
        <FormLabel htmlFor="date-3">
          Choose date <span className="text-body-secondary fs-xs fw-normal">(MMM do, yyyy format)</span>
        </FormLabel>
        <div className="position-relative" style={{ maxWidth: 400 }}>
          <DatePicker
            selected={startDate3}
            onChange={(date) => setStartDate3(date)}
            dateFormat="MMM do, yyyy"
            className="form-control form-icon-end"
            id="date-3"
            placeholderText="Choose date"
            popperPlacement="bottom-start"
          />
          <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3" />
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default DatePickerDemo
