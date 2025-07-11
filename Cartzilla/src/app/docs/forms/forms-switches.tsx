import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormCheck from 'react-bootstrap/FormCheck'

const FormsSwitchesDemo = () => {
  const code = `import FormCheck from 'react-bootstrap/FormCheck'

export default function FormsSwitchesDemo() {
  return (
    <>
      {[
        { id: 'ex-switch-1', label: 'Default switch checkbox' },
        { id: 'ex-switch-2', label: 'Checked switch checkbox', checked: true },
        { id: 'ex-switch-3', label: 'Disabled switch checkbox', disabled: true },
        { id: 'ex-switch-4', label: 'Disabled checked switch checkbox', checked: true, disabled: true },
      ].map(({ id, label, checked, disabled }) => (
        <FormCheck key={id} type="switch" id={id} label={label} defaultChecked={checked} disabled={disabled} />
      ))}
    </>
  )
}`

  return (
    <section id="forms-switches" className="docs-section pb-sm-2 mb-5">
      <h4>Switches</h4>
      <DocsComponentDemo code={code}>
        {[
          { id: 'ex-switch-1', label: 'Default switch checkbox' },
          { id: 'ex-switch-2', label: 'Checked switch checkbox', checked: true },
          { id: 'ex-switch-3', label: 'Disabled switch checkbox', disabled: true },
          { id: 'ex-switch-4', label: 'Disabled checked switch checkbox', checked: true, disabled: true },
        ].map(({ id, label, checked, disabled }) => (
          <FormCheck key={id} type="switch" id={id} label={label} defaultChecked={checked} disabled={disabled} />
        ))}
      </DocsComponentDemo>
    </section>
  )
}

export default FormsSwitchesDemo
