'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const LineChartDemo = () => {
  const code = `'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function LineChartDemo() {
  return (
    <Line
      data={{
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [12, 9, 7, 8, 6, 4, 3, 2, 0],
            backgroundColor: 'rgba(245,82,102,.35)',
            borderWidth: 2,
            borderColor: '#f55266',
            pointBackgroundColor: '#f55266',
            pointBorderWidth: 8,
            pointBorderColor: 'rgba(245,82,102,.35)',
            pointHoverBorderColor: '#f55266',
            pointHoverBorderWidth: 6,
          },
          {
            label: 'Dataset 2',
            data: [2, 1, 3, 7, 9, 6, 7.7, 4, 7],
            backgroundColor: 'rgba(51,179,107,.35)',
            borderWidth: 2,
            borderColor: '#33b36b',
            pointBackgroundColor: '#33b36b',
            pointBorderWidth: 8,
            pointBorderColor: 'rgba(51,179,107,.35)',
            pointHoverBorderColor: '#33b36b',
            pointHoverBorderWidth: 6,
          },
          {
            label: 'Dataset 3',
            data: [1, 3, 4, 5, 6, 8, 9, 10, 11],
            backgroundColor: 'rgba(47,110,213,.35)',
            borderWidth: 2,
            borderColor: '#2f6ed5',
            pointBackgroundColor: '#2f6ed5',
            pointBorderWidth: 8,
            pointBorderColor: 'rgba(47,110,213,.35)',
            pointHoverBorderColor: '#2f6ed5',
            pointHoverBorderWidth: 6,
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
    <section id="line-chart" className="docs-section pb-sm-2 mb-5">
      <h4>Line chart</h4>
      <DocsComponentDemo code={code}>
        <div style={{ maxWidth: 600 }}>
          <Line
            data={{
              labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9'],
              datasets: [
                {
                  label: 'Dataset 1',
                  data: [12, 9, 7, 8, 6, 4, 3, 2, 0],
                  backgroundColor: 'rgba(245,82,102,.35)',
                  borderWidth: 2,
                  borderColor: '#f55266',
                  pointBackgroundColor: '#f55266',
                  pointBorderWidth: 8,
                  pointBorderColor: 'rgba(245,82,102,.35)',
                  pointHoverBorderColor: '#f55266',
                  pointHoverBorderWidth: 6,
                },
                {
                  label: 'Dataset 2',
                  data: [2, 1, 3, 7, 9, 6, 7.7, 4, 7],
                  backgroundColor: 'rgba(51,179,107,.35)',
                  borderWidth: 2,
                  borderColor: '#33b36b',
                  pointBackgroundColor: '#33b36b',
                  pointBorderWidth: 8,
                  pointBorderColor: 'rgba(51,179,107,.35)',
                  pointHoverBorderColor: '#33b36b',
                  pointHoverBorderWidth: 6,
                },
                {
                  label: 'Dataset 3',
                  data: [1, 3, 4, 5, 6, 8, 9, 10, 11],
                  backgroundColor: 'rgba(47,110,213,.35)',
                  borderWidth: 2,
                  borderColor: '#2f6ed5',
                  pointBackgroundColor: '#2f6ed5',
                  pointBorderWidth: 8,
                  pointBorderColor: 'rgba(47,110,213,.35)',
                  pointHoverBorderColor: '#2f6ed5',
                  pointHoverBorderWidth: 6,
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

export default LineChartDemo
