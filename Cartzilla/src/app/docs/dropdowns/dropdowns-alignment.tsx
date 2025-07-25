import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import Stack from 'react-bootstrap/Stack'

const DropdownsAlignmentDemo = () => {
  const code = `import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import Stack from 'react-bootstrap/Stack'

export default function DropdownsAlignmentDemo() {
  return (
    <Stack direction="horizontal" gap={3} className="flex-wrap">
      <Dropdown align="end">
        <DropdownToggle variant="outline-secondary">Right-aligned menu example</DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown drop="down-centered">
        <DropdownToggle variant="outline-secondary">Center-aligned dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Stack>
  )
}`

  return (
    <section id="dropdowns-alignment" className="docs-section pb-sm-2 mb-5">
      <h4>Menu alignment</h4>
      <DocsComponentDemo code={code}>
        <Stack direction="horizontal" gap={3} className="flex-wrap">
          <Dropdown align="end">
            <DropdownToggle variant="outline-secondary">Right-aligned menu example</DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#">Action</DropdownItem>
              <DropdownItem href="#">Another action</DropdownItem>
              <DropdownItem href="#">Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown drop="down-centered">
            <DropdownToggle variant="outline-secondary">Center-aligned dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#">Action</DropdownItem>
              <DropdownItem href="#">Another action</DropdownItem>
              <DropdownItem href="#">Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default DropdownsAlignmentDemo
