import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Blockquote from '@/components/blockquote'

const BlockquoteDemo = () => {
  const code = `import Blockquote from '@/components/blockquote'

export default function BlockquoteDemo() {
  return (
    <Blockquote
      text="“A well-known quote, contained in a blockquote element.”"
      footer="Someone famous in"
      cite="Source Title"
    />
  )
}`

  return (
    <section id="type-blockquote" className="docs-section pb-sm-2 mb-5">
      <h4>Blockquote</h4>
      <DocsComponentDemo code={code}>
        <Blockquote
          text="“A well-known quote, contained in a blockquote element.”"
          footer="Someone famous in"
          cite="Source Title"
          className="mb-0"
        />
      </DocsComponentDemo>
    </section>
  )
}

export default BlockquoteDemo
