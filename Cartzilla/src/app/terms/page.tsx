import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderElectronics from '@/components/layout/header-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export const metadata: Metadata = {
  title: 'Cartzilla | Terms and Conditions',
}

const TermsConditionsPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      <Container className="py-5 mb-2 mt-n2 mt-sm-1 my-md-3 my-lg-4 mb-xl-5">
        <Row className="justify-content-center">
          <Col lg={11} xl={10} xxl={9}>
            <h1 className="h2 pb-2 pb-sm-3 pb-lg-4">Terms and conditions</h1>
            <hr className="mt-0" />
            <div className="h6 pt-2 pt-lg-3">
              <span className="text-body-secondary fw-medium">Last updated:</span> June 26, 2025
            </div>
            <p>
              Welcome to Cartzilla! These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the
              Cartzilla website and mobile application (collectively referred to as the &quot;Platform&quot;). Please
              read these Terms carefully before using the Platform. By accessing or using the Platform, you agree to be
              bound by these Terms.
            </p>
            <h2 className="h4 pt-3 pt-lg-4">1. Overview</h2>
            <p>
              Cartzilla provides an online platform that enables users to purchase groceries and other products from
              local stores and have them delivered to their designated location. By using the Platform, you acknowledge
              and agree that Cartzilla is not a store or retailer but merely acts as an intermediary to facilitate
              transactions between users and participating stores.
            </p>
            <p>
              Welcome to the family of websites and applications provided by Cartzilla. These Terms of Use govern your
              access to and use of all Cartzilla Sites, among other things. By using the Cartzilla Sites, you affirm
              that you are of legal age to enter into these Terms of Use, or, if you are not, that you have obtained
              parental or guardian consent to enter into these Terms of Use and your parent or guardian consents to
              these Terms of Use on your behalf. If you violate or do not agree to these Terms of Use, then your access
              to and use of the Cartzilla Sites is unauthorized. Additional terms and conditions apply to some services
              offered on the Cartzilla Sites (e.g., Cartzilla Pharmacy, Cartzilla +, and Gift Cards) or through other
              channels. Those terms and conditions can be found where the relevant service is offered on the Cartzilla
              Sites or otherwise and are incorporated into these Terms of Use by reference.
            </p>
            <h2 className="h4 pt-3 pt-lg-4">2. Your use of the Cartzilla Sites</h2>
            <p>
              You certify that the Content you provide on or through the Cartzilla Sites is accurate and that the
              information you provide on or through the Cartzilla Sites is complete. You are solely responsible for
              maintaining the confidentiality and security of your account including username, password, and PIN.
              Cartzilla is not responsible for any losses arising out of the unauthorized use of your account. You agree
              that Cartzilla does not have any responsibility if you lose or share access to your device. Any agreement
              between you and the issuer of your credit card, debit card, or other form of payment will continue to
              govern your use of such payment method on the Cartzilla Sites. You agree that Cartzilla is not a party to
              any such agreement, nor is Cartzilla responsible for the content, accuracy, or unavailability of any
              method used for payment. Your account may be restricted or terminated for any reason, at our sole
              discretion. Except as otherwise provided by law, at any time without notice to you, we may (1) change,
              restrict access to, suspend, or discontinue the Cartzilla Sites or any portion of the Cartzilla Sites, and
              (2) charge, modify, or waive any fees required to use any services, functionality, or other content
              available through the Cartzilla Sites or any portion of the Cartzilla Sites.
            </p>
            <h3 className="h6">In connection with the Cartzilla Sites, you will not:</h3>
            <ul className="gap-3">
              <li>
                Make available any Content through or in connection with the Cartzilla Sites that is or may be in
                violation of the content guidelines set forth in Section 3.C (Prohibited Content) below.
              </li>
              <li>
                Make available through or in connection with the Cartzilla Sites any virus, worm, Trojan horse, Easter
                egg, time bomb, spyware, or other computer code, file, or program that is or is potentially harmful or
                invasive or intended to damage or hijack the operation of, or to monitor the use of, any hardware,
                software, or equipment.
              </li>
              <li>
                Use the Cartzilla Sites for any commercial purpose, or for any purpose that is fraudulent or otherwise
                tortious or unlawful.
              </li>
              <li>Harvest or collect information about users of the Cartzilla Sites.</li>
              <li>
                Interfere with or disrupt the operation of the Cartzilla Sites or the systems, servers, or networks used
                to make the Cartzilla Sites available, including by hacking or defacing any portion of the Cartzilla
                Sites; or violate any requirement, procedure, or policy of such servers or networks.
              </li>
              <li>
                Reproduce, modify, adapt, translate, create derivative works of, sell, rent, lease, loan, timeshare,
                distribute, or otherwise exploit any portion of (or any use of) the Cartzilla Sites except as expressly
                authorized in these Terms of Use, without Cartzilla&apos;s express prior written consent.
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any portion of the Cartzilla Sites, except where such
                restriction is expressly prohibited by applicable law.
              </li>
              <li>Remove any copyright, trademark, or other proprietary rights notice from the Cartzilla Sites.</li>
              <li>
                You will not attempt to do anything, or permit, encourage, assist, or allow any third party to do
                anything, prohibited in this Section, or attempt, permit, encourage, assist, or allow any other
                violation of these Terms of Use.
              </li>
            </ul>
            <h2 className="h4 pt-3 pt-lg-4">3. Ordering and delivery</h2>
            <p>
              When placing an order through Cartzilla, you are responsible for ensuring the accuracy of the items,
              quantities, and delivery details. Cartzilla does not guarantee the availability of any specific product
              and reserves the right to substitute products based on availability. Delivery times provided are estimates
              and may vary due to various factors.
            </p>
            <ul className="gap-3">
              <li>
                Reverse engineer, decompile, or disassemble any portion of the Cartzilla Sites, except where such
                restriction is expressly prohibited by applicable law.
              </li>
              <li>
                Reproduce, modify, adapt, translate, create derivative works of, sell, rent, lease, loan, timeshare,
                distribute, or otherwise exploit any portion of (or any use of) the Cartzilla Sites except as expressly
                authorized in these Terms of Use, without Cartzilla&apos;s express prior written consent.
              </li>
              <li>
                You will not attempt to do anything, or permit, encourage, assist, or allow any third party to do
                anything, prohibited in this Section, or attempt, permit, encourage, assist, or allow any other
                violation of these Terms of Use.
              </li>
              <li>Remove any copyright, trademark, or other proprietary rights notice from the Cartzilla Sites.</li>
            </ul>
            <h2 className="h4 pt-3 pt-lg-4">4. Payments</h2>
            <p>
              Cartzilla facilitates payments for orders made through the Platform. By using Cartzilla&apos;s payment
              services, you agree to provide accurate payment information and authorize Cartzilla to charge the
              applicable amount for your order. Cartzilla may use third-party payment processors to process transactions
              and may store your payment information in accordance with its Privacy Policy.
            </p>
            <h2 className="h4 pt-3 pt-lg-4">5. User conduct</h2>
            <p>
              You agree to use the Platform in compliance with all applicable laws and regulations. You shall not engage
              in any unlawful, harmful, or abusive behavior while using the Platform. Cartzilla reserves the right to
              suspend or terminate your account if you violate these Terms or engage in any prohibited activities.
            </p>
            <h3 className="h6 pt-2">Intellectual property</h3>
            <p>
              All content on the Cartzilla Platform, including but not limited to text, graphics, logos, and software,
              is the property of Cartzilla or its licensors and is protected by intellectual property laws. You may not
              use, reproduce, modify, or distribute any content from the Platform without prior written consent from
              Cartzilla.
            </p>
            <h3 className="h6 pt-2">Third-party links and content</h3>
            <p>
              The Platform may contain links to third-party websites or resources. Cartzilla does not endorse, control,
              or assume responsibility for any third-party content or websites. You acknowledge and agree that Cartzilla
              is not liable for any loss or damage caused by your reliance on such content or websites.
            </p>
            <h3 className="h6 pt-2">Disclaimer of warranties</h3>
            <p>
              The Platform is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of
              any kind, either express or implied. Cartzilla does not guarantee the accuracy, reliability, or
              availability of the Platform and disclaims all warranties to the fullest extent permitted by law.
            </p>
            <h3 className="h6 pt-2">Limitation of liability</h3>
            <p>
              To the maximum extent permitted by law, Cartzilla and its affiliates shall not be liable for any indirect,
              incidental, consequential, or punitive damages arising out of or in connection with the use of the
              Platform, even if advised of the possibility of such damages.
            </p>
            <h2 className="h4 pt-3 pt-lg-4">6. Entire agreement and severability</h2>
            <p>
              These Terms, subject to any amendments, modifications, or additional agreements you enter into with
              Cartzilla, shall constitute the entire agreement between you and Cartzilla with respect to the Services
              and any use of the Services. If any provision of these Terms is found to be invalid by a court of
              competent jurisdiction, that provision only will be limited to the minimum extent necessary, and the
              remaining provisions will remain in full force and effect.
            </p>
            <p>
              Cartzilla reserves the right to modify or update these Terms at any time without prior notice. Your
              continued use of the Platform after any changes to the Terms constitutes acceptance of those changes.
            </p>
            <h2 className="h4 pt-3 pt-lg-4">7. Contact information</h2>
            <p>If you have any questions, or comments about these Terms please contact Cartzilla at:</p>
            <ul className="list-unstyled pb-1">
              <li className="nav pt-1">
                <a className="nav-link align-items-start fs-base p-0" href="tel:+15053753082">
                  <i className="ci-phone fs-xl mt-1 me-2" />
                  +1&nbsp;50&nbsp;537&nbsp;53&nbsp;082
                </a>
              </li>
              <li className="nav pt-1">
                <a className="nav-link align-items-start fs-base p-0" href="mailto:contact@catzillastore.com">
                  <i className="ci-mail fs-xl mt-1 me-2" />
                  contact@catzillastore.com
                </a>
              </li>
              <li className="nav pt-1">
                <a className="nav-link align-items-start fs-base p-0" href="#!">
                  <i className="ci-map-pin fs-xl mt-1 me-2" />
                  12 Beale St. Suite 600 San Francisco, California 94105
                </a>
              </li>
            </ul>
            <p className="pb-3 mb-0">
              For customer service inquiries, please review Your Account Settings, visit Cartzilla&apos;s{' '}
              <Link href="/help" className="fw-medium">
                Help Center.
              </Link>
            </p>
            <hr className="my-3 my-lg-4" />
            <h2 className="h5 pt-3 mb-lg-4">Was this information helpful?</h2>
            <div className="d-flex gap-3">
              <Button variant="outline-secondary">
                <i className="ci-thumbs-up fs-base me-2 ms-n1" />
                Yes
              </Button>
              <Button variant="outline-secondary">
                <i className="ci-thumbs-down fs-base me-2 ms-n1" />
                No
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>

    {/* Page footer */}
    <FooterElectronics className="border-top" />
  </>
)

export default TermsConditionsPage
