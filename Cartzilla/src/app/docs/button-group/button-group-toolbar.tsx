import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const ButtonGroupToolbarDemo = () => {
  const code = `import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

export default function ButtonGroupToolbarDemo() {
  return (
    <>
      <ButtonToolbar className="gap-2" aria-label="Settings toolbar">
        <ButtonGroup aria-label="Settings group">
          <Button variant="dark" className="btn-icon fs-base" aria-label="Settings">
            <i className="ci-settings"/>
          </Button>
          <Button variant="secondary" className="btn-icon fs-base">
            A
          </Button>
          <Button variant="secondary" className="btn-icon fs-lg" aria-label="List">
            <i className="ci-list"/>
          </Button>
          <Button variant="secondary" className="btn-icon fs-base" aria-label="Expand">
            <i className="ci-maximize"/>
          </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Apply settings">
          <Button variant="success" aria-label="List">
            <i className="ci-check fs-base ms-n1 me-2"/>
            Apply
          </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Delete settings">
          <Button variant="outline-danger" className="btn-icon fs-lg" aria-label="Delete">
            <i className="ci-trash"/>
          </Button>
        </ButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar className="gap-2 mt-3" aria-label="Pagination">
        <ButtonGroup aria-label="First group">
          <Button variant="outline-secondary">1</Button>
          <Button variant="outline-secondary">2</Button>
          <Button variant="outline-secondary">3</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Seconf group">
          <Button variant="outline-secondary">4</Button>
          <Button variant="outline-secondary">5</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button variant="outline-secondary">5</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </>
  )
}`

  return (
    <section id="btn-group-toolbar" className="docs-section pb-sm-2 mb-5">
      <h4>Button toolbar</h4>
      <DocsComponentDemo code={code}>
        <ButtonToolbar className="gap-2" aria-label="Settings toolbar">
          <ButtonGroup aria-label="Settings group">
            <Button variant="dark" className="btn-icon fs-base" aria-label="Settings">
              <i className="ci-settings" />
            </Button>
            <Button variant="secondary" className="btn-icon fs-base">
              A
            </Button>
            <Button variant="secondary" className="btn-icon fs-lg" aria-label="List">
              <i className="ci-list" />
            </Button>
            <Button variant="secondary" className="btn-icon fs-base" aria-label="Expand">
              <i className="ci-maximize" />
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Apply settings">
            <Button variant="success" aria-label="List">
              <i className="ci-check fs-base ms-n1 me-2" />
              Apply
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Delete settings">
            <Button variant="outline-danger" className="btn-icon fs-lg" aria-label="Delete">
              <i className="ci-trash" />
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
        <ButtonToolbar className="gap-2 mt-3" aria-label="Pagination">
          <ButtonGroup aria-label="First group">
            <Button variant="outline-secondary">1</Button>
            <Button variant="outline-secondary">2</Button>
            <Button variant="outline-secondary">3</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Seconf group">
            <Button variant="outline-secondary">4</Button>
            <Button variant="outline-secondary">5</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Third group">
            <Button variant="outline-secondary">5</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </DocsComponentDemo>
    </section>
  )
}

export default ButtonGroupToolbarDemo
