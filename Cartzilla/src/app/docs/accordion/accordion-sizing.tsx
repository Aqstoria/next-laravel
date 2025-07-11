import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionButton from 'react-bootstrap/AccordionButton'
import AccordionBody from 'react-bootstrap/AccordionBody'

const AccordionSizingDemo = () => {
  const code = `import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionButton from 'react-bootstrap/AccordionButton'
import AccordionBody from 'react-bootstrap/AccordionBody'

export default function AccordionSizingDemo () {
  return (
    <Accordion defaultActiveKey="0">
      <AccordionItem eventKey="0">
        <AccordionButton as="h3" className="animate-underline fs-5 cursor-pointer mb-0">
          <span className="animate-target me-2">Accordion Item #1</span>
        </AccordionButton>
        <AccordionBody className="fs-base">
          This is the first item&apos;s accordion body. It is shown by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the
          .accordion-body, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem eventKey="1">
        <AccordionButton as="h3" className="animate-underline fs-5 cursor-pointer mb-0">
          <span className="animate-target me-2">Accordion Item #2</span>
        </AccordionButton>
        <AccordionBody className="fs-base">
          This is the second item&apos;s accordion body. It is shown by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. Its also worth noting that just about any HTML can go within the
          .accordion-body, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem eventKey="2">
        <AccordionButton as="h3" className="animate-underline fs-5 cursor-pointer mb-0">
          <span className="animate-target me-2">Accordion Item #3</span>
        </AccordionButton>
        <AccordionBody className="fs-base">
          This is the third item&apos;s accordion body. It is shown by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. Its also worth noting that just about any HTML can go within the
          .accordion-body, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}`

  return (
    <section id="accordion-sizing" className="docs-section">
      <h4>Sizing</h4>
      <DocsComponentDemo code={code}>
        <Accordion defaultActiveKey="0" className="mt-n3">
          <AccordionItem eventKey="0">
            <AccordionButton as="h3" className="animate-underline fs-5 cursor-pointer mb-0">
              <span className="animate-target me-2">Accordion Item #1</span>
            </AccordionButton>
            <AccordionBody className="fs-base">
              This is the first item&apos;s accordion body. It is shown by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the
              .accordion-body, though the transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="1">
            <AccordionButton as="h3" className="animate-underline fs-5 cursor-pointer mb-0">
              <span className="animate-target me-2">Accordion Item #2</span>
            </AccordionButton>
            <AccordionBody className="fs-base">
              This is the second item&apos;s accordion body. It is shown by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. Its also worth noting that just about any HTML can go within the
              .accordion-body, though the transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="2">
            <AccordionButton as="h3" className="animate-underline fs-5 cursor-pointer mb-0">
              <span className="animate-target me-2">Accordion Item #3</span>
            </AccordionButton>
            <AccordionBody className="fs-base">
              This is the third item&apos;s accordion body. It is shown by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. Its also worth noting that just about any HTML can go within the
              .accordion-body, though the transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </DocsComponentDemo>
    </section>
  )
}

export default AccordionSizingDemo
