import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SelectBox from '@/components/forms/select-box'

const SelectBoxSizesShapesDemo = () => {
  const code = `import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SelectBox from '@/components/forms/select-box'

export default function SelectBoxSizesShapesDemo() {
  return (
    <Row xs={1} sm={2} className="g-4">
      {[
        [
          { sizeClass: 'form-select-lg', shapeClass: null, label: 'Large rounded select' },
          { sizeClass: null, shapeClass: null, label: 'Normal rounded select' },
          { sizeClass: 'form-select-sm', shapeClass: null, label: 'Small rounded select' },
        ],
        [
          { sizeClass: 'form-select-lg', shapeClass: 'rounded-pill', label: 'Large pill select' },
          { sizeClass: null, shapeClass: 'rounded-pill', label: 'Normal pill select' },
          { sizeClass: 'form-select-sm', shapeClass: 'rounded-pill', label: 'Small pill select' },
        ],
        [
          { sizeClass: 'form-select-lg', shapeClass: 'rounded-0', label: 'Large square select' },
          { sizeClass: null, shapeClass: 'rounded-0', label: 'Normal square select' },
          { sizeClass: 'form-select-sm', shapeClass: 'rounded-0', label: 'Small square select' },
        ],
      ].map((column, index) => (
        <Col key={index} className="d-flex flex-column gap-3">
          {column.map(({ sizeClass, shapeClass, label }, index) => (
            <SelectBox
              key={index}
              choices={[
                {
                  value: '1',
                  label: 'Option 1',
                },
                {
                  value: '2',
                  label: 'Option 2',
                },
                {
                  value: '3',
                  label: 'Option 3',
                },
              ]}
              inputClassName={\`\${sizeClass} \${shapeClass}\`}
              placeholder="Select option..."
              aria-label={label}
            />
          ))}
        </Col>
      ))}
    </Row>
  )
}`

  return (
    <section id="select-sizes-shapes" className="docs-section">
      <h4>Sizes and shapes</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} sm={2} className="g-4">
          {[
            [
              { sizeClass: 'form-select-lg', shapeClass: null, label: 'Large rounded select' },
              { sizeClass: null, shapeClass: null, label: 'Normal rounded select' },
              { sizeClass: 'form-select-sm', shapeClass: null, label: 'Small rounded select' },
            ],
            [
              { sizeClass: 'form-select-lg', shapeClass: 'rounded-pill', label: 'Large pill select' },
              { sizeClass: null, shapeClass: 'rounded-pill', label: 'Normal pill select' },
              { sizeClass: 'form-select-sm', shapeClass: 'rounded-pill', label: 'Small pill select' },
            ],
            [
              { sizeClass: 'form-select-lg', shapeClass: 'rounded-0', label: 'Large square select' },
              { sizeClass: null, shapeClass: 'rounded-0', label: 'Normal square select' },
              { sizeClass: 'form-select-sm', shapeClass: 'rounded-0', label: 'Small square select' },
            ],
          ].map((column, index) => (
            <Col key={index} className="d-flex flex-column gap-3">
              {column.map(({ sizeClass, shapeClass, label }, index) => (
                <SelectBox
                  key={index}
                  choices={[
                    {
                      value: '1',
                      label: 'Option 1',
                    },
                    {
                      value: '2',
                      label: 'Option 2',
                    },
                    {
                      value: '3',
                      label: 'Option 3',
                    },
                  ]}
                  inputClassName={`${sizeClass} ${shapeClass}`}
                  placeholder="Select option..."
                  aria-label={label}
                />
              ))}
            </Col>
          ))}
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default SelectBoxSizesShapesDemo
