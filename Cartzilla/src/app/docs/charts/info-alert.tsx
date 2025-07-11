import CodeBlock from '@/components/code-block'

const ChartsInfoAlert = () => (
  <section className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-5">
    <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
    <div className="ps-sm-3 pe-sm-5 w-100">
      <p>
        React components for{' '}
        <a href="https://www.chartjs.org" className="fw-semibold text-dark-emphasis" target="_blank" rel="noreferrer">
          Chart.js
        </a>
        , the most popular charting library.
      </p>
      <p>
        To get started import and register main plugin elements along with individual components (chart types). Here is
        Line chart example:
      </p>
      <CodeBlock border copyButton={false} className="mb-3">
        {`import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)`}
      </CodeBlock>
      <div className="h6 pb-1 mb-2">Useful links</div>
      <ul className="list-unstyled mb-1">
        <li className="mb-1">
          <a
            className="d-inline-flex alert-link fw-medium text-decoration-none"
            href="https://react-chartjs-2.js.org/"
            target="_blank"
            rel="noopener"
          >
            <i className="ci-external-link mt-1 me-2" />
            React wrapper component docs
          </a>
        </li>
        <li className="mb-1">
          <a
            className="d-inline-flex alert-link fw-medium text-decoration-none"
            href="https://react-chartjs-2.js.org/examples"
            target="_blank"
            rel="noopener"
          >
            <i className="ci-external-link mt-1 me-2" />
            React component examples
          </a>
        </li>
        <li className="mb-1">
          <a
            className="d-inline-flex alert-link fw-medium text-decoration-none"
            href="https://www.chartjs.org/docs/latest/"
            target="_blank"
            rel="noopener"
          >
            <i className="ci-external-link mt-1 me-2" />
            Form more options visit Chart.js plugin docs
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default ChartsInfoAlert
