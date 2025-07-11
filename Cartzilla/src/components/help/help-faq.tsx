import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionHeader from 'react-bootstrap/AccordionHeader'
import AccordionBody from 'react-bootstrap/AccordionBody'

const HelpFaq = ({ className }: { className?: string }) => (
  <section className={className}>
    <Container className="py-5">
      <Row className="py-1 py-sm-2 py-md-3 py-lg-4 py-xl-5">
        <Col md={4} xl={3} className="mb-4 mb-md-0" style={{ marginTop: -120 }}>
          <div className="sticky-md-top text-center text-md-start pe-md-4 pe-lg-5 pe-xl-0" style={{ paddingTop: 120 }}>
            <h2>Popular FAQs</h2>
            <p className="pb-2 pb-md-3">Still have unanswered questions and need to get in touch?</p>
            <Button href="#" size="lg">
              Contact us
            </Button>
          </div>
        </Col>
        <Col md={8} className="offset-xl-1">
          <Accordion>
            {[
              [
                'How long will delivery take?',
                'Delivery times vary based on your location and the chosen shipping method. Generally, our standard delivery takes up to 5 days, while our Express Delivery ensures your order reaches you within 1 day. Please note that these times may be subject to occasional variations due to unforeseen circumstances, but we do our best to meet these estimates.',
              ],
              [
                'What payment methods do you accept?',
                'We offer a range of secure payment options to provide you with flexibility and convenience. Accepted methods include major credit/debit cards, PayPal, and other secure online payment gateways. You can find the complete list of accepted payment methods during the checkout process.',
              ],
              [
                'Do you ship internationally?',
                'Yes, we proudly offer international shipping to cater to our global customer base. Shipping costs and delivery times will be automatically calculated at the checkout based on your selected destination. Please note that any customs duties or taxes applicable in your country are the responsibility of the customer.',
              ],
              [
                'Do I need an account to place an order?',
                'While you can place an order as a guest, creating an account comes with added benefits. By having an account, you can easily track your orders, manage your preferences, and enjoy a quicker checkout process for future purchases. It also allows us to provide you with personalized recommendations and exclusive offers.',
              ],
              [
                'How can I track my order?',
                'Once your order is dispatched, you will receive a confirmation email containing a unique tracking number. You can use this tracking number on our website to monitor the real-time status of your shipment. Additionally, logging into your account will grant you access to a comprehensive order history, including tracking information.',
              ],
              [
                'What are the product refund conditions?',
                'Our refund policy is designed to ensure customer satisfaction. Details can be found in our [refund policy page](insert link). In essence, we accept returns within [insert number] days of receiving the product, provided it is in its original condition with all tags and packaging intact. Refunds are processed promptly once the returned item is inspected and approved.',
              ],
              [
                'Where can I find your size guide?',
                'Our comprehensive size guide is conveniently located on each product page to assist you in choosing the right fit. Additionally, you can find the size guide in the main menu under "Size Guide." We recommend referring to these resources to ensure your selected items match your preferred sizing.',
              ],
              [
                'Do I need to create an account to shop with you?',
                'While guest checkout is available for your convenience, creating an account enhances your overall shopping experience. With an account, you can easily track your order status, save multiple shipping addresses, and enjoy a streamlined checkout process. Moreover, account holders receive early access to promotions and exclusive offers. Signing up is quick and hassle-free!',
              ],
              [
                'Is there a minimum order value for free shipping?',
                'Yes, we offer free shipping on orders exceeding $250. Orders below this threshold are subject to standard shipping fees, which will be displayed during the checkout process.',
              ],
              [
                'Can I modify or cancel my order after placing it?',
                'Once an order is confirmed, our system processes it promptly to ensure timely dispatch. Therefore, modifications or cancellations are challenging after this point. However, please contact our customer support as soon as possible, and we will do our best to assist you based on the order status.',
              ],
            ].map((item, index) => (
              <AccordionItem key={index} eventKey={`${index}`}>
                <AccordionHeader as="h3" className="hover-effect-underline">
                  <span className="me-2">{item[0]}</span>
                </AccordionHeader>
                <AccordionBody>{item[1]}</AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  </section>
)

export default HelpFaq
