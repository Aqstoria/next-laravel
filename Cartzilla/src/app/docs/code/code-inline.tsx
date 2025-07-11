import DocsComponentDemo from '@/components/docs/docs-component-demo'

const CodeInlineDemo = () => {
  const code = `<p>Wrap inline snippets of code with <code>&lt;code&gt;</code>.</p>`

  return (
    <section id="code-inline" className="docs-section pb-sm-2 mb-5">
      <h4>Inline code</h4>
      <DocsComponentDemo code={code}>
        <p className="mb-0">
          Wrap inline snippets of code with <code>&lt;code&gt;</code>.
        </p>
      </DocsComponentDemo>
    </section>
  )
}

export default CodeInlineDemo
