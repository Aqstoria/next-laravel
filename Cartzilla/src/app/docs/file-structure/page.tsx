import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | File structure',
}

const FileStructureDocsPage = () => {
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
        <h1 className="pt-1 mb-2">File structure</h1>
      </section>

      <section className="mb-3">
        <div className="d-flex align-items-start border-bottom pb-3">
          <i className="ci-folder-minus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">Cartzilla</h5>
            <p className="mb-0">This is the root template folder that contains all project files.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-folder-minus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">public</h5>
            <p className="mb-0">This folder contains static assets that are served directly at the root path.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-folder-plus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">public / app-icons</h5>
            <p className="mb-0">This folder contains favicon images optimized for different browsers and platforms.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-folder-plus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">public / data</h5>
            <p className="mb-0">This folder contains static JSON data files used throughout the application.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-folder-plus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">public / img</h5>
            <p className="mb-0">
              This folder contains all the template&apos;s graphic assets, including images and illustrations, organized
              within subfolders.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-folder-minus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">scripts</h5>
            <p className="mb-0">This folder contains utility scripts used by the build process.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">scripts / icon-font.mjs</h5>
            <p className="mb-0">This script handles the generation of icon fonts from SVG files.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">scripts / logger.mjs</h5>
            <p className="mb-0">This script provides logging utilities for other build scripts.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-folder-minus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src</h5>
            <p className="mb-0">This folder contains the source code for the Next.js application.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-folder-minus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / app</h5>
            <p className="mb-0">
              This is the main directory for the Next.js App Router. It contains all the page routes and application
              files.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-6 py-3">
          <i className="ci-folder-plus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / app / (routes)</h5>
            <p className="mb-0">
              These folders (404, about, account, blog, contact, docs, help, home, etc.) represent different routes and
              pages in the application.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-6 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / app / layout.tsx</h5>
            <p className="mb-0">The root layout component that wraps all pages and provides common UI elements.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-6 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / app / page.tsx</h5>
            <p className="mb-0">The main page component rendered at the root URL of the application.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-6 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / app / navigation.tsx</h5>
            <p className="mb-0">Contains the main navigation components for the application.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-6 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / app / not-found.tsx</h5>
            <p className="mb-0">Custom 404 page component displayed when a route doesn&apos;t exist.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-6 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / app / manifest.ts</h5>
            <p className="mb-0">Defines the Progressive Web App (PWA) manifest for the application.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-folder-plus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / components</h5>
            <p className="mb-0">Contains reusable React components used throughout the application.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-folder-plus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / contexts</h5>
            <p className="mb-0">Contains React context providers for state management.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-folder-plus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / hooks</h5>
            <p className="mb-0">Contains custom React hooks for reusable logic.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-folder-plus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / icons</h5>
            <p className="mb-0">Contains SVG icon components and icon-related utilities.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-folder-plus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / lib</h5>
            <p className="mb-0">Contains utility functions and helper libraries.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-folder-plus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / styles</h5>
            <p className="mb-0">Contains all project SCSS files and style-related configurations.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-5 py-3">
          <i className="ci-folder-plus fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">src / types</h5>
            <p className="mb-0">Contains TypeScript type definitions and interfaces.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">.editorconfig</h5>
            <p className="mb-0">
              Configuration file for maintaining consistent coding styles across different editors and IDEs.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">.eslintrc.json</h5>
            <p className="mb-0">Configuration file for ESLint to enforce code quality and style rules.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">.gitignore</h5>
            <p className="mb-0">Specifies files and directories that should be ignored by Git.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">.prettierignore</h5>
            <p className="mb-0">Specifies files and directories that should be ignored by Prettier code formatter.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">.prettierrc</h5>
            <p className="mb-0">Configuration file for Prettier code formatter.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">.stylelintignore</h5>
            <p className="mb-0">Specifies files and directories that should be ignored by Stylelint.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">.stylelintrc.json</h5>
            <p className="mb-0">Configuration file for Stylelint to enforce CSS/SCSS style rules.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">next-env.d.ts</h5>
            <p className="mb-0">
              TypeScript declaration file for Next.js, providing type information for Next.js specific features.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">next.config.mjs</h5>
            <p className="mb-0">
              Configuration file for Next.js, allowing customization of the build process, webpack configuration, and
              more.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">package-lock.json</h5>
            <p className="mb-0">Auto-generated file that locks down the versions of dependencies installed.</p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">package.json</h5>
            <p className="mb-0">
              Contains metadata about the project and lists its dependencies, as well as scripts for building and
              starting the application.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-start border-bottom ps-4 py-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">README.md</h5>
            <p className="mb-0">
              Markdown file containing information about the project, setup instructions, and other documentation.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-start ps-4 pt-3">
          <i className="ci-file fs-xl text-body-secondary" />
          <div className="ps-2 ms-1">
            <h5 className="fs-lg mb-1">tsconfig.json</h5>
            <p className="mb-0">Configuration file for TypeScript compiler options and project settings.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default FileStructureDocsPage
