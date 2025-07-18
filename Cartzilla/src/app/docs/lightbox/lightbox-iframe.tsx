import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import PopoverBody from 'react-bootstrap/PopoverBody'
import Lightbox from '@/components/lightbox'

const LightboxIframeDemo = () => {
  const code = `import Image from 'next/image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import PopoverBody from 'react-bootstrap/PopoverBody'
import Lightbox from '@/components/lightbox'

export default function LightboxIframeDemo() {
  return (
    <div className="position-relative bg-body-tertiary rounded-4 overflow-hidden">
      <OverlayTrigger
        placement="top"
        overlay={
          <Popover>
            <PopoverBody>Click to view the map</PopoverBody>
          </Popover>
        }
      >
        <Lightbox
          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30908.594922615324!2d-73.07331970206108!3d40.788157341303005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8483b8bffed93%3A0x53467ceb834b7397!2s396%20Lillian%20Blvd%2C%20Holbrook%2C%20NY%2011741%2C%20USA!5e0!3m2!1sen!2s!4v1706086459668!5m2!1sen!2"
          gallery="map"
          fullscreen
          className="position-absolute top-50 start-50 translate-middle z-2 mt-lg-n3"
          style={{ width: 50 }}
          aria-label="Toggle map"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.5 54.6">
            <path
              d="M42.5 19.2C42.5 8.1 33.2-.7 22 0 12.4.7 4.7 8.5 4.2 18c-.2 2.7.3 5.3 1.1 7.7h0s3.4 10.4 17.4 25c.4.4 1 .4 1.4 0 13.6-13.3 17.4-25 17.4-25h0c.6-2 1-4.2 1-6.5z"
              fill="#ffffff"
            />
            <g fill="#222934">
              <path d="M20.4 31.8c-4.5 0-8.1-3.6-8.1-8.1s3.6-8.1 8.1-8.1 8.1 3.6 8.1 8.1-3.7 8.1-8.1 8.1zm0-14.2a6.06 6.06 0 0 0-6.1 6.1 6.06 6.06 0 0 0 6.1 6.1c3.3 0 6.1-2.7 6.1-6.1s-2.8-6.1-6.1-6.1z" />
              <circle cx="20.4" cy="23.7" r="3" />
              <path d="M20.4 54.5c-.6 0-1.1-.2-1.4-.6C5 39.3 1.5 29 1.4 28.5a21.92 21.92 0 0 1-1.2-8c.6-10.1 8.6-18.3 18.7-19C24.6 1.1 30 3 34.1 6.9c4.1 3.8 6.4 9.2 6.4 14.8 0 2.4-.4 4.7-1.2 6.9-.1.5-4 12-17.6 25.3-.3.4-.8.6-1.3.6zm-17-26.2c.8 2 4.9 11.6 17 24.2 13.2-13 17-24.5 17.1-24.6.7-2 1.1-4.1 1.1-6.3 0-5-2.1-9.9-5.8-13.3-3.7-3.5-8.6-5.2-13.7-4.8-9.1.6-16.4 8-16.9 17.1-.1 2.5.2 5 1.1 7.3l.1.4z" />
            </g>
          </svg>
        </Lightbox>
      </OverlayTrigger>
      <Image src="/img/contact/map.jpg" fill sizes="1920px" className="object-fit-cover" alt="Map" />

      {/* Add "ratio" element to avoid content shifts on page load */}
      <div className="ratio ratio-16x9 d-none d-sm-block" />
      <div className="ratio ratio-4x3 d-sm-none" />
      <span className="position-absolute top-0 start-0 z-1 w-100 h-100 bg-body opacity-25"></span>
    </div>
  )
}`

  return (
    <section id="lightbox-iframe" className="docs-section pb-sm-2 mb-5">
      <h4>Media: Iframe (Google map)</h4>
      <DocsComponentDemo code={code}>
        <div className="position-relative bg-body-tertiary rounded-4 overflow-hidden">
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover>
                <PopoverBody>Click to view the map</PopoverBody>
              </Popover>
            }
          >
            <Lightbox
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30908.594922615324!2d-73.07331970206108!3d40.788157341303005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8483b8bffed93%3A0x53467ceb834b7397!2s396%20Lillian%20Blvd%2C%20Holbrook%2C%20NY%2011741%2C%20USA!5e0!3m2!1sen!2s!4v1706086459668!5m2!1sen!2"
              gallery="map"
              fullscreen
              className="position-absolute top-50 start-50 translate-middle z-2 mt-lg-n3"
              style={{ width: 50 }}
              aria-label="Toggle map"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.5 54.6">
                <path
                  d="M42.5 19.2C42.5 8.1 33.2-.7 22 0 12.4.7 4.7 8.5 4.2 18c-.2 2.7.3 5.3 1.1 7.7h0s3.4 10.4 17.4 25c.4.4 1 .4 1.4 0 13.6-13.3 17.4-25 17.4-25h0c.6-2 1-4.2 1-6.5z"
                  fill="#ffffff"
                />
                <g fill="#222934">
                  <path d="M20.4 31.8c-4.5 0-8.1-3.6-8.1-8.1s3.6-8.1 8.1-8.1 8.1 3.6 8.1 8.1-3.7 8.1-8.1 8.1zm0-14.2a6.06 6.06 0 0 0-6.1 6.1 6.06 6.06 0 0 0 6.1 6.1c3.3 0 6.1-2.7 6.1-6.1s-2.8-6.1-6.1-6.1z" />
                  <circle cx="20.4" cy="23.7" r="3" />
                  <path d="M20.4 54.5c-.6 0-1.1-.2-1.4-.6C5 39.3 1.5 29 1.4 28.5a21.92 21.92 0 0 1-1.2-8c.6-10.1 8.6-18.3 18.7-19C24.6 1.1 30 3 34.1 6.9c4.1 3.8 6.4 9.2 6.4 14.8 0 2.4-.4 4.7-1.2 6.9-.1.5-4 12-17.6 25.3-.3.4-.8.6-1.3.6zm-17-26.2c.8 2 4.9 11.6 17 24.2 13.2-13 17-24.5 17.1-24.6.7-2 1.1-4.1 1.1-6.3 0-5-2.1-9.9-5.8-13.3-3.7-3.5-8.6-5.2-13.7-4.8-9.1.6-16.4 8-16.9 17.1-.1 2.5.2 5 1.1 7.3l.1.4z" />
                </g>
              </svg>
            </Lightbox>
          </OverlayTrigger>
          <Image src="/img/contact/map.jpg" fill sizes="1920px" className="object-fit-cover" alt="Map" />
          <div className="ratio ratio-16x9 d-none d-sm-block" />
          <div className="ratio ratio-4x3 d-sm-none" />
          <span className="position-absolute top-0 start-0 z-1 w-100 h-100 bg-body opacity-25"></span>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default LightboxIframeDemo
