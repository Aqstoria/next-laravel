import DocsComponentDemo from '@/components/docs/docs-component-demo'
import FormCheck from 'react-bootstrap/FormCheck'

const FormsRadiosDemo = () => {
  const code = `import FormCheck from 'react-bootstrap/FormCheck'

export default function FormsRadiosDemo() {
  return (
    <>
      {/* Stacked radio buttons */}
      {[
        { id: 'ex-radio-1', label: 'Toggle this radio' },
        { id: 'ex-radio-2', label: 'Toggle this radio', checked: true },
        { id: 'ex-radio-3', label: 'Disabled radio', disabled: true },
        { id: 'ex-radio-4', label: 'Disabled checked', checked: true, disabled: true },
      ].map(({ id, label, checked, disabled }) => (
        <FormCheck
          key={id}
          type="radio"
          id={id}
          name={\`\${!disabled ? 'radio' : ''}\`}
          label={label}
          defaultChecked={checked}
          disabled={disabled}
        />
      ))}

      {/* Inline radio buttons */}
      <div className="pt-3">
        {[
          { id: 'ex-radio-5', label: 'Toggle this radio' },
          { id: 'ex-radio-6', label: 'Toggle this radio', checked: true },
          { id: 'ex-radio-7', label: 'Disabled radio', disabled: true },
          { id: 'ex-radio-8', label: 'Disabled checked', checked: true, disabled: true },
        ].map(({ id, label, checked, disabled }) => (
          <FormCheck
            key={id}
            type="radio"
            inline
            id={id}
            name={\`\${!disabled ? 'inline-radio' : ''}\`}
            label={label}
            defaultChecked={checked}
            disabled={disabled}
          />
        ))}
      </div>
    </>
  )
}`

  return (
    <section id="forms-radios" className="docs-section pb-sm-2 mb-5">
      <h4>Radio buttons</h4>
      <DocsComponentDemo code={code}>
        {[
          { id: 'ex-radio-1', label: 'Toggle this radio' },
          { id: 'ex-radio-2', label: 'Toggle this radio', checked: true },
          { id: 'ex-radio-3', label: 'Disabled radio', disabled: true },
          { id: 'ex-radio-4', label: 'Disabled checked', checked: true, disabled: true },
        ].map(({ id, label, checked, disabled }) => (
          <FormCheck
            key={id}
            type="radio"
            id={id}
            name={`${!disabled ? 'radio' : ''}`}
            label={label}
            defaultChecked={checked}
            disabled={disabled}
          />
        ))}
        <div className="pt-3">
          {[
            { id: 'ex-radio-5', label: 'Toggle this radio' },
            { id: 'ex-radio-6', label: 'Toggle this radio', checked: true },
            { id: 'ex-radio-7', label: 'Disabled radio', disabled: true },
            { id: 'ex-radio-8', label: 'Disabled checked', checked: true, disabled: true },
          ].map(({ id, label, checked, disabled }) => (
            <FormCheck
              key={id}
              type="radio"
              inline
              id={id}
              name={`${!disabled ? 'inline-radio' : ''}`}
              label={label}
              defaultChecked={checked}
              disabled={disabled}
            />
          ))}
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsRadiosDemo
