'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const RadarChartDemo = () => {
  const code = `'use client'

import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export default function RadarChartDemo() {
  return (
    <Radar
      data={{
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(245,82,102, .15)',
            borderColor: '#f55266',
            pointBackgroundColor: '#f55266',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#f55266',
          },
          {
            label: 'Dataset 2',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(47,110,213, .15)',
            borderColor: '#2f6ed5',
            pointBackgroundColor: '#2f6ed5',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#2f6ed5',
          },
        ],
      }}
      options={{
        elements: {
          line: {
            borderWidth: 3,
          },
        },
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
    <section id="radar-chart" className="docs-section">
      <h4>Radar chart</h4>
      <DocsComponentDemo code={code}>
        <div style={{ maxWidth: 600 }}>
          <Radar
            data={{
              labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
              datasets: [
                {
                  label: 'Dataset 1',
                  data: [65, 59, 90, 81, 56, 55, 40],
                  fill: true,
                  backgroundColor: 'rgba(245,82,102, .15)',
                  borderColor: '#f55266',
                  pointBackgroundColor: '#f55266',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: '#f55266',
                },
                {
                  label: 'Dataset 2',
                  data: [28, 48, 40, 19, 96, 27, 100],
                  fill: true,
                  backgroundColor: 'rgba(47,110,213, .15)',
                  borderColor: '#2f6ed5',
                  pointBackgroundColor: '#2f6ed5',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: '#2f6ed5',
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  borderWidth: 3,
                },
              },
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

export default RadarChartDemo
