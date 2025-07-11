'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import { Timezz } from 'timezz/react'

const CountdownSizingDemo = () => {
  const code = `'use client'

import Stack from 'react-bootstrap/Stack'
import { Timezz } from 'timezz/react'

export default function CountdownSizingDemo() {
  return (
    <>
      {/* To adjust the size of the countdown, apply heading classes
        (.h1, .h2, .h3, ..., .display-1, .display-2, .display-3, ...) to the numbers
        and body size classes (.fs-xs, .fs-sm, .fs-lg, ...) to the labels.
      */}
      <Stack gap={4}>
        {[
          { numberSizeClass: 'h1', labelSizeClass: 'fs-lg', separatorSizeClass: 'fs-3' },
          { numberSizeClass: 'h2', labelSizeClass: 'fs-base', separatorSizeClass: 'fs-4' },
          { numberSizeClass: 'h3', labelSizeClass: 'fs-sm', separatorSizeClass: 'fs-4' },
          { numberSizeClass: 'h4', labelSizeClass: 'fs-sm', separatorSizeClass: 'fs-xl' },
          { numberSizeClass: 'h5', labelSizeClass: 'fs-xs', separatorSizeClass: 'fs-lg' },
          { numberSizeClass: 'h6', labelSizeClass: 'fs-xs', separatorSizeClass: 'fs-base' },
        ].map(({ numberSizeClass, labelSizeClass, separatorSizeClass }, index) => (
          <Timezz
            key={index}
            date="10/15/2030 12:00"
            pause={false}
            stopOnZero={true}
            onUpdate={(event) => event}
            className="d-flex"
          >
            <div className="text-center">
              <div className={\`\${numberSizeClass} mb-0\`} data-years />
              <span className={labelSizeClass}>years</span>
            </div>
            <span className={\`animate-blinking text-body-secondary \${separatorSizeClass} mx-2\`}>:</span>
            <div className="text-center">
              <div className={\`\${numberSizeClass} mb-0\`} data-days />
              <span className={labelSizeClass}>days</span>
            </div>
            <span className={\`animate-blinking text-body-secondary \${separatorSizeClass} mx-2\`}>:</span>
            <div className="text-center">
              <div className={\`\${numberSizeClass} mb-0\`} data-hours />
              <span className={labelSizeClass}>hours</span>
            </div>
            <span className={\`animate-blinking text-body-secondary \${separatorSizeClass} mx-2\`}>:</span>
            <div className="text-center">
              <div className={\`\${numberSizeClass} mb-0\`} data-minutes />
              <span className={labelSizeClass}>mins</span>
            </div>
            <span className={\`animate-blinking text-body-secondary \${separatorSizeClass} mx-2\`}>:</span>
            <div className="text-center">
              <div className={\`\${numberSizeClass} mb-0\`} data-seconds />
              <span className={labelSizeClass}>secs</span>
            </div>
          </Timezz>
        ))}
      </Stack>
    </>
  )
}`

  return (
    <section id="countdown-sizing" className="docs-section pb-sm-2 mb-5">
      <h4>Sizing</h4>
      <DocsComponentDemo code={code}>
        <Stack gap={4}>
          {[
            { numberSizeClass: 'h1', labelSizeClass: 'fs-lg', separatorSizeClass: 'fs-3' },
            { numberSizeClass: 'h2', labelSizeClass: 'fs-base', separatorSizeClass: 'fs-4' },
            { numberSizeClass: 'h3', labelSizeClass: 'fs-sm', separatorSizeClass: 'fs-4' },
            { numberSizeClass: 'h4', labelSizeClass: 'fs-sm', separatorSizeClass: 'fs-xl' },
            { numberSizeClass: 'h5', labelSizeClass: 'fs-xs', separatorSizeClass: 'fs-lg' },
            { numberSizeClass: 'h6', labelSizeClass: 'fs-xs', separatorSizeClass: 'fs-base' },
          ].map(({ numberSizeClass, labelSizeClass, separatorSizeClass }, index) => (
            <Timezz
              key={index}
              date="10/15/2030 12:00"
              pause={false}
              stopOnZero={true}
              onUpdate={() => {}}
              className="d-flex"
            >
              <div className="text-center">
                <div className={`${numberSizeClass} mb-0`} data-years />
                <span className={labelSizeClass}>years</span>
              </div>
              <span className={`animate-blinking text-body-secondary ${separatorSizeClass} mx-2`}>:</span>
              <div className="text-center">
                <div className={`${numberSizeClass} mb-0`} data-days />
                <span className={labelSizeClass}>days</span>
              </div>
              <span className={`animate-blinking text-body-secondary ${separatorSizeClass} mx-2`}>:</span>
              <div className="text-center">
                <div className={`${numberSizeClass} mb-0`} data-hours />
                <span className={labelSizeClass}>hours</span>
              </div>
              <span className={`animate-blinking text-body-secondary ${separatorSizeClass} mx-2`}>:</span>
              <div className="text-center">
                <div className={`${numberSizeClass} mb-0`} data-minutes />
                <span className={labelSizeClass}>mins</span>
              </div>
              <span className={`animate-blinking text-body-secondary ${separatorSizeClass} mx-2`}>:</span>
              <div className="text-center">
                <div className={`${numberSizeClass} mb-0`} data-seconds />
                <span className={labelSizeClass}>secs</span>
              </div>
            </Timezz>
          ))}
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default CountdownSizingDemo
