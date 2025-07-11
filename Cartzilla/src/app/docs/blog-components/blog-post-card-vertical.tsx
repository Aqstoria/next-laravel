import DocsComponentDemo from '@/components/docs/docs-component-demo'
import BlogPostCard from '@/components/blog/blog-post-card'

const BlogPostCardVerticalDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import BlogPostCard from '@/components/blog/blog-post-card'

export default function BlogPostCardVerticalDemo() {
  return (
    <Stack gap={4} style={{ maxWidth: 416 }}>
      {/* Blog post preview card with category and date */}
      <BlogPostCard
        href="#"
        image={{
          src: '/img/blog/grid/v1/10.jpg',
          width: 548,
          height: 402,
          alt: 'Image',
        }}
        title="Immersive worlds: A dive into the latest VR gear and experiences"
        date="July 27, 2025"
        category={{
          label: 'Gaming',
          href: '#',
        }}
      />

      {/* Blog post preview card with category, author and date */}
      <BlogPostCard
        href="#"
        image={{
          src: '/img/blog/grid/v1/09.jpg',
          width: 548,
          height: 402,
          alt: 'Image',
        }}
        title="Feng shui your home: Interior design tips for positive energy"
        date="June 27, 2025"
        category={{
          label: 'Interior design',
          href: '#',
        }}
        author={{
          name: 'Emily Davies',
          href: '#',
        }}
      />
    </Stack>
  )
}`

  return (
    <section id="post-card-vertical" className="docs-section pb-sm-2 mb-5">
      <h4>Post preview card: Vertical</h4>
      <DocsComponentDemo code={code}>
        <div className="d-flex flex-column flex-sm-row gap-4">
          <BlogPostCard
            href="#"
            image={{
              src: '/img/blog/grid/v1/10.jpg',
              width: 548,
              height: 402,
              alt: 'Image',
            }}
            title="Immersive worlds: A dive into the latest VR gear and experiences"
            date="July 27, 2025"
            category={{
              label: 'Gaming',
              href: '#',
            }}
            className="mb-3 mb-sm-2"
            style={{ maxWidth: 416 }}
          />
          <BlogPostCard
            href="#"
            image={{
              src: '/img/blog/grid/v1/09.jpg',
              width: 548,
              height: 402,
              alt: 'Image',
            }}
            title="Feng shui your home: Interior design tips for positive energy"
            date="June 27, 2025"
            category={{
              label: 'Interior design',
              href: '#',
            }}
            author={{
              name: 'Emily Davies',
              href: '#',
            }}
            className="mb-2"
            style={{ maxWidth: 416 }}
          />
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default BlogPostCardVerticalDemo
