import DocsComponentDemo from '@/components/docs/docs-component-demo'
import BlogPostNav from '@/components/blog/blog-post-nav'

const BlogPostNavigationDemo = () => {
  const code = `import BlogPostNav from '@/components/blog/blog-post-nav'

export default function BlogPostNavigationDemo() {
  return (
    <BlogPostNav
      prevPost={{
        image: {
          src: '/img/blog/post/nav01.jpg',
          alt: 'Image',
        },
        title: 'How modern technology builds communities',
        href: '#',
      }}
      nextPost={{
        image: {
          src: '/img/blog/post/nav02.jpg',
          alt: 'Image',
        },
        title: 'Transform your home into a smart hub with the latest IoT',
        href: '#',
      }}
      className="border-top pt-3"
    />
  )
}`

  return (
    <section id="post-navigation" className="docs-section pb-sm-2 mb-5">
      <h4>Post navigation</h4>
      <DocsComponentDemo code={code}>
        <BlogPostNav
          prevPost={{
            image: {
              src: '/img/blog/post/nav01.jpg',
              alt: 'Image',
            },
            title: 'How modern technology builds communities',
            href: '#',
          }}
          nextPost={{
            image: {
              src: '/img/blog/post/nav02.jpg',
              alt: 'Image',
            },
            title: 'Transform your home into a smart hub with the latest IoT',
            href: '#',
          }}
          className="border-top pt-3"
        />
      </DocsComponentDemo>
    </section>
  )
}

export default BlogPostNavigationDemo
