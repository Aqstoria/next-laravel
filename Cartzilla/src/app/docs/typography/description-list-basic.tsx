import DocsComponentDemo from '@/components/docs/docs-component-demo'

const DescriptionListBasicDemo = () => {
  const code = `<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
</dl>`

  return (
    <section id="type-description-list" className="docs-section pb-sm-2 mb-5">
      <h4>Description list basic example</h4>
      <DocsComponentDemo code={code}>
        <dl className="mb-0">
          <dt>Description lists</dt>
          <dd>A description list is perfect for defining terms.</dd>
          <dt>Malesuada porta</dt>
          <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
          <dt>Euismod</dt>
          <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
        </dl>
      </DocsComponentDemo>
    </section>
  )
}

export default DescriptionListBasicDemo
