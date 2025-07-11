import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionHeader from 'react-bootstrap/AccordionHeader'
import AccordionBody from 'react-bootstrap/AccordionBody'

const AccordionAltButtonIconDemo = () => {
  const code = `import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionHeader from 'react-bootstrap/AccordionHeader'
import AccordionBody from 'react-bootstrap/AccordionBody'

export default function AccordionAltButtonIconDemo() {
  return (
    <Accordion defaultActiveKey="0" className="accordion-alt-icon">
      <AccordionItem eventKey="0">
        <AccordionHeader as="h3" className="animate-underline">
          <span className="animate-target me-2">Accordion Item #1</span>
        </AccordionHeader>
        <AccordionBody>
          This is the first item&apos;s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem eventKey="1">
        <AccordionHeader as="h3" className="animate-underline">
          <span className="animate-target me-2">Accordion Item #2</span>
        </AccordionHeader>
        <AccordionBody>
          This is the second item&apos;s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem eventKey="2" className="animate-underline">
        <AccordionHeader as="h3">
          <span className="animate-target me-2">Accordion Item #3</span>
        </AccordionHeader>
        <AccordionBody>
          This is the third item&apos;s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}`

  return (
    <section id="accordion-alt-icon" className="docs-section pb-sm-2 mb-5">
      <h4>Alternative button icon</h4>
      <DocsComponentDemo code={code}>
        <Accordion defaultActiveKey="0" className="accordion-alt-icon mt-n3">
          <AccordionItem eventKey="0">
            <AccordionHeader as="h3" className="animate-underline">
              <span className="animate-target me-2">Accordion Item #1</span>
            </AccordionHeader>
            <AccordionBody>
              This is the first item&apos;s accordion body. It is shown by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the
              .accordion-body, though the transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="1">
            <AccordionHeader as="h3" className="animate-underline">
              <span className="animate-target me-2">Accordion Item #2</span>
            </AccordionHeader>
            <AccordionBody>
              This is the second item&apos;s accordion body. It is shown by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. Its also worth noting that just about any HTML can go within the
              .accordion-body, though the transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="2" className="animate-underline">
            <AccordionHeader as="h3">
              <span className="animate-target me-2">Accordion Item #3</span>
            </AccordionHeader>
            <AccordionBody>
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

export default AccordionAltButtonIconDemo
