import DocsComponentDemo from '@/components/docs/docs-component-demo'
import VlogPostCard from '@/components/blog/vlog-post-card'

const VlogPostCardDemo = () => {
  const code = `import VlogPostCard from '@/components/blog/vlog-post-card'

export default function VlogPostCardDemo() {
  return (
    <VlogPostCard
      href="#"
      image={{
        src: '/img/blog/list/07.jpg',
        width: 402,
        height: 262,
        alt: 'Image',
      }}
      title="A comprehensive review of the latest kitchen blenders on the market"
      time="06:12"
      style={{ maxWidth: 306 }}
    />
  )
}`

  return (
    <section id="post-vlog" className="docs-section pb-sm-2 mb-5">
      <h4>Vlog card</h4>
      <DocsComponentDemo code={code}>
        <VlogPostCard
          href="#"
          image={{
            src: '/img/blog/grid/v1/video01.jpg',
            width: 402,
            height: 262,
            alt: 'Image',
          }}
          title="A comprehensive review of the latest kitchen blenders on the market"
          time="06:12"
          style={{ maxWidth: 306 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default VlogPostCardDemo
