import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import CodeBlock from '@/components/code-block'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Browser support',
}

const CreditsDocsPage = () => (
  <>
    <section className="py-2 pb-3 pb-lg-4">
      <Badge bg="success-subtle" text="success" pill className="fw-semibold py-2 px-3 mb-2">
        Getting started
      </Badge>
      <h1 className="pt-1 mb-2">Browser support</h1>
    </section>

    <section className="mb-3">
      <p>
        In SCSS, we do not manually add vendor prefixes. Instead, we rely on Next.js, which automatically compiles CSS
        using{' '}
        <a className="fw-medium" href="https://github.com/postcss/autoprefixer" target="_blank" rel="noopener">
          Autoprefixer
        </a>
        . Autoprefixer processes the compiled CSS and adds the necessary vendor prefixes based on the defined browser
        support. This ensures cross-browser compatibility for the latest CSS3 features without requiring manual
        prefixing.
      </p>
      <h2 className="h4 pt-4">Configuring browser support with Autoprefixer settings</h2>
      <p>
        Autoprefixer is an integral part of the project building process. To customize its settings, create a{' '}
        <code>browserslist</code> key in your <code>package.json</code> like so:
      </p>
      <CodeBlock border copyButton={false} className="mb-4" style={{ maxWidth: 400 }}>
        {`{
  "browserslist": [
    ">= 0.5%",
    "last 2 major versions",
    "not dead",
    "Chrome >= 60",
    "Firefox >= 60",
    "Firefox ESR",
    "iOS >= 12",
    "Safari >= 12",
    "not Explorer <= 11"
  ]
}`}
      </CodeBlock>
      <p>
        This example uses Bootstrap&apos;s default browser list. For optimal compatibility, consider analyzing your
        visitors&apos; browsers and operating systems, then adjust the Browserlist settings accordingly based on that
        data.
      </p>
      <p className="mb-0">
        For more detailed information on available Browserlist options, visit{' '}
        <a className="fw-medium" href="https://github.com/browserslist/browserslist" target="_blank" rel="noopener">
          Browserlist on GitHub.
        </a>
      </p>
    </section>
  </>
)

export default CreditsDocsPage
