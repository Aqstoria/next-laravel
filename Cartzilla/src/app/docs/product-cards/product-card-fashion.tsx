'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ProductCardFashion from '@/components/shop/product-card-fashion'

const FashionProductCardDemo = () => {
  const code = `'use client'

import ProductCardFashion from '@/components/shop/product-card-fashion'

export default function FashionProductCardDemo() {
  return (
    <ProductCardFashion
      image={{
        src: '/img/shop/fashion/06.png',
        width: 420,
        height: 472,
        // bg: 'none', // 'body' | 'body-tertiary' (default) | 'body-secondary' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white' | 'black' | 'primary-subtle' | 'success-subtle' | 'danger-subtle' | 'warning-subtle' | 'info-subtle'
        alt: 'Men shirt' // If this field is left empty, the default title string will be used.
        // style: { backgroundColor: '#e0e5eb' }, // Sets inline styles, like backgroundColor for more customization
      }}
      title="Classic cotton men's shirt"
      href="#"
      price={{
        current: 27,
        original: 35,
        // prefix: '€', // Optionally override prefix, "$" is used by default
        // suffix: 'including tax', // Optional suffix text
      }}
      sizes={['S', 'M', 'L', 'XL', '2XL', '3XL']}
      colors={{
        toggles: [
          { value: 'Blue', hex: '#c1cde7' },
          { value: 'Dark blue', hex: '#526f99' },
          { value: 'White', hex: '#e0e5eb' },
          { value: 'Black', hex: '#364254' },
        ],
        // label: 'colors' // Optionally override the label
        onChange: (color) => console.log(\`\${color} color is selected.\`),
      }}
      badge={{
        label: 'Sale',
        bg: 'danger', // 'primary' | 'secondary' | 'success' | 'warning' | 'body-tertiary' | 'body-secondary' | 'info' | 'light' | 'dark' | 'white' | 'black' | 'primary-subtle' | 'success-subtle' | 'danger-subtle' | 'warning-subtle' | 'info-subtle'
        // color: 'dark' // 'light' | 'primary' | 'secondary' | 'success' | 'warning' | 'body-tertiary' | 'body-secondary' | 'info' | 'light' | 'dark' | 'white' | 'black'
      }}
      // wishlistButton={false} // Disable Add to Wishlist button
      wishlistButton={{
        // active: true, // The wishlist button appears in an active state, indicating that the item has been added to the wishlist.
        // labelAdd: 'Add to Wishlist', // Optionally override the button's aria-label in "add" state.
        // labelRemove: 'Remove from Wishlist', // Optionally override the button's aria-label in "remove" state.
        onClick: () => console.log('"Add to Wishlist" button has been clicked!'),
      }}
      style={{ maxWidth: 306 }}
    />
  )
}`

  return (
    <section id="product-card-fashion" className="docs-section pb-sm-2 mb-5">
      <h4>Fashion product card</h4>
      <DocsComponentDemo code={code}>
        <ProductCardFashion
          image={{ src: '/img/shop/fashion/06.png', width: 420, height: 472, alt: 'Men shirt' }}
          title="Classic cotton men's shirt"
          href="#"
          price={{
            current: 27,
            original: 35,
          }}
          sizes={['S', 'M', 'L', 'XL', '2XL', '3XL']}
          colors={{
            toggles: [
              { value: 'Blue', hex: '#c1cde7' },
              { value: 'Dark blue', hex: '#526f99' },
              { value: 'White', hex: '#e0e5eb' },
              { value: 'Black', hex: '#364254' },
            ],
            onChange: (color) => console.log(`${color} color is selected.`),
          }}
          badge={{
            label: 'Sale',
            bg: 'danger',
          }}
          wishlistButton={{
            onClick: () => console.log('"Add to Wishlist" button has been clicked!'),
          }}
          style={{ maxWidth: 306 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default FashionProductCardDemo
