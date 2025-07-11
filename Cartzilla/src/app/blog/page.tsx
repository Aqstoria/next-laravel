import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderElectronics from '@/components/layout/header-electronics'
import BlogLatestPostsVariantOne from '@/components/blog/blog-latest-posts-variant-one'
import BlogPostsGridVariantOne from '@/components/blog/blog-posts-grid-variant-one'
import BlogContributorsPostsSlider from '@/components/blog/blog-contributors-posts-slider'
import BlogSidebar from '@/components/blog/blog-sidebar'
import BlogVideoReviews from '@/components/blog/blog-video-reviews'
import BlogPagination from '@/components/blog/blog-pagination'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export const metadata: Metadata = {
  title: 'Cartzilla | Blog Grid View v.1',
}

const BlogGrid_V1_Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Breadcrumb */}
      <Breadcrumb as={Container} className="pt-3 my-3 my-md-4">
        <li className="breadcrumb-item">
          <Link href="/home">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Blog
        </li>
      </Breadcrumb>

      <h1 className="h3 container mb-4">Our blog</h1>

      {/* Latest posts */}
      <Container as="section" className="pb-5">
        <BlogLatestPostsVariantOne dataUrl={`/data/blog/v1/posts.json`} />
        <hr className="my-0 my-md-2 my-lg-4" />
      </Container>

      {/* Posts grid + Sidebar */}
      <Container as="section" className="pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        <Row>
          <Col lg={8}>
            {/* Grid of posts */}
            <BlogPostsGridVariantOne dataUrl={`/data/blog/v1/posts.json`} dataSlice={[4, 10]} />

            {/* Contributors' posts slider */}
            <BlogContributorsPostsSlider />

            {/* Grid of posts */}
            <BlogPostsGridVariantOne
              dataUrl={`/data/blog/v1/posts.json`}
              dataSlice={[10, 14]}
              className="pb-2 pb-sm-0"
            />

            {/* Pagination */}
            <BlogPagination />
          </Col>

          {/* Sticky sidebar that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
          <Col as="aside" lg={4} xl={3} className="offset-xl-1" style={{ marginTop: -115 }}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>

      {/* Video reviews */}
      <BlogVideoReviews />
    </main>

    {/* Page footer */}
    <FooterElectronics className="border-top" />
  </>
)

export default BlogGrid_V1_Page
