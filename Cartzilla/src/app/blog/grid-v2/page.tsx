import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeaderFurniture from '@/components/layout/header-furniture'
import BlogGrid_V2_CategoryFilters from './category-filters'
import BlogPostsGridVariantTwo from '@/components/blog/blog-posts-grid-variant-two'
import BlogPostsCarouselVariantTwo from '@/components/blog/blog-posts-carousel-variant-two'
import FooterFurniture from '@/components/layout/footer-furniture'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Button from 'react-bootstrap/Button'
import Lightbox from '@/components/lightbox'

export const metadata: Metadata = {
  title: 'Cartzilla | Blog Grid View v.2',
}

const BlogGrid_V2_Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderFurniture />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Featured post with video */}
      <Container as="section" className="py-4 py-md-5 my-sm-3 my-md-0">
        <Row xs={1} md={2} className="g-0 overflow-hidden rounded-5">
          <Col className="position-relative">
            <div className="ratio ratio-4x3" />
            <Image
              priority
              src="/img/blog/grid/v2/video01.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-fit-cover"
              alt="Image"
            />
            <div className="position-absolute start-0 bottom-0 d-flex align-items-end w-100 h-100 z-2 p-4">
              <Lightbox
                href="https://www.youtube.com/watch?v=X7lCwxswYnE"
                gallery="video1"
                className="btn btn-lg btn-light rounded-pill m-md-2"
              >
                <i className="ci-play fs-lg ms-n1 me-2" />
                Play
              </Lightbox>
            </div>
          </Col>
          <Col className="bg-dark py-5 px-4 px-xl-5" data-bs-theme="dark">
            <div className="py-md-4 py-lg-5 px-md-4 px-lg-5 my-xl-4 my-xxl-5">
              <Nav className="mb-3">
                <NavLink as={Link} href="#" className="text-body fs-xs text-uppercase p-0">
                  Home decoration
                </NavLink>
              </Nav>
              <h2>Decorate your home in easy steps</h2>
              <p className="text-body pb-sm-2 pb-lg-0 mb-4 mb-lg-5">
                Decorating your home can be a fun and creative process that transforms your living space.
              </p>
              <Link href="#" className="btn btn-lg btn-outline-light rounded-pill">
                Learn more
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Grid with filters */}
      <Container as="section" className="pt-1 pt-md-2 pt-lg-3 pt-xl-4 pt-xxl-5">
        <BlogGrid_V2_CategoryFilters />
        <BlogPostsGridVariantTwo
          dataUrl={`/data/blog/v2/posts.json`}
          dataSlice={[0, 4]}
        />
        <div className="d-flex flex-column flex-sm-row justify-content-center pt-5">
          <Button variant="outline-dark" size="lg" className="rounded-pill">
            Load more
          </Button>
        </div>
      </Container>

      <BlogPostsCarouselVariantTwo
        heading="Retro elements in interior design"
        dataUrl="/data/blog/v2/featured-category-posts.json"
        className="py-5 mt-1 my-sm-2 my-md-3 my-lg-4 my-xl-5"
      />

      {/* Featured post with video */}
      <section className="bg-body-tertiary py-5">
        <Container className="py-2 py-md-3 py-lg-4 py-xl-5">
          <Row className="align-items-center">
            <Col md={6} lg={7} xl={8} className="mb-4 mb-md-0">
              <div className="position-relative">
                <Image
                  src="/img/blog/grid/v2/video02.jpg"
                  width={1284}
                  height={900}
                  className="rounded-5"
                  alt="Image"
                />
                <div className="position-absolute start-0 bottom-0 d-flex align-items-end w-100 h-100 z-2 p-4">
                  <Lightbox
                    href="https://www.youtube.com/watch?v=Z1xX1Kt9NkU"
                    gallery="video2"
                    className="btn btn-lg btn-light rounded-pill m-md-2"
                  >
                    <i className="ci-play fs-lg ms-n1 me-2" />
                    Play
                  </Lightbox>
                </div>
              </div>
            </Col>
            <Col md={6} lg={5} xl={4}>
              <div className="ps-md-4 ps-lg-5">
                <Nav className="mb-3">
                  <NavLink as={Link} href="#" className="text-body fs-xs text-uppercase p-0">
                    Design trends
                  </NavLink>
                </Nav>
                <h1 className="mb-4 mb-lg-5">Interior design trends for French windows</h1>
                <Link href="#" className="btn btn-lg btn-outline-dark rounded-pill">
                  Learn more
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Posts grid */}
      <Container as="section" className="py-5 mb-1 my-sm-2 my-md-3 my-lg-4 my-xl-5">
        <BlogPostsGridVariantTwo
          dataUrl={`/data/blog/v2/posts.json`}
          dataSlice={[4, 8]}
          className="py-2 py-xxl-3"
        />
      </Container>
    </main>

    {/* Page footer */}
    <FooterFurniture />
  </>
)

export default BlogGrid_V2_Page
