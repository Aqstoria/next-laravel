import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import CodeInfoAlert from './info-alert'
import CodeInlineDemo from './code-inline'
import CodeUserInputDemo from './code-user-input'
import CodeVariablesDemo from './code-variables'
import CodeBlockDemo from './code-block'
import CodeScrollableDemo from './code-scrollable'
import CodeHighlightingDemo from './code-highlighting'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Code',
}

const CodeDocsPage = () => (
  <>
    <section className="pt-2 pb-md-2">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://getbootstrap.com/docs/5.3/content/reboot/#inline-code"
        target="_blank"
        rel="noreferrer"
      >
        Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Code</h1>
      <p className="text-body-secondary mb-4">Displaying inline and multiline blocks of code.</p>
    </section>
    <CodeInfoAlert />
    <CodeInlineDemo />
    <CodeUserInputDemo />
    <CodeVariablesDemo />
    <CodeBlockDemo />
    <CodeScrollableDemo />
    <CodeHighlightingDemo />
  </>
)

export default CodeDocsPage
