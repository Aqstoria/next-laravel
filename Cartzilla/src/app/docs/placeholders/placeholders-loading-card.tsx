'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Placeholder from 'react-bootstrap/Placeholder'
import PlaceholderButton from 'react-bootstrap/PlaceholderButton'

const PlaceholdersLoadingCardDemo = () => {
  const code = `'use client'

import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Placeholder from 'react-bootstrap/Placeholder'
import PlaceholderButton from 'react-bootstrap/PlaceholderButton'

export default function PlaceholdersLoadingCardDemo() {
  return (
    <Card style={{ maxWidth: 300 }}>
      <Placeholder as="div" animation="wave" className="position-relative">
        <Placeholder className="card-img-top ratio ratio-16x9" />
        <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40"/>
      </Placeholder>
      <CardBody>
        <Placeholder as={CardTitle} animation="glow">
          <Placeholder xs={6} />
          <span className="visually-hidden">Card title</span>
        </Placeholder>
        <Placeholder as={CardText} animation="glow">
          <Placeholder xs={7} size="sm" className="me-2" />
          <Placeholder xs={4} size="sm" />
          <Placeholder xs={4} size="sm" className="me-2" />
          <Placeholder xs={6} size="sm" />
          <Placeholder xs={8} size="sm" />
        </Placeholder>
        <PlaceholderButton variant="primary" animation="wave" xs={6}>
          &nbsp;
        </PlaceholderButton>
      </CardBody>
    </Card>
  )
}`

  return (
    <section id="placeholders-loading-card" className="docs-section">
      <h4>Loading card example</h4>
      <DocsComponentDemo code={code}>
        <Card style={{ maxWidth: 300 }}>
          <Placeholder as="div" animation="wave" className="position-relative">
            <Placeholder className="card-img-top ratio ratio-16x9" />
            <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
          </Placeholder>
          <CardBody>
            <Placeholder as={CardTitle} animation="glow">
              <Placeholder xs={6} />
              <span className="visually-hidden">Card title</span>
            </Placeholder>
            <Placeholder as={CardText} animation="glow">
              <Placeholder xs={7} size="sm" className="me-2" />
              <Placeholder xs={4} size="sm" />
              <Placeholder xs={4} size="sm" className="me-2" />
              <Placeholder xs={6} size="sm" />
              <Placeholder xs={8} size="sm" />
            </Placeholder>
            <PlaceholderButton variant="primary" animation="wave" xs={6}>
              &nbsp;
            </PlaceholderButton>
          </CardBody>
        </Card>
      </DocsComponentDemo>
    </section>
  )
}

export default PlaceholdersLoadingCardDemo
