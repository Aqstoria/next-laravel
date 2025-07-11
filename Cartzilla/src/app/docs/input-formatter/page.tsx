import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import InputFormatterInfoAlert from './info-alert'
import InputFormatterCardDemo from './input-formatter-card'
import InputFormatterPhoneDemo from './input-formatter-phone'
import InputFormatterDateDemo from './input-formatter-date'
import InputFormatterTimeDemo from './input-formatter-time'
import InputFormatterCustomBlocksDemo from './input-formatter-custom'
import InputFormatterPrefixUppercaseDemo from './input-formatter-prefix'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Input text formatter',
}

const InputFormatterDocsPage = () => (
  <>
    <section className="pt-2 pb-md-2">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://github.com/nosir/cleave.js/blob/master/doc/reactjs-component-usage.md"
        target="_blank"
        rel="noreferrer"
      >
        Cleave.js docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Input text formatter</h1>
      <p className="text-body-secondary mb-4">Format input text content when you are typing.</p>
    </section>
    <InputFormatterInfoAlert />
    <InputFormatterCardDemo />
    <InputFormatterPhoneDemo />
    <InputFormatterDateDemo />
    <InputFormatterTimeDemo />
    <InputFormatterCustomBlocksDemo />
    <InputFormatterPrefixUppercaseDemo />
  </>
)

export default InputFormatterDocsPage
