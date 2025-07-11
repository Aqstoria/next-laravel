'use client'

import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import CodeBlock from '../code-block'

interface DocsComponentDemoProps {
  defaultActiveKey?: string | number
  previewTabKey?: string | number
  previewTabTitle?: string
  previewTabIcon?: string
  codeTabKey?: string | number
  codeTabTitle?: string
  codeTabIcon?: string
  language?: string
  flushed?: boolean
  code: string
  children: React.ReactNode
  copyButton?: { idleLabel?: string; copiedLabel?: string } | false
}

const DocsComponentDemo = (props: DocsComponentDemoProps) => {
  // preview tab key or use 'preview' if not provided
  const previewTabKey = props.previewTabKey || 'preview'
  // preview tab title or use 'Preview' if not provided
  const previewTabTitle = props.previewTabTitle || 'Preview'
  // preview tab icon or use 'ci-eye' if not provided
  const previewTabIcon = props.previewTabIcon || 'ci-eye'

  // code tab key or use 'code' if not provided
  const codeTabKey = props.codeTabKey || 'code'
  // code tab title or use 'Code' if not provided
  const codeTabTitle = props.codeTabTitle || 'Code'
  // code tab icon or use 'ci-code' if not provided
  const codeTabIcon = props.codeTabIcon || 'ci-code'

  // default active key or use 'previewTabKey' if not provided
  const defaultActiveKey = props.defaultActiveKey || previewTabKey

  // language for code highlighter or use 'jsx' if not provided
  const language = props.language || 'jsx'

  const copyButton = props.copyButton

  return (
    <Card className={props.flushed ? 'background-transparent border-0 rounded-0' : 'border-0 shadow'}>
      {!props.flushed && (
        <span
          className="d-none d-block-dark position-absolute top-0 start-0 w-100 h-100 bg-dark rounded"
          style={{ opacity: '.4' }}
        ></span>
      )}
      <Card.Body className={props.flushed ? 'p-0' : 'position-relative'}>
        <Tab.Container defaultActiveKey={defaultActiveKey}>
          <Nav as="ul" variant="tabs" className="m-n2" role="tablist" style={{ maxWidth: '240px' }}>
            <Nav.Item as="li">
              <Nav.Link as="button" eventKey={previewTabKey} role="tab">
                <i className={`${previewTabIcon} opacity-75 ms-n1 me-2`} />
                {previewTabTitle}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as="button" eventKey={codeTabKey} role="tab">
                <i className={`${codeTabIcon} opacity-75 ms-n1 me-2`} />
                {codeTabTitle}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey={previewTabKey} className={`pt-4 pb-2${!props.flushed ? ' mt-3' : ''}`}>
              {props.children}
            </Tab.Pane>
            <Tab.Pane eventKey={codeTabKey} className="pt-4">
              <CodeBlock language={language} copyButton={copyButton} className="mx-n2 mb-n2">
                {props.code}
              </CodeBlock>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Card.Body>
    </Card>
  )
}

export default DocsComponentDemo
