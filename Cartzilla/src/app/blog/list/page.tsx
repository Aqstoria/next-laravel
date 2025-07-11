import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderElectronics from '@/components/layout/header-electronics'
import BlogLatestPostsVariantTwo from '@/components/blog/blog-latest-posts-variant-two'
import BlogPostsList from '@/components/blog/blog-posts-list'
import BlogSidebar from '@/components/blog/blog-sidebar'
import BlogContributorsPostsSlider from '@/components/blog/blog-contributors-posts-slider'
import BlogVideoReviews from '@/components/blog/blog-video-reviews'
import BlogPagination from '@/components/blog/blog-pagination'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export const metadata: Metadata = {
  title: 'Cartzilla | Blog List View',
}

const BlogListPage = () => (
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
        <BlogLatestPostsVariantTwo dataUrl={`/data/blog/list/posts.json`} />
        <hr className="my-0 my-md-2 my-lg-4" />
      </Container>

      {/* Posts list + Sidebar */}
      <Container as="section" className="pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        <Row>
          <Col lg={8}>
            {/* List of posts */}
            <BlogPostsList
              dataUrl={`/data/blog/list/posts.json`}
              dataSlice={[3, 8]}
            />

            {/* Contributors' posts slider */}
            <BlogContributorsPostsSlider />

            {/* List of posts */}
            <BlogPostsList
              dataUrl={`/data/blog/list/posts.json`}
              dataSlice={[8, 12]}
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

export default BlogListPage
