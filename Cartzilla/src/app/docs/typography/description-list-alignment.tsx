import DocsComponentDemo from '@/components/docs/docs-component-demo'

const DescriptionListAlignmentDemo = () => {
  const code = `<dl className="row">
  <dt className="col-sm-3">Description lists</dt>
  <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
  <dt className="col-sm-3">Euismod</dt>
  <dd className="col-sm-9">
    <p className="mb-2">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p className="mb-0">Donec id elit non mi porta gravida at eget metus.</p>
  </dd>
  <dt className="col-sm-3">Malesuada porta</dt>
  <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
  <dt className="col-sm-3 text-truncate">Long truncated term is truncated</dt>
  <dd className="col-sm-9">
    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
    risus.
  </dd>
  <dt className="col-sm-3">Nesting</dt>
  <dd className="col-sm-9">
    <dl className="row mb-0">
      <dt className="col-sm-4">Nested definition list</dt>
      <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat nunc augue.</dd>
    </dl>
  </dd>
</dl>`

  return (
    <section id="type-description-list-align" className="docs-section">
      <h4>Description list alignment</h4>
      <DocsComponentDemo code={code}>
        <dl className="row mb-0">
          <dt className="col-sm-3">Description lists</dt>
          <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
          <dt className="col-sm-3">Euismod</dt>
          <dd className="col-sm-9">
            <p className="mb-2">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
            <p className="mb-0">Donec id elit non mi porta gravida at eget metus.</p>
          </dd>
          <dt className="col-sm-3">Malesuada porta</dt>
          <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
          <dt className="col-sm-3 text-truncate">Long truncated term is truncated</dt>
          <dd className="col-sm-9">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
            risus.
          </dd>
          <dt className="col-sm-3">Nesting</dt>
          <dd className="col-sm-9">
            <dl className="row mb-0">
              <dt className="col-sm-4">Nested definition list</dt>
              <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat nunc augue.</dd>
            </dl>
          </dd>
        </dl>
      </DocsComponentDemo>
    </section>
  )
}

export default DescriptionListAlignmentDemo
