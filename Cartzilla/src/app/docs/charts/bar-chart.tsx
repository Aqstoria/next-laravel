'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChartDemo = () => {
  const code = `'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function BarChartDemo() {
  return (
    <Bar
      data={{
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [12000, 9000, 7000, 8000, 11000, 6000],
            borderWidth: 2,
            borderColor: '#2f6ed5',
            backgroundColor: 'rgba(47,110,213,.35)',
            hoverBackgroundColor: 'rgba(47,110,213,.75)',
          },
          {
            label: 'Dataset 2',
            data: [3500, 5000, 8750, 1300, 3000, 8750],
            borderWidth: 2,
            borderColor: '#fc9231',
            backgroundColor: 'rgba(252,146,49,.35)',
            hoverBackgroundColor: 'rgba(252,146,49,.75)',
          },
        ],
      }}
      options={{
        scales: {
          y: {
            beginAtZero: true,
            border: {
              color: 'rgba(133,140,151,.18)',
            },
            grid: {
              color: 'rgba(133,140,151,.18)',
            },
          },
          x: {
            border: {
              color: 'rgba(133,140,151,.18)',
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
    <section id="bar-chart" className="docs-section pb-sm-2 mb-5">
      <h4>Bar chart</h4>
      <DocsComponentDemo code={code}>
        <div style={{ maxWidth: 600 }}>
          <Bar
            data={{
              labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
              datasets: [
                {
                  label: 'Dataset 1',
                  data: [12000, 9000, 7000, 8000, 11000, 6000],
                  borderWidth: 2,
                  borderColor: '#2f6ed5',
                  backgroundColor: 'rgba(47,110,213,.35)',
                  hoverBackgroundColor: 'rgba(47,110,213,.75)',
                },
                {
                  label: 'Dataset 2',
                  data: [3500, 5000, 8750, 1300, 3000, 8750],
                  borderWidth: 2,
                  borderColor: '#fc9231',
                  backgroundColor: 'rgba(252,146,49,.35)',
                  hoverBackgroundColor: 'rgba(252,146,49,.75)',
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  border: {
                    color: 'rgba(133,140,151,.18)',
                  },
                  grid: {
                    color: 'rgba(133,140,151,.18)',
                  },
                },
                x: {
                  border: {
                    color: 'rgba(133,140,151,.18)',
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

export default BarChartDemo
