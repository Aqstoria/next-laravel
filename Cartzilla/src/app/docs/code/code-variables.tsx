import DocsComponentDemo from '@/components/docs/docs-component-demo'

const CodeVariablesDemo = () => {
  const code = `<var>y</var> = <var>mx</var> + <var>b</var>`

  return (
    <section id="code-variables" className="docs-section pb-sm-2 mb-5">
      <h4>Variables</h4>
      <DocsComponentDemo code={code}>
        <var>y</var> = <var>mx</var> + <var>b</var>
      </DocsComponentDemo>
    </section>
  )
}

export default CodeVariablesDemo
