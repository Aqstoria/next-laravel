import DocsComponentDemo from '@/components/docs/docs-component-demo'

const CodeUserInputDemo = () => {
  const code = `<p>
  To switch directories, type <kbd>cd</kbd> followed by the name of the directory.
  To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
</p>`

  return (
    <section id="code-user-input" className="docs-section pb-sm-2 mb-5">
      <h4>User input</h4>
      <DocsComponentDemo code={code}>
        <p className="mb-1">
          To switch directories, type <kbd>cd</kbd> followed by the name of the directory.
        </p>
        <p className="mb-0">
          To edit settings, press{' '}
          <kbd>
            <kbd>ctrl</kbd> + <kbd>,</kbd>
          </kbd>
        </p>
      </DocsComponentDemo>
    </section>
  )
}

export default CodeUserInputDemo
