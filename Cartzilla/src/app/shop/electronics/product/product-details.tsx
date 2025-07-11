import { Fragment } from 'react'
import Link from 'next/link'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import PopoverBody from 'react-bootstrap/PopoverBody'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Alert from 'react-bootstrap/Alert'

interface ProductDetailsElectronicsProps {
  data: {
    category: string
    items: {
      label: string
      value: string
      info?: string
    }[]
  }[]
  dataSlice?: [number, number]
}

const ProductDetailsElectronics = ({ data, dataSlice }: ProductDetailsElectronicsProps) => (
  <Fragment>
    <h2 className="h3 pb-2 pb-md-3">Product details</h2>
    {(dataSlice ? data.slice(dataSlice[0], dataSlice[1]) : data).map(({ category, items }, index) => (
      <Fragment key={index}>
        <h3 className="h6">{category}</h3>
        <ul className="list-unstyled d-flex flex-column gap-3 fs-sm pb-3 m-0 mb-2 mb-sm-3">
          {items.map(({ label, value, info }, index) => (
            <li key={index} className="d-flex align-items-center position-relative pe-4">
              <span>{label}:</span>
              <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
              <span className="text-dark-emphasis fw-medium text-end">{value}</span>
              {info && (
                <OverlayTrigger
                  trigger={['hover', 'focus']}
                  placement="right"
                  overlay={
                    <Popover className="popover-sm">
                      <PopoverBody>{info}</PopoverBody>
                    </Popover>
                  }
                >
                  <i className="ci-info fs-base text-body-tertiary position-absolute top-50 end-0 translate-middle-y" />
                </OverlayTrigger>
              )}
            </li>
          ))}
        </ul>
      </Fragment>
    ))}
    {dataSlice ? (
      <Nav>
        <NavLink as={Link} href="./product?tab=details" className="text-primary animate-underline px-0">
          <span className="animate-target">See all product details</span>
          <i className="ci-chevron-right fs-base ms-1" />
        </NavLink>
      </Nav>
    ) : (
      <Fragment>
        <Alert variant="info" className="d-flex mb-2 mb-sm-3">
          <i className="ci-info fs-lg pe-1 me-2" style={{ marginTop: 0.125 }} />
          <div className="fs-sm">Product specifications and equipment are subject to change without notice.</div>
        </Alert>
        <div className="pt-3">
          <h3 className="h6">Do you have any questions?</h3>
          <Link href="#" className="btn btn-sm btn-primary">
            Contact us
          </Link>
        </div>
      </Fragment>
    )}
  </Fragment>
)

export default ProductDetailsElectronics
