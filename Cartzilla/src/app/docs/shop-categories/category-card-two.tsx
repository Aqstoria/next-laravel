import DocsComponentDemo from '@/components/docs/docs-component-demo'
import CategoryCardVariantTwo from '@/components/shop/category-card-variant-two'

const CategoryCardVariantTwoDemo = () => {
  const code = `import CategoryCardVariantTwo from '@/components/shop/category-card-variant-two'

export default function CategoryCardVariantTwoDemo() {
  return (
    <CategoryCardVariantTwo
      image={{
        src: '/img/home/fashion/v2/categories/01.png',
        // alt: 'For men', // Optionally set a custom image alt attribute, by default it is equal to title.
      }}
      title="For men"
      href="#"
      // buttonLabel="Shop now" // Optionally set a custom button label
      list={[
        { label: 'Sports suits', href: '#' },
        { label: 'Trousers', href: '#' },
        { label: 'Jackets and coats', href: '#' },
        { label: 'Shirts', href: '#' },
      ]}
      style={{ maxWidth: 416 }}
    >
      {/* Custom gradient background */}
      <span
        className="position-absolute top-0 start-0 w-100 h-100 d-none-dark"
        style={{ background: 'linear-gradient(124deg, #e2daec -29.7%, #e4eefd 65.5%)' }}
      ></span>
      <span
        className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark"
        style={{ background: 'linear-gradient(124deg, #37343b -29.7%, #222a36 65.5%)' }}
      ></span>
    </CategoryCardVariantTwo>
  )
}`

  return (
    <section id="category-card-2" className="docs-section pb-sm-2 mb-5">
      <h4>Category card: Variant 2</h4>
      <DocsComponentDemo code={code}>
        <CategoryCardVariantTwo
          image={{
            src: '/img/home/fashion/v2/categories/01.png',
          }}
          title="For men"
          href="#"
          list={[
            { label: 'Sports suits', href: '#' },
            { label: 'Trousers', href: '#' },
            { label: 'Jackets and coats', href: '#' },
            { label: 'Shirts', href: '#' },
          ]}
          style={{ maxWidth: 416 }}
        >
          <span
            className="position-absolute top-0 start-0 w-100 h-100 d-none-dark"
            style={{ background: 'linear-gradient(124deg, #e2daec -29.7%, #e4eefd 65.5%)' }}
          ></span>
          <span
            className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark"
            style={{ background: 'linear-gradient(124deg, #37343b -29.7%, #222a36 65.5%)' }}
          ></span>
        </CategoryCardVariantTwo>
      </DocsComponentDemo>
    </section>
  )
}

export default CategoryCardVariantTwoDemo
