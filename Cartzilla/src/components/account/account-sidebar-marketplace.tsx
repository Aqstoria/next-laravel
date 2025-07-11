'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Ratio from 'react-bootstrap/Ratio'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import ListGroup from 'react-bootstrap/ListGroup'

interface AccountSidebarMarketplaceProps {
  avatar?: string
  name: string
  bio?: string
}

interface LinkItem {
  icon: string
  label: string
  href: string
}

const menuItems: { heading?: string; links: LinkItem[] }[] = [
  {
    links: [
      { icon: 'ci-grid', label: 'Dashboard', href: '/account/marketplace' },
      { icon: 'ci-layers', label: 'Products (4)', href: '/account/marketplace/products' },
      { icon: 'ci-pie-chart', label: 'Sales', href: '/account/marketplace/sales' },
      { icon: 'ci-dollar-sign', label: 'Payouts', href: '/account/marketplace/payouts' },
    ],
  },
  {
    heading: 'User account',
    links: [
      { icon: 'ci-shopping-bag', label: 'Purchases (6)', href: '/account/marketplace/purchases' },
      { icon: 'ci-heart', label: 'Favorites', href: '/account/marketplace/favorites' },
      { icon: 'ci-settings', label: 'Settings', href: '/account/marketplace/settings' },
      { icon: 'ci-log-out', label: 'Log out', href: '/account' },
    ],
  },
]

const AccountSidebarMarketplace = ({ avatar, name, bio }: AccountSidebarMarketplaceProps) => {
  const pathname = usePathname()
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()

  return (
    <Fragment>
      <div className="d-none d-lg-block" style={{ marginTop: -105 }} />
      <Offcanvas
        show={isOpen('accountSidebar')}
        onHide={() => closeOffcanvas('accountSidebar')}
        responsive="lg"
        placement="start"
        className="sticky-lg-top pe-lg-0 pe-xl-4"
        aria-label="Account sidebar"
      >
        <div className="d-none d-lg-block" style={{ paddingTop: 105 }} />
        <Offcanvas.Header className="align-items-start d-lg-block py-3 p-lg-0">
          <div
            className={`d-flex ${bio ? 'align-items-start' : 'align-items-center align-items-lg-start'} flex-lg-column gap-lg-3`}
          >
            <Ratio
              aspectRatio="1x1"
              className="border rounded-circle overflow-hidden d-none d-lg-block"
              style={{ width: 86 }}
            >
              {avatar ? (
                <Image src={avatar} width={168} height={168} alt={name} />
              ) : (
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                  <i className="ci-user fs-3" />
                </div>
              )}
            </Ratio>
            <Ratio
              aspectRatio="1x1"
              className="border rounded-circle overflow-hidden flex-shrink-0 d-lg-none"
              style={{ width: 48 }}
            >
              {avatar ? (
                <Image src={avatar} width={92} height={92} alt={name} />
              ) : (
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                  <i className="ci-user fs-lg" />
                </div>
              )}
            </Ratio>
            <div className="w-100 ps-2 ms-1 ms-lg-0 ps-lg-0">
              <h4 className="h6 mb-0">{name}</h4>
              {bio && <p className="fs-sm mt-1 mt-lg-2 mb-0">{bio}</p>}
            </div>
          </div>
          <CloseButton className="d-lg-none mt-n2" onClick={() => closeOffcanvas('accountSidebar')} />
        </Offcanvas.Header>
        <Offcanvas.Body className="d-block pt-2 pt-lg-4 pb-lg-0">
          {menuItems.map(({ heading, links }, index, arr) => (
            <Fragment key={index}>
              {heading && <h6 className="pt-4 ps-2 ms-1">{heading}</h6>}
              <ListGroup as="nav" variant="borderless" className={index === arr.length - 1 && !heading ? 'pt-3' : ''}>
                {links.map(({ icon, label, href }, index) => (
                  <ListGroup.Item
                    key={index}
                    action
                    as={Link}
                    href={href}
                    className="d-flex align-items-center rounded-pill"
                    active={pathname === href}
                    onClick={() => closeOffcanvas('accountSidebar')}
                  >
                    <i className={`${icon} fs-base opacity-75 me-2`} />
                    {label}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Fragment>
          ))}
        </Offcanvas.Body>
        <Offcanvas.Header className="d-lg-block p-lg-0">
          <Button variant="dark" className="rounded-pill w-100 animate-scale mt-lg-4">
            <i className="ci-plus-circle fs-base animate-target me-2 ms-n1" />
            Add product
          </Button>
        </Offcanvas.Header>
      </Offcanvas>

      {/* Sidebar navigation offcanvas toggle that is visible on screens < 992px wide (lg breakpoint) */}
      <Button
        variant="dark"
        size="lg"
        className="fixed-bottom z-sticky w-100 border-0 border-top border-light border-opacity-10 rounded-0 pb-4 d-lg-none"
        onClick={() => openOffcanvas('accountSidebar')}
      >
        <i className="ci-sidebar fs-base me-2" />
        Account menu
      </Button>
    </Fragment>
  )
}

export default AccountSidebarMarketplace
