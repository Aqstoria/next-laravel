import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Table from 'react-bootstrap/Table'

const TableContextualDemo = () => {
  const code = `import Table from 'react-bootstrap/Table'

export default function TableContextualDemo() {
  return (
    <Table responsive style={{ '--cz-table-bg': 'transparent' } as React.CSSProperties}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Class</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-primary-subtle">
          <th scope="row">1</th>
          <td>Primary</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr className="bg-secondary-subtle">
          <th scope="row">2</th>
          <td>Secondary</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr className="bg-success-subtle">
          <th scope="row">3</th>
          <td>Success</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr className="bg-info-subtle">
          <th scope="row">4</th>
          <td>Info</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr className="bg-warning-subtle">
          <th scope="row">5</th>
          <td>Warning</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr className="bg-danger-subtle">
          <th scope="row">6</th>
          <td>Danger</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr className="bg-light-subtle">
          <th scope="row">7</th>
          <td>Lght</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr className="bg-dark-subtle">
          <th scope="row">8</th>
          <td>Dark</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
      </tbody>
    </Table>
  )
}`

  return (
    <section id="table-contextual" className="docs-section pb-sm-2 mb-5">
      <h4>Contextual colors</h4>
      <DocsComponentDemo code={code}>
        <Table responsive style={{ '--cz-table-bg': 'transparent' } as React.CSSProperties}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Class</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-primary-subtle">
              <th scope="row">1</th>
              <td>Primary</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="bg-secondary-subtle">
              <th scope="row">2</th>
              <td>Secondary</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="bg-success-subtle">
              <th scope="row">3</th>
              <td>Success</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="bg-info-subtle">
              <th scope="row">4</th>
              <td>Info</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="bg-warning-subtle">
              <th scope="row">5</th>
              <td>Warning</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="bg-danger-subtle">
              <th scope="row">6</th>
              <td>Danger</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="bg-light-subtle">
              <th scope="row">7</th>
              <td>Lght</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="bg-dark-subtle">
              <th scope="row">8</th>
              <td>Dark</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          </tbody>
        </Table>
      </DocsComponentDemo>
    </section>
  )
}

export default TableContextualDemo
