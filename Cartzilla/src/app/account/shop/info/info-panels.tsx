'use client'

import { useState, useRef, type FormEvent } from 'react'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Collapse from 'react-bootstrap/Collapse'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SelectBox from '@/components/forms/select-box'
import Cleave from 'cleave.js/react'
import PasswordInput from '@/components/forms/password-input'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AccountInfoPanels = () => {
  const [infoCollapseOpen, setInfoCollapseOpen] = useState(true)
  const [contactCollapseOpen, setContactCollapseOpen] = useState(true)
  const [passwordCollapseOpen, setPasswordCollapseOpen] = useState(true)

  const [validatedInfo, setValidatedInfo] = useState(false)
  const [validatedContact, setValidatedContact] = useState(false)
  const [validatedPassword, setValidatedPassword] = useState(false)

  const initialInfoData = {
    fn: 'Susan',
    ln: 'Gardner',
    birthdate: 'May 12, 1996',
    language: 'English',
  }

  const initialContactData = {
    email: 'susan.gardner@email.com',
    phone: '+1 805 348 72',
  }

  // State to manage current form values
  const [infoData, setInfoData] = useState(initialInfoData)
  const [contactData, setContactData] = useState(initialContactData)
  const [birthDate, setBirthDate] = useState<Date | null>(new Date(initialInfoData.birthdate))

  // Refs to store previous state before editing
  const prevInfoData = useRef(infoData)
  const prevBirthDate = useRef(birthDate)
  const prevContactData = useRef(contactData)

  // Handle form submit
  const handleSubmit = (event: FormEvent<HTMLFormElement>, formType: 'info' | 'contact' | 'password') => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      event.stopPropagation()

      if (formType === 'info') {
        setValidatedInfo(true)
      } else if (formType === 'contact') {
        setValidatedContact(true)
      } else {
        setValidatedPassword(true)
      }

      return
    }

    if (formType === 'info') {
      prevInfoData.current = infoData
      prevBirthDate.current = birthDate
      setValidatedInfo(true)
      setInfoCollapseOpen((prev) => !prev)
    } else if (formType === 'contact') {
      prevContactData.current = contactData
      setValidatedContact(true)
      setContactCollapseOpen((prev) => !prev)
    } else {
      setValidatedPassword(true)
      setPasswordCollapseOpen((prev) => !prev)
    }
  }

  const resetInfoState = () => {
    setInfoData(prevInfoData.current)
    setBirthDate(prevBirthDate.current)
    setInfoCollapseOpen((prev) => !prev)
  }

  const resetContactState = () => {
    setContactData(prevContactData.current)
    setContactCollapseOpen((prev) => !prev)
  }

  return (
    <>
      {/* Basic info */}
      <div className="border-bottom py-4">
        <Nav className="flex-nowrap align-items-center justify-content-between pb-1 mb-3">
          <h2 className="h6 mb-0">Basic info</h2>
          <NavLink
            className={`hiding-collapse-toggle text-decoration-underline p-0${infoCollapseOpen ? ' collapsed' : ''}`}
            onClick={() => setInfoCollapseOpen((prev) => !prev)}
          >
            Edit
          </NavLink>
        </Nav>
        <Collapse in={infoCollapseOpen}>
          <div id="infoPreview">
            <ul className="list-unstyled fs-sm m-0">
              <li>
                {infoData.fn} {infoData.ln}
              </li>
              <li>{infoData.birthdate}</li>
              <li>{infoData.language}</li>
            </ul>
          </div>
        </Collapse>
        <Collapse in={!infoCollapseOpen}>
          <div id="infoForm">
            <Form noValidate validated={validatedInfo} onSubmit={(e) => handleSubmit(e, 'info')}>
              <Row className="g-3 g-sm-4">
                <Col sm={6}>
                  <Form.Label htmlFor="fn">First name</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      id="fn"
                      value={infoData.fn}
                      onChange={(e) => setInfoData({ ...infoData, fn: e.target.value })}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please enter your first name!</Form.Control.Feedback>
                  </div>
                </Col>
                <Col sm={6}>
                  <Form.Label htmlFor="ln">Last name</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      id="ln"
                      value={infoData.ln}
                      onChange={(e) => setInfoData({ ...infoData, ln: e.target.value })}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please enter your last name!</Form.Control.Feedback>
                  </div>
                </Col>
                <Col sm={6}>
                  <Form.Label htmlFor="birthdate">Date of birth</Form.Label>
                  <div className="position-relative">
                    <DatePicker
                      selected={birthDate}
                      showYearDropdown
                      onChange={(date) => {
                        setBirthDate(date)
                        setInfoData((prev) => ({
                          ...prev,
                          birthdate: date
                            ? date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                            : '',
                        }))
                      }}
                      dateFormat="MMMM d, yyyy"
                      className="form-control form-icon-end bg-image-none"
                      id="birthdate"
                      placeholderText="Choose date"
                      popperPlacement="bottom-start"
                    />
                    <i className="ci-calendar position-absolute top-50 end-0 translate-middle-y me-3" />
                  </div>
                </Col>
                <Col sm={6}>
                  <Form.Label>Language</Form.Label>
                  <SelectBox
                    choices={[
                      {
                        value: 'English',
                        label:
                          '<div class="d-flex align-items-center"><img src="/img/flags/en-uk.png" class="flex-shrink-0 me-2" width="20" alt="English"> English</div>',
                      },
                      {
                        value: 'Français',
                        label:
                          '<div class="d-flex align-items-center"><img src="/img/flags/fr.png" class="flex-shrink-0 me-2" width="20" alt="Français"> Français</div>',
                      },
                      {
                        value: 'Deutsch',
                        label:
                          '<div class="d-flex align-items-center"><img src="/img/flags/de.png" class="flex-shrink-0 me-2" width="20" alt="Deutsch"> Deutsch</div>',
                      },
                      {
                        value: 'Italiano',
                        label:
                          '<div class="d-flex align-items-center"><img src="/img/flags/it.png" class="flex-shrink-0 me-2" width="20" alt="Italiano"> Italiano</div>',
                      },
                    ]}
                    value={infoData.language}
                    onChange={(value) => setInfoData({ ...infoData, language: value as string })}
                    placeholder="Select language"
                    aria-label="Select language"
                  />
                </Col>
                <Col xs={12}>
                  <div className="d-flex gap-3 pt-2 pt-sm-0">
                    <Button type="submit">Save changes</Button>
                    <Button variant="secondary" aria-controls="infoPreview infoForm" onClick={resetInfoState}>
                      Close
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Collapse>
      </div>

      {/* Contact */}
      <div className="border-bottom py-4">
        <Nav className="flex-nowrap align-items-center justify-content-between pb-1 mb-3">
          <h2 className="h6 mb-0">Contact</h2>
          <NavLink
            className={`hiding-collapse-toggle text-decoration-underline p-0${contactCollapseOpen ? ' collapsed' : ''}`}
            onClick={() => setContactCollapseOpen((prev) => !prev)}
          >
            Edit
          </NavLink>
        </Nav>
        <Collapse in={contactCollapseOpen}>
          <div id="contactPreview">
            <ul className="list-unstyled fs-sm m-0">
              <li>{contactData.email}</li>
              <li>
                {contactData.phone} <span className="text-success ms-1">Verified</span>
              </li>
            </ul>
          </div>
        </Collapse>
        <Collapse in={!contactCollapseOpen}>
          <div id="contactForm">
            <Form noValidate validated={validatedContact} onSubmit={(e) => handleSubmit(e, 'contact')}>
              <Row className="g-3 g-sm-4">
                <Col sm={6}>
                  <Form.Label htmlFor="email">Email address</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type="email"
                      id="email"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please enter a valid email address!</Form.Control.Feedback>
                  </div>
                </Col>
                <Col sm={6}>
                  <Form.Label htmlFor="phone">Phone number</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      as={Cleave}
                      id="phone"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      options={{ numericOnly: true, delimiters: ['+1 ', ' ', ' '], blocks: [0, 3, 3, 2] }}
                      placeholder="+1 ___ ___ __"
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please enter your phone number!</Form.Control.Feedback>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="d-flex gap-3 pt-2 pt-sm-0">
                    <Button type="submit">Save changes</Button>
                    <Button variant="secondary" aria-controls="contactPreview contactForm" onClick={resetContactState}>
                      Close
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Collapse>
      </div>

      {/* Password */}
      <div className="border-bottom py-4">
        <Nav className="flex-nowrap align-items-center justify-content-between pb-1 mb-3">
          <h2 className="h6 mb-0">Password</h2>
          <NavLink
            className={`hiding-collapse-toggle text-decoration-underline p-0${passwordCollapseOpen ? ' collapsed' : ''}`}
            onClick={() => setPasswordCollapseOpen((prev) => !prev)}
          >
            Edit
          </NavLink>
        </Nav>
        <Collapse in={passwordCollapseOpen}>
          <div id="passwordPreview">
            <ul className="list-unstyled fs-sm m-0">
              <li>**************</li>
            </ul>
          </div>
        </Collapse>
        <Collapse in={!passwordCollapseOpen}>
          <div id="passwordForm">
            <Form noValidate validated={validatedPassword} onSubmit={(e) => handleSubmit(e, 'password')}>
              <Row className="g-3 g-sm-4">
                <Col sm={6}>
                  <Form.Label htmlFor="current-password">Current password</Form.Label>
                  <PasswordInput id="current-password" required />
                </Col>
                <Col sm={6}>
                  <Form.Label htmlFor="new-password">New password</Form.Label>
                  <PasswordInput id="new-password" required />
                </Col>
                <Col xs={12}>
                  <div className="d-flex gap-3 pt-2 pt-sm-0">
                    <Button type="submit">Save changes</Button>
                    <Button
                      type="reset"
                      variant="secondary"
                      aria-controls="passwordPreview passwordForm"
                      onClick={() => setPasswordCollapseOpen((prev) => !prev)}
                    >
                      Close
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default AccountInfoPanels
