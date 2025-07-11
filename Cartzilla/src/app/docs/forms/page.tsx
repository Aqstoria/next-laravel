import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import FormsInputTypesDemo from './forms-input-types'
import FormsFloatingLabelsDemo from './forms-floating-labels'
import FormsCustomSelectDemo from './forms-custom-select'
import FormsPasswordToggleInputDemo from './forms-password-toggle'
import FormsCheckboxesDemo from './forms-checkboxes'
import FormsRadiosDemo from './forms-radios'
import FormsSwitchesDemo from './forms-switches'
import FormsButtonsTogglesDemo from './forms-button-toggles'
import FormsCountInputDemo from './forms-count-input'
import FormsRangeSliderDemo from './forms-range-slider'
import FormsShapesDemo from './forms-shapes'
import FormsSizesDemo from './forms-sizes'
import FormsDisabledDemo from './forms-disabled'
import FormsInlineDemo from './forms-inline'
import FormsHelpTextDemo from './forms-help-text'
import FormsValidationTextDemo from './forms-validation-text'
import FormsValidationTooltipsDemo from './forms-validation-tooltips'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Forms',
}

const FormsDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/forms/overview"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Forms</h1>
      <p className="text-body-secondary mb-4">Form control styles, layout options, and custom components.</p>
    </section>
    <FormsInputTypesDemo />
    <FormsFloatingLabelsDemo />
    <FormsCustomSelectDemo />
    <FormsPasswordToggleInputDemo />
    <FormsCheckboxesDemo />
    <FormsRadiosDemo />
    <FormsSwitchesDemo />
    <FormsButtonsTogglesDemo />
    <FormsCountInputDemo />
    <FormsRangeSliderDemo />
    <FormsShapesDemo />
    <FormsSizesDemo />
    <FormsDisabledDemo />
    <FormsInlineDemo />
    <FormsHelpTextDemo />
    <FormsValidationTextDemo />
    <FormsValidationTooltipsDemo />
  </>
)

export default FormsDocsPage
