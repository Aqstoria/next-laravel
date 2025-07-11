'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChartDemo = () => {
  const code = `'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function DoughnutChartDemo() {
  return (
    <Doughnut
      data={{
        labels: ['Dataset 1', 'Dataset 2', 'Dataset 3'],
        datasets: [
          {
            label: 'Value, %',
            data: [42, 25, 33],
            borderWidth: 0,
            backgroundColor: ['#f55266', '#33b36b', '#2f6ed5'],
            hoverBackgroundColor: ['#f55266', '#33b36b', '#2f6ed5'],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true,
              boxWidth: 12,
              boxHeight: 12,
              useBorderRadius: true,
              borderRadius: 8,
              padding: 20,
              font: {
                size: 15,
              },
            },
          },
        },
      }}
    />
  )
}`

  return (
    <section id="doughnut-chart" className="docs-section pb-sm-2 mb-5">
      <h4>Doughnut chart</h4>
      <DocsComponentDemo code={code}>
        <div style={{ maxWidth: 500 }}>
          <Doughnut
            data={{
              labels: ['Dataset 1', 'Dataset 2', 'Dataset 3'],
              datasets: [
                {
                  label: 'Value, %',
                  data: [42, 25, 33],
                  borderWidth: 0,
                  backgroundColor: ['#f55266', '#33b36b', '#2f6ed5'],
                  hoverBackgroundColor: ['#f55266', '#33b36b', '#2f6ed5'],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    usePointStyle: true,
                    boxWidth: 12,
                    boxHeight: 12,
                    useBorderRadius: true,
                    borderRadius: 8,
                    padding: 20,
                    font: {
                      size: 15,
                    },
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

export default DoughnutChartDemo
