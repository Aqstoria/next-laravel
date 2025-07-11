import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const IconsAnimationDemo = () => {
  const code = `import Button from 'react-bootstrap/Button'

export default function IconsAnimationDemo() {
  return (
    <div className="d-flex flex-wrap gap-4">
      {[
        { icon: 'bell', animation: 'shake' },
        { icon: 'heart', animation: 'pulse' },
        { icon: 'refresh-cw', animation: 'rotate' },
        { icon: 'search', animation: 'scale' },
        { icon: 'arrow-up', animation: 'slide-up' },
        { icon: 'arrow-right', animation: 'slide-end' },
        { icon: 'arrow-down', animation: 'slide-down' },
        { icon: 'arrow-left', animation: 'slide-start' },
      ].map(({ icon, animation }) => (
        <Button key={icon} variant="icon" size="lg" className={\`border animate-\${animation} fs-xl\`}>
          <i className={\`ci-\${icon} animate-target\`}/>
        </Button>
      ))}
    </div>
  )
}`

  return (
    <section id="icons-animation" className="docs-section pb-sm-2 mb-5">
      <h4>Animate on hover</h4>
      <DocsComponentDemo code={code}>
        <Row xs={3} sm={5} lg={6} xl="auto" className="justify-content-xl-between g-4">
          {[
            { icon: 'bell', animation: 'shake', label: 'Shake' },
            { icon: 'heart', animation: 'pulse', label: 'Pulse' },
            { icon: 'refresh-cw', animation: 'rotate', label: 'Rotate' },
            { icon: 'search', animation: 'scale', label: 'Scale' },
            { icon: 'arrow-up', animation: 'slide-up', label: 'Slide up' },
            { icon: 'arrow-right', animation: 'slide-end', label: 'Slide end' },
            { icon: 'arrow-down', animation: 'slide-down', label: 'Slide down' },
            { icon: 'arrow-left', animation: 'slide-start', label: 'Slide start' },
          ].map(({ icon, animation, label }) => (
            <Col key={icon} className="position-relative text-center">
              <Button variant="icon" size="lg" className={`border animate-${animation} fs-xl stretched-link mb-2`}>
                <i className={`ci-${icon} animate-target`} />
              </Button>
              <div className="fs-sm">{label}</div>
            </Col>
          ))}
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default IconsAnimationDemo
