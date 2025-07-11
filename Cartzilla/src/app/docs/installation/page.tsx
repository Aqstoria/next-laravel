import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Installation',
}

const InstallationDocsPage = () => {
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
        <h1 className="pt-1">Installation</h1>
      </section>

      <section className="pb-sm-2 mb-5">
        <div className="border-start border-4 border-warning rounded-end-4 shadow overflow-hidden py-3 py-sm-4 px-4 px-sm-5">
          <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary d-none d-block-dark" />
          <div className="position-relative z-1 py-3">
            <h2 className="h4 text-body-emphasis fw-normal lh-base">
              The <span className="fw-semibold">Cartzilla template</span> you are currently viewing is a{' '}
              <span className="fw-semibold">React/Next.js</span> template built with Bootstrap 5, and it is{' '}
              <span className="fw-semibold">NOT a WordPress</span> theme.
            </h2>
            <p className="fs-lg text-body-secondary mb-0">
              Please do not attempt to install the Cartzilla files on WordPress, as this will not work.
            </p>
          </div>
        </div>
      </section>

      <section className="docs-section pb-sm-2 mb-5" id="prerequisites">
        <h2 className="h3 pb-1 pb-sm-0 mb-sm-4">Prerequisites</h2>
        <ul className="gap-3">
          <li>
            <span className="text-body-emphasis fw-semibold">JavaScript / TypeScript (required):</span> Familiarity with
            modern JavaScript and TypeScript is essential for working with this React/Next.js template.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">React / Next.js (required):</span> This template is built
            using React and Next.js 15 (app directory). A solid understanding of React components, hooks, and routing in
            Next.js is necessary.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Bootstrap 5 + React-Bootstrap (required):</span> The UI is
            built using Bootstrap 5 components via the React-Bootstrap library. Understanding how Bootstrap classes and
            React-Bootstrap components work together is important for customization.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Sass / Scss (highly recommended):</span> Using SCSS
            variables and mixins makes it much easier to customize the styling of the template compared to editing plain
            CSS. This allows for cleaner and more maintainable style changes.
          </li>
          <li>
            <span className="text-body-emphasis fw-semibold">Npm (highly recommended):</span> npm is used to manage
            project dependencies and run scripts for development, building, and linting. It is required to install
            React, Next.js, Bootstrap, and other packages.
          </li>
        </ul>
        <p className="mb-0">
          <span className="text-body-emphasis fw-semibold">Note:</span> All necessary configuration files, such as{' '}
          <span className="text-body-emphasis fw-medium">package.json</span>, are provided in the download package. For
          detailed information on each configuration file and its purpose, refer to the{' '}
          <a className="fw-medium" href="./configuration">
            Configuration files
          </a>{' '}
          section of our documentation.
        </p>
      </section>

      <section className="docs-section pb-sm-2 mb-5" id="editor-cli">
        <h2 className="h3 pb-1 pb-sm-0 mb-sm-4">Text editor or CLI</h2>
        <p className="mb-4">
          You can use any text editor and command line tool available to you, such as Command Prompt for Windows or
          Terminal for macOS. Our personal preference is{' '}
          <a className="fw-medium" href="https://code.visualstudio.com/" target="_blank" rel="noopener">
            Visual Studio Code.
          </a>{' '}
          It is a free editor that includes a built-in terminal (console), an integrated Git client, debugging
          capabilities, a vast library of extensions, and it is available for macOS, Windows, and Linux.
        </p>
        <Alert variant="info" className="text-body-emphasis d-sm-flex py-4 mb-0">
          <i className="ci-info text-info fs-4 mb-2 mb-sm-0" />
          <div className="ps-sm-3 pe-sm-5 w-100">
            <span className="text-info fw-semibold">We highly recommend</span> installing the{' '}
            <a
              className="fw-medium"
              href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
              target="_blank"
              rel="noopener"
            >
              VS Code Prettier
            </a>{' '}
            plugin and setting it as your default formatter for JavaScript. Enable the{' '}
            <span className="fw-medium text-body-emphasis">&quot;format code on save&quot;</span> option to
            automatically beautify your code each time you save a file, enhancing readability and consistency.
          </div>
        </Alert>
      </section>

      <section className="docs-section mb-3" id="install-node">
        <h2 className="h3 pb-1 pb-sm-0 mb-sm-4">Installing Node.js, npm and dependencies</h2>
        <p>
          To set up the Cartzilla development environment, you will need to install Node.js and its package manager,
          npm. Node.js is completely free and can be downloaded from its official website for macOS, Windows, and Linux
          systems. You can download Node.js and npm from this{' '}
          <a className="fw-medium" href="https://nodejs.org/en/" target="_blank" rel="noopener">
            link.
          </a>
        </p>
        <p className="mb-4">
          For more information about the Node Package Manager and the packages available, please visit{' '}
          <a className="fw-medium" href="https://www.npmjs.com/" target="_blank" rel="noopener">
            npm&apos;s official website.
          </a>
        </p>
        <h3 className="h5 pt-2">Installing necessary packages for Cartzilla development</h3>
        <p>
          Once Node.js and npm are installed, you&apos;re ready to install all the dependencies required for developing
          with Cartzilla.
        </p>
        <p>Open your command line tool and type the following command:</p>
        <kbd className="d-inline-block mb-3">npm install</kbd>
        <p className="mb-0">
          This command initiates the installation of all dependencies listed in the <code>Cartzilla/package.json</code>{' '}
          file. Please wait until the installation process is complete before proceeding to the next section,{' '}
          <a className="fw-medium" href="./npm-commands">
            Npm commands (scripts).
          </a>
        </p>
      </section>
    </>
  )
}

export default InstallationDocsPage
