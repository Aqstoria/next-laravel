import type { Metadata } from 'next'
import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Badge from 'react-bootstrap/Badge'
import Hotspot from '@/components/hotspot'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Hotspots',
}

const HotspotsDocsPage = () => {
  const code = `import Image from 'next/image'
import Hotspot from '@/components/hotspot'

export default function HotspotsDocsPage() {
  return (
    <div className="position-relative bg-body-tertiary rounded-5 overflow-hidden" style={{ maxWidth: 526 }}>
      <Hotspot
        trigger="focus"
        placement="top"
        href="#"
        image={{
          src: '/img/home/furniture/gallery/hotspot01.png',
          width: 64,
          height: 64,
          alt: 'Image',
        }}
        title="Indigo coushy low sofa"
        price="$856.00"
        button={{
          size: 'sm',
        }}
        style={{ top: '63.4%', left: '75.8%' }}
      />
      <Hotspot
        trigger="focus"
        placement="bottom"
        href="#"
        image={{
          src: '/img/home/furniture/gallery/hotspot02.png',
          width: 64,
          height: 64,
          alt: 'Image',
        }}
        title="Ergonomic beige armchair"
        price="$235.00"
        button={{
          size: 'sm',
        }}
        style={{ top: '60.2%', left: '15.7%' }}
      />
      <Hotspot
        trigger="focus"
        placement="top"
        href="#"
        image={{
          src: '/img/home/furniture/gallery/hotspot03.png',
          width: 64,
          height: 64,
          alt: 'Image',
        }}
        title="Waves modern painting"
        price="$74.99"
        button={{
          size: 'sm',
        }}
        className="start-50 translate-middle-x"
        style={{ top: '25.8%' }}
      />
      <Image src="/img/home/furniture/gallery/01.jpg" width={628} height={596} alt="Image" />
    </div>
  )
}`

  return (
    <>
      <section className="pt-2 pb-lg-1">
        <Badge bg="info-subtle" text="info" pill className="fw-semibold py-2 px-3 mb-2">
          Cartzilla component
        </Badge>
        <h1 className="pt-1">Hotspots</h1>
        <p className="text-body-secondary mb-4">
          Create an image with interactive hotspots that show hidden description on click or hover.
        </p>
      </section>
      <DocsComponentDemo code={code}>
        <div className="position-relative bg-body-tertiary rounded-5 overflow-hidden" style={{ maxWidth: 526 }}>
          <Hotspot
            trigger="focus"
            placement="top"
            href="#"
            image={{
              src: '/img/home/furniture/gallery/hotspot01.png',
              width: 64,
              height: 64,
              alt: 'Image',
            }}
            title="Indigo coushy low sofa"
            price="$856.00"
            button={{
              size: 'sm',
            }}
            style={{ top: '63.4%', left: '75.8%' }}
          />
          <Hotspot
            trigger="focus"
            placement="bottom"
            href="#"
            image={{
              src: '/img/home/furniture/gallery/hotspot02.png',
              width: 64,
              height: 64,
              alt: 'Image',
            }}
            title="Ergonomic beige armchair"
            price="$235.00"
            button={{
              size: 'sm',
            }}
            style={{ top: '60.2%', left: '15.7%' }}
          />
          <Hotspot
            trigger="focus"
            placement="top"
            href="#"
            image={{
              src: '/img/home/furniture/gallery/hotspot03.png',
              width: 64,
              height: 64,
              alt: 'Image',
            }}
            title="Waves modern painting"
            price="$74.99"
            button={{
              size: 'sm',
            }}
            className="start-50 translate-middle-x"
            style={{ top: '25.8%' }}
          />
          <Image src="/img/home/furniture/gallery/01.jpg" width={628} height={596} alt="Image" />
        </div>
      </DocsComponentDemo>
    </>
  )
}

export default HotspotsDocsPage
