'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

const ButtonGroupCheckboxesDemo = () => {
  const code = `import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Stack from 'react-bootstrap/Stack'

export default function ButtonGroupCheckboxesDemo() {
  return (
    <Stack direction="vertical" gap={3}>
      <ToggleButtonGroup type="checkbox" className="mb-3" aria-label="Checkbox toggle button group">
        <ToggleButton variant="outline-primary" id="btncheck1" value="Check 1">
          Check 1
        </ToggleButton>
        <ToggleButton variant="outline-primary" id="btncheck2" value="Check 2">
          Check 2
        </ToggleButton>
        <ToggleButton variant="outline-primary" id="btncheck3" value="Check 3">
          Check 3
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        type="radio"
        name="btnradio"
        defaultValue="Radio 1"
        aria-label="Radio toggle button group"
      >
        <ToggleButton variant="outline-primary" id="btnradio1" value="Radio 1">
          Radio 1
        </ToggleButton>
        <ToggleButton variant="outline-primary" id="btnradio2" value="Radio 2">
          Radio 2
        </ToggleButton>
        <ToggleButton variant="outline-primary" id="btnradio3" value="Radio 3">
          Radio 3
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  )
}`

  return (
    <section id="btn-group-checkboxes" className="docs-section pb-sm-2 mb-5">
      <h4>Checkboxes and radio buttons</h4>
      <DocsComponentDemo code={code}>
        <ToggleButtonGroup type="checkbox" className="mb-3" aria-label="Checkbox toggle button group">
          <ToggleButton variant="outline-primary" id="btncheck1" value="Check 1">
            Check 1
          </ToggleButton>
          <ToggleButton variant="outline-primary" id="btncheck2" value="Check 2">
            Check 2
          </ToggleButton>
          <ToggleButton variant="outline-primary" id="btncheck3" value="Check 3">
            Check 3
          </ToggleButton>
        </ToggleButtonGroup>
        <br />
        <ToggleButtonGroup type="radio" name="btnradio" defaultValue="Radio 1" aria-label="Radio toggle button group">
          <ToggleButton variant="outline-primary" id="btnradio1" value="Radio 1">
            Radio 1
          </ToggleButton>
          <ToggleButton variant="outline-primary" id="btnradio2" value="Radio 2">
            Radio 2
          </ToggleButton>
          <ToggleButton variant="outline-primary" id="btnradio3" value="Radio 3">
            Radio 3
          </ToggleButton>
        </ToggleButtonGroup>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonGroupCheckboxesDemo
