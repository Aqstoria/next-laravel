'use client'

import Image from 'next/image'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import { ImgComparisonSlider } from '@img-comparison-slider/react'

const ImgComparisonSliderVerticalDemo = () => {
  const code = `'use client'

import Image from 'next/image'
import { ImgComparisonSlider } from '@img-comparison-slider/react'

export default function ImgComparisonSliderVerticalDemo() {
  return (
    <ImgComparisonSlider
      direction="vertical"
      className="focus-none text-white rounded-4"
      style={{ '--divider-width': '.125rem', '--divider-color': 'currentColor' } as React.CSSProperties}
    >
      <figure slot="first" className="mb-0">
        <Image src="/img/docs/image-comparison-slider/before.jpg" width={920} height={576} alt="Image before" />
        <figcaption className="badge position-absolute top-0 start-50 translate-middle-x fs-sm bg-white text-dark rounded px-3 py-2 mt-3 mt-sm-4">
          Before
        </figcaption>
      </figure>
      <figure slot="second" className="mb-0">
        <Image src="/img/docs/image-comparison-slider/after.jpg" width={920} height={576} alt="Image after" />
        <figcaption className="badge position-absolute bottom-0 start-50 translate-middle-x fs-sm bg-white text-dark rounded px-3 py-2 mb-3 mb-sm-4">
          After
        </figcaption>
      </figure>
      <div slot="handle" style={{ width: 42 }}>
        <svg
          className="text-white border border-dark rounded-circle"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle fill="currentColor" cx="21" cy="21" r="21"></circle>
          </g>
          <path
            fill="#222934"
            d="M25.5019 19.7494H15.9147V15.9146L11.1211 20.7081L15.9147 25.5017V21.6669H25.5019V25.5017L30.2955 20.7081L25.5019 15.9146V19.7494Z"
          ></path>
        </svg>
      </div>
    </ImgComparisonSlider>
  )
}`

  return (
    <section id="img-comparison-slider-vertical" className="docs-section">
      <h4>Vertical</h4>
      <DocsComponentDemo code={code}>
        <ImgComparisonSlider
          direction="vertical"
          className="focus-none text-white rounded-4"
          style={{ '--divider-width': '.125rem', '--divider-color': 'currentColor' } as React.CSSProperties}
        >
          <figure slot="first" className="mb-0">
            <Image src="/img/docs/image-comparison-slider/before.jpg" width={920} height={576} alt="Image before" />
            <figcaption className="badge position-absolute top-0 start-50 translate-middle-x fs-sm bg-white text-dark rounded px-3 py-2 mt-3 mt-sm-4">
              Before
            </figcaption>
          </figure>
          <figure slot="second" className="mb-0">
            <Image src="/img/docs/image-comparison-slider/after.jpg" width={920} height={576} alt="Image after" />
            <figcaption className="badge position-absolute bottom-0 start-50 translate-middle-x fs-sm bg-white text-dark rounded px-3 py-2 mb-3 mb-sm-4">
              After
            </figcaption>
          </figure>
          <div slot="handle" style={{ width: 42 }}>
            <svg
              className="text-white border border-dark rounded-circle"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle fill="currentColor" cx="21" cy="21" r="21"></circle>
              </g>
              <path
                fill="#222934"
                d="M25.5019 19.7494H15.9147V15.9146L11.1211 20.7081L15.9147 25.5017V21.6669H25.5019V25.5017L30.2955 20.7081L25.5019 15.9146V19.7494Z"
              ></path>
            </svg>
          </div>
        </ImgComparisonSlider>
      </DocsComponentDemo>
    </section>
  )
}

export default ImgComparisonSliderVerticalDemo
