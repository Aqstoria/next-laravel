'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { Timezz } from 'timezz/react'

const CountdownNoYearsDemo = () => {
  const code = `'use client'

import { Timezz } from 'timezz/react'

export default function CountdownNoYearsDemo() {
  return (
    <Timezz date="10/15/2030 12:00" pause={false} stopOnZero={true} onUpdate={(event) => event} className="d-flex">
      <div className="text-center">
        <div className="h4 mb-0" data-days />
        <span className="fs-sm">days</span>
      </div>
      <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
      <div className="text-center">
        <div className="h4 mb-0" data-hours />
        <span className="fs-sm">hours</span>
      </div>
      <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
      <div className="text-center">
        <div className="h4 mb-0" data-minutes />
        <span className="fs-sm">mins</span>
      </div>
      <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
      <div className="text-center">
        <div className="h4 mb-0" data-seconds />
        <span className="fs-sm">secs</span>
      </div>
    </Timezz>
  )
}`

  const demoDate = () => {
    const currentDate = new Date()

    currentDate.setDate(currentDate.getDate() + 13)

    const year = currentDate.getFullYear()
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    const day = currentDate.getDate().toString().padStart(2, '0')
    const hours = '12'
    const minutes = '00'
    const seconds = '00'

    const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`

    return formattedDate
  }

  return (
    <section id="countdown-no-years" className="docs-section pb-sm-2 mb-5">
      <h4>Display no years</h4>
      <DocsComponentDemo code={code}>
        <Timezz date={demoDate()} pause={false} stopOnZero={true} onUpdate={() => {}} className="d-flex">
          <div className="text-center">
            <div className="h4 mb-0" data-days />
            <span className="fs-sm">days</span>
          </div>
          <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
          <div className="text-center">
            <div className="h4 mb-0" data-hours />
            <span className="fs-sm">hours</span>
          </div>
          <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
          <div className="text-center">
            <div className="h4 mb-0" data-minutes />
            <span className="fs-sm">mins</span>
          </div>
          <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
          <div className="text-center">
            <div className="h4 mb-0" data-seconds />
            <span className="fs-sm">secs</span>
          </div>
        </Timezz>
      </DocsComponentDemo>
    </section>
  )
}

export default CountdownNoYearsDemo
