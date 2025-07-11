import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ButtonGroupBasicDemo from './button-group-basic'
import ButtonGroupCheckboxesDemo from './button-group-checkboxes'
import ButtonGroupToolbarDemo from './button-group-toolbar'
import ButtonGroupDropdownDemo from './button-group-dropdown'
import ButtonGroupSizingDemo from './button-group-sizing'
import ButtonGroupVerticalDemo from './button-group-vertical'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Button group',
}

const ButtonGroupDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/button-group"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Button group</h1>
      <p className="text-body-secondary mb-4">
        Group a series of buttons together on a single line or stack them in a vertical column.
      </p>
    </section>
    <ButtonGroupBasicDemo />
    <ButtonGroupCheckboxesDemo />
    <ButtonGroupToolbarDemo />
    <ButtonGroupDropdownDemo />
    <ButtonGroupSizingDemo />
    <ButtonGroupVerticalDemo />
  </>
)

export default ButtonGroupDocsPage
