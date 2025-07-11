'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormLabel from 'react-bootstrap/FormLabel'
import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateRangePickerDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import FormLabel from 'react-bootstrap/FormLabel'
import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/InputGroupText'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DateRangePickerDemo() {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  return (
    <>
      <FormLabel>Date range</FormLabel>
      <InputGroup className="flex-nowrap">
        <InputGroupText>
          <i className="ci-calendar fs-base"/>
        </InputGroupText>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          className="form-control rounded-0"
          placeholderText="From date"
          popperPlacement="bottom-start"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          className="form-control rounded-start-0"
          placeholderText="To date"
          popperPlacement="bottom-start"
        />
      </InputGroup>
    </>
  )
}`

  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  return (
    <section id="picker-date-range" className="docs-section">
      <h4>Date range</h4>
      <DocsComponentDemo code={code}>
        <FormLabel>Date range</FormLabel>
        <InputGroup className="flex-nowrap" style={{ maxWidth: 500 }}>
          <InputGroupText>
            <i className="ci-calendar fs-base" />
          </InputGroupText>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            className="form-control rounded-0"
            placeholderText="From date"
            popperPlacement="bottom-start"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            className="form-control rounded-start-0"
            placeholderText="To date"
            popperPlacement="bottom-start"
          />
        </InputGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default DateRangePickerDemo
