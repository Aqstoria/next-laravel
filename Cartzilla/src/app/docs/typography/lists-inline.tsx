import DocsComponentDemo from '@/components/docs/docs-component-demo'

const ListsInlineDemo = () => {
  const code = `<ul className="list-inline">
  <li className="list-inline-item">Lorem ipsum dolor</li>
  <li className="list-inline-item">Consectetur adipiscing</li>
  <li className="list-inline-item">Integer molestie</li>
</ul>`

  return (
    <section id="type-lists-inline" className="docs-section pb-sm-2 mb-5">
      <h4>Lists: Inline</h4>
      <DocsComponentDemo code={code}>
        <ul className="list-inline">
          <li className="list-inline-item">Lorem ipsum dolor</li>
          <li className="list-inline-item">Consectetur adipiscing</li>
          <li className="list-inline-item">Integer molestie</li>
        </ul>
      </DocsComponentDemo>
    </section>
  )
}

export default ListsInlineDemo
