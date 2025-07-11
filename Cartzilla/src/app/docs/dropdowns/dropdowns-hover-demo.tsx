import DocsComponentDemo from '@/components/docs/docs-component-demo'
import DropdownHover from '@/components/dropdown-hover'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'

const DropdownsHoverDemo = () => {
  const code = `import DropdownHover from '@/components/dropdown-hover'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'

export default function DropdownsHoverDemo() {
  return (
    <DropdownHover>
      <DropdownToggle variant="outline-secondary" className="with-focus">
        Hover or focus over me
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
        <DropdownItem href="#">Something else here</DropdownItem>
      </DropdownMenu>
    </DropdownHover>
  )
}`

  return (
    <section id="dropdowns-hover" className="docs-section pb-sm-2 mb-5">
      <h4>Show on hover / focus</h4>
      <DocsComponentDemo code={code}>
        <DropdownHover>
          <DropdownToggle variant="outline-secondary" className="with-focus">
            Hover or focus over me
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
          </DropdownMenu>
        </DropdownHover>
      </DocsComponentDemo>
    </section>
  )
}

export default DropdownsHoverDemo
