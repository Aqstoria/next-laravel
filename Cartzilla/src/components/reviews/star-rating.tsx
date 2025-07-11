import type { CommonComponentProps } from '@/types/common-component-props'

interface StarRatingProps extends CommonComponentProps {
  rating: number | string
  dark?: boolean
}

const StarRating = ({ rating, dark, className, ...props }: StarRatingProps) => {
  const ratingProp = parseFloat(rating.toString())
  const ratingValue = (Math.round(ratingProp * 2) / 2).toFixed(1)

  let stars
  switch (ratingValue) {
    case '1.0':
      stars = [
        <i key="1" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="2" className="ci-star text-body-tertiary opacity-60" />,
        <i key="3" className="ci-star text-body-tertiary opacity-60" />,
        <i key="4" className="ci-star text-body-tertiary opacity-60" />,
        <i key="5" className="ci-star text-body-tertiary opacity-60" />,
      ]
      break
    case '1.5':
      stars = [
        <i key="1" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="2" className={`ci-star-half ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="3" className="ci-star text-body-tertiary opacity-60" />,
        <i key="4" className="ci-star text-body-tertiary opacity-60" />,
        <i key="5" className="ci-star text-body-tertiary opacity-60" />,
      ]
      break
    case '2.0':
      stars = [
        <i key="1" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="2" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="3" className="ci-star text-body-tertiary opacity-60" />,
        <i key="4" className="ci-star text-body-tertiary opacity-60" />,
        <i key="5" className="ci-star text-body-tertiary opacity-60" />,
      ]
      break
    case '2.5':
      stars = [
        <i key="1" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="2" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="3" className={`ci-star-half ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="4" className="ci-star text-body-tertiary opacity-60" />,
        <i key="5" className="ci-star text-body-tertiary opacity-60" />,
      ]
      break
    case '3.0':
      stars = [
        <i key="1" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="2" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="3" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="4" className="ci-star text-body-tertiary opacity-60" />,
        <i key="5" className="ci-star text-body-tertiary opacity-60" />,
      ]
      break
    case '3.5':
      stars = [
        <i key="1" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="2" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="3" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="4" className={`ci-star-half ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="5" className="ci-star text-body-tertiary opacity-60" />,
      ]
      break
    case '4.0':
      stars = [
        <i key="1" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="2" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="3" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="4" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="5" className="ci-star text-body-tertiary opacity-60" />,
      ]
      break
    case '4.5':
      stars = [
        <i key="1" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="2" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="3" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="4" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="5" className={`ci-star-half ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
      ]
      break
    case '5.0':
      stars = [
        <i key="1" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="2" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="3" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="4" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
        <i key="5" className={`ci-star-filled ${dark ? 'text-body-emphasis' : 'text-warning'}`} />,
      ]
      break
    default:
      stars = [
        <i key="1" className="ci-star text-body-tertiary opacity-60" />,
        <i key="2" className="ci-star text-body-tertiary opacity-60" />,
        <i key="3" className="ci-star text-body-tertiary opacity-60" />,
        <i key="4" className="ci-star text-body-tertiary opacity-60" />,
        <i key="5" className="ci-star text-body-tertiary opacity-60" />,
      ]
  }

  return (
    <div {...props} className={`d-inline-flex gap-1${className ? ` ${className}` : ''}`}>
      {stars}
    </div>
  )
}

export default StarRating
