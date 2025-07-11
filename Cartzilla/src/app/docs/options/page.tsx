import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import CodeBlock from '@/components/code-block'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Global options',
}

const GlobalOptionsDocsPage = () => (
  <>
    <section className="py-2 pb-3 pb-lg-4">
      <Badge bg="primary-subtle" text="primary" pill className="fw-semibold py-2 px-3 mb-2">
        Customize
      </Badge>
      <h1 className="pt-1 mb-2">Global options</h1>
    </section>

    <section className="mb-3">
      <p>
        The Bootstrap framework provides a variety of customizable global options through the{' '}
        <code>_variables.scss</code> file. These settings allow you to quickly modify the overall styling by enabling or
        disabling specific features according to your project needs.
      </p>
      <h2 className="h4 pt-3 mb-4">Overview of available options</h2>
      <CodeBlock language="scss" border className="mb-5" style={{ maxWidth: 720 }}>
        {`// Options
// Quickly modify global styling by enabling or disabling optional features.

$enable-caret:                true !default;
$enable-rounded:              true !default;
$enable-shadows:              false !default;
$enable-gradients:            false !default;
$enable-transitions:          true !default;
$enable-reduced-motion:       true !default;
$enable-smooth-scroll:        true !default;
$enable-grid-classes:         true !default;
$enable-container-classes:    true !default;
$enable-cssgrid:              false !default;
$enable-button-pointers:      true !default;
$enable-rfs:                  true !default;
$enable-validation-icons:     true !default;
$enable-negative-margins:     false !default;
$enable-deprecation-messages: true !default;
$enable-important-utilities:  true !default;

$enable-dark-mode:            true !default;
$color-mode-type:             data !default; // \`data\` or \`media-query\``}
      </CodeBlock>
      <h2 className="h3 pt-sm-2 mb-4">Customizing Bootstrap options</h2>
      <p>
        To customize these settings to your needs, override the default values by copying them into your project&apos;s{' '}
        <code>src/styles/_user-variables.scss</code> file and modifying the values accordingly. This approach ensures
        that your custom configurations are applied throughout the framework.
      </p>
      <p>
        To customize these settings to your needs, override the default values by copying them into your project&apos;s{' '}
        <code>src/styles/_user-variables.scss</code> file and modifying the values accordingly. This approach ensures
        that your custom configurations are applied throughout the framework.
      </p>
      <h3 className="h4 pt-3">Example of customizing variables</h3>
      <p className="mb-4">
        Suppose you want to disable rounded corners and shadows, but enable CSS grid support. You would copy the
        relevant variables into <code>src/scss/_user-variables.scss</code> and adjust them as follows:
      </p>
      <CodeBlock language="scss" border className="mb-4" style={{ maxWidth: 720 }}>
        {`// Inside src/styles/_user-variables.scss
$enable-rounded: false;
$enable-shadows: false;
$enable-cssgrid: true;`}
      </CodeBlock>
      <h3 className="h4 pt-2 pt-sm-3">Color mode configuration</h3>
      <p className="mb-0">
        Bootstrap also supports different color modes. By default, the <code>$color-mode-type</code> is set to{' '}
        <code>data</code>, which means the color mode can be toggled via <code>data-bs-theme</code> attributes in JSX.
        Alternatively, if set to <code>media-query</code>, the color mode will respond to the user&apos;s system
        preferences.
      </p>
    </section>
  </>
)

export default GlobalOptionsDocsPage
