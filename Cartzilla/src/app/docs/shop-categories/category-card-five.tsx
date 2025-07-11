import DocsComponentDemo from '@/components/docs/docs-component-demo'
import CategoryCardVariantFive from '@/components/shop/category-card-variant-five'

const CategoryCardVariantFiveDemo = () => {
  const code = `import CategoryCardVariantFive from '@/components/shop/category-card-variant-five'

export default function CategoryCardVariantFiveDemo() {
  return (
    <CategoryCardVariantFive
      image={{
        src: '/img/home/marketplace/categories/03.jpg',
        width: 268,
        height: 178,
        // alt: 'Image', // Optionally set a custom image alt attribute, by default it is equal to title.
      }}
      title="3D illustrations"
      href="#"
      style={{ maxWidth: 196 }}
    />
  )
}`

  return (
    <section id="category-card-5" className="docs-section pb-sm-2 mb-5">
      <h4>Category card: Variant 5</h4>
      <DocsComponentDemo code={code}>
        <CategoryCardVariantFive
          image={{
            src: '/img/home/marketplace/categories/03.jpg',
            width: 268,
            height: 178,
          }}
          title="3D illustrations"
          href="#"
          style={{ maxWidth: 196 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default CategoryCardVariantFiveDemo
