import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ImageSwapOnHover from '@/components/image/image-swap-on-hover'

const ImageSwapOnHoverDemo = () => {
  const code = `import ImageSwapOnHover from '@/components/image/image-swap-on-hover'

export default function ImageSwapOnHoverDemo() {
  return (
    <ImageSwapOnHover
      imageSwapFrom={{
        src: '/img/shop/furniture/04.png',
        width: 306,
        height: 306,
        alt: 'Image idle',
      }}
      imageSwapTo={{
        src: '/img/shop/furniture/04-hover.jpg',
        width: 306,
        height: 306,
        alt: 'Image hover',
      }}
      className="rounded"
      style={{ maxWidth: 306 }}
    />
  )
}`

  return (
    <section id="image-swap" className="docs-section pb-sm-2 mb-5">
      <h4>Image swap on hover</h4>
      <DocsComponentDemo code={code}>
        <ImageSwapOnHover
          imageSwapFrom={{
            src: '/img/shop/furniture/04.png',
            width: 306,
            height: 306,
            alt: 'Image idle',
          }}
          imageSwapTo={{
            src: '/img/shop/furniture/04-hover.jpg',
            width: 306,
            height: 306,
            alt: 'Image hover',
          }}
          className="rounded"
          style={{ maxWidth: 306 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default ImageSwapOnHoverDemo
