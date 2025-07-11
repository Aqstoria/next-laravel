'use client'

import { useState, useRef, type FormEvent } from 'react'
import { useModal } from '@/contexts/modal-context'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Collapse from 'react-bootstrap/Collapse'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal'
import SelectBox from '@/components/forms/select-box'

interface Address {
  id: string
  country: string
  city: string
  zip: string
  address: string
  primary: boolean
}

const initialAddresses = {
  primary: {
    id: 'addr1',
    country: 'United States',
    city: 'New York',
    zip: '11741',
    address: '396 Lillian Bolavandy, Holbrook',
    primary: true,
  },
  alternative: {
    id: 'addr2',
    country: 'United States',
    city: 'Orlando',
    zip: '32806',
    address: '514 S. Magnolia St.',
    primary: false,
  },
}

const AddressPanel = ({
  data,
  onUpdateAddress,
  onSetPrimary,
}: {
  data: Address
  onUpdateAddress?: (updatedAddress: Address) => void
  onSetPrimary?: (addressId: string) => void
}) => {
  const [collapseOpen, setCollapseOpen] = useState(true)
  const [validated, setValidated] = useState(false)
  const [address, setAddress] = useState<Address>({ ...data })
  const prevAddress = useRef({ ...data })

  // Update local state when props change
  if (address.primary !== data.primary) {
    setAddress((prev) => ({ ...prev, primary: data.primary }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      event.stopPropagation()
      setValidated(true)
      return
    }

    // Only reach here if form is valid
    prevAddress.current = { ...address }
    setValidated(false) // Reset validation state after successful submit
    setCollapseOpen(true) // Close the form, show the preview

    if (onUpdateAddress) {
      onUpdateAddress(address)
    }
  }

  const resetState = () => {
    setAddress({ ...prevAddress.current })
    setCollapseOpen(true)
    setValidated(false)
  }

  const handlePrimaryToggle = (checked: boolean) => {
    // Update local state
    setAddress((prev) => ({ ...prev, primary: checked }))

    // If checked, call parent's onSetPrimary to handle the exclusive primary logic
    if (checked && onSetPrimary) {
      onSetPrimary(address.id)
    }
  }

  return (
    <div className="border-bottom py-4">
      <Nav className="flex-nowrap align-items-center justify-content-between pb-1 mb-3">
        <div className="d-flex align-items-center gap-3 me-4">
          {address.primary ? (
            <>
              <h2 className="h6 mb-0">Shipping address</h2>
              <Badge pill bg="info">
                Primary
              </Badge>
            </>
          ) : (
            <h2 className="h6 mb-0">Alternative shipping address</h2>
          )}
        </div>
        <NavLink
          className={`hiding-collapse-toggle text-decoration-underline p-0${collapseOpen ? ' collapsed' : ''}`}
          onClick={() => setCollapseOpen((prev) => !prev)}
        >
          Edit
        </NavLink>
      </Nav>
      <Collapse in={collapseOpen}>
        <div id={`addressPreview-${address.id}`}>
          <ul className="list-unstyled fs-sm m-0">
            <li>
              {address.city} {address.zip}, {address.country}
            </li>
            <li>{address.address}</li>
          </ul>
        </div>
      </Collapse>
      <Collapse in={!collapseOpen}>
        <div id={`addressForm-${address.id}`}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="g-3 g-sm-4">
              <Col sm={6}>
                <Form.Label>Country</Form.Label>
                <SelectBox
                  choices={[
                    { value: '', label: 'Select country', placeholder: true },
                    {
                      label: 'Africa',
                      choices: [
                        { value: 'Nigeria', label: 'Nigeria' },
                        { value: 'South Africa', label: 'South Africa' },
                        { value: 'Kenya', label: 'Kenya' },
                        { value: 'Egypt', label: 'Egypt' },
                        { value: 'Ethiopia', label: 'Ethiopia' },
                      ],
                    },
                    {
                      label: 'Asia',
                      choices: [
                        { value: 'China', label: 'China' },
                        { value: 'India', label: 'India' },
                        { value: 'Japan', label: 'Japan' },
                        { value: 'South Korea', label: 'South Korea' },
                        { value: 'Saudi Arabia', label: 'Saudi Arabia' },
                      ],
                    },
                    {
                      label: 'Europe',
                      choices: [
                        { value: 'Germany', label: 'Germany' },
                        { value: 'France', label: 'France' },
                        { value: 'United Kingdom', label: 'United Kingdom' },
                        { value: 'Italy', label: 'Italy' },
                        { value: 'Spain', label: 'Spain' },
                      ],
                    },
                    {
                      label: 'North America',
                      choices: [
                        { value: 'United States', label: 'United States' },
                        { value: 'Canada', label: 'Canada' },
                        { value: 'Mexico', label: 'Mexico' },
                        { value: 'Jamaica', label: 'Jamaica' },
                        { value: 'Costa Rica', label: 'Costa Rica' },
                      ],
                    },
                    {
                      label: 'South America',
                      choices: [
                        { value: 'Brazil', label: 'Brazil' },
                        { value: 'Argentina', label: 'Argentina' },
                        { value: 'Colombia', label: 'Colombia' },
                        { value: 'Chile', label: 'Chile' },
                        { value: 'Peru', label: 'Peru' },
                      ],
                    },
                    {
                      label: 'Oceania',
                      choices: [
                        { value: 'Australia', label: 'Australia' },
                        { value: 'New Zealand', label: 'New Zealand' },
                        { value: 'Papua New Guinea', label: 'Papua New Guinea' },
                        { value: 'Fiji', label: 'Fiji' },
                        { value: 'Solomon Islands', label: 'Solomon Islands' },
                      ],
                    },
                  ]}
                  value={address.country}
                  onChange={(value) => setAddress({ ...address, country: value as string })}
                  searchEnabled
                  aria-label="Select country"
                  required
                />
                <Form.Control.Feedback type="invalid">Please select your country!</Form.Control.Feedback>
              </Col>
              <Col sm={6}>
                <Form.Label>City</Form.Label>
                <SelectBox
                  choices={[
                    { value: '', label: 'Select city', placeholder: true },
                    { value: 'Austin', label: 'Austin' },
                    { value: 'Charlotte', label: 'Charlotte' },
                    { value: 'Chicago', label: 'Chicago' },
                    { value: 'Columbus', label: 'Columbus' },
                    { value: 'Dallas', label: 'Dallas' },
                    { value: 'Houston', label: 'Houston' },
                    { value: 'Jacksonville', label: 'Jacksonville' },
                    { value: 'Los Angeles', label: 'Los Angeles' },
                    { value: 'New York', label: 'New York' },
                    { value: 'Orlando', label: 'Orlando' },
                    { value: 'Philadelphia', label: 'Philadelphia' },
                    { value: 'Phoenix', label: 'Phoenix' },
                    { value: 'San Antonio', label: 'San Antonio' },
                    { value: 'San Diego', label: 'San Diego' },
                    { value: 'San Jose', label: 'San Jose' },
                  ]}
                  value={address.city}
                  onChange={(value) => setAddress({ ...address, city: value as string })}
                  searchEnabled
                  aria-label="Select city"
                  required
                />
                <Form.Control.Feedback type="invalid">Please select your city!</Form.Control.Feedback>
              </Col>
              <Col sm={4}>
                <Form.Group controlId={`${address.id}-zip`}>
                  <Form.Label>ZIP code</Form.Label>
                  <Form.Control
                    type="text"
                    value={address.zip}
                    onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please enter your ZIP code!</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={8}>
                <Form.Group controlId={`${address.id}-address`}>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={address.address}
                    onChange={(e) => setAddress({ ...address, address: e.target.value })}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please enter your address!</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Check
                  id={`set-primary-${address.id}`}
                  label="Set as primary address"
                  className="mb-0"
                  checked={address.primary}
                  onChange={(e) => handlePrimaryToggle(e.target.checked)}
                />
              </Col>
              <Col xs={12}>
                <div className="d-flex gap-3 pt-2 pt-sm-0">
                  <Button type="submit">Save changes</Button>
                  <Button variant="secondary" onClick={resetState}>
                    Close
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Collapse>
    </div>
  )
}

const AccountAddressPanels = () => {
  const { openModal, closeModal, isShown } = useModal()
  const [addresses, setAddresses] = useState({
    primary: { ...initialAddresses.primary },
    alternative: { ...initialAddresses.alternative },
  })

  // Handle setting an address as primary
  const handleSetPrimary = (addressId: string) => {
    setAddresses((prev) => ({
      primary: {
        ...prev.primary,
        primary: prev.primary.id === addressId,
      },
      alternative: {
        ...prev.alternative,
        primary: prev.alternative.id === addressId,
      },
    }))
  }

  const handleUpdateAddress = (isPrimary: boolean) => (updatedAddress: Address) => {
    if (isPrimary) {
      setAddresses((prev) => ({
        ...prev,
        primary: updatedAddress,
        // If this address is set as primary, make sure the other isn't
        alternative: updatedAddress.primary ? { ...prev.alternative, primary: false } : prev.alternative,
      }))
    } else {
      setAddresses((prev) => ({
        ...prev,
        alternative: updatedAddress,
        // If this address is set as primary, make sure the other isn't
        primary: updatedAddress.primary ? { ...prev.primary, primary: false } : prev.primary,
      }))
    }
  }

  // Handle Add address form validation
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <>
      <AddressPanel
        data={addresses.primary}
        onUpdateAddress={handleUpdateAddress(true)}
        onSetPrimary={handleSetPrimary}
      />
      <AddressPanel
        data={addresses.alternative}
        onUpdateAddress={handleUpdateAddress(false)}
        onSetPrimary={handleSetPrimary}
      />

      {/* Add address button */}
      <Nav className="pt-4">
        <Nav.Link className="animate-underline fs-base px-0" onClick={() => openModal('addAddress')}>
          <i className="ci-plus fs-lg ms-n1 me-2" />
          <span className="animate-target">Add address</span>
        </Nav.Link>
      </Nav>

      {/* Add address form modal */}
      <Modal
        size="lg"
        show={isShown('addAddress')}
        onHide={() => closeModal('addAddress')}
        centered
        backdrop="static"
        aria-labelledby="addAddressModalLabel"
      >
        <Modal.Header closeButton>
          <Modal.Title as="h5" id="addAddressModalLabel">
            Add new address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit} className="row g-3 g-lg-4">
            <Col lg={6}>
              <Form.Label>Country</Form.Label>
              <SelectBox
                choices={[
                  { value: '', label: 'Select country', placeholder: true },
                  {
                    label: 'Africa',
                    choices: [
                      { value: 'Nigeria', label: 'Nigeria' },
                      { value: 'South Africa', label: 'South Africa' },
                      { value: 'Kenya', label: 'Kenya' },
                      { value: 'Egypt', label: 'Egypt' },
                      { value: 'Ethiopia', label: 'Ethiopia' },
                    ],
                  },
                  {
                    label: 'Asia',
                    choices: [
                      { value: 'China', label: 'China' },
                      { value: 'India', label: 'India' },
                      { value: 'Japan', label: 'Japan' },
                      { value: 'South Korea', label: 'South Korea' },
                      { value: 'Saudi Arabia', label: 'Saudi Arabia' },
                    ],
                  },
                  {
                    label: 'Europe',
                    choices: [
                      { value: 'Germany', label: 'Germany' },
                      { value: 'France', label: 'France' },
                      { value: 'United Kingdom', label: 'United Kingdom' },
                      { value: 'Italy', label: 'Italy' },
                      { value: 'Spain', label: 'Spain' },
                    ],
                  },
                  {
                    label: 'North America',
                    choices: [
                      { value: 'United States', label: 'United States' },
                      { value: 'Canada', label: 'Canada' },
                      { value: 'Mexico', label: 'Mexico' },
                      { value: 'Jamaica', label: 'Jamaica' },
                      { value: 'Costa Rica', label: 'Costa Rica' },
                    ],
                  },
                  {
                    label: 'South America',
                    choices: [
                      { value: 'Brazil', label: 'Brazil' },
                      { value: 'Argentina', label: 'Argentina' },
                      { value: 'Colombia', label: 'Colombia' },
                      { value: 'Chile', label: 'Chile' },
                      { value: 'Peru', label: 'Peru' },
                    ],
                  },
                  {
                    label: 'Oceania',
                    choices: [
                      { value: 'Australia', label: 'Australia' },
                      { value: 'New Zealand', label: 'New Zealand' },
                      { value: 'Papua New Guinea', label: 'Papua New Guinea' },
                      { value: 'Fiji', label: 'Fiji' },
                      { value: 'Solomon Islands', label: 'Solomon Islands' },
                    ],
                  },
                ]}
                searchEnabled
                aria-label="Select country"
                required
              />
              <Form.Control.Feedback type="invalid">Please select your country!</Form.Control.Feedback>
            </Col>
            <Col lg={6}>
              <Form.Label>City</Form.Label>
              <SelectBox
                choices={[
                  { value: '', label: 'Select city', placeholder: true },
                  { value: 'Austin', label: 'Austin' },
                  { value: 'Charlotte', label: 'Charlotte' },
                  { value: 'Chicago', label: 'Chicago' },
                  { value: 'Columbus', label: 'Columbus' },
                  { value: 'Dallas', label: 'Dallas' },
                  { value: 'Houston', label: 'Houston' },
                  { value: 'Jacksonville', label: 'Jacksonville' },
                  { value: 'Los Angeles', label: 'Los Angeles' },
                  { value: 'New York', label: 'New York' },
                  { value: 'Orlando', label: 'Orlando' },
                  { value: 'Philadelphia', label: 'Philadelphia' },
                  { value: 'Phoenix', label: 'Phoenix' },
                  { value: 'San Antonio', label: 'San Antonio' },
                  { value: 'San Diego', label: 'San Diego' },
                  { value: 'San Jose', label: 'San Jose' },
                ]}
                searchEnabled
                aria-label="Select city"
                required
              />
              <Form.Control.Feedback type="invalid">Please select your city!</Form.Control.Feedback>
            </Col>
            <Col sm={4}>
              <Form.Group controlId="add-zip">
                <Form.Label>ZIP code</Form.Label>
                <Form.Control type="text" required />
                <Form.Control.Feedback type="invalid">Please enter your ZIP code!</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={8}>
              <Form.Group controlId="add-address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" required />
                <Form.Control.Feedback type="invalid">Please enter your address!</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Check id="set-primary" label="Set as primary address" className="mb-0" />
            </Col>
            <Col xs={12}>
              <div className="d-flex gap-3 pt-2 pt-sm-0">
                <Button type="submit">Add address</Button>
                <Button variant="secondary" onClick={() => closeModal('addAddress')}>
                  Close
                </Button>
              </div>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AccountAddressPanels
