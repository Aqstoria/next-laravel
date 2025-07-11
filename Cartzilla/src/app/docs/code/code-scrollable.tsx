import DocsComponentDemo from '@/components/docs/docs-component-demo'

const CodeScrollableDemo = () => {
  const code = `<pre class="overflow-auto" style={{height: '20rem'}}>
  <code>
    Code goes here...
  </code>
</pre>`

  return (
    <section id="code-scrollable" className="docs-section pb-sm-2 mb-5">
      <h4>Code block scrollable</h4>
      <DocsComponentDemo code={code}>
        <pre className="overflow-auto" style={{ height: '19.75rem' }}>
          {`<div class="table-responsive">
  <table class="table">
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
        </pre>
      </DocsComponentDemo>
    </section>
  )
}

export default CodeScrollableDemo
