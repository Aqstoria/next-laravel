import DocsComponentDemo from '@/components/docs/docs-component-demo'

const CodeBlockDemo = () => {
  const code = `<pre>
  <code>&lt;p&gt;Sample text here...&lt;/p&gt;
    &lt;p&gt;And another line of sample text here...&lt;/p&gt;</code>
</pre>`

  return (
    <section id="code-block" className="docs-section pb-sm-2 mb-5">
      <h4>Code block</h4>
      <DocsComponentDemo code={code}>
        <pre>
          &lt;p&gt;Sample text here...&lt;/p&gt;
          <br />
          &lt;p&gt;And another line of sample text here...&lt;/p&gt;
        </pre>
      </DocsComponentDemo>
    </section>
  )
}

export default CodeBlockDemo
