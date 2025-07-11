import Image from 'next/image'
import Link from 'next/link'
import type { CommonComponentProps } from '@/types/common-component-props'
import OverlayTrigger, { type OverlayTriggerType } from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import PopoverBody from 'react-bootstrap/PopoverBody'
import PopoverHeader from 'react-bootstrap/PopoverHeader'

interface HotspotProps extends CommonComponentProps {
  trigger: OverlayTriggerType
  placement: 'top' | 'right' | 'bottom' | 'left'
  title: string
  description?: string
  image?: {
    src: string
    width: number
    height: number
    alt: string
  }
  href?: string
  price?: string
  button?: {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
    size?: 'sm' | 'lg'
  }
}

const Hotspot = ({
  trigger,
  placement,
  title,
  description,
  image,
  href,
  price,
  button,
  className,
  ...props
}: HotspotProps) => {
  const popover = (
    <Popover className="popover-sm">
      <PopoverBody>
        <div className="d-flex align-items-start position-relative">
          {image && image.src && (
            <div className="flex-shrink-0 pe-2 me-1">
              <Image src={image.src} width={image.width} height={image.height} className="rounded" alt={image.alt} />
            </div>
          )}
          <div className="nav flex-column pt-2">
            {href ? (
              <Link
                href={href}
                className={`nav-link hover-effect-underline stretched-link p-0 mb-2${description ? ' fw-semibold' : ''}`}
              >
                {title}
              </Link>
            ) : (
              <PopoverHeader as="h3" className={`p-0 ${description ? 'mb-2' : 'mb-0 pb-2'}`}>
                {title}
              </PopoverHeader>
            )}
            {description}
            {price && <div className={`h6 ${description ? 'mt-2' : ''} mb-0`}>{price}</div>}
          </div>
        </div>
      </PopoverBody>
    </Popover>
  )

  return (
    <div {...props} className={`position-absolute z-2${className ? ` ${className}` : ''}`}>
      <OverlayTrigger trigger={trigger} placement={placement} overlay={popover}>
        <Button
          variant={button && button.variant ? button.variant : 'light'}
          size={button && button.size ? button.size : undefined}
          className="btn-icon rounded-circle shadow"
          tabIndex={1}
          aria-label="Hotspot"
        >
          <i className={`ci-plus fs-${button && button.size ? button.size : 'base'}`} />
        </Button>
      </OverlayTrigger>
    </div>
  )
}

export default Hotspot
