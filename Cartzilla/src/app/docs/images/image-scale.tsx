import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'

const ImageScaleOnHoverDemo = () => {
  const code = `import Image from 'next/image'

export default function ImageScaleOnHoverDemo() {
  return (
    <div className="hover-effect-scale bg-body-tertiary rounded overflow-hidden" style={{ maxWidth: 306 }}>
      <Image
        src="/img/shop/furniture/product/06.jpg"
        width={306}
        height={306}
        alt="Image"
        className="hover-effect-target"
      />
    </div>
  )
}`

  return (
    <section id="image-scale" className="docs-section">
      <h4>Image scale (zoom) on hover</h4>
      <DocsComponentDemo code={code}>
        <div className="hover-effect-scale bg-body-tertiary rounded overflow-hidden" style={{ maxWidth: 306 }}>
          <Image
            src="/img/shop/furniture/product/06.jpg"
            width={306}
            height={306}
            alt="Image"
            className="hover-effect-target"
          />
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default ImageScaleOnHoverDemo
