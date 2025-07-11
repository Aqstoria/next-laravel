import CodeBlock from '@/components/code-block'

const DatePickerInfoAlert = () => (
  <section className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-5">
    <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
    <div className="ps-sm-3 pe-sm-5 w-100">
      <p className="pb-1">
        The date and time picker functionality is implemented using the{' '}
        <a
          href="https://github.com/Hacker0x01/react-datepicker"
          className="fw-semibold text-dark-emphasis"
          target="_blank"
          rel="noreferrer"
        >
          DatePicker
        </a>{' '}
        React component. Ensure to import all required component&apos;s files:
      </p>
      <CodeBlock border copyButton={false} className="mb-3">
        {`import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'`}
      </CodeBlock>
      <div className="h6 pb-1 mb-2">See also:</div>
      <p className="mb-1">
        <a
          className="d-inline-flex alert-link fw-medium text-decoration-none"
          href="https://reactdatepicker.com/"
          target="_blank"
          rel="noopener"
        >
          <i className="ci-external-link mt-1 me-2" />
          React DatePicker demos with code examples
        </a>
      </p>
    </div>
  </section>
)

export default DatePickerInfoAlert
