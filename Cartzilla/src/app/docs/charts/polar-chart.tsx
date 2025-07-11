'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js'
import { PolarArea } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

const PolarAreaChartDemo = () => {
  const code = `'use client'

import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js'
import { PolarArea } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default function PolarAreaChartDemo() {
  return (
    <PolarArea
      data={{
        labels: ['Red', 'Green', 'Orange', 'Grey', 'Blue'],
        datasets: [
          {
            label: 'My dataset',
            data: [11, 16, 7, 3, 14],
            borderWidth: 0,
            backgroundColor: ['#f55266', '#33b36b', '#fc9231', '#cad0d9', '#2f6ed5'],
            hoverBackgroundColor: ['#f55266', '#33b36b', '#fc9231', '#cad0d9', '#2f6ed5'],
          },
        ],
      }}
      options={{
        scales: {
          r: {
            ticks: {
              backdropColor: 'rgba(255,255,255,0)',
            },
            grid: {
              color: 'rgba(133,140,151,.18)',
            },
          },
        },
      }}
    />
  )
}`

  return (
    <section id="polar-chart" className="docs-section pb-sm-2 mb-5">
      <h4>Polar area chart</h4>
      <DocsComponentDemo code={code}>
        <div style={{ maxWidth: 600 }}>
          <PolarArea
            data={{
              labels: ['Red', 'Green', 'Orange', 'Grey', 'Blue'],
              datasets: [
                {
                  label: 'My dataset',
                  data: [11, 16, 7, 3, 14],
                  borderWidth: 0,
                  backgroundColor: ['#f55266', '#33b36b', '#fc9231', '#cad0d9', '#2f6ed5'],
                  hoverBackgroundColor: ['#f55266', '#33b36b', '#fc9231', '#cad0d9', '#2f6ed5'],
                },
              ],
            }}
            options={{
              scales: {
                r: {
                  ticks: {
                    backdropColor: 'rgba(255,255,255,0)',
                  },
                  grid: {
                    color: 'rgba(133,140,151,.18)',
                  },
                },
              },
            }}
          />
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default PolarAreaChartDemo
