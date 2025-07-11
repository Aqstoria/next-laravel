import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import SelectBoxInfoAlert from './info-alert'
import SelectBoxBasicDemo from './select-box-basic'
import SelectBoxSearchGroupsDemo from './select-box-search-groups'
import SelectBoxMultipleDemo from './select-box-multiple'
import SelectBoxTagsInputDemo from './select-box-tags-input'
import SelectBoxCustomOptionDemo from './select-box-custom-option'
import SelectBoxSizesShapesDemo from './select-box-sizes-shapes'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Select box',
}

const SelectBoxDocsPage = () => (
  <>
    <section className="pt-2 pb-md-2">
      <Badge bg="info-subtle" text="info" pill className="fw-semibold py-2 px-3 mb-2">
        Cartzilla component
      </Badge>
      <h1 className="pt-1">Select box</h1>
      <p className="text-body-secondary mb-4">Single / multiple select with search and sorting, tags components.</p>
    </section>
    <SelectBoxInfoAlert />
    <SelectBoxBasicDemo />
    <SelectBoxSearchGroupsDemo />
    <SelectBoxMultipleDemo />
    <SelectBoxTagsInputDemo />
    <SelectBoxCustomOptionDemo />
    <SelectBoxSizesShapesDemo />
  </>
)

export default SelectBoxDocsPage
