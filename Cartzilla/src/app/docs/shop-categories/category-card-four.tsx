import DocsComponentDemo from '@/components/docs/docs-component-demo'
import CategoryCardVariantFour from '@/components/shop/category-card-variant-four'

const CategoryCardVariantFourDemo = () => {
  const code = `import CategoryCardVariantFour from '@/components/shop/category-card-variant-four'

export default function CategoryCardVariantFourDemo() {
  return (
    <CategoryCardVariantFour
      image={{
        src: '/img/home/furniture/categories/02.png',
        // alt: 'Image', // Optionally set a custom image alt attribute, by default it is equal to title.
        // square // Optionally make image square instead of circle
        // bg: 'none', // 'body' | 'body-tertiary' (default) | 'body-secondary' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white' | 'black' | 'primary-subtle' | 'success-subtle' | 'danger-subtle' | 'warning-subtle' | 'info-subtle'
        // alt: 'Living room', // Optionally set a custom image alt attribute, by default it is equal to title.
        // style: { backgroundColor: '#e0e5eb' }, // Sets inline styles, like backgroundColor for more customization
      }}
      title="Living room"
      href="#"
      list={[
        { label: 'Bookcases and storage', href: '#' },
        { label: 'Coffee tables', href: '#' },
        { label: 'Cabinets', href: '#' },
      ]}
      style={{ maxWidth: 216 }}
    />
  )
}`

  return (
    <section id="category-card-4" className="docs-section pb-sm-2 mb-5">
      <h4>Category card: Variant 4</h4>
      <DocsComponentDemo code={code}>
        <CategoryCardVariantFour
          image={{
            src: '/img/home/furniture/categories/02.png',
          }}
          title="Living room"
          href="#"
          list={[
            { label: 'Bookcases and storage', href: '#' },
            { label: 'Coffee tables', href: '#' },
            { label: 'Cabinets', href: '#' },
          ]}
          style={{ maxWidth: 216 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default CategoryCardVariantFourDemo
