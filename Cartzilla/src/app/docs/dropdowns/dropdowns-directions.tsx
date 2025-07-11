import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownDivider from 'react-bootstrap/DropdownDivider'
import Stack from 'react-bootstrap/Stack'

const DropdownsDirectionsDemo = () => {
  const code = `import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownDivider from 'react-bootstrap/DropdownDivider'
import Stack from 'react-bootstrap/Stack'

export default function DropdownsDirectionsDemo() {
  return (
    <Stack direction="horizontal" gap={3} className="flex-wrap">
      {(['down', 'up', 'end', 'start'] as const).map((direction) => (
        <Dropdown key={direction} drop={direction}>
          <DropdownToggle variant="outline-secondary">Drop{direction}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="#">Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ))}
    </Stack>
  )
}`

  return (
    <section id="dropdowns-directions" className="docs-section pb-sm-2 mb-5">
      <h4>Directions</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={3} className="flex-wrap">
          {(['down', 'up', 'end', 'start'] as const).map((direction) => (
            <Dropdown key={direction} drop={direction}>
              <DropdownToggle variant="outline-secondary">Drop{direction}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#">Action</DropdownItem>
                <DropdownItem href="#">Another action</DropdownItem>
                <DropdownDivider />
                <DropdownItem href="#">Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ))}
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default DropdownsDirectionsDemo
