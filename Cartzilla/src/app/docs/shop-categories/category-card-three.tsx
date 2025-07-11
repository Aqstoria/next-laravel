import DocsComponentDemo from '@/components/docs/docs-component-demo'
import CategoryCardVariantThree from '@/components/shop/category-card-variant-three'

const CategoryCardVariantThreeDemo = () => {
  const code = `import CategoryCardVariantThree from '@/components/shop/category-card-variant-three'

export default function CategoryCardVariantThreeDemo() {
  return (
    <CategoryCardVariantThree
      image={{
        src: '/img/home/grocery/featured/01.png',
        // alt: 'Image', // Optionally set a custom image alt attribute, by default it is equal to title.
      }}
      title="Only fresh fish to your table"
      href="#"
      eyebrowText="124 products"
      // buttonLabel="Shop now" // Optionally set a custom button label
      className="bg-primary-subtle"
      style={{ maxWidth: 416 }}
    />
  )
}`

  return (
    <section id="category-card-3" className="docs-section pb-sm-2 mb-5">
      <h4>Category card: Variant 3</h4>
      <DocsComponentDemo code={code}>
        <CategoryCardVariantThree
          image={{
            src: '/img/home/grocery/featured/01.png',
          }}
          title="Only fresh fish to your table"
          href="#"
          eyebrowText="124 products"
          className="bg-primary-subtle"
          style={{ maxWidth: 416 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default CategoryCardVariantThreeDemo
