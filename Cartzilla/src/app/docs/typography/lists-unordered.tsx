import DocsComponentDemo from '@/components/docs/docs-component-demo'

const ListsUnorderedOrderedDemo = () => {
  const code = `<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
</ul>

<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
</ol>`

  return (
    <section id="type-lists" className="docs-section pb-sm-2 mb-5">
      <h4>Lists: Unordered and ordered</h4>
      <DocsComponentDemo code={code}>
        <div className="row">
          <div className="col-sm-6">
            <ul className="mb-sm-0">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit</li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ol className="mb-0">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit</li>
            </ol>
          </div>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default ListsUnorderedOrderedDemo
