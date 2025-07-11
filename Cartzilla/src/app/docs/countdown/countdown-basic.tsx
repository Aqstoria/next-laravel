'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { Timezz } from 'timezz/react'
import Button from 'react-bootstrap/Button'

const CountdownBasicDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import type { UpdateEvent } from 'timezz'
import { Timezz } from 'timezz/react'
import Button from 'react-bootstrap/Button'

export default function CountdownBasicDemo() {
  const [paused, setPaused] = useState(false)

  let buttonLabel = paused ? (
    <>
      <i className="ci-play fs-base me-1 ms-n1"/>
      Play
    </>
  ) : (
    <>
      <i className="ci-pause fs-base me-1 ms-n1"/>
      Pause
    </>
  )

  const onUpdate = (event: UpdateEvent) => {
    console.log(event)
  }

  return (
    <>
      <Timezz date="10/15/2030 12:00" pause={paused} stopOnZero={true} onUpdate={onUpdate} className="d-flex">
        <div className="text-center">
          <div className="h4 mb-0" data-years />
          <span className="fs-sm">years</span>
        </div>
        <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
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
      <Button variant="outline-secondary mt-3" onClick={() => setPaused(!paused)}>
        {buttonLabel}
      </Button>
    </>
  )
}`

  const [paused, setPaused] = useState(false)

  let buttonLabel = paused ? (
    <>
      <i className="ci-play fs-base me-1 ms-n1" />
      Play
    </>
  ) : (
    <>
      <i className="ci-pause fs-base me-1 ms-n1" />
      Pause
    </>
  )

  return (
    <section id="countdown-basic" className="docs-section pb-sm-2 mb-5">
      <h4>Basic example</h4>
      <DocsComponentDemo code={code}>
        <Timezz date="10/15/2030 12:00" pause={paused} stopOnZero={true} onUpdate={() => {}} className="d-flex">
          <div className="text-center">
            <div className="h4 mb-0" data-years />
            <span className="fs-sm">years</span>
          </div>
          <span className="animate-blinking text-body-secondary fs-xl mx-2">:</span>
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
        <Button variant="outline-secondary mt-3" onClick={() => setPaused(!paused)}>
          {buttonLabel}
        </Button>
      </DocsComponentDemo>
    </section>
  )
}

export default CountdownBasicDemo
