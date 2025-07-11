import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ButtonsSolidDemo from './buttons-solid'
import ButtonsOutlineDemo from './buttons-outline'
import ButtonsStaticIconsDemo from './buttons-static-icons'
import ButtonsAnimatedIconsDemo from './buttons-animated-icons'
import ButtonsMarketDemo from './buttons-market'
import ButtonsShapesDemo from './buttons-shapes'
import ButtonsSizesDemo from './buttons-sizes'
import ButtonsStatesDemo from './buttons-states'
import ButtonsTagsDemo from './buttons-tags'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Buttons',
}

const ButtonsDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge
        as="a"
        bg="info-subtle"
        text="info"
        pill
        className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        href="https://react-bootstrap.netlify.app/docs/components/buttons"
        target="_blank"
        rel="noreferrer"
      >
        React Bootstrap docs
        <i className="ci-external-link fs-sm ms-1" />
      </Badge>
      <h1 className="pt-1">Buttons</h1>
      <p className="text-body-secondary mb-4">Custom button styles for actions in forms, dialogs, etc.</p>
    </section>
    <ButtonsSolidDemo />
    <ButtonsOutlineDemo />
    <ButtonsStaticIconsDemo />
    <ButtonsAnimatedIconsDemo />
    <ButtonsMarketDemo />
    <ButtonsTagsDemo />
    <ButtonsShapesDemo />
    <ButtonsSizesDemo />
    <ButtonsStatesDemo />
  </>
)

export default ButtonsDocsPage
