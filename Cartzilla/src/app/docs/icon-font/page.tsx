import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import CodeBlock from '@/components/code-block'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Icon font',
}

const IconFontDocsPage = () => (
  <>
    <section className="py-2 pb-3 pb-lg-4">
      <Badge bg="success-subtle" text="success" pill className="fw-semibold py-2 px-3 mb-2">
        Getting started
      </Badge>
      <h1 className="pt-1 mb-2">Icon font</h1>
    </section>

    <section className="mb-3">
      <p className="pb-4 mb-sm-4">
        This article explains how to use, add or remove icons from the icon font in your project.
      </p>

      <section id="using-icons" className="docs-section pb-sm-2 pb-md-3 mb-5">
        <h2 className="h3 mb-sm-4">Using icons</h2>
        <p className="pb-2 mb-4">
          Icon fonts are typically referenced in the <code>&lt;head&gt;</code> section of HTML documents to ensure they
          are preloaded and styled correctly. In a Next.js application, the icon font is loaded within the root{' '}
          <code>layout.tsx</code> file:
        </p>
        <CodeBlock border copyButton={false}>
          {`// src/app/layout.tsx
...
import '@/icons/font/cartzillaIcons.css'
...
const cartzillaIcons = localFont({
  src: '../icons/font/cartzillaIcons.woff2',
  preload: true,
  adjustFontFallback: false,
})
...`}
        </CodeBlock>
        <h3 className="h5 mt-2 mt-sm-3 pt-4">Applying icons in your JSX code</h3>
        <p>
          Icons can be applied within your JSX by using specific classes related to the icon&apos;s SVG file name.
          Here&apos;s an example of how to include an icon:
        </p>
        <CodeBlock border>{`<i className="ci-settings" />`}</CodeBlock>
      </section>

      <section id="adding-icons" className="docs-section pb-sm-2 mb-5">
        <h2 className="h3 mb-sm-4">Adding new icons</h2>
        <p className="pb-2">To expand your icon font library by adding new icons, follow these steps:</p>
        <ol className="gap-3 m-0">
          <li>
            <span className="text-body-emphasis fw-semibold">Select the .svg icon:</span> Choose the .svg icon you wish
            to add to the font library.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Format the icon:</span> Ensure the icon is properly
            formatted. It should be placed within a 24x24px grid, with all strokes outlined and shapes unified. Tools
            like Adobe Illustrator or other vector graphics software are suitable for this task.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Save the icon:</span> Store the new icon in the{' '}
            <code>src/icons/svg</code> folder. Note, the output icon&apos;s CSS class will correspond to the SVG file
            name.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Generate the icon font:</span> Execute the{' '}
            <kbd className="text-nowrap">npm run build-icon-font</kbd> command. This command runs a script that creates
            the <code>cartzillaIcons.woff2</code> font file and generates the corresponding{' '}
            <code>cartzillaIcons.css</code> file from the collection of <code>.svg</code> icons located in the{' '}
            <code>src/icons/svg</code> directory.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Optional configuration changes:</span> If you wish to
            change the output icon font name, modify the <code>config.fontName</code> property in the{' '}
            <code>scripts/icon-font.mjs</code> file. To change the prefix of the icon CSS class (default is
            &quot;ci&quot;), adjust the <code>config.cssPrefix</code> property in the same config file. Ensure to update
            all relevant references in your JSX code if any names are changed.
          </li>
        </ol>
      </section>

      <section id="removing-icons" className="docs-section">
        <h2 className="h3 mb-sm-4">Removing icons</h2>
        <p className="pb-2">To remove icons from your project:</p>
        <ol className="gap-3">
          <li>
            <span className="text-body-emphasis fw-semibold">Delete the icon(s):</span> Remove the target{' '}
            <code>.svg</code> icon(s) from the <code>src/icons/svg</code> folder.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Regenerate the icon font:</span> Run the{' '}
            <kbd className="text-nowrap">npm run build-icon-font</kbd> command to update the icon font. This removes the
            deleted icons from the compiled font and the CSS file.
          </li>
        </ol>
        <p className="mb-0">
          By following these steps, you can effectively manage the icons within your project, ensuring that your web
          application has a tailored and optimized set of icons at your disposal.
        </p>
      </section>
    </section>
  </>
)

export default IconFontDocsPage
