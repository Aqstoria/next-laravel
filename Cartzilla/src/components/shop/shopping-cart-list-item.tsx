import type { CommonComponentProps } from '@/types/common-component-props'
import Image from 'next/image'
import Link from 'next/link'
import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import CountInput from '../forms/count-input'

interface ShoppingCartListItemProps extends CommonComponentProps {
  image: {
    src: string
    alt?: string
    large?: boolean
    bg?: string
    style?: React.CSSProperties
  }
  title: string
  multilineTitle?: boolean
  href: string
  price: {
    current: number
    original?: number
    prefix?: string | false
    suffix?: string
    decimals?: false
  }
  license?: string
  badge?: {
    label: string
    bg?: string
    color?: string
  }
  quantity?: number
  countInput?:
    | {
        pill?: boolean
        defaultValue?: number
        value?: number
        incrementBtnLabel?: string
        decrementBtnLabel?: string
        onChange?: (value: number) => void
        onIncrement?: (value: number) => void
        onDecrement?: (value: number) => void
      }
    | false
  removeButton?: { label?: string; icon?: string; onClick?: () => void } | false
  onClick?: () => void
}

const ShoppingCartListItem = ({
  image,
  title,
  multilineTitle,
  href,
  price,
  license,
  badge,
  quantity,
  countInput,
  removeButton,
  onClick,
  ...props
}: ShoppingCartListItemProps) => (
  <article {...props}>
    <div className="d-flex align-items-center">
      <Link
        href={href}
        className="position-relative d-block flex-shrink-0"
        style={image.large ? { width: 142 } : { width: 110 }}
        onClick={onClick}
      >
        {badge && (
          <Badge bg={badge.bg} text={badge.color} className="position-absolute top-0 start-0 z-1 mt-n1 ms-n1">
            {badge.label}
          </Badge>
        )}
        <div
          className={`${image.large ? 'ratio' : 'ratio ratio-1x1'}${image.bg ? ` bg-${image.bg}` : ''} rounded overflow-hidden`}
          style={
            {
              ...(image.large ? { '--cz-aspect-ratio': 'calc(110 / 142 * 100%)' } : {}),
              ...image.style,
            } as React.CSSProperties
          }
        >
          <Image
            src={image.src}
            fill
            sizes={image.large ? '(min-resolution: 2dppx) 284px, 220px' : '(min-resolution: 2dppx) 220px, 170px'}
            className="object-fit-cover"
            alt={image.alt || title}
          />
        </div>
      </Link>
      <div className="w-100 min-w-0 ps-3">
        {multilineTitle ? (
          <h5 className="fs-sm fw-medium lh-base mb-2">
            <Link href={href} className="hover-effect-underline" onClick={onClick}>
              {title}
            </Link>
          </h5>
        ) : (
          <h5 className="d-flex animate-underline mb-2">
            <Link href={href} className="d-block fs-sm fw-medium text-truncate animate-target" onClick={onClick}>
              {title}
            </Link>
          </h5>
        )}
        <div className="h6 mb-0">
          {price.prefix === false ? '' : price.prefix || '$'}
          {price.decimals === false
            ? price.current.toLocaleString(undefined, { maximumFractionDigits: 0 })
            : price.current.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          {price.suffix || ''}{' '}
          {price.original && (
            <del className="text-body-tertiary fs-xs fw-normal">
              {price.prefix === false ? '' : price.prefix || '$'}
              {price.decimals === false
                ? price.original.toLocaleString(undefined, { maximumFractionDigits: 0 })
                : price.original.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              {price.suffix || ''}
            </del>
          )}
          {license && quantity !== undefined && quantity > 1 && (
            <span className="text-body-secondary fs-sm ms-1">
              <span className="fw-normal">x</span> {quantity}
            </span>
          )}
        </div>
        {(removeButton !== false || countInput !== false || license) && (
          <div className="d-flex align-items-center gap-2 pt-2 mt-1">
            {countInput !== false && (
              <CountInput
                size="sm"
                min={1}
                defaultValue={countInput?.defaultValue || 1}
                value={countInput?.value}
                incrementBtnLabel={countInput?.incrementBtnLabel}
                decrementBtnLabel={countInput?.decrementBtnLabel}
                onChange={countInput?.onChange}
                onIncrement={countInput?.onIncrement}
                onDecrement={countInput?.onDecrement}
                className={countInput?.pill ? 'rounded-pill' : 'rounded-2'}
              />
            )}
            {license && <div className="fs-sm">License type: {license}</div>}
            {removeButton !== false && (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip className="tooltip-sm">{removeButton?.label || 'Remove'}</Tooltip>}
              >
                {typeof removeButton?.icon === 'string' && removeButton?.icon.trim() !== '' ? (
                  <button
                    type="button"
                    className="btn btn-icon btn-sm flex-shrink-0 fs-base ms-auto"
                    onClick={removeButton?.onClick}
                    aria-label={removeButton?.label || 'Remove'}
                  >
                    <i className={removeButton?.icon ? removeButton?.icon : 'ci-trash'} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn-close fs-sm ms-auto"
                    onClick={removeButton?.onClick}
                    aria-label={removeButton?.label || 'Remove'}
                  />
                )}
              </OverlayTrigger>
            )}
          </div>
        )}
      </div>
    </div>
  </article>
)

export default ShoppingCartListItem
