import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Configuration files',
}

const ConfigurationFilesDocsPage = () => {
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
        <h1 className="py-1 pb-sm-0 mb-sm-4">Configuration files</h1>
        <p className="mb-0">
          This section outlines the configuration files available in your project. These files are crucial for managing
          and customizing the build system, ensuring that the development environment is tailored to meet specific
          requirements.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="h5 pb-1 pb-sm-0 mb-sm-4">Configuration files overview</h2>
        <Table responsive bordered className="mb-0" style={{ minWidth: 600 }}>
          <thead>
            <tr>
              <th scope="col">File name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td>
                <code>next.config.mjs</code>
              </td>
              <td>
                Configuration file for Next.js, allowing customization of the build process, webpack configuration,
                routing, and more. It defines essential build settings and can be used to configure various Next.js
                features like image optimization, internationalization, and custom webpack configurations.
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <code>package.json</code>
              </td>
              <td>
                Manages the project&apos;s metadata, scripts, and dependencies, serving as a manifest file for Node.js
                projects. Essential for npm to identify the project&apos;s dependencies, scripts, and version info.
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <code>.editorconfig</code>
              </td>
              <td>
                Helps maintain consistent coding styles for multiple developers working across various editors and IDEs.
                It supports a number of properties for setting indent style, charset, and more. For detailed
                configuration, visit the{' '}
                <a className="fw-medium" href="https://editorconfig.org" target="_blank" rel="noopener">
                  EditorConfig Documentation
                </a>
                .
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <code>tsconfig.json</code>
              </td>
              <td>
                Configuration file for TypeScript compiler options and project settings. It defines how TypeScript
                should compile your code and which features to support. For more information, see the{' '}
                <a
                  className="fw-medium"
                  href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"
                  target="_blank"
                  rel="noopener"
                >
                  TypeScript Documentation
                </a>
                .
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <code>.gitignore</code>
              </td>
              <td>
                Specifies files and directories that Git should ignore. Helps prevent unneeded files from being
                committed to your repository.
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <code>.eslintrc.json</code>
              </td>
              <td>
                Sets up ESLint rules to enforce coding styles and catch errors in JavaScript and TypeScript. Detailed
                documentation is available on{' '}
                <a
                  className="fw-medium"
                  href="https://eslint.org/docs/user-guide/configuring"
                  target="_blank"
                  rel="noopener"
                >
                  ESLint&apos;s Configuring Guide
                </a>
                .
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <code>.prettierrc</code>
              </td>
              <td>
                Defines code formatting rules for Prettier, ensuring consistent style across your project. For a
                detailed list of configurable options, refer to the{' '}
                <a className="fw-medium" href="https://prettier.io/docs/en/options.html" target="_blank" rel="noopener">
                  Prettier Options Documentation
                </a>
                .
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <code>.prettierignore</code>
              </td>
              <td>
                Lists the files and directories that Prettier should ignore, similar to .gitignore but specifically for
                code formatting.
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <code>.stylelintrc.json</code>
              </td>
              <td>
                Provides Stylelint configurations to maintain consistent CSS or SCSS syntax in your project. You can
                explore more about configuring Stylelint and its rules on the{' '}
                <a className="fw-medium" href="https://stylelint.io/user-guide/rules" target="_blank" rel="noopener">
                  Stylelint Rules
                </a>
                .
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <code>.stylelintignore</code>
              </td>
              <td>
                Lists the files and directories that Stylelint should ignore when checking CSS/SCSS files, similar to
                .gitignore but specifically for style linting.
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <code>scripts/icon-font.mjs</code>
              </td>
              <td>
                A utility script that generates icon fonts from SVG files. This is used during the build process to
                create custom icon fonts for the template.
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <code>manifest.ts</code>
              </td>
              <td>
                Defines the Progressive Web App (PWA) manifest for the application. Located in the src/app directory,
                this file exports the web app manifest configuration that determines how your app appears when installed
                on a user&apos;s device.
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  )
}

export default ConfigurationFilesDocsPage
