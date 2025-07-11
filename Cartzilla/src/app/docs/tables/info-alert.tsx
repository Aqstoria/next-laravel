const TablesInfoAlert = () => (
  <section className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-5">
    <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
    <div className="ps-sm-3 pe-sm-5 w-100">
      <p className="mb-2">
        The table search and sorting feature is enabled through the{' '}
        <a
          href="https://tanstack.com/table/latest"
          className="fw-semibold text-dark-emphasis"
          target="_blank"
          rel="noreferrer"
        >
          TanStack Table
        </a>{' '}
        library. Ensure that you have imported all necessary files, as demonstrated in the code snippet of the
        respective component section.
      </p>
    </div>
  </section>
)

export default TablesInfoAlert
