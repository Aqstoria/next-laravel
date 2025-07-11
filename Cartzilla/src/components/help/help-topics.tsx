'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'

export interface HelpTopic {
  icon?: string
  title: string
  links: [string, string][]
}

interface HelpTopicsProps {
  heading?: string
  topics: HelpTopic[]
}

const HelpTopics = ({ heading, topics }: HelpTopicsProps) => {
  const [activeKey, setActiveKey] = useState(topics[0].title.toLowerCase().replace(/\s+/g, '-'))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1)
      if (hash) setActiveKey(hash)
    }
  }, [])

  return (
    <TabContainer
      transition={false}
      activeKey={activeKey}
      onSelect={(currentKey) => {
        if (currentKey) {
          setActiveKey(currentKey)
          window.history.replaceState(null, '', `#${currentKey}`)
        }
      }}
    >
      <Row className="g-0 pt-md-2 pt-xl-4">
        <Col as="aside" md={4} lg={3} className="pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
          <h2 className="h5 border-bottom pb-3 pb-sm-4 mb-0">{heading || 'Help topics'}</h2>
          <ListGroup variant="borderless" className="pt-4 pe-md-4">
            {topics.map(({ icon, title }, index) => (
              <ListGroup.Item
                key={index}
                action
                eventKey={title.toLowerCase().replace(/\s+/g, '-')}
                className="d-flex align-items-center"
                onClick={() => setActiveKey(title.toLowerCase().replace(/\s+/g, '-'))}
              >
                {icon && <i className={`${icon} fs-base opacity-75 me-2`} />}
                {title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={8} lg={9}>
          <TabContent>
            {topics.map(({ title, links }, index) => (
              <TabPane key={index} eventKey={title.toLowerCase().replace(/\s+/g, '-')}>
                <div className="d-flex border-bottom ps-md-4 pb-3 pb-sm-4">
                  <h2 className="h5 mb-0">{title}</h2>
                </div>
                <div className="position-relative">
                  <div className="position-absolute top-0 start-0 h-100 border-start d-none d-md-block" />
                  <Nav as="ul" className="flex-column gap-3 pt-4 ps-md-4">
                    {links.map((link, index) => (
                      <li key={index}>
                        <Nav.Link as={Link} href={link[1]} className="hover-effect-underline fw-normal p-0">
                          {link[0]}
                        </Nav.Link>
                      </li>
                    ))}
                  </Nav>
                </div>
              </TabPane>
            ))}
          </TabContent>
        </Col>
      </Row>
    </TabContainer>
  )
}

export default HelpTopics
