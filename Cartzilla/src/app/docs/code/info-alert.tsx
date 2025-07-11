const CodeInfoAlert = () => (
  <section className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-5">
    <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
    <div className="ps-sm-3 pe-sm-5 w-100">
      <p className="mb-1">
        The code highlighting feature is made with the <span className="fw-semibold">CodeBlock</span> component based on
        the{' '}
        <a
          href="https://github.com/react-syntax-highlighter/react-syntax-highlighter"
          className="fw-semibold text-dark-emphasis"
          target="_blank"
          rel="noreferrer"
        >
          React Syntax Highlighter
        </a>{' '}
        component.
      </p>
    </div>
  </section>
)

export default CodeInfoAlert
