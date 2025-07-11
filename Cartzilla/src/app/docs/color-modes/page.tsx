import type { Metadata } from 'next'
import Image from 'next/image'
import Badge from 'react-bootstrap/Badge'
import CodeBlock from '@/components/code-block'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Color modes (Light/Dark)',
}

const ColorModesDocsPage = () => (
  <>
    <section className="py-2 pb-3 pb-lg-4">
      <Badge bg="primary-subtle" text="primary" pill className="fw-semibold py-2 px-3 mb-2">
        Customize
      </Badge>
      <h1 className="pt-1 mb-2">Color modes (Light/Dark)</h1>
    </section>

    <section className="mb-3">
      <p>
        Cartzilla supports both Light and Dark color modes (commonly referred to as themes). Users can seamlessly switch
        between these modes using the theme switcher. However, there may be instances when:
      </p>
      <ol>
        <li>You require only one mode, either Light or Dark.</li>
        <li>You want the Dark mode to be the default setting.</li>
      </ol>
      <p className="pb-4 mb-sm-4">
        Let&apos;s explore these scenarios in detail and discuss how to effectively manage them.
      </p>

      <section id="only-light-mode" className="docs-section pb-sm-2 mb-5">
        <h2 className="h3 mb-sm-4">Only Light mode, removing Dark mode entirely</h2>
        <ol className="gap-4 m-0">
          <li>
            <span className="d-block pb-1 mb-3">
              <span className="text-body-emphasis fw-semibold">Clear browser local storage:</span> Begin by clearing the
              browser&apos;s local storage to remove any saved theme variables. In the Chrome browser, this can be done
              through the Application panel.
            </span>
            <div style={{ maxWidth: 577 }}>
              <Image
                priority
                src="/img/docs/local-storage.png"
                className="border rounded"
                width={1150}
                height={728}
                alt="Chrome local storage"
              />
            </div>
          </li>
          <li>
            <span className="d-block pb-1 mb-3">
              <span className="text-body-emphasis fw-semibold">Remove mode-switching code:</span> In the root{' '}
              <code>layout.tsx</code> file, remove the import of <code>ThemeProvider</code> from{' '}
              <code>next-themes</code> and remove the wrapper component that encloses the content inside{' '}
              <code>&lt;ThemeProvider&gt;</code>.
            </span>
            <CodeBlock border copyButton={false}>
              {`// src/app/layout.tsx
...
import { ThemeProvider } from 'next-themes'
...
<ThemeProvider attribute="data-bs-theme" defaultTheme="light" disableTransitionOnChange>
  <ProgressProvider>
    <OffcanvasProvider>
      <ModalProvider>
        <CartProvider>{children}</CartProvider>
      </ModalProvider>
    </OffcanvasProvider>
    <div className="floating-buttons position-fixed top-50 end-0 z-sticky me-3 me-xl-4 pb-4">
      <ScrollTopButton scrollOffset={500} />
    </div>
  </ProgressProvider>
</ThemeProvider>
...`}
            </CodeBlock>
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Remove all instances of the ThemeSwitcher component:</span>{' '}
            Delete all occurrences of the <code>&lt;ThemeSwitcher&gt;</code> component, typically found inside the{' '}
            <code>&lt;Navbar&gt;</code> component.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Disable dark mode styles:</span> Set the{' '}
            <code>$enable-dark-mode</code> variable to false inside <code>src/styles/_user-variables.scss</code>. Once
            compiled, the CSS will no longer include dark mode styles.
          </li>
        </ol>
      </section>

      <section id="only-dark-mode" className="docs-section pb-sm-2 pb-md-3 mb-5">
        <h2 className="h3 mb-sm-4">Only Dark mode, disabling the Light mode option</h2>
        <ol className="gap-4 m-0">
          <li>
            <span className="d-block pb-1 mb-3">
              <span className="text-body-emphasis fw-semibold">Set default theme to dark mode:</span> In the root{' '}
              <code>layout.tsx</code> file, set the <code>defaultTheme</code> prop to <code>&quot;dark&quot;</code> on
              the <code>&lt;ThemeProvider&gt;</code> component to ensure the webpage loads in dark mode by default.
            </span>
            <CodeBlock border copyButton={false}>
              {`// src/app/layout.tsx
...
<ThemeProvider attribute="data-bs-theme" defaultTheme="dark" disableTransitionOnChange>
  <ProgressProvider>
    <OffcanvasProvider>
      <ModalProvider>
        <CartProvider>{children}</CartProvider>
      </ModalProvider>
    </OffcanvasProvider>
    <div className="floating-buttons position-fixed top-50 end-0 z-sticky me-3 me-xl-4 pb-4">
      <ScrollTopButton scrollOffset={500} />
    </div>
  </ProgressProvider>
</ThemeProvider>
...`}
            </CodeBlock>
          </li>
          <li>
            <span className="d-block pb-1 mb-3">
              <span className="text-body-emphasis fw-semibold">Clear browser local storage:</span> Next, clear the
              browser&apos;s local storage to remove any saved theme variables. In the Chrome browser, this can be done
              through the Application panel.
            </span>
            <div style={{ maxWidth: 577 }}>
              <Image
                src="/img/docs/local-storage.png"
                className="border rounded"
                width={1150}
                height={728}
                alt="Chrome local storage"
              />
            </div>
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Remove all instances of the ThemeSwitcher component:</span>{' '}
            Finally, delete all occurrences of the <code>&lt;ThemeSwitcher&gt;</code> component, typically found inside
            the <code>&lt;Navbar&gt;</code> component.
          </li>
        </ol>
      </section>

      <section id="default-dark-mode" className="docs-section">
        <h2 className="h3 mb-sm-4">Setting Dark mode as the default</h2>
        <ol className="gap-4 m-0">
          <li>
            <span className="d-block pb-1 mb-3">
              <span className="text-body-emphasis fw-semibold">Set default theme to dark mode:</span> In the root{' '}
              <code>layout.tsx</code> file, set the <code>defaultTheme</code> prop to <code>&quot;dark&quot;</code> on
              the <code>&lt;ThemeProvider&gt;</code> component to ensure the webpage loads in dark mode by default.
            </span>
            <CodeBlock border copyButton={false}>
              {`// src/app/layout.tsx
...
<ThemeProvider attribute="data-bs-theme" defaultTheme="dark" disableTransitionOnChange>
  <ProgressProvider>
    <OffcanvasProvider>
      <ModalProvider>
        <CartProvider>{children}</CartProvider>
      </ModalProvider>
    </OffcanvasProvider>
    <div className="floating-buttons position-fixed top-50 end-0 z-sticky me-3 me-xl-4 pb-4">
      <ScrollTopButton scrollOffset={500} />
    </div>
  </ProgressProvider>
</ThemeProvider>
...`}
            </CodeBlock>
          </li>
          <li>
            <span className="d-block pb-1 mb-3">
              <span className="text-body-emphasis fw-semibold">Clear browser local storage:</span> Next, clear the
              browser&apos;s local storage to remove any saved theme variables. In the Chrome browser, this can be done
              through the Application panel.
            </span>
            <div style={{ maxWidth: 577 }}>
              <Image
                src="/img/docs/local-storage.png"
                className="border rounded"
                width={1150}
                height={728}
                alt="Chrome local storage"
              />
            </div>
          </li>
        </ol>
      </section>
    </section>
  </>
)

export default ColorModesDocsPage
