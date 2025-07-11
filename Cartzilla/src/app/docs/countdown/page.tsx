import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import CountdownInfoAlert from './info-alert'
import CountdownBasicDemo from './countdown-basic'
import CountdownNoYearsDemo from './countdown-no-years'
import CountdownSizingDemo from './countdown-sizing'
import CountdownColorsDemo from './countdown-colors'
import CountdownCardsDemo from './countdown-cards'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Countdown',
}

const CountdownDocsPage = () => (
  <>
    <section className="pt-2 pb-md-2">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://github.com/letstri/timezz"
        target="_blank"
        rel="noreferrer"
      >
        Timezz docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Countdown</h1>
      <p className="text-body-secondary mb-4">
        A versatile timer that counts down to any specific date, displaying time remaining in years, days, hours,
        minutes, and seconds.
      </p>
    </section>
    <CountdownInfoAlert />
    <CountdownBasicDemo />
    <CountdownNoYearsDemo />
    <CountdownSizingDemo />
    <CountdownColorsDemo />
    <CountdownCardsDemo />
  </>
)

export default CountdownDocsPage
