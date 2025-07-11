import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import DatePickerInfoAlert from './info-alert'
import DatePickerDemo from './picker-date'
import DatePickerClearableDemo from './picker-clearable'
import DateTimePickerDemo from './picker-date-time'
import DatePickerMinMaxDemo from './picker-min-max-dates'
import DateRangePickerDemo from './picker-date-range'

export const metadata: Metadata = {
  title: 'Cartzilla Docs |  Date / time picker',
}

const DatePickerDocsPage = () => (
  <>
    <section className="pt-2 pb-md-2">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://github.com/Hacker0x01/react-datepicker"
        target="_blank"
        rel="noreferrer"
      >
        React DatePicker docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Date / time picker</h1>
      <p className="text-body-secondary mb-4">A lightweight and powerful date / time picker component.</p>
    </section>
    <DatePickerInfoAlert />
    <DatePickerDemo />
    <DatePickerClearableDemo />
    <DateTimePickerDemo />
    <DatePickerMinMaxDemo />
    <DateRangePickerDemo />
  </>
)

export default DatePickerDocsPage
