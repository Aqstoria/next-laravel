import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Lightbox from '@/components/lightbox'

const LightboxImageDemo = () => {
  const code = `import Image from 'next/image'
import Lightbox from '@/components/lightbox'

export default function LightboxImageDemo() {
  return (
    <Lightbox
      href="/img/blog/grid/v2/07.jpg"
      gallery="image"
      title="Image caption"
      description="Description goes here."
      className="hover-effect-opacity d-flex rounded-4 overflow-hidden"
      style={{ maxWidth: 480 }}
    >
      <div className="hover-effect-target position-absolute d-flex flex-column align-items-center top-0 start-0 w-100 h-100 z-2 text-white opacity-0 p-4">
        <i className="ci-zoom-in fs-2 position-absolute top-50 translate-middle-y"/>
        <span className="fs-sm fw-medium text-center mt-auto">Image caption</span>
      </div>
      <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
      <Image src="/img/blog/grid/v2/07.jpg" width={600} height={440} alt="Image" />
    </Lightbox>
  )
}`

  return (
    <section id="lightbox-image" className="docs-section pb-sm-2 mb-5">
      <h4>Media: Image</h4>
      <DocsComponentDemo code={code}>
        <Lightbox
          href="/img/blog/grid/v2/07.jpg"
          gallery="image"
          title="Image caption"
          description="Description goes here."
          className="hover-effect-opacity d-flex rounded-4 overflow-hidden"
          style={{ maxWidth: 480 }}
        >
          <div className="hover-effect-target position-absolute d-flex flex-column align-items-center top-0 start-0 w-100 h-100 z-2 text-white opacity-0 p-4">
            <i className="ci-zoom-in fs-2 position-absolute top-50 translate-middle-y" />
            <span className="fs-sm fw-medium text-center mt-auto">Image caption</span>
          </div>
          <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
          <Image src="/img/blog/grid/v2/07.jpg" width={600} height={440} alt="Image" />
        </Lightbox>
      </DocsComponentDemo>
    </section>
  )
}

export default LightboxImageDemo
