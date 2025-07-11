import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import CodeBlock from '@/components/code-block'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Right-to-Left (RTL)',
}

const RtlDocsPage = () => {
  return (
    <>
      <section className="py-2 pb-3 pb-lg-4">
        <Badge
          bg="success-subtle"
          text="success"
          pill={true}
          className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
        >
          Getting started
        </Badge>
        <h1 className="pt-1 mb-2">Right-to-Left (RTL)</h1>
      </section>

      <section className="mb-3">
        <p className="pb-4 mb-sm-4">
          Right-to-Left (RTL) language support is a crucial feature for websites targeting audiences in regions where
          languages like Arabic, Hebrew, Urdu, or Persian are used. The Cartzilla includes built-in RTL support that can
          be easily enabled or disabled based on your requirements.
        </p>

        <section className="docs-section pb-sm-2 pb-md-3 mb-5" id="enable-rtl">
          <h2 className="h3 mb-sm-4">Enabling RTL support</h2>
          <p className="pb-2">
            Enabling RTL support in the Cartzilla template is straightforward and can be done through the environment
            variables. Follow these steps:
          </p>
          <ol className="gap-3">
            <li>Locate the root directory of your Cartzilla project</li>
            <li>
              <span className="d-block mb-3">
                Create and modify the <code>.env</code> file:
              </span>
              <CodeBlock language="bash" border>{`echo NEXT_PUBLIC_ENABLE_RTL=true >> .env
npm run dev`}</CodeBlock>
            </li>
            <li>
              <span className="d-block mb-3">Restart your development server:</span>
              <CodeBlock language="bash" border>{`npm run dev`}</CodeBlock>
            </li>
          </ol>
          <p className="mb-0">
            Once the server restarts, your application will render in RTL mode, with all content aligned from right to
            left.
          </p>
        </section>

        <section className="docs-section pb-sm-2 pb-md-3 mb-5" id="disable-rtl">
          <h2 className="h3 mb-sm-4">Disabling RTL support</h2>
          <p className="pb-2">If you want to revert to the default Left-to-Right (LTR) layout:</p>
          <ol className="gap-3 mb-0">
            <li>
              Open the <code>.env</code> file in the root directory
            </li>
            <li>
              <span className="d-block mb-3">
                Set the <code>NEXT_PUBLIC_ENABLE_RTL</code> value to <code>false</code>:
              </span>
              <CodeBlock language="bash" border>{`NEXT_PUBLIC_ENABLE_RTL=false`}</CodeBlock>
            </li>
            <li>
              <span className="d-block mb-3">Restart your development server:</span>
              <CodeBlock language="bash" border>{`npm run dev`}</CodeBlock>
            </li>
          </ol>
        </section>

        <section className="docs-section pb-sm-2 pb-md-3 mb-5" id="howto-rtl">
          <h2 className="h3 mb-sm-4">How RTL support works</h2>
          <p className="pb-2">The Cartzilla template implements RTL support through:</p>
          <ol className="gap-3 mb-0">
            <li>
              <span className="text-body-emphasis fw-semibold">Environment variables:</span> The{' '}
              <code>NEXT_PUBLIC_ENABLE_RTL</code> environment variable controls whether RTL mode is active.
            </li>
            <li>
              <span className="text-body-emphasis fw-semibold">Dynamic HTML direction:</span> When RTL is enabled, the{' '}
              <code>&lt;html&gt;</code> element receives a <code>dir=&quot;rtl&quot;</code> attribute that instructs
              browsers to render content from right to left.
            </li>
            <li>
              <span className="text-body-emphasis fw-semibold">RTL stylesheets:</span> The template&apos;s Sass (SCSS)
              source files are first compiled to CSS in LTR format. Then, using the RTLCSS PostCSS tool, these compiled
              CSS files are automatically converted from Left-to-Right (LTR) to Right-to-Left (RTL) format, properly
              handling alignment, padding, margins, and other directional properties.
            </li>
            <li>
              <span className="text-body-emphasis fw-semibold">Component awareness:</span> UI components are designed to
              respect the current text direction and adjust their layouts accordingly.
            </li>
          </ol>
        </section>

        <section className="docs-section" id="rtl-tips">
          <h2 className="h3 mb-sm-4">Tips for working with RTL</h2>
          <p className="pb-2">
            When developing or customizing your Cartzilla template with RTL support, keep these tips in mind:
          </p>
          <ol className="gap-3 mb-0">
            <li>
              <span className="text-body-emphasis fw-semibold">Test thoroughly:</span> Always test your site in both RTL
              and LTR modes to ensure layouts render correctly in both directions.
            </li>
            <li>
              <span className="text-body-emphasis fw-semibold">Use logical properties:</span> When adding custom CSS,
              prefer logical properties (like <code>margin-inline-start</code>) over directional ones (like{' '}
              <code>margin-left</code>) to ensure your styles work well in both directions.
            </li>
            <li>
              <span className="text-body-emphasis fw-semibold">Icon mirroring:</span> Some icons may need to be mirrored
              in RTL mode (like arrows).
            </li>
            <li>
              <span className="text-body-emphasis fw-semibold">Text alignment:</span> Remember that{' '}
              <code>text-align: left</code> in LTR becomes <code>text-align: right</code> in RTL. The template&apos;s
              RTL stylesheets handle this automatically.
            </li>
            <li>
              <span className="d-block pb-1 mb-3">
                <span className="text-body-emphasis fw-semibold">Production builds:</span> For production, decide which
                direction you want to support and set the environment variable accordingly before building:
              </span>
              <CodeBlock language="bash" copyButton={false} border>{`# For RTL
NEXT_PUBLIC_ENABLE_RTL=true npm run build

# For LTR
NEXT_PUBLIC_ENABLE_RTL=false npm run build`}</CodeBlock>
            </li>
          </ol>
        </section>
      </section>
    </>
  )
}

export default RtlDocsPage
