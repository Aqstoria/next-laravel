import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ImageZoom from '@/components/image/image-zoom'

const ImageZoomInlinePaneDemo = () => {
  const code = `import ImageZoom from '@/components/image/image-zoom'

export default function ImageZoomInlinePaneDemo() {
  return (
    <ImageZoom
      src="/img/shop/grocery/product/02.png"
      zoomSrc="/img/shop/grocery/product/02.png"
      inlinePane={5000}
      hoverDelay={300}
      width={634}
      height={634}
      alt="Image"
      style={{ maxWidth: 540 }}
    />
  )
}`

  return (
    <section id="img-zoom-inline-pane" className="docs-section">
      <h4>Inline zoom pane</h4>
      <DocsComponentDemo code={code}>
        <ImageZoom
          src="/img/shop/grocery/product/02.png"
          zoomSrc="/img/shop/grocery/product/02.png"
          inlinePane={5000}
          hoverDelay={300}
          width={634}
          height={634}
          alt="Image"
          style={{ maxWidth: 540 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default ImageZoomInlinePaneDemo
