'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import Offcanvas, { type OffcanvasPlacement } from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const OffcanvasPlacementDemo = () => {
  const code = `'use client'

import { useOffcanvas, OffcanvasProvider } from '@/contexts/offcanvas-context'
import Offcanvas, { type OffcanvasPlacement } from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export default function OffcanvasPlacementDemo() {

  const OffcanvasPlacement = ({ placement }: { placement: OffcanvasPlacement }) => {
    const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()

    return (
      <>
        <Button variant="outline-secondary me-1 mb-1" onClick={() => openOffcanvas(placement)}>
          Toggle {placement} offcanvas
        </Button>
        <Offcanvas
          show={isOpen(placement)}
          onHide={() => closeOffcanvas(placement)}
          placement={placement}
          aria-labelledby={\`offcanvas-\${placement}\`}
        >
          <OffcanvasHeader closeButton className="border-bottom">
            <OffcanvasTitle as="h5" id={\`offcanvas-\${placement}\`}>
              Offcanvas {placement}
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
        {(['start', 'top', 'end', 'bottom'] as const).map((placement, index) => (
          <OffcanvasPlacement key={index} placement={placement} />
        ))}
      </Stack>
    </OffcanvasProvider>
  )
}`

  const OffcanvasPlacement = ({ placement }: { placement: OffcanvasPlacement }) => {
    const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()

    let label
    switch (placement) {
      case 'start':
        label = 'left'
        break
      case 'top':
        label = 'top'
        break
      case 'end':
        label = 'right'
        break
      case 'bottom':
        label = 'bottom'
        break
    }

    return (
      <>
        <Button variant="outline-secondary me-1 mb-1" onClick={() => openOffcanvas(placement)}>
          Toggle {label} offcanvas
        </Button>
        <Offcanvas
          show={isOpen(placement)}
          onHide={() => closeOffcanvas(placement)}
          placement={placement}
          aria-labelledby={`offcanvas-${label}`}
        >
          <OffcanvasHeader closeButton className="border-bottom">
            <OffcanvasTitle as="h5" id={`offcanvas-${label}`}>
              {label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()} offcanvas
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
    <section id="offcanvas-placement" className="docs-section pb-sm-2 mb-5">
      <h4>Placement</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          {(['start', 'top', 'end', 'bottom'] as const).map((placement, index) => (
            <OffcanvasPlacement key={index} placement={placement} />
          ))}
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default OffcanvasPlacementDemo
