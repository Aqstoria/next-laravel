import type { CommonComponentProps } from '@/types/common-component-props'

interface BlockquoteProps extends CommonComponentProps {
  text: string
  footer?: string
  cite?: string
  textClassName?: string
  footerClassName?: string
}

const Blockquote = ({ text, footer, cite, textClassName, footerClassName, className, ...props }: BlockquoteProps) => (
  <figure className={className} {...props}>
    <blockquote className={`blockquote${textClassName ? ` ${textClassName}` : ''}`}>
      <p>{text}</p>
    </blockquote>
    {footer && (
      <figcaption className={`blockquote-footer mb-0${footerClassName ? ` ${footerClassName}` : ''}`}>
        {footer}
        {cite && <cite title={cite}>&nbsp;{cite}</cite>}
      </figcaption>
    )}
  </figure>
)

export default Blockquote
