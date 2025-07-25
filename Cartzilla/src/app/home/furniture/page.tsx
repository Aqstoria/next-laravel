import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeaderFurniture from '@/components/layout/header-furniture'
import HeroSliderFurniture from './hero-slider'
import CategoriesFurniture from './categories'
import ProductsCarouselFurniture from '@/components/shop/products-carousel-furniture'
import GalleryWithFiltersFurniture from './gallery-with-filters'
import BlogPostsFurniture from './blog-posts'
import FooterFurniture from '@/components/layout/footer-furniture'
import Lightbox from '@/components/lightbox'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'

export const metadata: Metadata = {
  title: 'Cartzilla | Furniture Store',
}

const FurnitureHomePage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderFurniture logoHref="/" />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Hero slider */}
      <HeroSliderFurniture />

      {/* Categories */}
      <Container as="section" className="py-5 my-2 my-sm-3 mb-md-2 mt-lg-4 my-xl-5">
        <CategoriesFurniture />
      </Container>

      {/* Popular products carousel */}
      <Container as="section" className="pb-5 mt-md-n2 mb-2 mb-sm-3 mb-md-4 mb-xl-5">
        <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
          <h2 className="h3 mb-0">Popular products</h2>
          <Nav className="ms-3">
            <NavLink as={Link} href="/shop/furniture" className="animate-underline px-0 py-2">
              <span className="animate-target">View all</span>
              <i className="ci-chevron-right fs-base ms-1" />
            </NavLink>
          </Nav>
        </div>
        <ProductsCarouselFurniture
          dataUrl="/data/furniture/popular-products.json"
          loop
          className="pt-3 pt-sm-4 pb-xxl-3"
        />
      </Container>

      {/* Gallery */}
      <Container as="section" className="pb-5 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
        <h2 className="h3 pb-3">Interior design and inspiration</h2>
        <GalleryWithFiltersFurniture />
      </Container>

      {/* Features */}
      <Container as="section" className="pb-5 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
        <Row xs={1} md={3} className="gy-3 gy-sm-4 gx-2 gx-lg-4 mb-xxl-3">
          {[
            {
              icon: 'M62.189 9.902c0-.604-.604-1.208-1.208-1.208h-6.158-3.14l-1.69.121-1.57.242c-2.174.483-4.226 1.087-6.158 2.174s-3.623 2.294-5.072 3.864h-.121c-3.14 3.019-5.313 7.004-6.038 11.351l-.241 1.57-.121 1.691v3.14 5.796c-.604.845-1.087 1.691-1.57 2.536.121-1.328.121-2.536.241-3.864 0-.966.121-1.811.121-2.777v-1.449l-.121-1.449c-.241-1.811-.845-3.743-1.691-5.434a20.6 20.6 0 0 0-3.26-4.71c-2.657-2.777-6.279-4.709-10.143-5.434L12.8 15.82l-1.449-.121H8.574 3.019c-.604 0-1.208.604-1.208 1.208v5.555 2.777l.121 1.449.242 1.449C2.898 32 4.83 35.502 7.729 38.159c1.449 1.328 3.019 2.415 4.709 3.26s3.623 1.328 5.434 1.691l1.449.121h1.449c.966 0 1.811-.121 2.777-.121 1.57-.121 3.14-.121 4.709-.242-.362.604-.604 1.328-.966 1.932-1.449 3.381-2.294 7.004-2.294 10.506.966-3.502 2.294-6.642 3.985-9.66.966-1.811 2.174-3.623 3.381-5.313h5.675 3.14l1.691-.121 1.57-.242c2.174-.483 4.227-1.087 6.159-2.174s3.623-2.294 5.072-3.864h.121c3.14-3.019 5.313-7.004 6.038-11.351l.242-1.57.121-1.69v-3.14-6.279zM49.63 35.743c-1.691.966-3.623 1.449-5.555 1.811l-1.449.242-1.449.121h-3.019-3.864c.242-.242.483-.604.725-.845 2.174-2.657 4.589-5.192 7.004-7.728l7.366-7.728c-3.019 1.932-5.917 3.985-8.694 6.279-2.657 2.294-5.192 4.709-7.487 7.487v-2.536-3.019l.121-1.449.242-1.449c.362-1.932.845-3.864 1.811-5.555.845-1.691 2.053-3.381 3.381-4.83 1.449-1.328 3.019-2.415 4.709-3.381s3.623-1.449 5.555-1.811l1.449-.241 1.449-.121h3.019 4.951v4.951 3.019l-.121 1.57-.242 1.449c-.362 1.932-.845 3.864-1.811 5.555-.845 1.691-2.053 3.381-3.381 4.83-1.449 1.449-3.019 2.536-4.709 3.381zm-26.083 6.762c-.966 0-1.811-.121-2.777-.121l-1.328-.121-1.328-.242c-3.502-.724-6.641-2.536-9.057-5.072-1.208-1.328-2.174-2.657-3.019-4.226-.725-1.57-1.208-3.26-1.57-4.951l-.242-1.328-.121-1.328V22.34v-4.347h4.347 2.777 1.328l1.328.121c1.691.242 3.381.725 4.951 1.57 1.449 1.087 2.898 2.053 4.106 3.26 2.536 2.415 4.347 5.555 5.072 9.057l.241 1.328.121 1.328c.121.845.121 1.811.121 2.777.121 1.449.121 2.777.241 4.226-.241.483-.483.845-.724 1.328-1.328-.362-2.898-.362-4.468-.483zm-5.434-12.437c-1.449-.966-2.898-1.932-4.589-2.657.966 1.449 2.174 2.777 3.381 3.985 2.415 2.536 4.83 4.709 7.487 7.124 1.328 1.087 2.536 2.294 4.106 3.381-.725-1.691-1.57-3.26-2.657-4.589-2.174-2.898-4.709-5.193-7.728-7.245z',
              title: 'Eco-friendly',
              description:
                'Decorate your space with eco-friendly furniture with low VOCs, environmentally friendly materials and safe coatings.',
            },
            {
              icon: 'M55.526 24.465l-.145-10.159-.094-5.08-.012-.635c-.016-.23-.016-.481-.061-.717-.06-.481-.22-.945-.413-1.384-.407-.875-1.061-1.625-1.868-2.136a4.99 4.99 0 0 0-2.699-.769l-2.548.061-15.238.437 15.238.437 2.532.069a3.93 3.93 0 0 1 2.088.71c.601.431 1.085 1.017 1.365 1.692.131.339.242.688.27 1.051.029.181.017.356.026.548l-.012.635-.094 5.08-.119 8.281c-3.476-.415-6.952-.651-10.428-.808-3.769-.185-7.537-.235-11.306-.255-3.769.023-7.537.073-11.306.258-3.471.158-6.941.392-10.412.803l-.131-9.156-.085-5.05c.009-1.448.949-2.849 2.313-3.435.691-.318 1.391-.355 2.28-.357l2.54-.066 15.239-.439-17.778-.505c-.425-.009-.83-.032-1.325-.006-.472.048-.941.145-1.388.317-1.798.674-3.123 2.475-3.216 4.432l-.105 5.109-.145 10.159-.111 10.159-.046 5.714c.011.242.006.518.048.774.054.523.214 1.031.415 1.516.421.967 1.122 1.802 1.996 2.394a5.52 5.52 0 0 0 2.985.937l1.885.008a219.85 219.85 0 0 0-2.615 7.372l-1.399 4.349-.166.552a2.42 2.42 0 0 0-.062 1.062c.109.703.567 1.362 1.196 1.705a2.42 2.42 0 0 0 2.973-.484c.144-.164.17-.207.235-.287l.177-.224c3.518-4.56 6.926-9.206 10.121-14.015l5.451.014 6.309-.017c3.205 4.808 6.615 9.457 10.14 14.017l.177.224c.065.081.092.123.235.287.753.837 2.009 1.035 2.971.484.629-.343 1.086-1.001 1.195-1.704a2.42 2.42 0 0 0-.062-1.061l-.166-.552-1.403-4.349a228.34 228.34 0 0 0-2.625-7.375l1.007-.003c.425-.003.814.01 1.383-.037.524-.067 1.042-.192 1.53-.396 1.966-.798 3.353-2.796 3.404-4.903l-.03-5.126-.112-10.159zM14.167 57.718l-.293.386c-.011.016-.023.027-.04.035-.035.018-.081.021-.114.004-.043-.018-.066-.046-.08-.095a.18.18 0 0 1-.002-.069l.153-.545 1.157-4.419c.65-2.627 1.271-5.264 1.822-7.92l7.761.02c-3.608 4.082-7.037 8.303-10.363 12.603zm34.91-4.704l1.155 4.42.153.544a.19.19 0 0 1-.002.07c-.014.049-.037.077-.081.096-.034.018-.08.015-.115-.004-.018-.008-.029-.019-.041-.035l-.294-.386c-3.321-4.302-6.749-8.521-10.35-12.607l7.309-.02.452-.001c.549 2.657 1.17 5.293 1.814 7.922zm4.528-18.39l-.05 5.033c-.051 1.297-.928 2.501-2.124 2.963-.626.251-1.14.252-2.08.235l-17.778-.047c-25.374.066 7.11-.017-17.761.043a3.42 3.42 0 0 1-1.802-.541 3.43 3.43 0 0 1-1.238-1.434c-.123-.294-.234-.599-.268-.92-.032-.162-.025-.312-.04-.492l-.046-5.714-.112-10.159-.011-.8c3.47.411 6.94.645 10.409.803 3.769.186 7.537.235 11.306.258 3.769-.02 7.537-.07 11.306-.255 3.475-.157 6.95-.393 10.425-.808l-.024 1.677-.112 10.159zm-14.693-23.94c-3.673-1.557-10.14-1.544-13.805 0 3.66 1.542 10.125 1.559 13.805 0zM25.107 28.829c3.647 1.537 10.114 1.564 13.805 0-3.697-1.567-10.167-1.533-13.805 0z',
              title: 'Unbeatable quality',
              description:
                'We choose raw materials from the best manufacturers, so our furniture and decor are of the highest quality at the best prices.',
            },
            {
              icon: 'M62.189 9.902c0-.604-.604-1.208-1.208-1.208h-6.158-3.14l-1.69.121-1.57.242c-2.174.483-4.226 1.087-6.158 2.174s-3.623 2.294-5.072 3.864h-.121c-3.14 3.019-5.313 7.004-6.038 11.351l-.241 1.57-.121 1.691v3.14 5.796c-.604.845-1.087 1.691-1.57 2.536.121-1.328.121-2.536.241-3.864 0-.966.121-1.811.121-2.777v-1.449l-.121-1.449c-.241-1.811-.845-3.743-1.691-5.434a20.6 20.6 0 0 0-3.26-4.71c-2.657-2.777-6.279-4.709-10.143-5.434L12.8 15.82l-1.449-.121H8.574 3.019c-.604 0-1.208.604-1.208 1.208v5.555 2.777l.121 1.449.242 1.449C2.898 32 4.83 35.502 7.729 38.159c1.449 1.328 3.019 2.415 4.709 3.26s3.623 1.328 5.434 1.691l1.449.121h1.449c.966 0 1.811-.121 2.777-.121 1.57-.121 3.14-.121 4.709-.242-.362.604-.604 1.328-.966 1.932-1.449 3.381-2.294 7.004-2.294 10.506.966-3.502 2.294-6.642 3.985-9.66.966-1.811 2.174-3.623 3.381-5.313h5.675 3.14l1.691-.121 1.57-.242c2.174-.483 4.227-1.087 6.159-2.174s3.623-2.294 5.072-3.864h.121c3.14-3.019 5.313-7.004 6.038-11.351l.242-1.57.121-1.69v-3.14-6.279zM49.63 35.743c-1.691.966-3.623 1.449-5.555 1.811l-1.449.242-1.449.121h-3.019-3.864c.242-.242.483-.604.725-.845 2.174-2.657 4.589-5.192 7.004-7.728l7.366-7.728c-3.019 1.932-5.917 3.985-8.694 6.279-2.657 2.294-5.192 4.709-7.487 7.487v-2.536-3.019l.121-1.449.242-1.449c.362-1.932.845-3.864 1.811-5.555.845-1.691 2.053-3.381 3.381-4.83 1.449-1.328 3.019-2.415 4.709-3.381s3.623-1.449 5.555-1.811l1.449-.241 1.449-.121h3.019 4.951v4.951 3.019l-.121 1.57-.242 1.449c-.362 1.932-.845 3.864-1.811 5.555-.845 1.691-2.053 3.381-3.381 4.83-1.449 1.449-3.019 2.536-4.709 3.381zm-26.083 6.762c-.966 0-1.811-.121-2.777-.121l-1.328-.121-1.328-.242c-3.502-.724-6.641-2.536-9.057-5.072-1.208-1.328-2.174-2.657-3.019-4.226-.725-1.57-1.208-3.26-1.57-4.951l-.242-1.328-.121-1.328V22.34v-4.347h4.347 2.777 1.328l1.328.121c1.691.242 3.381.725 4.951 1.57 1.449 1.087 2.898 2.053 4.106 3.26 2.536 2.415 4.347 5.555 5.072 9.057l.241 1.328.121 1.328c.121.845.121 1.811.121 2.777.121 1.449.121 2.777.241 4.226-.241.483-.483.845-.724 1.328-1.328-.362-2.898-.362-4.468-.483zm-5.434-12.437c-1.449-.966-2.898-1.932-4.589-2.657.966 1.449 2.174 2.777 3.381 3.985 2.415 2.536 4.83 4.709 7.487 7.124 1.328 1.087 2.536 2.294 4.106 3.381-.725-1.691-1.57-3.26-2.657-4.589-2.174-2.898-4.709-5.193-7.728-7.245z',
              title: 'Delivery to your door',
              description:
                "We will deliver to your door anywhere in the world. If you're not 100% satisfied, let us know within 30 days and we'll solve the problem.",
            },
          ].map(({ icon, title, description }, index) => (
            <Col key={index} className="text-center">
              <svg
                className="d-block text-dark-emphasis mx-auto mb-3 mb-lg-4"
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d={icon} />
              </svg>
              <h3 className="h5">{title}</h3>
              <p className="fs-sm px-5 mb-md-0">{description}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Featured product with video */}
      <Container as="section">
        <Row xs={1} md={2} className="g-0 overflow-hidden rounded-5">
          <Col className="position-relative">
            <div className="ratio ratio-1x1 d-none d-md-block" />
            <div className="ratio ratio-4x3 d-md-none" />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary" />
            <Image
              src="/img/home/furniture/featured-product.png"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-fit-cover z-1"
              alt="Image"
            />
            <div className="position-absolute start-0 bottom-0 d-flex align-items-end w-100 h-100 z-2 p-4">
              <Lightbox
                href="https://www.youtube.com/watch?v=Z1xX1Kt9NkU"
                gallery="video"
                className="btn btn-lg btn-light rounded-pill m-md-2"
              >
                <i className="ci-play fs-lg ms-n1 me-2" />
                Play
              </Lightbox>
            </div>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-center bg-dark py-5 px-4 px-md-5"
            data-bs-theme="dark"
          >
            <div className="text-center py-md-2 py-lg-3 py-xl-4" style={{ maxWidth: 400 }}>
              <div className="fs-xs fw-medium text-body text-uppercase mb-3">Best deal</div>
              <h2 className="h4 pb-lg-2 pb-xl-0 mb-4 mb-xl-5">Scandinavian green chair with wooden legs 60x100 cm</h2>
              <div className="d-inline-flex pb-lg-2 pb-xl-0 mb-4 mb-xl-5" style={{ width: 162 }}>
                <Image
                  src="/img/home/furniture/featured-product-thumbnail.jpg"
                  width={324}
                  height={324}
                  className="body-bg-tertiary rounded"
                  alt="Product"
                />
              </div>
              <div className="h3 pb-2 pb-md-3">$357.00</div>
              <Link href="/shop/furniture/product" className="btn btn-lg btn-outline-light rounded-pill">
                Shop now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Blog */}
      <Container as="section" className="py-5 my-2 my-sm-3 my-lg-4 my-xl-5">
        <div className="d-flex align-items-center justify-content-between pb-3 mb-2 mb-sm-3 mt-xxl-3">
          <h2 className="h3 mb-0">Blog and news</h2>
          <Nav className="ms-3">
            <NavLink as={Link} href="/blog/grid-v2" className="animate-underline px-0 py-2">
              <span className="animate-target">View all</span>
              <i className="ci-chevron-right fs-base ms-1" />
            </NavLink>
          </Nav>
        </div>
        <BlogPostsFurniture />
      </Container>
    </main>

    {/* Page footer */}
    <FooterFurniture />
  </>
)

export default FurnitureHomePage
