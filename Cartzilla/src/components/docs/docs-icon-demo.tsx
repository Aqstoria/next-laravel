'use client'

import { copyToClipboard } from '@/lib/clipboard'
import Button from 'react-bootstrap/Button'

interface DocsIconDemoProps {
  cssClass: string
  tags?: string[]
  copyButton?: { idleLabel?: string; copiedLabel?: string }
}

const DocsIconDemo = ({ cssClass, tags, copyButton }: DocsIconDemoProps) => (
  <div className="card h-100 border-0 shadow hover-effect-opacity" tabIndex={0}>
    <span
      className="d-none d-block-dark position-absolute top-0 start-0 w-100 h-100 bg-dark rounded"
      style={{ opacity: 0.4 }}
    ></span>
    <div className="position-absolute top-0 end-0 d-flex align-items-center justify-content-center w-100 h-100 z-2 bg-body rounded hover-effect-target opacity-0">
      <span
        className="d-none d-block-dark position-absolute top-0 start-0 w-100 h-100 bg-dark rounded"
        style={{ opacity: 0.4 }}
      ></span>
      <Button
        variant="outline-secondary"
        size="sm"
        className="position-relative z-1 bg-body px-2"
        data-copy-to-clipboard={`<i className="${cssClass}"/>`}
        onClick={copyToClipboard}
        data-idle-label={copyButton?.idleLabel || 'Copy'}
        data-copied-label={copyButton?.copiedLabel || 'Copied'}
      >
        <i className="ci-copy fs-sm me-1" />
        Copy
      </Button>
    </div>
    <div className="card-body position-relative z-1 text-center px-3">
      <i className={`${cssClass} fs-2`} />
      <p className="icon-name fs-sm mb-0 pt-2">
        {cssClass}
        {tags && tags.length > 0 && <span className="visually-hidden">{tags.concat(' ')}</span>}
      </p>
    </div>
  </div>
)

export default DocsIconDemo
