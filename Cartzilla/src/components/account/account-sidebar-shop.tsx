'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import { useModal } from '@/contexts/modal-context'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

interface AccountSidebarShopProps {
  name: string
  bonuses?: {
    available: number
    inprogress: number
  }
}

interface LinkItem {
  icon: string
  label: string
  href: string
  badge?: number | string
}

const menuItems: { heading?: string; links: LinkItem[] }[] = [
  {
    links: [
      { icon: 'ci-shopping-bag', label: 'Orders', href: '/account/shop', badge: 1 },
      { icon: 'ci-heart', label: 'Wishlist', href: '/account/shop/wishlist' },
      { icon: 'ci-credit-card', label: 'Payment methods', href: '/account/shop/payment' },
      { icon: 'ci-star', label: 'My reviews', href: '/account/shop/reviews' },
    ],
  },
  {
    heading: 'Manage account',
    links: [
      { icon: 'ci-user', label: 'Personal info', href: '/account/shop/info' },
      { icon: 'ci-map-pin', label: 'Addresses', href: '/account/shop/addresses' },
      { icon: 'ci-bell', label: 'Notifications', href: '/account/shop/notifications' },
    ],
  },
  {
    heading: 'Customer service',
    links: [
      { icon: 'ci-help-circle', label: 'Help center', href: '/help' },
      { icon: 'ci-info', label: 'Terms and conditions', href: '/terms' },
    ],
  },
  {
    links: [{ icon: 'ci-log-out', label: 'Log out', href: '/account' }],
  },
]

const AccountSidebarShop = ({ name, bonuses }: AccountSidebarShopProps) => {
  const pathname = usePathname()

  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const { openModal, closeModal, isShown } = useModal()

  return (
    <Fragment>
      <Offcanvas
        show={isOpen('accountSidebar')}
        onHide={() => closeOffcanvas('accountSidebar')}
        responsive="lg"
        placement="start"
        className="pe-lg-0 pe-xl-4"
        aria-label="Account sidebar"
      >
        <Offcanvas.Header className="d-lg-block py-3 p-lg-0">
          <div className="d-flex align-items-center">
            <div
              className="h5 d-flex justify-content-center align-items-center flex-shrink-0 text-primary bg-primary-subtle lh-1 rounded-circle mb-0"
              style={{ width: '3rem', height: '3rem' }}
            >
              {name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 ps-3">
              <h5 className="h6 mb-0">{name}</h5>
              {bonuses && (
                <Nav className="flex-nowrap text-nowrap min-w-0 mt-1">
                  <Nav.Link className="animate-underline text-body p-0" onClick={() => openModal('bonuses')}>
                    <svg
                      className="text-warning flex-shrink-0 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z"></path>
                      <path d="M8 5.363a.5.5 0 0 1-.495-.573C7.752 3.123 9.054-.03 12.219-.03c1.807.001 2.447.977 2.447 1.813 0 1.486-2.069 3.58-6.667 3.58zM12.219.971c-2.388 0-3.295 2.27-3.595 3.377 1.884-.088 3.072-.565 3.756-.971.949-.563 1.287-1.193 1.287-1.595 0-.599-.747-.811-1.447-.811z"></path>
                      <path d="M8.001 5.363c-4.598 0-6.667-2.094-6.667-3.58 0-.836.641-1.812 2.448-1.812 3.165 0 4.467 3.153 4.713 4.819a.5.5 0 0 1-.495.573zM3.782.971c-.7 0-1.448.213-1.448.812 0 .851 1.489 2.403 5.042 2.566C7.076 3.241 6.169.971 3.782.971z"></path>
                    </svg>
                    <span className="animate-target me-1">{bonuses.available} bonuses</span>
                    <span className="text-body fw-normal text-truncate">available</span>
                  </Nav.Link>
                </Nav>
              )}
            </div>
          </div>
          <CloseButton className="d-lg-none" onClick={() => closeOffcanvas('accountSidebar')} />
        </Offcanvas.Header>
        <Offcanvas.Body className="d-block pt-2 pt-lg-4 pb-lg-0">
          {menuItems.map(({ heading, links }, index, arr) => (
            <Fragment key={index}>
              {heading && <h6 className="pt-4 ps-2 ms-1">{heading}</h6>}
              <ListGroup as="nav" variant="borderless" className={index === arr.length - 1 && !heading ? 'pt-3' : ''}>
                {links.map(({ icon, label, href, badge }, index) => (
                  <ListGroup.Item
                    key={index}
                    action
                    as={Link}
                    href={href}
                    className="d-flex align-items-center"
                    active={pathname === href}
                    onClick={() => closeOffcanvas('accountSidebar')}
                  >
                    <i className={`${icon} fs-base opacity-75 me-2`} />
                    {label}
                    {badge && (
                      <Badge pill className="ms-auto">
                        {badge}
                      </Badge>
                    )}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Fragment>
          ))}
        </Offcanvas.Body>
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

      {/* Bonuses modal */}
      {bonuses && (
        <Modal
          show={isShown('bonuses')}
          onHide={() => closeModal('bonuses')}
          centered
          aria-labelledby="bonusesModalLabel"
        >
          <Modal.Header closeButton>
            <Modal.Title as="h5" id="bonusesModalLabel">
              My bonuses
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="align-items-center">
              <Col sm={6} className="mb-4 mb-sm-0">
                <div className="position-relative bg-warning text-center rounded-4 overflow-hidden">
                  <div className="position-relative z-1 py-3 px-4">
                    <svg
                      className="text-white opacity-75 mb-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z"></path>
                      <path d="M8 5.363a.5.5 0 0 1-.495-.573C7.752 3.123 9.054-.03 12.219-.03c1.807.001 2.447.977 2.447 1.813 0 1.486-2.069 3.58-6.667 3.58zM12.219.971c-2.388 0-3.295 2.27-3.595 3.377 1.884-.088 3.072-.565 3.756-.971.949-.563 1.287-1.193 1.287-1.595 0-.599-.747-.811-1.447-.811z"></path>
                      <path d="M8.001 5.363c-4.598 0-6.667-2.094-6.667-3.58 0-.836.641-1.812 2.448-1.812 3.165 0 4.467 3.153 4.713 4.819a.5.5 0 0 1-.495.573zM3.782.971c-.7 0-1.448.213-1.448.812 0 .851 1.489 2.403 5.042 2.566C7.076 3.241 6.169.971 3.782.971z"></path>
                    </svg>
                    <div className="h2 text-white pb-1 mb-2">{bonuses.available}</div>
                    <p className="fs-sm fw-medium text-white opacity-75 mb-0">1 bonus = 1$</p>
                  </div>
                  <div
                    className="position-absolute bg-white bg-opacity-10 rounded-circle"
                    style={{ top: -15, right: -128, width: 165, height: 165 }}
                  />
                  <div
                    className="position-absolute bg-white bg-opacity-10 rounded-circle"
                    style={{ top: -15, left: -128, width: 165, height: 165 }}
                  />
                </div>
              </Col>
              <Col sm={6}>
                <ul className="list-unstyled fs-sm m-0">
                  <li className="d-flex align-items-center justify-content-between">
                    Available:
                    <span className="text-dark-emphasis fw-semibold ms-2">{bonuses.available}</span>
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    Waiting activation:
                    <span className="text-dark-emphasis fw-semibold ms-2">{bonuses.inprogress}</span>
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    Total:
                    <span className="text-dark-emphasis fw-semibold ms-2">
                      {bonuses.available + bonuses.inprogress}
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}
    </Fragment>
  )
}

export default AccountSidebarShop
