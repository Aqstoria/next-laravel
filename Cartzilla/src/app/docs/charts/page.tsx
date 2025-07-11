import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ChartsInfoAlert from './info-alert'
import LineChartDemo from './line-chart'
import BarChartDemo from './bar-chart'
import PieChartDemo from './pie-chart'
import DoughnutChartDemo from './doughnut-chart'
import PolarAreaChartDemo from './polar-chart'
import RadarChartDemo from './radar-chart'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Charts',
}

const ChartsDocsPage = () => (
  <>
    <section className="pt-2 pb-md-2">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-chartjs-2.js.org/"
        target="_blank"
        rel="noreferrer"
      >
        React Charts.js docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Charts</h1>
      <p className="text-body-secondary mb-4">
        Customizable responsive charts, including: Line, Bar, Pie charts and more.
      </p>
    </section>
    <ChartsInfoAlert />
    <LineChartDemo />
    <BarChartDemo />
    <PieChartDemo />
    <DoughnutChartDemo />
    <PolarAreaChartDemo />
    <RadarChartDemo />
  </>
)

export default ChartsDocsPage
