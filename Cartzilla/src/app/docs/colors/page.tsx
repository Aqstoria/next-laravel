import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import CodeBlock from '@/components/code-block'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Colors',
}

const ColorsDocsPage = () => (
  <>
    <section className="py-2 pb-3 pb-lg-4">
      <Badge bg="primary-subtle" text="primary" pill className="fw-semibold py-2 px-3 mb-2">
        Customize
      </Badge>
      <h1 className="pt-1 mb-2">Colors</h1>
    </section>

    <section className="mb-3">
      <p className="pb-4">
        The color scheme of this template is defined by two sets of color variables, ensuring consistent aesthetics
        across both light and dark color modes.
      </p>

      <section id="colors-gray-theme" className="docs-section pb-sm-2 mb-5">
        <h2 className="h3 mb-sm-4">Grayscale and Theme colors</h2>
        <p>These colors remain constant regardless of the selected color mode:</p>
        <h3 className="h5 pt-2">Grayscale</h3>
        <CodeBlock language="scss" border className="mb-4" style={{ maxWidth: 720 }}>
          {`$white:    #fff !default;
$gray-50:  #f5f7fa !default;
$gray-100: #eef1f6 !default;
$gray-200: #e0e5eb !default;
$gray-300: #cad0d9 !default;
$gray-400: #9ca3af !default;
$gray-500: #6c727f !default;
$gray-600: #4e5562 !default;
$gray-700: #333d4c !default;
$gray-800: #222934 !default;
$gray-900: #181d25 !default;
$gray-950: #131920 !default;
$black:    #000 !default;`}
        </CodeBlock>
        <h3 className="h5 pt-2 pt-sm-3">Theme colors</h3>
        <CodeBlock language="scss" border style={{ maxWidth: 720 }}>
          {`$primary:   #f55266 !default;
$secondary: $gray-500 !default;
$success:   #33b36b !default;
$info:      #2f6ed5 !default;
$warning:   #fc9231 !default;
$danger:    #f03d3d !default;
$light:     $white !default;
$dark:      $gray-800 !default;`}
        </CodeBlock>
      </section>

      <section id="colors-modes" className="docs-section pb-sm-2 mb-5">
        <h2 className="h3 mb-sm-4">Color modes dependant colors</h2>
        <p>
          In addition to the standard grayscale and theme colors, this template includes a set of color variables that
          adapt based on the selected color mode - light or dark. These dependant colors ensure that the template
          maintains visual consistency and optimal readability across different environments.
        </p>
        <h3 className="h5 pt-2">For Light (default) mode</h3>
        <CodeBlock language="scss" border className="mb-4" style={{ maxWidth: 720 }}>
          {`// src/styles/_variables.scss

// Emphasis text
/* stylelint-disable */
$primary-text-emphasis:       adjust-color($primary, $lightness: -10%) !default;
$secondary-text-emphasis:     $gray-700 !default;
$success-text-emphasis:       adjust-color($success, $lightness: -10%) !default;
$danger-text-emphasis:        adjust-color($danger, $lightness: -10%) !default;
$warning-text-emphasis:       adjust-color($warning, $lightness: -10%) !default;
$info-text-emphasis:          adjust-color($info, $lightness: -10%) !default;
$light-text-emphasis:         $gray-700 !default;
$dark-text-emphasis:          $gray-900 !default;
/* stylelint-enable */

// Subtle backgrounds
$primary-bg-subtle:           tint-color($primary, 90%) !default;
$secondary-bg-subtle:         $gray-50 !default;
$success-bg-subtle:           tint-color($success, 90%) !default;
$danger-bg-subtle:            tint-color($danger, 90%) !default;
$warning-bg-subtle:           tint-color($warning, 90%) !default;
$info-bg-subtle:              tint-color($info, 90%) !default;
$light-bg-subtle:             $white !default;
$dark-bg-subtle:              tint-color($dark, 92%) !default;

// Subtle borders
$primary-border-subtle:       tint-color($primary, 80%) !default;
$secondary-border-subtle:     $gray-200 !default;
$success-border-subtle:       tint-color($success, 80%) !default;
$danger-border-subtle:        tint-color($danger, 80%) !default;
$warning-border-subtle:       tint-color($warning, 80%) !default;
$info-border-subtle:          tint-color($info, 80%) !default;
$light-border-subtle:         $gray-100 !default;
$dark-border-subtle:          $gray-200 !default;

// User selection color
$user-selection-color:        rgba($gray-900, .1) !default;

// Body colors
$body-color:                  $gray-600 !default;
$body-bg:                     $white !default;
$body-secondary-color:        $gray-500 !default;
$body-secondary-bg:           $gray-100 !default;
$body-tertiary-color:         $gray-400 !default;
$body-tertiary-bg:            $gray-50 !default;
$body-emphasis-color:         $gray-800 !default;
$link-color:                  $info !default;

// Headings color
$headings-color:              $gray-900 !default;

// Common components colors
$border-color:                $gray-200 !default;
$component-color:             $gray-700 !default;
$component-hover-color:       $gray-900 !default;
$component-hover-bg:          $gray-50 !default;
$component-active-color:      $gray-900 !default;
$component-active-bg:         $gray-100 !default;
$component-disabled-color:    $gray-400 !default;

// Focus ring color
$focus-ring-color:            rgba($gray-900, $focus-ring-opacity) !default;`}
        </CodeBlock>
        <h3 className="h5 pt-2 pt-sm-3">For Dark mode</h3>
        <CodeBlock language="scss" border style={{ maxWidth: 720 }}>
          {`// src/styles/_variables-dark.scss

// Emphasis text
/* stylelint-disable */
$primary-text-emphasis-dark:        adjust-color($primary, $lightness: -5%) !default;
$secondary-text-emphasis-dark:      $gray-200 !default;
$success-text-emphasis-dark:        adjust-color($success, $lightness: -5%) !default;
$danger-text-emphasis-dark:         adjust-color($danger, $lightness: -5%)!default;
$warning-text-emphasis-dark:        adjust-color($warning, $lightness: -5%) !default;
$info-text-emphasis-dark:           adjust-color($info, $lightness: -5%) !default;
$light-text-emphasis-dark:          $gray-200 !default;
$dark-text-emphasis-dark:           $white !default;
/* stylelint-enable */

// Subtle backgrounds
$primary-bg-subtle-dark:            mix($gray-900, $primary, 90%) !default;
$secondary-bg-subtle-dark:          $gray-800 !default;
$success-bg-subtle-dark:            mix($gray-900, $success, 90%) !default;
$danger-bg-subtle-dark:             mix($gray-900, $danger, 90%) !default;
$warning-bg-subtle-dark:            mix($gray-900, $warning, 90%) !default;
$info-bg-subtle-dark:               mix($gray-900, $info, 90%) !default;
$light-bg-subtle-dark:              $gray-900 !default;
$dark-bg-subtle-dark:               $gray-950 !default;

// Subtle borders
$primary-border-subtle-dark:        mix($gray-900, $primary, 80%) !default;
$secondary-border-subtle-dark:      $gray-700 !default;
$success-border-subtle-dark:        mix($gray-900, $success, 80%) !default;
$danger-border-subtle-dark:         mix($gray-900, $danger, 80%) !default;
$warning-border-subtle-dark:        mix($gray-900, $warning, 80%) !default;
$info-border-subtle-dark:           mix($gray-900, $info, 80%) !default;
$light-border-subtle-dark:          $gray-700 !default;
$dark-border-subtle-dark:           $gray-950 !default;

// User selection color
$user-selection-color-dark:         rgba($white, .12) !default;

// Body colors
$body-color-dark:                   $gray-300 !default;
$body-bg-dark:                      $gray-900 !default;
$body-secondary-color-dark:         $gray-400 !default;
$body-secondary-bg-dark:            $gray-700 !default;
$body-tertiary-color-dark:          $gray-500 !default;
$body-tertiary-bg-dark:             $gray-800 !default;
$body-emphasis-color-dark:          $gray-100 !default;
$link-color-dark:                   $info !default;

// Headings color
$headings-color-dark:               $white !default;

// Common components colors
$border-color-dark:                 $gray-700 !default;
$component-color-dark:              $gray-200 !default;
$component-hover-color-dark:        $white !default;
$component-hover-bg-dark:           $gray-800 !default;
$component-active-color-dark:       $white !default;
$component-active-bg-dark:          $gray-700 !default;
$component-disabled-color-dark:     $gray-500 !default;

// Focus ring color
$focus-ring-color-dark:             rgba($white, $focus-ring-opacity) !default;`}
        </CodeBlock>
      </section>

      <section id="colors-customize" className="docs-section">
        <h2 className="h3 mb-4">Customizing colors</h2>
        <p>
          To align the template colors with your branding or personal preferences, you can modify the color variables
          for light mode, dark mode, or both. This customization involves variables from both the standard set
          (grayscale and theme colors) and those dependant on light and dark modes.
        </p>
        <h3 className="h5 pt-2">Steps to customize color variables:</h3>
        <ol>
          <li>
            <span className="text-body-emphasis fw-semibold">Identify the variable:</span> Determine which color
            variable(s) you wish to change. For standard grayscale and theme colors, find these in{' '}
            <code>src/styles/_variables.scss</code>. For mode-dependant colors, check{' '}
            <code>src/styles/_variables.scss</code> for light mode and <code>src/styles/_variables-dark.scss</code> for
            dark mode.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Copy the variable:</span> Select and copy the variable(s)
            from the appropriate file. Variables without mode-specific versions (grayscale and main theme colors) are
            modified for both modes simultaneously unless overridden.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Modify in user variables file:</span> Select and copy the
            variable(s) from the appropriate file. Variables without mode-specific versions (grayscale and main theme
            colors) are modified for both modes simultaneously unless overridden.
            <ul>
              <li>
                Paste the copied variable(s) into <code>src/styles/_user-variables.scss</code>.
              </li>
              <li>Change the value(s) to your desired colors.</li>
            </ul>
          </li>
        </ol>
        <p>Here&apos;s an example of how to change the primary theme color and a mode-specific background color:</p>
        <CodeBlock language="scss" border style={{ maxWidth: 720 }}>
          {`Inside src/styles/_user-variables.scss

$primary: #0066cc !default; // New primary color for all modes
$background-dark: #101010 !default; // New background color for dark mode`}
        </CodeBlock>
      </section>
    </section>
  </>
)

export default ColorsDocsPage
