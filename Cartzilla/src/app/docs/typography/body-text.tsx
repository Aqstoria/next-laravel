import DocsComponentDemo from '@/components/docs/docs-component-demo'

const BodyTextDemo = () => {
  const code = `<p className="fs-1">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className="fs-2">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className="fs-3">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className="fs-4">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className="fs-5">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className="fs-6">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className="fs-xl">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className="fs-lg">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className="fs-sm">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p className="fs-xs mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>`

  return (
    <section id="type-body-text" className="docs-section pb-sm-2 mb-5">
      <h4>Body text sizes</h4>
      <DocsComponentDemo code={code}>
        <p className="fs-1">
          <span className="fw-bold">fs-1.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor
        </p>
        <p className="fs-2">
          <span className="fw-bold">fs-2.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor
        </p>
        <p className="fs-3">
          <span className="fw-bold">fs-3.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor
        </p>
        <p className="fs-4">
          <span className="fw-bold">fs-4.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor
        </p>
        <p className="fs-5">
          <span className="fw-bold">fs-5.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor
        </p>
        <p className="fs-6">
          <span className="fw-bold">fs-6.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor
        </p>
        <p className="lead">
          <span className="fw-bold">Lead.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor
        </p>
        <p className="fs-xl">
          <strong>Extra large.&nbsp;</strong>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
        </p>
        <p className="fs-lg">
          <strong>Large.&nbsp;</strong>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
        </p>
        <p>
          <strong>Normal.&nbsp;</strong>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
        </p>
        <p className="fs-sm">
          <strong>Small.&nbsp;</strong>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
        </p>
        <p className="fs-xs mb-0">
          <strong>Extra small.&nbsp;</strong>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
        </p>
      </DocsComponentDemo>
    </section>
  )
}

export default BodyTextDemo
