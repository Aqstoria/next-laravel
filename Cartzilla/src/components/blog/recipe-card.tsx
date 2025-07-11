import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface RecipeCardProps extends CommonComponentProps {
  image: {
    src: string
    alt: string
  }
  href: string
  title: string
  timeToCook?: string
  difficulty?: string
  servings?: string
}

const RecipeCard = ({ image, href, title, timeToCook, difficulty, servings, ...props }: RecipeCardProps) => (
  <article {...props}>
    <div className="position-relative d-flex align-items-start align-items-sm-center">
      <div className="position-relative w-100 rounded overflow-hidden" style={{ maxWidth: 196 }}>
        <div className="ratio" style={{ '--cz-aspect-ratio': 'calc(140 / 196 * 100%)' } as React.CSSProperties} />
        <Image fill src={image.src} sizes="392px" alt={image.alt} />
      </div>
      <div className="ps-3 ps-xl-4">
        <h3 className="fs-base fw-medium lh-base mb-0">
          <Link href={href} className="hover-effect-underline stretched-link">
            {title}
          </Link>
        </h3>
        {(timeToCook || difficulty || servings) && (
          <div className="d-flex gap-3 gap-xl-4 fs-sm text-body-secondary mt-2 mt-xl-3">
            {timeToCook && (
              <div className="d-flex align-items-center text-nowrap">
                <i className="ci-clock fs-base me-2" />
                {timeToCook}
              </div>
            )}
            {difficulty && (
              <div className="d-flex align-items-center text-nowrap">
                <i className="ci-zap fs-base me-2" />
                {difficulty}
              </div>
            )}
            {servings && (
              <div className="d-flex align-items-center text-nowrap">
                <i className="ci-food fs-base me-2" />
                {servings}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  </article>
)

export default RecipeCard
