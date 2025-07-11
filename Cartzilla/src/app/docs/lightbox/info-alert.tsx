const LightboxInfoAlert = () => (
  <section className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-5">
    <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
    <div className="ps-sm-3 pe-sm-5 w-100">
      <p className="pb-1">
        The Lightbox component is a React wrapper for the{' '}
        <a
          href="https://biati-digital.github.io/glightbox/"
          className="fw-semibold text-dark-emphasis"
          target="_blank"
          rel="noreferrer"
        >
          Glightbox
        </a>{' '}
        plugin.
      </p>
      <div className="h6 pb-1 mb-2">Available props:</div>
      <ul className="text-body mb-0">
        <li>
          <code>gallery={'{string}'}</code> -{' '}
          <span className="fs-sm">
            The identifier for the lightbox gallery. This value is used to group items in the same gallery.
          </span>
        </li>
        <li>
          <code>href={'{string}'}</code> -{' '}
          <span className="fs-sm">The URL of the image or video to be displayed in the lightbox.</span>
        </li>
        <li>
          <code>title={'{string}'}</code> -{' '}
          <span className="fs-sm">An optional title for the lightbox slide. This will appear as the caption.</span>
        </li>
        <li>
          <code>description={'{string}'}</code> -{' '}
          <span className="fs-sm">
            An optional description for the lightbox slide. This will appear under the title as additional text.
          </span>
        </li>
        <li>
          <code>fullscreen={'{boolean}'}</code> -{' '}
          <span className="fs-sm">
            Determines if the lightbox should display the slide in fullscreen mode. Default is <code>false</code>.
          </span>
        </li>
        <li>
          <code>children</code> -{' '}
          <span className="fs-sm">The content to render as the clickable element that opens the lightbox.</span>
        </li>
      </ul>
    </div>
  </section>
)

export default LightboxInfoAlert
