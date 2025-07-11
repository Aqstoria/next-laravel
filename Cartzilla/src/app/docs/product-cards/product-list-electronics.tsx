import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ProductListElectronics from '@/components/shop/product-list-electronics'

const ElectronicsProductListDemo = () => {
  const code = `import ProductListElectronics from '@/components/shop/product-list-electronics'

export default function ElectronicsProductListDemo() {
  return (
    <ProductListElectronics
      image={{
        src: '/img/shop/electronics/thumbs/04.png',
        alt: 'AirPods 2 Pro' // If this field is left empty, the default title string will be used.
      }}
      title="Headphones Apple AirPods 2 Pro"
      href="#"
      price={{
        current: 209.99,
        original: 356,
        // prefix: '€', // Optionally override prefix, "$" is used by default
        // suffix: 'including tax', // Optional suffix text
      }}
      reviews={{
        rating: 5,
        count: 340,
      }}
      badge={{
        label: '-40%',
        bg: 'danger', // 'primary' | 'secondary' | 'success' | 'warning' | 'body-tertiary' | 'body-secondary' | 'info' | 'light' | 'dark' | 'white' | 'black' | 'primary-subtle' | 'success-subtle' | 'danger-subtle' | 'warning-subtle' | 'info-subtle'
        // color: 'dark' // 'light' | 'primary' | 'secondary' | 'success' | 'warning' | 'body-tertiary' | 'body-secondary' | 'info' | 'light' | 'dark' | 'white' | 'black'
      }}
      style={{ maxWidth: 400 }}
    />
  )
}`

  return (
    <section id="product-list-electronics" className="docs-section pb-sm-2 mb-5">
      <h4>Electronics product list</h4>
      <DocsComponentDemo code={code}>
        <ProductListElectronics
          image={{ src: '/img/shop/electronics/thumbs/04.png', alt: 'AirPods 2 Pro' }}
          title="Headphones Apple AirPods 2 Pro"
          href="#"
          price={{
            current: 209.99,
            original: 356,
          }}
          reviews={{
            rating: 5,
            count: 340,
          }}
          badge={{
            label: '-40%',
            bg: 'danger',
          }}
          style={{ maxWidth: 400 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default ElectronicsProductListDemo
