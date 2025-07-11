import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeaderSingleStore from '@/components/layout/header-single-store'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Lightbox from '@/components/lightbox'
import SingleProductStoreCatalog from './catalog'
import SingleProductStoreReviews from './reviews'

export const metadata: Metadata = {
  title: 'Cartzilla | Single Product Store',
}

const SingleProductStoreHomePage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderSingleStore />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Hero image section */}
      <section
        className="position-relative bg-body-tertiary overflow-hidden"
        style={{ borderBottomRightRadius: 48, borderBottomLeftRadius: 48, marginTop: -80, paddingTop: 80 }}
      >
        <Container className="position-relative z-1 pt-5 pb-4 pb-sm-5">
          <Row className="py-md-4 py-lg-5 mt-xl-2 mb-xl-5">
            <Col lg={6} className="pt-xxl-4">
              <h1
                className="d-flex flex-column text-white text-uppercase fst-italic pb-lg-3 mb-lg-4"
                style={{ fontWeight: 800 }}
              >
                {['Modern', 'Reliable', 'Fresh'].map((item, index) => (
                  <span key={index} className="d-none d-lg-block" style={{ fontSize: 120 }}>
                    {item}
                  </span>
                ))}
                {['Modern', 'Reliable', 'Fresh'].map((item, index) => (
                  <span key={index} className="d-none d-md-block d-lg-none" style={{ fontSize: 80 }}>
                    {item}
                  </span>
                ))}
                {['Modern', 'Reliable', 'Fresh'].map((item, index) => (
                  <span key={index} className="d-md-none" style={{ fontSize: 60 }}>
                    {item}
                  </span>
                ))}
              </h1>
            </Col>
            <Col lg={6} className="d-flex justify-content-end pt-4">
              <Stack className="justify-content-end align-items-end gap-2 gap-lg-3">
                <div
                  className="d-flex align-items-center text-white rounded-pill bg-white bg-opacity-25 border border-white border-opacity-25 px-3 px-sm-4 mb-1"
                  style={{
                    padding: '14px 0',
                    boxShadow: '0 12px 12px -4px rgba(0,0,0, .05)',
                    WebkitBackdropFilter: 'blur(8px)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <i className="ci-sun fs-5 me-2" />
                  <div className="fw-medium">12 hours of hot comfort</div>
                </div>
                <div
                  className="d-flex align-items-center text-white rounded-pill bg-white bg-opacity-25 border border-white border-opacity-25 px-3 px-sm-4 mb-1"
                  style={{
                    padding: '14px 0',
                    boxShadow: '0 12px 12px -4px rgba(0,0,0, .05)',
                    WebkitBackdropFilter: 'blur(8px)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                    <path d="M9.396 13.337l-.755-.757V8.34l3.607-2.14 2.325.622c.054.014.108.021.162.021.276 0 .529-.184.603-.464.089-.333-.109-.676-.442-.765l-1.146-.307.93-.552c.297-.176.395-.56.219-.856s-.56-.395-.856-.219l-.883.524.274-1.083c.085-.335-.118-.675-.453-.759s-.675.118-.759.452l-.579 2.29-3.002 1.782V3.423l1.72-1.697c.246-.242.248-.638.006-.884S9.729.594 9.483.836l-.842.831V.625C8.641.28 8.361 0 8.016 0s-.625.28-.625.625v1.042L6.549.836c-.246-.242-.641-.24-.884.006s-.24.641.006.884l1.72 1.697v3.466L4.389 5.116l-.612-2.337c-.088-.334-.429-.534-.763-.446s-.534.429-.446.763l.293 1.117-.902-.533c-.297-.176-.68-.077-.856.22s-.077.68.22.856l.915.541-1.125.284c-.335.084-.537.424-.453.759.072.283.326.472.606.472.051 0 .102-.006.153-.019L3.768 6.2 6.79 7.985 3.748 9.79l-2.321-.614c-.334-.088-.676.111-.764.444s.111.676.444.764l1.133.3-.889.527c-.297.176-.395.56-.219.856.117.197.325.306.538.306.108 0 .218-.028.318-.088l.871-.517-.292 1.1c-.089.334.11.676.444.764a.64.64 0 0 0 .161.021c.277 0 .529-.185.604-.465l.618-2.331L7.39 9.079v3.495l-1.72 1.697c-.246.242-.248.638-.006.884.122.124.284.186.445.186a.62.62 0 0 0 .439-.18l.842-.831v1.042c0 .345.28.625.625.625s.625-.28.625-.625V14.35l.807.81a.62.62 0 0 0 .443.184.62.62 0 0 0 .441-.182c.244-.244.245-.639.002-.884l-.937-.94zm5.177-4.159l-2.277.609-1.588-.938c-.297-.176-.68-.077-.856.22s-.077.68.22.856l1.56.922.622 2.374c.074.281.327.467.604.467a.62.62 0 0 0 .159-.021c.334-.088.534-.429.446-.763l-.303-1.154.911.538a.62.62 0 0 0 .317.087c.214 0 .422-.11.539-.307.176-.297.077-.68-.22-.856l-.905-.534 1.092-.292c.333-.089.531-.432.442-.765s-.432-.531-.765-.442z" />
                  </svg>
                  <div className="fw-medium">24 hours of ice-cold refreshment</div>
                </div>
                <div
                  className="d-flex align-items-center text-white rounded-pill bg-white bg-opacity-25 border border-white border-opacity-25 px-3 px-sm-4 mb-1"
                  style={{
                    padding: '14px 0',
                    boxShadow: '0 12px 12px -4px rgba(0,0,0, .05)',
                    WebkitBackdropFilter: 'blur(8px)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <i className="ci-leaf fs-5 me-2" />
                  <div className="fw-medium">The quality free from harmful chemicals</div>
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
        <Image
          priority
          fill
          src="/img/home/single-product/hero/foreground.png"
          sizes="3840px"
          className="object-fit-cover z-2 d-none d-md-block"
          alt="Foreground image"
        />
        <Image
          priority
          fill
          src="/img/home/single-product/hero/background.jpg"
          sizes="3840px"
          className="object-fit-cover"
          alt="Background image"
        />
      </section>

      {/* Features */}
      <Container as="section" className="pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
        <Row className="justify-content-center pt-5 pb-4 pb-lg-5 mb-md-3 mb-lg-0">
          <Col lg={6} className="text-center">
            <h2 className="display-4 mb-0">The clever choice for modern hydration</h2>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center pb-3 pb-lg-0 mb-4 mb-lg-5">
          <Col md={4} className="mb-4 mb-md-0">
            <Stack className="gap-4 gap-lg-5">
              <Stack gap={2} className="align-items-center text-center">
                <svg
                  className="text-dark-emphasis mb-xl-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  fill="currentColor"
                >
                  <path d="M25.745 31.172l-.944-.947v-5.3l4.509-2.675 2.907.778c.068.018.136.027.203.027a.78.78 0 0 0 .754-.579.78.78 0 0 0-.553-.957l-1.432-.383 1.163-.69a.781.781 0 1 0-.797-1.344l-1.104.655.343-1.354a.781.781 0 0 0-1.515-.383l-.724 2.862-3.753 2.227v-4.33l2.15-2.121a.781.781 0 1 0-1.097-1.112l-1.053 1.038v-1.303a.781.781 0 1 0-1.562 0v1.303l-1.053-1.039a.781.781 0 1 0-1.097 1.112l2.15 2.121v4.333l-3.752-2.217-.765-2.921a.781.781 0 0 0-1.512.396l.366 1.396-1.127-.666a.781.781 0 1 0-.795 1.345l1.144.676-1.407.355a.78.78 0 0 0-.566.949.78.78 0 0 0 .757.59.8.8 0 0 0 .192-.024l2.936-.741 3.777 2.231-3.803 2.257-2.901-.767a.781.781 0 1 0-.399 1.511l1.417.375-1.111.659a.78.78 0 0 0 .797 1.343l1.089-.646-.365 1.375a.78.78 0 1 0 1.511.401l.773-2.914 3.746-2.223v4.369l-2.15 2.121a.78.78 0 1 0 1.098 1.112l1.053-1.038v1.303a.781.781 0 1 0 1.563 0v-1.281l1.009 1.012a.78.78 0 1 0 1.107-1.103l-1.172-1.175zm6.471-5.2l-2.846.762-1.985-1.172a.781.781 0 1 0-.795 1.345l1.95 1.152.777 2.968a.78.78 0 1 0 1.512-.396l-.378-1.443 1.139.673a.78.78 0 0 0 .795-1.345l-1.131-.668 1.365-.366a.781.781 0 1 0-.404-1.509z" />
                </svg>
                <h3 className="h6 mb-0">24 Hours cold drink</h3>
                <p className="mb-0">Your drinks stay at the perfect temperature</p>
              </Stack>
              <Stack gap={2} className="align-items-center text-center">
                <svg
                  className="text-dark-emphasis mb-xl-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  fill="currentColor"
                >
                  <path d="M23.78 16.14c-.361.005-.676.182-.865.486l-1.787 2.778a.78.78 0 0 1-1.077.234.78.78 0 0 1-.234-1.078l1.777-2.763a2.58 2.58 0 0 1 2.164-1.217c.889-.012 1.713.422 2.201 1.162l3.035 4.624.457-2.5a.78.78 0 0 1 .907-.627.78.78 0 0 1 .627.907l-.493 2.696c-.205 1.127-1.192 1.92-2.3 1.92-.139 0-.279-.012-.42-.038l-2.692-.522a.78.78 0 0 1-.617-.914.78.78 0 0 1 .914-.617l2.238.434-2.958-4.506a1.02 1.02 0 0 0-.877-.46zm-1.826 13.562h-5.359a1.02 1.02 0 0 1-.906-.526.98.98 0 0 1 .028-1.014l3.172-5.145.458 2.573a.78.78 0 0 0 .767.643c.045 0 .091-.004.138-.012a.78.78 0 0 0 .631-.904l-.509-2.86c-.226-1.269-1.441-2.117-2.709-1.893l-2.741.469a.78.78 0 0 0-.637.9.78.78 0 0 0 .9.637l2.401-.411-3.195 5.184c-.498.801-.522 1.77-.065 2.592a2.56 2.56 0 0 0 2.269 1.327h5.359a.78.78 0 0 0 .78-.78.78.78 0 0 0-.78-.78zm12.045-5.222c.016-.441-.32-.802-.75-.817-.196-.007-4.823-.146-7.527 2.558-1.033 1.032-1.553 2.153-1.545 3.332.005.787.245 1.43.454 1.877-.447.562-.871 1.16-1.27 1.795a.78.78 0 0 0 .246 1.075c.129.081.272.12.414.12a.78.78 0 0 0 .661-.365c1.436-2.287 3.135-3.988 5.194-5.199a.78.78 0 0 0 .276-1.067.78.78 0 0 0-1.067-.276c-1.185.698-2.281 1.562-3.279 2.586-.04-.173-.067-.358-.069-.554-.005-.756.351-1.482 1.088-2.219 1.634-1.633 4.292-2.002 5.596-2.082-.078 1.302-.443 3.955-2.084 5.595-.596.596-1.205.951-1.809 1.055a.78.78 0 0 0 .131 1.548.78.78 0 0 0 .133-.011c.928-.159 1.819-.66 2.648-1.489 2.561-2.561 2.572-6.846 2.56-7.459z" />
                </svg>
                <h3 className="h6 mb-0">Eco-friendly and safe</h3>
                <p className="mb-0">The highest-quality free from harmful chemicals</p>
              </Stack>
            </Stack>
          </Col>
          <Col xs={8} sm={6} md={4} className="mb-4 mb-md-0">
            <Image src="/img/home/single-product/01.png" width={832} height={930} alt="Image" />
          </Col>
          <Col md={4}>
            <Stack className="gap-4 gap-lg-5">
              <Stack gap={2} className="align-items-center text-center">
                <svg
                  className="text-dark-emphasis mb-xl-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.868"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.781 15.89L33 33.109m-3.1-3.064c-1.147 1.84-3.186 3.064-5.51 3.064-3.586 0-6.494-2.915-6.494-6.511v-.199c0-1.467 1.198-3.613 2.566-5.584m1.888-2.517l2.041-2.408s6.494 7.095 6.494 10.509v.199l-.013.419" />
                </svg>
                <h3 className="h6 mb-0">Leak-proof cap</h3>
                <p className="mb-0">Bottle without worrying about leaks</p>
              </Stack>
              <Stack gap={2} className="align-items-center text-center">
                <svg
                  className="text-dark-emphasis mb-xl-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  fill="currentColor"
                >
                  <path d="M29.82 24.539c-1.292 0-2.344 1.051-2.344 2.344s1.051 2.344 2.344 2.344h3.32c.013 0 .026-.001.039-.002l.039.002a.78.78 0 0 0 .781-.781v-6.133a3.12 3.12 0 0 0-1.295-2.531l-2.658-4.36a.78.78 0 0 0-1.079-.257l-1.96 1.216-.884-1.496a.78.78 0 0 0-1.078-.27l-7.526 4.574h-1.176a.78.78 0 0 1-.781-.762.78.78 0 0 1 .781-.762h1.445a.78.78 0 1 0 0-1.562h-1.445a2.35 2.35 0 0 0-2.28 1.801c-.041.095-.064.199-.064.309v.195.039 12.93a3.13 3.13 0 0 0 3.125 3.125h13.75a3.12 3.12 0 0 0 2.965-2.136.78.78 0 1 0-1.482-.494 1.56 1.56 0 0 1-1.483 1.067h-13.75c-.862 0-1.562-.701-1.562-1.562V20.616c.245.087.507.134.781.134h14.531c.861 0 1.563.701 1.563 1.563v2.227H29.82zm2.617 3.125H29.82a.78.78 0 1 1 0-1.562h2.617v1.563zm-11.909-8.477l4.653-2.828.832 1.408a.79.79 0 0 0 .057.113c.017.027.036.053.056.077l.726 1.23h-6.324zm8.139 0l-.864-1.462 1.319-.818 1.39 2.281h-1.845z" />
                </svg>
                <h3 className="h6 mb-0">30-day money-back guarantee</h3>
                <p className="mb-0">We offer a full refund within 30 days</p>
              </Stack>
            </Stack>
          </Col>
        </Row>
        <div className="text-center">
          <Button href="#catalog" variant="dark" size="lg" className="rounded-pill">
            Buy Bottle from $20.00
          </Button>
        </div>
      </Container>

      {/* Features */}
      <Container as="section" className="pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
        <Row className="mb-4">
          <Col md={5} className="order-md-2 mb-4 mb-md-0">
            <div className="position-relative h-100 bg-body-tertiary rounded-5 overflow-hidden">
              <div className="d-none d-md-block" style={{ height: 440 }}></div>
              <div className="d-none d-sm-block d-md-none" style={{ height: 350 }}></div>
              <div className="d-sm-none" style={{ height: 250 }}></div>
              <Image
                fill
                src="/img/home/single-product/02.jpg"
                sizes="806px"
                className="object-fit-cover"
                alt="Image"
              />
            </div>
          </Col>
          <Col md={7} className="order-md-1">
            <div className="d-flex align-items-center h-100 bg-body-tertiary rounded-5 p-4 p-xl-5">
              <div className="p-sm-3 p-xxl-2">
                <h2 className="mb-lg-4">Temperature control</h2>
                <p className="fs-lg pb-sm-2 pb-lg-3">
                  Experience the power of advanced insulation technology that keeps your drinks at just the right
                  temperature all day long. Whether it&apos;s a hot summer day or a chilly morning, your beverages will
                  stay perfectly chilled or warmly comforting. Say goodbye to lukewarm drinks!
                </p>
                <div className="d-flex flex-column flex-sm-row gap-2 gap-lg-3">
                  <Stack
                    direction="horizontal"
                    className="text-body-emphasis bg-body rounded-pill shadow px-3"
                    style={{ padding: '10px 0' }}
                  >
                    <svg
                      className="flex-shrink-0 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M9.396 13.337l-.755-.757V8.34l3.607-2.14 2.325.622c.054.014.108.021.162.021.276 0 .529-.184.603-.464.089-.333-.109-.676-.442-.765l-1.146-.307.93-.552c.297-.176.395-.56.219-.856s-.56-.395-.856-.219l-.883.524.274-1.083c.085-.335-.118-.675-.453-.759s-.675.118-.759.452l-.579 2.29-3.002 1.782V3.423l1.72-1.697c.246-.242.248-.638.006-.884S9.729.594 9.483.836l-.842.831V.625C8.641.28 8.361 0 8.016 0s-.625.28-.625.625v1.042L6.549.836c-.246-.242-.641-.24-.884.006s-.24.641.006.884l1.72 1.697v3.466L4.389 5.116l-.612-2.337c-.088-.334-.429-.534-.763-.446s-.534.429-.446.763l.293 1.117-.902-.533c-.297-.176-.68-.077-.856.22s-.077.68.22.856l.915.541-1.125.284c-.335.084-.537.424-.453.759.072.283.326.472.606.472.051 0 .102-.006.153-.019L3.768 6.2 6.79 7.985 3.748 9.79l-2.321-.614c-.334-.088-.676.111-.764.444s.111.676.444.764l1.133.3-.889.527c-.297.176-.395.56-.219.856.117.197.325.306.538.306.108 0 .218-.028.318-.088l.871-.517-.292 1.1c-.089.334.11.676.444.764a.64.64 0 0 0 .161.021c.277 0 .529-.185.604-.465l.618-2.331L7.39 9.079v3.495l-1.72 1.697c-.246.242-.248.638-.006.884.122.124.284.186.445.186a.62.62 0 0 0 .439-.18l.842-.831v1.042c0 .345.28.625.625.625s.625-.28.625-.625V14.35l.807.81a.62.62 0 0 0 .443.184.62.62 0 0 0 .441-.182c.244-.244.245-.639.002-.884l-.937-.94zm5.177-4.159l-2.277.609-1.588-.938c-.297-.176-.68-.077-.856.22s-.077.68.22.856l1.56.922.622 2.374c.074.281.327.467.604.467a.62.62 0 0 0 .159-.021c.334-.088.534-.429.446-.763l-.303-1.154.911.538a.62.62 0 0 0 .317.087c.214 0 .422-.11.539-.307.176-.297.077-.68-.22-.856l-.905-.534 1.092-.292c.333-.089.531-.432.442-.765s-.432-.531-.765-.442z" />
                    </svg>
                    <div className="fs-sm fw-medium">24 hours of ice-cold refreshment</div>
                  </Stack>
                  <Stack
                    direction="horizontal"
                    className="text-body-emphasis bg-body rounded-pill shadow px-3"
                    style={{ padding: '10px 0' }}
                  >
                    <i className="ci-sun me-2" />
                    <div className="fs-sm fw-medium">12 hours of hot comfort</div>
                  </Stack>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={5} className="mb-4 mb-md-0">
            <div className="position-relative h-100 bg-body-tertiary rounded-5 overflow-hidden">
              <div className="d-none d-md-block" style={{ height: 440 }}></div>
              <div className="d-none d-sm-block d-md-none" style={{ height: 350 }}></div>
              <div className="d-sm-none" style={{ height: 250 }}></div>
              <Image
                fill
                src="/img/home/single-product/03.jpg"
                sizes="806px"
                className="object-fit-cover"
                alt="Image"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end justify-content-end p-3 p-sm-4">
                <Lightbox
                  href="https://www.youtube.com/watch?v=ME5CirMkFZE"
                  gallery="featureVideo"
                  className="btn btn-lg btn-light stretched-link rounded-pill"
                >
                  <i className="ci-play fs-lg me-2 ms-n1" />
                  Play
                </Lightbox>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="d-flex align-items-center h-100 bg-body-tertiary rounded-5 p-4 p-xl-5">
              <div className="p-sm-3 p-xxl-2">
                <div className="mb-3 mb-sm-4" style={{ width: 92 }}>
                  <Image
                    src="/img/home/single-product/bpa-fee-light.png"
                    width={184}
                    height={184}
                    className="d-none-dark"
                    alt="Image"
                  />
                  <Image
                    src="/img/home/single-product/bpa-fee-dark.png"
                    width={184}
                    height={184}
                    className="d-none d-block-dark"
                    alt="Image"
                  />
                </div>
                <h2 className="mb-lg-4 pt-lg-3">A healthier way to hydrate</h2>
                <p className="fs-lg mb-0">
                  Your health and well-being are our top priorities, which is why we&apos;ve designed our metallic water
                  bottles using the highest quality materials. Every sip from our bottles is a step towards a healthier
                  lifestyle, free from harmful chemicals and contaminants.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Catalog (Bottle color options) */}
      <SingleProductStoreCatalog />

      {/* Reviews */}
      <section className="pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
        <div className="position-relative py-2 py-sm-3 py-md-4 py-lg-5">
          <Container className="position-relative z-2 py-5 my-xxl-3">
            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 gap-sm-4 pb-xl-0-3 mb-4 mb-xl-5">
              <h2 className="display-4 text-center text-sm-start mb-0">They are happy with Bottle</h2>
              <Nav className="justify-content-center justify-content-sm-start">
                <NavLink href="#" className="fs-base position-relative text-center text-sm-start px-0">
                  <span className="hover-effect-underline stretched-link">2000+ real reviews on our Instagram</span>
                  <i className="ci-chevron-right fs-lg ms-1 me-n1" />
                </NavLink>
              </Nav>
            </div>
            <SingleProductStoreReviews />
          </Container>
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-none-dark"
            style={{
              background: 'linear-gradient(90deg, rgba(249,235,200,1) 0%, rgba(252,202,197,1) 100%)',
              borderTopRightRadius: 48,
              borderTopLeftRadius: 48,
            }}
          ></div>
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark"
            style={{
              background: 'linear-gradient(119deg, #333126 0%, #372e2f 52.24%)',
              borderTopRightRadius: 48,
              borderTopLeftRadius: 48,
            }}
          ></div>
        </div>
      </section>

      {/* Social networks + CTA */}
      <Container as="section" className="pt-2 pt-sm-3 pb-sm-2 pb-md-3 pt-md-4 py-lg-5 my-xxl-3">
        <Row className="g-3 g-sm-4 mb-3 mb-sm-4 mb-md-0">
          <Col md={6} className="order-md-2 pt-md-5 mt-xl-2 mb-3 mb-md-0">
            <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
              <h2 className="display-4 pb-1 pb-sm-2 pb-md-3 pb-lg-4">
                Buy Bottle now and get <span className="text-warning">25% off</span>
              </h2>
              <Button href="#catalog" variant="warning" size="lg" className="rounded-pill">
                Buy Bottle Now
              </Button>
            </div>
          </Col>
          {[
            {
              colClassName: 'order-md-1',
              href: '#',
              icon: 'ci-youtube',
              image: ['/img/home/single-product/socials/01.jpg', 'Image'],
            },
            {
              colClassName: 'order-md-3 pt-md-5 mt-lg-3 mt-xl-5',
              href: '#',
              icon: 'ci-facebook',
              image: ['/img/home/single-product/socials/02.jpg', 'Image'],
            },
          ].map(({ colClassName, href, icon, image }, index) => (
            <Col key={index} xs={6} md={3} className={colClassName}>
              <a
                href={href}
                className="d-flex hover-effect-scale position-relative fs-3 text-white bg-body-tertiary rounded-5 overflow-hidden text-decoration-none ms-auto mx-md-auto"
                style={{ maxWidth: 196 }}
              >
                <i className={`${icon} position-absolute top-50 start-50 translate-middle z-2`} />
                <Image src={image[0]} className="hover-effect-target" width={300} height={300} alt={image[1]} />
              </a>
            </Col>
          ))}
        </Row>
        <Row className="g-3 g-sm-4 mt-md-n3 pb-5">
          {[
            {
              colClassName: 'offset-md-1 offset-lg-2',
              href: '#',
              icon: 'ci-tiktok',
              image: ['/img/home/single-product/socials/03.jpg', 'Image'],
            },
            {
              colClassName: 'offset-md-2 offset-lg-1 pt-md-5 mt-lg-3 mt-xl-5',
              href: '#',
              icon: 'ci-instagram',
              image: ['/img/home/single-product/socials/04.jpg', 'Image'],
            },
          ].map(({ colClassName, href, icon, image }, index) => (
            <Col key={index} xs={6} md={3} className={colClassName}>
              <a
                href={href}
                className="d-flex hover-effect-scale position-relative fs-3 text-white bg-body-tertiary rounded-5 overflow-hidden text-decoration-none ms-auto mx-md-auto"
                style={{ maxWidth: 196 }}
              >
                <i className={`${icon} position-absolute top-50 start-50 translate-middle z-2`} />
                <Image src={image[0]} className="hover-effect-target" width={300} height={300} alt={image[1]} />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </main>

    {/* Page footer */}
    <footer className="footer pb-4">
      <Container className="pb-sm-2 pb-md-3">
        <div className="position-relative py-3 px-4 pe-lg-3 pe-xxl-0">
          <Row className="align-items-center position-relative z-1">
            <Col lg={4} xxl={5} className="order-lg-2 mb-2 mb-lg-0">
              <Nav className="justify-content-center justify-content-lg-start">
                {[
                  ['Privacy', '#'],
                  ['Affiliates', '#'],
                  ['Terms of use', '#'],
                ].map((item, index) => (
                  <NavLink key={index} as={Link} href={item[1]} className="animate-underline fs-xs px-3">
                    <span className="animate-target">{item[0]}</span>
                  </NavLink>
                ))}
              </Nav>
            </Col>
            <Col lg={4} className="d-flex gap-2 gap-sm-3 justify-content-center order-lg-3 mb-2 mb-lg-0">
              {[
                ['visa-light-mode.svg', 'visa-dark-mode.svg', 'Visa'],
                ['paypal-light-mode.svg', 'paypal-dark-mode.svg', 'PayPal'],
                ['mastercard.svg', '', 'Mastercard'],
                ['google-pay-light-mode.svg', 'google-pay-dark-mode.svg', 'Google Pay'],
                ['apple-pay-light-mode.svg', 'apple-pay-dark-mode.svg', 'Apple Pay'],
              ].map((item, index) => (
                <div key={index}>
                  <Image
                    src={`/img/payment-methods/${item[0]}`}
                    width={58}
                    height={40}
                    className="d-none-dark"
                    alt={item[2]}
                  />
                  {item[1] !== '' && (
                    <Image
                      src={`/img/payment-methods/${item[1]}`}
                      width={58}
                      height={40}
                      className="d-none d-block-dark"
                      alt={item[2]}
                    />
                  )}
                </div>
              ))}
            </Col>
            <Col lg={4} xxl={3} className="order-lg-1">
              <p className="fs-xs text-center text-lg-start mb-0 order-md-1">
                &copy; All rights reserved. Made by{' '}
                <span className="animate-underline">
                  <a
                    className="animate-target text-dark-emphasis text-decoration-none"
                    href="https://createx.studio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Createx Studio
                  </a>
                </span>
              </p>
            </Col>
          </Row>
          <div className="position-absolute top-0 start-0 w-100 h-100 d-lg-none">
            <span className="position-absolute top-0 start-0 w-100 h-100 bg-white shadow rounded-5 d-none-dark" />
            <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary rounded-5 d-none d-block-dark" />
          </div>
          <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block">
            <span className="position-absolute top-0 start-0 w-100 h-100 bg-white shadow rounded-pill d-none-dark" />
            <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary rounded-pill d-none d-block-dark" />
          </div>
        </div>
      </Container>
    </footer>
  </>
)

export default SingleProductStoreHomePage
