import DocsComponentDemo from '@/components/docs/docs-component-demo'

const HeadingsDemo = () => {
  const code = `<h1>h1. Cartzilla heading</h1>
<h2>h2. Cartzilla heading</h2>
<h3>h3. Cartzilla heading</h3>
<h4>h4. Cartzilla heading</h4>
<h5>h5. Cartzilla heading</h5>
<h6>h6. Cartzilla heading</h6>`

  return (
    <section id="type-headings" className="docs-section pb-sm-2 mb-5">
      <h4>Headings</h4>
      <DocsComponentDemo code={code}>
        <h1>h1. Cartzilla heading</h1>
        <hr />
        <h2>h2. Cartzilla heading</h2>
        <hr />
        <h3>h3. Cartzilla heading</h3>
        <hr />
        <h4>h4. Cartzilla heading</h4>
        <hr />
        <h5>h5. Cartzilla heading</h5>
        <hr />
        <h6 className="mb-0">h6. Cartzilla heading</h6>
      </DocsComponentDemo>
    </section>
  )
}

export default HeadingsDemo
