import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import InputGroupAddonPositionDemo from './input-group-addon-position'
import InputGroupIconInsideDemo from './input-group-icon-inside'
import InputGroupMultipleAddonsDemo from './input-group-multiple-addons'
import InputGroupTypesDemo from './input-group-types'
import InputGroupMultipleInputsDemo from './input-group-multiple-inputs'
import InputGroupButtonAddonDemo from './input-group-button-addon'
import InputGroupShapesDemo from './input-group-shapes'
import InputGroupSizesDemo from './input-group-sizes'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Input group',
}

const InputGroupDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/forms/input-group"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Input group</h1>
      <p className="text-body-secondary mb-4">Extend form controls by adding text, buttons, etc. on either side.</p>
    </section>
    <InputGroupAddonPositionDemo />
    <InputGroupIconInsideDemo />
    <InputGroupMultipleAddonsDemo />
    <InputGroupTypesDemo />
    <InputGroupMultipleInputsDemo />
    <InputGroupButtonAddonDemo />
    <InputGroupShapesDemo />
    <InputGroupSizesDemo />
  </>
)

export default InputGroupDocsPage
