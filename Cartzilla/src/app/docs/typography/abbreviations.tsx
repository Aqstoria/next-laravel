import DocsComponentDemo from '@/components/docs/docs-component-demo'

const AbbreviationsDemo = () => {
  const code = `<p><abbr title="attribute">attr</abbr>=</p>
<p><abbr className="initialism" title="HyperText Markup Language">HTML</abbr></p>`

  return (
    <section id="type-abbreviations" className="docs-section pb-sm-2 mb-5">
      <h4>Abbreviations</h4>
      <DocsComponentDemo code={code}>
        <p>
          <abbr title="attribute">attr</abbr>
        </p>
        <p className="mb-0">
          <abbr className="initialism" title="HyperText Markup Language">
            HTML
          </abbr>
        </p>
      </DocsComponentDemo>
    </section>
  )
}

export default AbbreviationsDemo
