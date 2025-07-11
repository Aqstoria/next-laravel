const InputFormatterInfoAlert = () => (
  <section className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-5">
    <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
    <div className="ps-sm-3 pe-sm-5 w-100">
      <p>
        Input text formatting feature is enabled through the{' '}
        <a
          href="https://github.com/nosir/cleave.js/blob/master/doc/reactjs-component-usage.md"
          className="fw-semibold text-dark-emphasis"
          target="_blank"
          rel="noreferrer"
        >
          Cleave.js
        </a>{' '}
        component.
      </p>
      <p className="mb-1">
        The Credit Card Input, a custom Cartzilla component, is also built on top of the Cleave.js component.
      </p>
    </div>
  </section>
)

export default InputFormatterInfoAlert
