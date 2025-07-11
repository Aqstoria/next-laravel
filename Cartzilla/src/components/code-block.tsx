'use client'

import type { CommonComponentProps } from '@/types/common-component-props'
import { copyToClipboard } from '@/lib/clipboard'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark'

interface CodeBlockProps extends CommonComponentProps {
  children: string
  language?: string
  copyButton?: { idleLabel?: string; copiedLabel?: string } | false
  border?: boolean
}

const CodeBlock = ({ children, language, copyButton, border, className, ...props }: CodeBlockProps) => (
  <div {...props} className={`position-relative${className ? ` ${className}` : ''}`} data-bs-theme="dark">
    {copyButton !== false && (
      <button
        type="button"
        className="btn btn-sm btn-outline-secondary bg-dark position-absolute top-0 end-0 mt-2 me-2 px-2 z-3"
        data-copy-to-clipboard={children}
        onClick={copyToClipboard}
        data-idle-label={copyButton?.idleLabel || 'Copy'}
        data-copied-label={copyButton?.copiedLabel || 'Copied'}
      >
        <i className="ci-copy fs-sm me-1" />
        {copyButton?.idleLabel || 'Copy'}
      </button>
    )}
    <SyntaxHighlighter
      language={language || 'jsx'}
      style={oneDark}
      className={`${border ? 'border ' : ''}${copyButton !== false ? 'copy-button-enabled' : ''}`}
    >
      {children}
    </SyntaxHighlighter>
  </div>
)

export default CodeBlock
