'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const OffcanvasBackdropScrollingDemo = () => {
  const code = `'use client'

import { useOffcanvas, OffcanvasProvider } from '@/contexts/offcanvas-context'
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function OffcanvasBackdropScrollingDemo() {

  const options = [
    {
      id: 'enabled-backdrop',
      buttonLabel: 'Enable backdrop (default)',
      scroll: false,
      backdrop: true,
    },
    {
      id: 'disabled-backdrop',
      buttonLabel: 'Disable backdrop',
      scroll: false,
      backdrop: false,
    },
    {
      id: 'enabled-scrolling',
      buttonLabel: 'Enable body scrolling',
      scroll: true,
      backdrop: false,
    },
    {
      id: 'enabled-backdrop-scrolling',
      buttonLabel: 'Enable both scrolling & backdrop',
      scroll: true,
      backdrop: true,
    },
    {
      id: 'static-backdrop',
      buttonLabel: 'Static backdrop',
      scroll: false,
      backdrop: 'static',
    },
  ]

  const OffcanvasBackdrop = ({ id, buttonLabel, ...props }: { id: string; buttonLabel: string }) => {
    const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()

    return (
      <>
        <Button variant="outline-secondary me-1 mb-1" onClick={() => openOffcanvas(id)}>
          {buttonLabel}
        </Button>
        <Offcanvas show={isOpen(id)} onHide={() => closeOffcanvas(id)} aria-labelledby={\`offcanvas-\${id}\`} {...props}>
          <OffcanvasHeader closeButton className="border-bottom">
            <OffcanvasTitle as="h5" id={\`offcanvas-\${id}\`}>
              Offcanvas
            </OffcanvasTitle>
          </OffcanvasHeader>
          <OffcanvasBody>
            <p>
              Content for the offcanvas goes here. You can place just about any Bootstrap or Cartzilla component or
              custom elements here.
            </p>
          </OffcanvasBody>
        </Offcanvas>
      </>
    )
  }

  return (
    <OffcanvasProvider>
      <Stack direction="horizontal" gap={2} className="flex-wrap">
        {options.map((props, index) => (
          <OffcanvasBackdrop key={index} {...props} />
        ))}
      </Stack>
    </OffcanvasProvider>
  )
}`

  const options = [
    {
      id: 'enabled-backdrop',
      buttonLabel: 'Enable backdrop (default)',
      scroll: false,
      backdrop: true,
    },
    {
      id: 'disabled-backdrop',
      buttonLabel: 'Disable backdrop',
      scroll: false,
      backdrop: false,
    },
    {
      id: 'enabled-scrolling',
      buttonLabel: 'Enable body scrolling',
      scroll: true,
      backdrop: false,
    },
    {
      id: 'enabled-backdrop-scrolling',
      buttonLabel: 'Enable both scrolling & backdrop',
      scroll: true,
      backdrop: true,
    },
    {
      id: 'static-backdrop',
      buttonLabel: 'Static backdrop',
      scroll: false,
      backdrop: 'static',
    },
  ]

  const OffcanvasBackdrop = ({ id, buttonLabel, ...props }: { id: string; buttonLabel: string }) => {
    const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()

    return (
      <>
        <Button variant="outline-secondary me-1 mb-1" onClick={() => openOffcanvas(id)}>
          {buttonLabel}
        </Button>
        <Offcanvas show={isOpen(id)} onHide={() => closeOffcanvas(id)} aria-labelledby={`offcanvas-${id}`} {...props}>
          <OffcanvasHeader closeButton className="border-bottom">
            <OffcanvasTitle as="h5" id={`offcanvas-${id}`}>
              Offcanvas
            </OffcanvasTitle>
          </OffcanvasHeader>
          <OffcanvasBody>
            <p>
              Content for the offcanvas goes here. You can place just about any Bootstrap or Cartzilla component or
              custom elements here.
            </p>
          </OffcanvasBody>
        </Offcanvas>
      </>
    )
  }

  return (
    <section id="offcanvas-backdrop" className="docs-section pb-sm-2 mb-5">
      <h4>Backdrop and scrolling</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          {options.map((props, index) => (
            <OffcanvasBackdrop key={index} {...props} />
          ))}
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default OffcanvasBackdropScrollingDemo
