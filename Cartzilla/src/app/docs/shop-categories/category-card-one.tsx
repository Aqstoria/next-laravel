import DocsComponentDemo from '@/components/docs/docs-component-demo'
import CategoryCardVariantOne from '@/components/shop/category-card-variant-one'

const CategoryCardVariantOneDemo = () => {
  const code = `import CategoryCardVariantOne from '@/components/shop/category-card-variant-one'

export default function CategoryCardVariantOneDemo() {
  return (
    <CategoryCardVariantOne
      image={{
        src: '/img/shop/electronics/categories/04.png',
        width: 362,
        height: 258,
        // bg: 'none', // 'body' | 'body-tertiary' (default) | 'body-secondary' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white' | 'black' | 'primary-subtle' | 'success-subtle' | 'danger-subtle' | 'warning-subtle' | 'info-subtle'
        // alt: 'Wearable Electronics', // Optionally set a custom image alt attribute, by default it is equal to title.
        // style: { backgroundColor: '#e0e5eb' }, // Sets inline styles, like backgroundColor for more customization
      }}
      title="Wearable Electronics"
      href="#"
      list={[
        { label: 'Smart Watches', href: '#' },
        { label: 'Fitness Trackers', href: '#' },
        { label: 'Smart Glasses', href: '#' },
        { label: 'Clips, Arm & Wristbands', href: '#' },
        { label: 'Voice Recorders', href: '#' },
      ]}
      style={{ maxWidth: 306 }}
    />
  )
}`

  return (
    <section id="category-card-1" className="docs-section pb-sm-2 mb-5">
      <h4>Category card: Variant 1</h4>
      <DocsComponentDemo code={code}>
        <CategoryCardVariantOne
          image={{
            src: '/img/shop/electronics/categories/04.png',
            width: 362,
            height: 258,
          }}
          title="Wearable Electronics"
          href="#"
          list={[
            { label: 'Smart Watches', href: '#' },
            { label: 'Fitness Trackers', href: '#' },
            { label: 'Smart Glasses', href: '#' },
            { label: 'Clips, Arm & Wristbands', href: '#' },
            { label: 'Voice Recorders', href: '#' },
          ]}
          style={{ maxWidth: 306 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default CategoryCardVariantOneDemo
