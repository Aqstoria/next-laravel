import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import CodeBlock from '@/components/code-block'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | CSS variables',
}

const CSSVariablesDocsPage = () => (
  <>
    <section className="py-2 pb-3 pb-lg-4">
      <Badge bg="primary-subtle" text="primary" pill className="fw-semibold py-2 px-3 mb-2">
        Customize
      </Badge>
      <h1 className="pt-1 mb-2">CSS variables</h1>
    </section>

    <section className="mb-3">
      <p className="pb-4 mb-sm-4">
        Cartzilla builds upon the foundation of CSS custom properties (also known as CSS variables) introduced by
        Bootstrap, enhancing these capabilities with additional variables for its custom components. This approach
        allows for extensive customization of every component as well as global variables, covering styles from sizes
        and spacing to colors.
      </p>

      <section id="discover-css-variables" className="docs-section pb-sm-2 pb-md-3 mb-5">
        <h2 className="h3 mb-sm-4">Discovering CSS variables</h2>
        <p>To identify the CSS variables available for a specific component, you can use the following methods:</p>
        <ol className="gap-4 pb-2 mb-4">
          <li>
            <span className="text-body-emphasis fw-semibold">Browser inspector:</span> The easiest way to learn about
            the CSS variables associated with a component is to highlight it with the browser inspector. This tool will
            display all CSS properties, including custom variables, applied to the selected element.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Source files:</span> Open the <code>.scss</code> file
            corresponding to the component inside the <code>src/styles/components</code> folder using your editor. CSS
            variables are typically listed at the top of the file, corresponding to the parent wrapper of the component.
          </li>
        </ol>
        <h3 className="h5">Example of globals CSS variables</h3>
        <p>
          Cartzilla also provides global CSS variables that allow for template-wide customization. These are defined
          within the <code>:root</code> selector.
        </p>
        <CodeBlock language="css" border copyButton={false}>
          {`/* As seen in the Browser inspector */

:root, [data-bs-theme=light] {
  --cz-primary: #f55266;
  --cz-secondary: #6c727f;
  --cz-success: #33b36b;
  --cz-info: #2f6ed5;
  --cz-warning: #fc9231;
  --cz-danger: #f03d3d;
  --cz-light: #fff;
  --cz-dark: #222934;
  ...
}`}
        </CodeBlock>
        <h3 className="h5 mt-2 mt-sm-3 pt-4">Range Slider component CSS variables</h3>
        <p>Here is how CSS variables are scoped within the Range Slider component:</p>
        <CodeBlock language="scss" border copyButton={false}>
          {`// Inside src/styles/components/_forms.scss
// During compilation, the --#{$prefix} placeholder is replaced with cz-, reflecting the predefined variable prefix in the final CSS output.

.range-slider {
  --#{$prefix}range-slider-height: #{$range-slider-height};
  --#{$prefix}range-slider-bg: #{$range-slider-bg};
  --#{$prefix}range-slider-connect-bg: #{$range-slider-connect-bg};
  --#{$prefix}range-slider-handle-size: #{$range-slider-handle-size};
  --#{$prefix}range-slider-handle-bg: #{$range-slider-handle-bg};
  --#{$prefix}range-slider-handle-active-bg: #{$range-slider-handle-active-bg};
  --#{$prefix}range-slider-handle-border-width: #{$range-slider-handle-border-width};
  --#{$prefix}range-slider-handle-border-color: #{$range-slider-handle-border-color};
  --#{$prefix}range-slider-handle-border-radius: 50%;
  --#{$prefix}range-slider-pips-color: var(--#{$prefix}body-color);
  --#{$prefix}range-slider-pips-font-size: #{$range-slider-pips-font-size};
  --#{$prefix}range-slider-pips-border-width: var(--#{$prefix}border-width);
  --#{$prefix}range-slider-pips-border-color: #{adjust-color($border-color, $lightness: -6%)}; // stylelint-disable-line
  --#{$prefix}range-slider-tooltip-padding-y: #{$tooltip-padding-y};
  --#{$prefix}range-slider-tooltip-padding-x: #{$tooltip-padding-x};
  --#{$prefix}range-slider-tooltip-bg: #{$range-slider-tooltip-bg};
  --#{$prefix}range-slider-tooltip-color: #{$range-slider-tooltip-color};
  --#{$prefix}range-slider-tooltip-font-size: #{$range-slider-tooltip-font-size};
  --#{$prefix}range-slider-tooltip-border-radius: #{$tooltip-border-radius};
}`}
        </CodeBlock>
      </section>

      <section id="customize-css-variables" className="docs-section">
        <h2 className="h3 mb-sm-4">Customizing the template using CSS variables</h2>
        <p className="pb-2 mb-4">
          Cartzilla allows for flexible customization through CSS variables, which can be applied at both the global and
          component levels to tailor the styling to specific needs.
        </p>
        <h3 className="h5">Global scope customization</h3>
        <p>
          To customize the template globally in a Next.js (App Router) project, you can define custom CSS variables
          within a <code>&lt;style&gt;</code> tag inside the head section of your root <code>layout.tsx</code> file.
          This method ensures the styles are applied across all pages of your application.
        </p>
        <p>
          Example of adding global variables to the <code>&lt;head&gt;</code> section:
        </p>
        <CodeBlock border copyButton={false}>
          {`// src/app/layout.tsx

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en" suppressHydrationWarning>
    <head>
      <style>
        {\`
          :root {
            --cz-primary: #007bff;
            --cz-secondary: #555e67;
          }
        \`}
      </style>
    </head>
    ...
  </html>
)`}
        </CodeBlock>
        <h3 className="h5 pt-2 mt-4">Component scope customization</h3>
        <p>
          For more localized changes, component-scoped variables can be added directly to a component using the{' '}
          <code>style</code> attribute. This method allows you to customize individual components without affecting
          others.
        </p>
        <p>
          Example of customizing the <code>RangeSlider</code> component:
        </p>
        <CodeBlock border copyButton={false}>
          {`<RangeSlider
  min={0}
  max={1000}
  step={1}
  defaultValue={[450]}
  minStepsBetweenThumbs={1}
  tooltipPrefix="$"
  style={
    {
      '--cz-range-slider-bg': '#e9ecef',
      '--cz-range-slider-handle-bg': '#007bff',
    }
  }
/>`}
        </CodeBlock>
        <h3 className="h5 pt-2 mt-4">
          Understanding the <code>cz-</code> prefix
        </h3>
        <p>
          The <code>cz-</code> prefix for CSS variables is derived from the <code>$prefix</code> variable defined in{' '}
          <code>src/styles/_variables.scss</code>. This prefix helps to namespace Cartzilla&apos;s CSS variables,
          avoiding conflicts with other styles or scripts.
        </p>
        <CodeBlock language="scss" border copyButton={false}>
          {`// Inside src/styles/_variables.scss

// Prefix for CSS variables
$prefix: cz- !default;`}
        </CodeBlock>
        <p className="pt-4">
          If you need to change this prefix, copy the <code>$prefix</code> variable to{' '}
          <code>src/styles/_user-variables.scss</code> and update its value there. This customization will propagate
          through all related CSS variables in your project.
        </p>
        <h4 className="h6 pt-3">Updating the prefix in user variables</h4>
        <CodeBlock language="scss" border copyButton={false}>
          {`// Inside src/styles/_user-variables.scss
$prefix: myapp- !default;  // Change prefix to 'myapp-'`}
        </CodeBlock>
        <p className="pt-4 mb-0">
          This will change the prefix from <code>--cz-</code> to <code>--myapp-</code> for all CSS variables, ensuring a
          unique and consistent branding style across your template.
        </p>
      </section>
    </section>
  </>
)

export default CSSVariablesDocsPage
