'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { Timezz } from 'timezz/react'

const CountdownCardsDemo = () => {
  const code = `'use client'

import { Timezz } from 'timezz/react'

export default function CountdownCardsDemo() {
  return (
    <>
      {/* Card style: Border */}
      <Timezz
        date="10/15/2030 12:00"
        pause={false}
        stopOnZero={true}
        onUpdate={() => {}}
        className="d-flex flex-wrap mb-4"
      >
        <div className="text-center mb-2">
          <div className="border rounded p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-years />
          </div>
          <span className="fs-sm">years</span>
        </div>
        <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="border rounded p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-days />
          </div>
          <span className="fs-sm">days</span>
        </div>
        <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="border rounded p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-hours />
          </div>
          <span className="fs-sm">hours</span>
        </div>
        <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="border rounded p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-minutes />
          </div>
          <span className="fs-sm">mins</span>
        </div>
        <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="border rounded p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-seconds />
          </div>
          <span className="fs-sm">secs</span>
        </div>
      </Timezz>

      {/* Card style: Body background + shadow */}
      <Timezz
        date="10/15/2030 12:00"
        pause={false}
        stopOnZero={true}
        onUpdate={() => {}}
        className="d-flex flex-wrap mb-4"
      >
        <div className="text-center mb-2">
          <div className="bg-body rounded shadow-sm p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-years />
          </div>
          <span className="fs-sm">years</span>
        </div>
        <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="bg-body rounded shadow-sm p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-days />
          </div>
          <span className="fs-sm">days</span>
        </div>
        <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="bg-body rounded shadow-sm p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-hours />
          </div>
          <span className="fs-sm">hours</span>
        </div>
        <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="bg-body rounded shadow-sm p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-minutes />
          </div>
          <span className="fs-sm">mins</span>
        </div>
        <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="bg-body rounded shadow-sm p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-seconds />
          </div>
          <span className="fs-sm">secs</span>
        </div>
      </Timezz>

      {/* Card style: Secondary background */}
      <Timezz
        date="10/15/2030 12:00"
        pause={false}
        stopOnZero={true}
        onUpdate={() => {}}
        className="d-flex flex-wrap mb-4"
      >
        <div className="text-center mb-2">
          <div className="bg-body-secondary rounded p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-years />
          </div>
          <span className="fs-sm">years</span>
        </div>
        <span className="blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="bg-body-secondary rounded p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-days />
          </div>
          <span className="fs-sm">days</span>
        </div>
        <span className="blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="bg-body-secondary rounded p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-hours />
          </div>
          <span className="fs-sm">hours</span>
        </div>
        <span className="blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="bg-body-secondary rounded p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-minutes />
          </div>
          <span className="fs-sm">mins</span>
        </div>
        <span className="blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="bg-body-secondary rounded p-2">
            <div className="h3 fw-medium mb-0 mx-1" data-seconds />
          </div>
          <span className="fs-sm">secs</span>
        </div>
      </Timezz>

      {/* Card style: Theme subtle backgrounds + color */}
      <Timezz
        date="10/15/2030 12:00"
        pause={false}
        stopOnZero={true}
        onUpdate={() => {}}
        className="d-flex flex-wrap"
      >
        <div className="text-center mb-2">
          <div className="bg-warning-subtle rounded p-2">
            <div className="text-warning h3 fw-medium mb-0 mx-1" data-years />
          </div>
          <span className="text-warning fs-sm">years</span>
        </div>
        <span className="blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="bg-primary-subtle rounded p-2">
            <div className="text-primary h3 fw-medium mb-0 mx-1" data-days />
          </div>
          <span className="text-primary fs-sm">days</span>
        </div>
        <span className="blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="bg-info-subtle rounded p-2">
            <div className="text-info h3 fw-medium mb-0 mx-1" data-hours />
          </div>
          <span className="text-info fs-sm">hours</span>
        </div>
        <span className="blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="bg-danger-subtle rounded p-2">
            <div className="text-danger h3 fw-medium mb-0 mx-1" data-minutes />
          </div>
          <span className="text-danger fs-sm">mins</span>
        </div>
        <span className="blinking text-body-secondary fs-2 mx-2">:</span>
        <div className="text-center mb-2">
          <div className="bg-success-subtle rounded p-2">
            <div className="text-success h3 fw-medium mb-0 mx-1" data-seconds />
          </div>
          <span className="text-success fs-sm">secs</span>
        </div>
      </Timezz>
    </>
  )
}`

  return (
    <section id="countdown-cards" className="docs-section">
      <h4>Cards example</h4>
      <DocsComponentDemo code={code}>
        <Timezz
          date="10/15/2030 12:00"
          pause={false}
          stopOnZero={true}
          onUpdate={() => {}}
          className="d-flex flex-wrap mb-3"
        >
          <div className="text-center mb-2">
            <div className="border rounded p-2">
              <div className="h3 fw-medium mb-0 mx-1" data-years />
            </div>
            <span className="fs-sm">years</span>
          </div>
          <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
          <div className="text-center mb-2">
            <div className="border rounded p-2">
              <div className="h3 fw-medium mb-0 mx-1" data-days />
            </div>
            <span className="fs-sm">days</span>
          </div>
          <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
          <div className="text-center mb-2">
            <div className="border rounded p-2">
              <div className="h3 fw-medium mb-0 mx-1" data-hours />
            </div>
            <span className="fs-sm">hours</span>
          </div>
          <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
          <div className="text-center mb-2">
            <div className="border rounded p-2">
              <div className="h3 fw-medium mb-0 mx-1" data-minutes />
            </div>
            <span className="fs-sm">mins</span>
          </div>
          <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
          <div className="text-center mb-2">
            <div className="border rounded p-2">
              <div className="h3 fw-medium mb-0 mx-1" data-seconds />
            </div>
            <span className="fs-sm">secs</span>
          </div>
        </Timezz>
        <div className="bg-body-tertiary p-3 mb-4">
          <Timezz
            date="10/15/2030 12:00"
            pause={false}
            stopOnZero={true}
            onUpdate={() => {}}
            className="d-flex flex-wrap"
          >
            <div className="text-center mb-2">
              <div className="bg-body rounded shadow-sm p-2">
                <div className="h3 fw-medium mb-0 mx-1" data-years />
              </div>
              <span className="fs-sm">years</span>
            </div>
            <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
            <div className="text-center mb-2">
              <div className="bg-body rounded shadow-sm p-2">
                <div className="h3 fw-medium mb-0 mx-1" data-days />
              </div>
              <span className="fs-sm">days</span>
            </div>
            <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
            <div className="text-center mb-2">
              <div className="bg-body rounded shadow-sm p-2">
                <div className="h3 fw-medium mb-0 mx-1" data-hours />
              </div>
              <span className="fs-sm">hours</span>
            </div>
            <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
            <div className="text-center mb-2">
              <div className="bg-body rounded shadow-sm p-2">
                <div className="h3 fw-medium mb-0 mx-1" data-minutes />
              </div>
              <span className="fs-sm">mins</span>
            </div>
            <span className="animate-blinking text-body-secondary fs-2 mx-2">:</span>
            <div className="text-center mb-2">
              <div className="bg-body rounded shadow-sm p-2">
                <div className="h3 fw-medium mb-0 mx-1" data-seconds />
              </div>
              <span className="fs-sm">secs</span>
            </div>
          </Timezz>
        </div>
        <Timezz
          date="10/15/2030 12:00"
          pause={false}
          stopOnZero={true}
          onUpdate={() => {}}
          className="d-flex flex-wrap mb-4"
        >
          <div className="text-center mb-2">
            <div className="bg-body-secondary rounded p-2">
              <div className="h3 fw-medium mb-0 mx-1" data-years />
            </div>
            <span className="fs-sm">years</span>
          </div>
          <span className="blinking text-body-secondary fs-2 mx-2">:</span>
          <div className="text-center mb-2">
            <div className="bg-body-secondary rounded p-2">
              <div className="h3 fw-medium mb-0 mx-1" data-days />
            </div>
            <span className="fs-sm">days</span>
          </div>
          <span className="blinking text-body-secondary fs-2 mx-2">:</span>
          <div className="text-center mb-2">
            <div className="bg-body-secondary rounded p-2">
              <div className="h3 fw-medium mb-0 mx-1" data-hours />
            </div>
            <span className="fs-sm">hours</span>
          </div>
          <span className="blinking text-body-secondary fs-2 mx-2">:</span>
          <div className="text-center mb-2">
            <div className="bg-body-secondary rounded p-2">
              <div className="h3 fw-medium mb-0 mx-1" data-minutes />
            </div>
            <span className="fs-sm">mins</span>
          </div>
          <span className="blinking text-body-secondary fs-2 mx-2">:</span>
          <div className="text-center mb-2">
            <div className="bg-body-secondary rounded p-2">
              <div className="h3 fw-medium mb-0 mx-1" data-seconds />
            </div>
            <span className="fs-sm">secs</span>
          </div>
        </Timezz>
        <Timezz
          date="10/15/2030 12:00"
          pause={false}
          stopOnZero={true}
          onUpdate={() => {}}
          className="d-flex flex-wrap"
        >
          <div className="text-center mb-2">
            <div className="bg-warning-subtle rounded p-2">
              <div className="text-warning h3 fw-medium mb-0 mx-1" data-years />
            </div>
            <span className="text-warning fs-sm">years</span>
          </div>
          <span className="blinking text-body-secondary fs-2 mx-2">:</span>
          <div className="text-center mb-2">
            <div className="bg-primary-subtle rounded p-2">
              <div className="text-primary h3 fw-medium mb-0 mx-1" data-days />
            </div>
            <span className="text-primary fs-sm">days</span>
          </div>
          <span className="blinking text-body-secondary fs-2 mx-2">:</span>
          <div className="text-center mb-2">
            <div className="bg-info-subtle rounded p-2">
              <div className="text-info h3 fw-medium mb-0 mx-1" data-hours />
            </div>
            <span className="text-info fs-sm">hours</span>
          </div>
          <span className="blinking text-body-secondary fs-2 mx-2">:</span>
          <div className="text-center mb-2">
            <div className="bg-danger-subtle rounded p-2">
              <div className="text-danger h3 fw-medium mb-0 mx-1" data-minutes />
            </div>
            <span className="text-danger fs-sm">mins</span>
          </div>
          <span className="blinking text-body-secondary fs-2 mx-2">:</span>
          <div className="text-center mb-2">
            <div className="bg-success-subtle rounded p-2">
              <div className="text-success h3 fw-medium mb-0 mx-1" data-seconds />
            </div>
            <span className="text-success fs-sm">secs</span>
          </div>
        </Timezz>
      </DocsComponentDemo>
    </section>
  )
}

export default CountdownCardsDemo
