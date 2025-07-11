import DocsComponentDemo from '@/components/docs/docs-component-demo'
import CodeBlock from '@/components/code-block'

const CodeHighlightingDemo = () => {
  const code = `import CodeBlock from '@/components/code-block'

export default function CodeHighlightingDemo() {
  const code = \`<div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Position</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>John</td>
          <td>Doe</td>
          <td>CEO, Founder</td>
          <td>+3 555 68 70</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Anna</td>
          <td>Cabana</td>
          <td>Designer</td>
          <td>+3 434 65 93</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Kale</td>
          <td>Thornton</td>
          <td>Developer</td>
          <td>+3 285 42 88</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Jane</td>
          <td>Birkins</td>
          <td>Support</td>
          <td>+3 774 28 50</td>
        </tr>
      </tbody>
    </table>
  </div>\`

  return (
    <CodeBlock language="html">{code}</CodeBlock>
  )
}`

  return (
    <section id="code-highlighting" className="docs-section">
      <h4>Code highlighting</h4>
      <DocsComponentDemo code={code}>
        <CodeBlock language="html">
          {`<div className="table-responsive">
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Position</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>John</td>
        <td>Doe</td>
        <td>CEO, Founder</td>
        <td>+3 555 68 70</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Anna</td>
        <td>Cabana</td>
        <td>Designer</td>
        <td>+3 434 65 93</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Kale</td>
        <td>Thornton</td>
        <td>Developer</td>
        <td>+3 285 42 88</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Jane</td>
        <td>Birkins</td>
        <td>Support</td>
        <td>+3 774 28 50</td>
      </tr>
    </tbody>
  </table>
</div>`}
        </CodeBlock>
      </DocsComponentDemo>
    </section>
  )
}

export default CodeHighlightingDemo
