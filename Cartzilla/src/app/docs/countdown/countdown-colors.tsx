'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { Timezz } from 'timezz/react'

const CountdownColorsDemo = () => {
  const code = `'use client'

import { Timezz } from 'timezz/react'

export default function CountdownColorsDemo() {
  return (
    <Timezz date="10/15/2030 12:00" pause={false} stopOnZero={true} onUpdate={(event) => event} className="d-flex">
      <div className="text-center">
        <div className="h4 text-primary mb-0" data-years />
        <span className="fs-sm text-primary opacity-75">years</span>
      </div>
      <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
      <div className="text-center">
        <div className="h4 text-success mb-0" data-days />
        <span className="fs-sm text-success opacity-75">days</span>
      </div>
      <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
      <div className="text-center">
        <div className="h4 text-warning mb-0" data-hours />
        <span className="fs-sm text-warning opacity-75">hours</span>
      </div>
      <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
      <div className="text-center">
        <div className="h4 text-danger mb-0" data-minutes />
        <span className="fs-sm text-danger opacity-75">mins</span>
      </div>
      <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
      <div className="text-center">
        <div className="h4 text-info mb-0" data-seconds />
        <span className="fs-sm text-info opacity-75">secs</span>
      </div>
    </Timezz>
  )
}`

  return (
    <section id="countdown-colors" className="docs-section pb-sm-2 mb-5">
      <h4>Colors</h4>
      <DocsComponentDemo code={code}>
        <Timezz date="10/15/2030 12:00" pause={false} stopOnZero={true} onUpdate={() => {}} className="d-flex">
          <div className="text-center">
            <div className="h4 text-primary mb-0" data-years />
            <span className="fs-sm text-primary opacity-75">years</span>
          </div>
          <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
          <div className="text-center">
            <div className="h4 text-success mb-0" data-days />
            <span className="fs-sm text-success opacity-75">days</span>
          </div>
          <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
          <div className="text-center">
            <div className="h4 text-warning mb-0" data-hours />
            <span className="fs-sm text-warning opacity-75">hours</span>
          </div>
          <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
          <div className="text-center">
            <div className="h4 text-danger mb-0" data-minutes />
            <span className="fs-sm text-danger opacity-75">mins</span>
          </div>
          <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
          <div className="text-center">
            <div className="h4 text-info mb-0" data-seconds />
            <span className="fs-sm text-info opacity-75">secs</span>
          </div>
        </Timezz>
      </DocsComponentDemo>
    </section>
  )
}

export default CountdownColorsDemo
