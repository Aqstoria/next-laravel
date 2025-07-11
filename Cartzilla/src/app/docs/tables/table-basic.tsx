import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Table from 'react-bootstrap/Table'

const TableBasicDemo = () => {
  const code = `import Table from 'react-bootstrap/Table'

export default function TableBasicDemo() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Position</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>John</td>
          <td>Doe</td>
          <td>CEO, Founder</td>
          <td className="text-nowrap">+3 555 68 70</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Anna</td>
          <td>Cabana</td>
          <td>Designer</td>
          <td className="text-nowrap">+3 434 65 93</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Kale</td>
          <td>Thornton</td>
          <td>Developer</td>
          <td className="text-nowrap">+3 285 42 88</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Jane</td>
          <td>Birkins</td>
          <td>Support</td>
          <td className="text-nowrap">+3 774 28 50</td>
        </tr>
      </tbody>
    </Table>
  )
}`

  return (
    <section id="table-basic" className="docs-section pb-sm-2 mb-5">
      <h4>Basic example</h4>
      <DocsComponentDemo code={code}>
        <Table responsive>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Position</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>John</td>
              <td>Doe</td>
              <td>CEO, Founder</td>
              <td className="text-nowrap">+3 555 68 70</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Anna</td>
              <td>Cabana</td>
              <td>Designer</td>
              <td className="text-nowrap">+3 434 65 93</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Kale</td>
              <td>Thornton</td>
              <td>Developer</td>
              <td className="text-nowrap">+3 285 42 88</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Jane</td>
              <td>Birkins</td>
              <td>Support</td>
              <td className="text-nowrap">+3 774 28 50</td>
            </tr>
          </tbody>
        </Table>
      </DocsComponentDemo>
    </section>
  )
}

export default TableBasicDemo
