import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import BlogPostCardVerticalDemo from './blog-post-card-vertical'
import BlogPostCardHorizontalDemo from './blog-post-card-horizontal'
import VlogPostCardDemo from './vlog-post-card'
import FeaturedPostVariantOneDemo from './featured-post-one'
import FeaturedPostVariantTwoDemo from './featured-post-two'
import BlogPostNavigationDemo from './blog-post-navigation'
import RecipeCardDemo from './recipe-card'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Blog components',
}

const BlogComponentsDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge bg="info-subtle" text="info" pill className="fw-semibold py-2 px-3 mb-2">
        Cartzilla component
      </Badge>
      <h1 className="pt-1">Blog components</h1>
      <p className="text-body-secondary mb-4">Components associated with the blog/news section of the website.</p>
    </section>
    <BlogPostCardVerticalDemo />
    <BlogPostCardHorizontalDemo />
    <VlogPostCardDemo />
    <FeaturedPostVariantOneDemo />
    <FeaturedPostVariantTwoDemo />
    <BlogPostNavigationDemo />
    <RecipeCardDemo />
  </>
)

export default BlogComponentsDocsPage
