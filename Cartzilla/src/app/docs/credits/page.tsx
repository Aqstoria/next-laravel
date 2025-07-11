import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Source and credits',
}

const CreditsDocsPage = () => (
  <>
    <section className="py-2 pb-3 pb-lg-4">
      <Badge bg="success-subtle" text="success" pill className="fw-semibold py-2 px-3 mb-2">
        Getting started
      </Badge>
      <h1 className="pt-1 mb-2">Sources and credits</h1>
    </section>

    <section className="mb-3">
      <p className="mb-4">
        While creating this template, we used third-party plugins, images, icons, fonts, and more. We would like to
        extend our gratitude to their creators for their invaluable contributions.
      </p>
      <h2 className="h4 pt-3">Plugins, Libraries and Frameworks</h2>
      <ul className="list-unstyled">
        {[
          { name: 'React', href: 'https://react.dev/' },
          { name: 'Next.js', href: 'https://nextjs.org/' },
          { name: 'Bootstrap 5', href: 'https://getbootstrap.com/' },
          { name: 'React Bootstrap', href: 'https://react-bootstrap.netlify.app/' },
          { name: 'SWR (Data Fetching)', href: 'https://swr.vercel.app/' },
          { name: 'Next Themes', href: 'https://github.com/pacocoursey/next-themes' },
          { name: 'BProgress', href: 'https://bprogress.vercel.app/' },
          { name: 'Swiper', href: 'https://swiperjs.com/' },
          { name: 'Glightbox', href: 'https://biati-digital.github.io/glightbox/' },
          { name: 'Choices', href: 'https://choices-js.github.io/Choices/' },
          { name: 'Radix UI Slider', href: 'https://www.radix-ui.com/primitives/docs/components/slider' },
          { name: 'React Datepicker', href: 'https://github.com/Hacker0x01/react-datepicker' },
          {
            name: 'Cleave.js (React)',
            href: 'https://github.com/nosir/cleave.js/blob/master/doc/reactjs-component-usage.md',
          },
          { name: 'Drift (zoom)', href: 'https://github.com/strawdynamics/drift' },
          { name: 'Simplebar React', href: 'https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-react' },
          { name: 'React Chart.js 2', href: 'https://react-chartjs-2.js.org/' },
          { name: 'Image Comparison Slider', href: 'https://img-comparison-slider.sneas.io/' },
          { name: 'React Table', href: 'https://tanstack.com/table/latest' },
          { name: 'TimezZ', href: 'https://github.com/letstri/timezz' },
          {
            name: 'React Syntax Highlighter',
            href: 'https://github.com/react-syntax-highlighter/react-syntax-highlighter',
          },
        ].map(({ name, href }, index) => (
          <li key={index} className="mb-2">
            <span className="text-body-emphasis fw-semibold">{name} - </span>
            <a href={href} target="_blank" rel="noopener">
              {href}
            </a>
          </li>
        ))}
      </ul>
      <h2 className="h4 pt-4">Google Fonts</h2>
      <ul className="list-unstyled">
        <li className="mb-2">
          <span className="text-body-emphasis fw-semibold">Inter - </span>
          <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener">
            https://fonts.google.com/specimen/Inter
          </a>
        </li>
      </ul>
      <h2 className="h4 pt-4">Font Icons</h2>
      <ul className="list-unstyled">
        <li className="mb-2">
          <span className="text-body-emphasis fw-semibold">Feather Icons - </span>
          <a href="https://feathericons.com/" target="_blank" rel="noopener">
            https://feathericons.com/
          </a>
        </li>
        <li className="mb-2">
          <span className="text-body-emphasis fw-semibold">Social Icons - </span>
          <a href="https://www.flaticon.com/packs/social-logo-2" target="_blank" rel="noopener">
            https://www.flaticon.com/packs/social-logo-2
          </a>
        </li>
      </ul>
      <h2 className="h4 pt-4">Flags</h2>
      <ul className="list-unstyled">
        <li className="mb-2">
          <a href="https://feathericons.com/" target="_blank" rel="noopener">
            https://feathericons.com/
          </a>
        </li>
      </ul>
      <h2 className="h4 pt-4">Logos</h2>
      <ul className="list-unstyled">
        <li>
          <a href="https://worldvectorlogo.com/" target="_blank" rel="noopener">
            https://worldvectorlogo.com/
          </a>
        </li>
      </ul>
      <ul className="list-unstyled">
        <li className="mb-2">
          <a href="https://logoipsum.com/" target="_blank" rel="noopener">
            https://logoipsum.com/
          </a>
        </li>
      </ul>
      <h2 className="h4 pt-4">Graphic Assets</h2>
      <ul className="list-unstyled">
        {[
          { name: 'Freepick', href: 'https://www.freepik.com/' },
          { name: 'Flaticon', href: 'https://www.flaticon.com/' },
          { name: 'Unsplash', href: 'https://unsplash.com/' },
          { name: 'Pexels', href: 'https://www.pexels.com/' },
        ].map(({ name, href }, index) => (
          <li key={index} className="mb-2">
            <span className="text-body-emphasis fw-semibold">{name} - </span>
            <a href={href} target="_blank" rel="noopener">
              {href}
            </a>
          </li>
        ))}
      </ul>
      <h2 className="h4 pt-4">Development Packages</h2>
      <ul className="list-unstyled">
        {[
          { name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
          { name: 'Sass', href: 'https://sass-lang.com/' },
          { name: 'Node.js', href: 'https://nodejs.org/en/' },
          { name: 'Npm', href: 'https://www.npmjs.com/' },
          { name: 'Webpack', href: 'https://webpack.js.org/' },
          { name: 'Babel', href: 'https://babeljs.io/' },
          { name: 'Stylelint', href: 'https://stylelint.io/' },
          { name: 'ESLint', href: 'https://eslint.org/' },
          { name: 'Prettier', href: 'https://prettier.io/' },
          { name: 'PostCSS', href: 'https://postcss.org/' },
          { name: 'RTLCSS', href: 'https://rtlcss.com/index.html' },
          { name: 'Autoprefixer', href: 'https://autoprefixer.github.io/' },
          { name: 'Fantasticon', href: 'https://github.com/tancredi/fantasticon' },
          { name: 'SVGO', href: 'https://github.com/svg/svgo' },
        ].map(({ name, href }, index) => (
          <li key={index} className="mb-2">
            <span className="text-body-emphasis fw-semibold">{name} - </span>
            <a href={href} target="_blank" rel="noopener">
              {href}
            </a>
          </li>
        ))}
      </ul>
    </section>
  </>
)

export default CreditsDocsPage
