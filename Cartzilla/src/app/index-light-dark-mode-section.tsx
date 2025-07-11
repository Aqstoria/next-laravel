'use client'

import Image from 'next/image'
import { ImgComparisonSlider } from '@img-comparison-slider/react'

const LightDarkModeSection = () => (
  <section className="d-flex w-100 position-relative overflow-hidden">
    <div
      className="position-relative flex-xxl-shrink-0 z-2 start-50 translate-middle-x my-n2"
      style={{ maxWidth: 1920 }}
    >
      <div className="mx-n2 mx-sm-n5 mx-xxl-0">
        <div className="mx-lg-n5 mx-xxl-0">
          <ImgComparisonSlider
            className="focus-none text-primary mx-n5 mx-xxl-0"
            style={{ '--divider-width': '.125rem', '--divider-color': 'currentColor' } as React.CSSProperties}
          >
            <Image slot="first" src="/img/intro/dark-mode.jpg" width={3840} height={1790} alt="Dark Mode" />
            <Image slot="second" src="/img/intro/light-mode.jpg" width={3840} height={1790} alt="Light Mode" />
            <div slot="handle" style={{ width: 42 }}>
              <svg
                className="text-primary rounded-circle"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <circle fill="currentColor" cx="21" cy="21" r="21"></circle>
                </g>
                <path
                  fill="white"
                  d="M25.5019 19.7494H15.9147V15.9146L11.1211 20.7081L15.9147 25.5017V21.6669H25.5019V25.5017L30.2955 20.7081L25.5019 15.9146V19.7494Z"
                ></path>
              </svg>
            </div>
          </ImgComparisonSlider>
        </div>
      </div>
    </div>
    <div className="position-absolute top-0 start-0 w-50 h-100" style={{ backgroundColor: '#131920' }}></div>
    <div className="position-absolute top-0 end-0 w-50 h-100" style={{ backgroundColor: '#f5f7fa' }}></div>
  </section>
)

export default LightDarkModeSection
