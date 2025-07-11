import CodeBlock from '@/components/code-block'

const ScrollbarInfoAlert = () => (
  <section className="d-sm-flex text-body-emphasis bg-info-subtle rounded py-4 px-3 mb-5">
    <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
    <div className="ps-sm-3 pe-sm-5 w-100">
      <p className="mb-3">
        The custom scrollbar is powered by{' '}
        <a
          href="https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-react"
          className="fw-semibold text-dark-emphasis"
          target="_blank"
          rel="noreferrer"
        >
          SimpleBar
        </a>{' '}
        component. Ensure that you have imported all necessary component&apos;s files:
      </p>
      <CodeBlock border copyButton={false} className="mb-1">
        {`import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'`}
      </CodeBlock>
    </div>
  </section>
)

export default ScrollbarInfoAlert
