import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Npm commands (Scripts)',
}

const NpmCommandsDocsPage = () => {
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
        <h1 className="py-1 pb-sm-0 mb-sm-4">Npm commands (Scripts)</h1>
        <p className="mb-0">
          Npm scripts simplify development and production workflows such as building, running the dev server, linting
          code, or generating icon fonts. These scripts ensure consistency across tasks and reduce manual setup effort.
        </p>
      </section>

      <section className="mb-3">
        <h2 className="h5 pb-1 pb-sm-0 mb-sm-4">List of available Npm commands (Scripts)</h2>
        <Table responsive bordered className="mb-0" style={{ minWidth: 600 }}>
          <thead>
            <tr>
              <th scope="col">Command</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td>
                <kbd className="fw-medium text-nowrap">npm install</kbd>
              </td>
              <td>
                Installs all Node.js packages defined in <code>package.json</code>. This includes both runtime and
                development dependencies.
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <kbd className="fw-medium text-nowrap">npm run dev</kbd>
              </td>
              <td>
                Starts the Next.js development server on <code>localhost</code> with hot module replacement. This is the
                main script used during template customization and development.
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <kbd className="fw-medium text-nowrap">npm run build</kbd>
              </td>
              <td>
                Builds the application for production by compiling and optimizing all pages, JavaScript, and CSS using
                Next.js. The output is generated in the <code>.next</code> folder.
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <kbd className="fw-medium text-nowrap">npm start</kbd>
              </td>
              <td>
                Runs the Next.js app in production mode. Make sure to run <code>npm run build</code> before using this
                command.
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <kbd className="fw-medium text-nowrap">npm run lint</kbd>
              </td>
              <td>
                Lints the project files using the ESLint configuration provided in the project. Helps ensure code
                consistency and best practices.
              </td>
            </tr>
            <tr className="align-middle">
              <td>
                <kbd className="fw-medium text-nowrap">npm run build-icon-font</kbd>
              </td>
              <td>
                Generates a custom icon font and accompanying CSS file from SVG icons located in the{' '}
                <code>src/icons/svg</code> directory. The script is located in <code>scripts/icon-font.mjs</code>.
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  )
}

export default NpmCommandsDocsPage
