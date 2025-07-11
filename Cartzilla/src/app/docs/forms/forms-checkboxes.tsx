import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormCheck from 'react-bootstrap/FormCheck'

const FormsCheckboxesDemo = () => {
  const code = `import FormCheck from 'react-bootstrap/FormCheck'

export default function FormsCheckboxesDemo() {
  return (
    <>
      {/* Stacked checkboxes */}
      {[
        { id: 'ex-check-1', label: 'Check this checkbox' },
        { id: 'ex-check-2', label: 'Uncheck this checkbox', checked: true },
        { id: 'ex-check-3', label: 'Disabled checkbox', disabled: true },
        { id: 'ex-check-4', label: 'Disabled checked', checked: true, disabled: true },
      ].map(({ id, label, checked, disabled }) => (
        <FormCheck key={id} id={id} label={label} defaultChecked={checked} disabled={disabled} />
      ))}

      {/* Inline checkboxes */}
      <div className="pt-3">
        {[
          { id: 'ex-check-5', label: 'Check this checkbox' },
          { id: 'ex-check-6', label: 'Uncheck this checkbox', checked: true },
          { id: 'ex-check-7', label: 'Disabled checkbox', disabled: true },
          { id: 'ex-check-8', label: 'Disabled checked', checked: true, disabled: true },
        ].map(({ id, label, checked, disabled }) => (
          <FormCheck key={id} inline id={id} label={label} defaultChecked={checked} disabled={disabled} />
        ))}
      </div>
    </>
  )
}`

  return (
    <section id="forms-checkboxes" className="docs-section pb-sm-2 mb-5">
      <h4>Checkboxes</h4>
      <DocsComponentDemo code={code}>
        {[
          { id: 'ex-check-1', label: 'Check this checkbox' },
          { id: 'ex-check-2', label: 'Uncheck this checkbox', checked: true },
          { id: 'ex-check-3', label: 'Disabled checkbox', disabled: true },
          { id: 'ex-check-4', label: 'Disabled checked', checked: true, disabled: true },
        ].map(({ id, label, checked, disabled }) => (
          <FormCheck key={id} id={id} label={label} defaultChecked={checked} disabled={disabled} />
        ))}
        <div className="pt-3">
          {[
            { id: 'ex-check-5', label: 'Check this checkbox' },
            { id: 'ex-check-6', label: 'Uncheck this checkbox', checked: true },
            { id: 'ex-check-7', label: 'Disabled checkbox', disabled: true },
            { id: 'ex-check-8', label: 'Disabled checked', checked: true, disabled: true },
          ].map(({ id, label, checked, disabled }) => (
            <FormCheck key={id} inline id={id} label={label} defaultChecked={checked} disabled={disabled} />
          ))}
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsCheckboxesDemo
