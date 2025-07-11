import DocsComponentDemo from '@/components/docs/docs-component-demo'
import BlogPostCard from '@/components/blog/blog-post-card'

const BlogPostCardHorizontalDemo = () => {
  const code = `import BlogPostCard from '@/components/blog/blog-post-card'

export default function BlogPostCardHorizontalDemo() {
  return (
    <BlogPostCard
      horizontal
      href="#"
      image={{
        src: '/img/blog/list/07.jpg',
        width: 420,
        height: 310,
        alt: 'Image',
      }}
      title="How to find the best deals and make secure transactions online"
      date="August 18, 2025"
      category={{
        label: 'Buying guides',
        href: '#',
      }}
      excerpt="This blog post will guide you through the dual objectives of snagging great bargains and protecting your financial..."
    />
  )
}`

  return (
    <section id="post-card-horizontal" className="docs-section pb-sm-2 mb-5">
      <h4>Post preview card: Horizontal</h4>
      <DocsComponentDemo code={code}>
        <BlogPostCard
          horizontal
          href="#"
          image={{
            src: '/img/blog/list/07.jpg',
            width: 420,
            height: 310,
            alt: 'Image',
          }}
          title="How to find the best deals and make secure transactions online"
          date="August 18, 2025"
          category={{
            label: 'Buying guides',
            href: '#',
          }}
          excerpt="This blog post will guide you through the dual objectives of snagging great bargains and protecting your financial..."
        />
      </DocsComponentDemo>
    </section>
  )
}

export default BlogPostCardHorizontalDemo
