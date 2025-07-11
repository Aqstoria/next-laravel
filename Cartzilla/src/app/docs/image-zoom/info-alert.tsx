const ImageZoomInfoAlert = () => (
  <section className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-5">
    <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
    <div className="ps-sm-3 pe-sm-5 w-100">
      <p className="pb-1">
        The ImageZoom component is a React wrapper for the{' '}
        <a
          href="https://github.com/strawdynamics/drift"
          className="fw-semibold text-dark-emphasis"
          target="_blank"
          rel="noreferrer"
        >
          Drift.js
        </a>{' '}
        plugin. This allows you to configure most common Drift.js options directly through props.
      </p>
      <div className="h6 pb-1 mb-2">Available props:</div>
      <ul className="text-body mb-0">
        <li>
          <code>src</code> - <span className="fs-sm">The source URL of the main image.</span>
        </li>
        <li>
          <code>zoomSrc</code> - <span className="fs-sm">The source URL of the zoomed-in version of the image.</span>
        </li>
        <li>
          <code>width</code> - <span className="fs-sm">The width of the image in pixels.</span>
        </li>
        <li>
          <code>height</code> - <span className="fs-sm">The height of the image in pixels.</span>
        </li>
        <li>
          <code>alt</code> -{' '}
          <span className="fs-sm">Alternative text for the image, used for accessibility and SEO.</span>
        </li>
        <li>
          <code>paneContainerId</code> -{' '}
          <span className="fs-sm">The ID of the container element where the zoom pane will be rendered. Optional.</span>
        </li>
        <li>
          <code>inlinePane={'{375}'}</code> -{' '}
          <span className="fs-sm">
            Will switch to inline when zoom pane <code>windowWidth &lt;= inlinePane</code>. Set this value to big number
            (ex. 5000) for the ZoomPane to be always inline.
          </span>
        </li>
        <li>
          <code>hoverDelay</code> -{' '}
          <span className="fs-sm">
            Delay in milliseconds before the zoom pane appears when hovering over the image.
          </span>
        </li>
        <li>
          <code>touchDelay</code> -{' '}
          <span className="fs-sm">Delay in milliseconds before the zoom pane appears on touch events.</span>
        </li>
        <li>
          <code>touchDisable</code> -{' '}
          <span className="fs-sm">If true, disables the zoom functionality on touch devices.</span>
        </li>
        <li>
          <code>imageClassName</code> - <span className="fs-sm">Custom CSS class to apply to the image element.</span>
        </li>
        <li>
          <code>onShow={"{() => console.log('ZoomPane is shown')}"}</code> -{' '}
          <span className="fs-sm">Callback function triggered when the zoom pane is shown.</span>
        </li>
        <li>
          <code>onHide={"{() => console.log('ZoomPane is hidden')}"}</code> -{' '}
          <span className="fs-sm">Callback function triggered when the zoom pane is hidden.</span>
        </li>
      </ul>
    </div>
  </section>
)

export default ImageZoomInfoAlert
