import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Lightbox from '@/components/lightbox'

const LightboxVideoDemo = () => {
  const code = `import Image from 'next/image'
import Lightbox from '@/components/lightbox'

export default function LightboxVideoDemo() {
  return (
    <Lightbox
      href="https://www.youtube.com/watch?v=Z1xX1Kt9NkU"
      gallery="video"
      title="Video caption"
      description="Description goes here."
      className="hover-effect-opacity d-flex rounded-4 overflow-hidden"
      style={{ maxWidth: 480 }}
    >
      <div className="position-absolute d-flex flex-column align-items-center top-0 start-0 w-100 h-100 z-2 text-white p-4">
        <span className="btn btn-icon btn-lg position-absolute top-50 translate-middle-y bg-white text-dark rounded-circle">
          <i className="ci-play-filled"/>
        </span>
        <span className="hover-effect-target fs-sm fw-medium text-center opacity-0 mt-auto">Video caption</span>
      </div>
      <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
      <Image src="/img/blog/grid/v2/video02.jpg" width={602} height={422} alt="Image" />
    </Lightbox>
  )
}`

  return (
    <section id="lightbox-video" className="docs-section pb-sm-2 mb-5">
      <h4>Media: Video</h4>
      <DocsComponentDemo code={code}>
        <Lightbox
          href="https://www.youtube.com/watch?v=Z1xX1Kt9NkU"
          gallery="video"
          title="Video caption"
          description="Description goes here."
          className="hover-effect-opacity d-flex rounded-4 overflow-hidden"
          style={{ maxWidth: 480 }}
        >
          <div className="position-absolute d-flex flex-column align-items-center top-0 start-0 w-100 h-100 z-2 text-white p-4">
            <span className="btn btn-icon btn-lg position-absolute top-50 translate-middle-y bg-white text-dark rounded-circle">
              <i className="ci-play-filled" />
            </span>
            <span className="hover-effect-target fs-sm fw-medium text-center opacity-0 mt-auto">Video caption</span>
          </div>
          <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
          <Image src="/img/blog/grid/v2/video02.jpg" width={602} height={422} alt="Image" />
        </Lightbox>
      </DocsComponentDemo>
    </section>
  )
}

export default LightboxVideoDemo
