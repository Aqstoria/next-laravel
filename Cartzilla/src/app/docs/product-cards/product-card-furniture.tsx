'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ProductCardFurniture from '@/components/shop/product-card-furniture'

const FurnitureProductCardDemo = () => {
  const code = `'use client'

import ProductCardFurniture from '@/components/shop/product-card-furniture'

export default function FurnitureProductCardDemo() {
  return (
    <ProductCardFurniture
      image={{
        src: ['/img/shop/furniture/01.png', '/img/shop/furniture/01-hover.jpg'],
        width: 460,
        height: 460,
        alt: 'Soft chair' // If this field is left empty, the default title string will be used.
      }}
      title="Soft chair with cushion and wooden legs"
      href="#"
      price={{
        current: 245,
        original: 280,
        // prefix: '€', // Optionally override prefix, "$" is used by default
        // suffix: 'including tax', // Optional suffix text
      }}
      colors={{
        toggles: [
          { value: 'Emerald', hex: '#32808e' },
          { value: 'Bluish gray', hex: '#767e93' },
          { value: 'Mustard', hex: '#cd8d01' },
        ],
        onChange: (color) => console.log(\`\${color} color is selected.\`),
      }}
      badge={{
        label: '-14%',
        bg: 'danger', // 'primary' | 'secondary' | 'success' | 'warning' | 'body-tertiary' | 'body-secondary' | 'info' | 'light' | 'dark' | 'white' | 'black' | 'primary-subtle' | 'success-subtle' | 'danger-subtle' | 'warning-subtle' | 'info-subtle'
        // color: 'dark' // 'light' | 'primary' | 'secondary' | 'success' | 'warning' | 'body-tertiary' | 'body-secondary' | 'info' | 'light' | 'dark' | 'white' | 'black'
      }}
      // cartButton={false} // Disable Add to cart button
      // notifyButton={false} // Disable Notify button
      // wishlistButton={false} // Disable Add to wishlist button
      cartButton={{
        // label: 'Add to cart', // Optionally override button aria-label on desktop and label on mobile
        onClick: () => console.log('"Add to Cart" button has been clicked!'),
      }}
      notifyButton={{
        // label: 'Notify of availability', // Optionally override button aria-label on desktop and label on mobile
        onClick: () => console.log('"Notify" button has been clicked!'),
      }}
      wishlistButton={{
        // active: true, // The wishlist button appears in an active state, indicating that the item has been added to the wishlist.
        // labelAdd: 'Add to Wishlist', // Optionally override the button's aria-label in "add" state.
        // labelRemove: 'Remove from Wishlist', // Optionally override the button's aria-label in "remove" state.
        onClick: () => console.log('"Add to Wishlist" button has been clicked!'),
      }}
      // active={true} // If true, the component initially displays "imageSwapTo" and switches to "imageSwapFrom" on hover.
      // outOfStock={true} // If true, the component is muted and "Notify" button is shown instead of "Add to Cart" button if not disabled.
      style={{ maxWidth: 306 }}
    />
  )
}`

  return (
    <section id="product-card-furniture" className="docs-section pb-sm-2 mb-5">
      <h4>Furniture product card</h4>
      <DocsComponentDemo code={code}>
        <ProductCardFurniture
          image={{
            src: ['/img/shop/furniture/01.png', '/img/shop/furniture/01-hover.jpg'],
            width: 460,
            height: 460,
            alt: 'Soft chair',
          }}
          title="Soft chair with cushion and wooden legs"
          href="#"
          price={{
            current: 245,
            original: 280,
          }}
          colors={{
            toggles: [
              { value: 'Emerald', hex: '#32808e' },
              { value: 'Bluish gray', hex: '#767e93' },
              { value: 'Mustard', hex: '#cd8d01' },
            ],
            onChange: (color) => console.log(`${color} color is selected.`),
          }}
          badge={{
            label: '-14%',
            bg: 'danger',
          }}
          cartButton={{
            onClick: () => console.log('"Add to Cart" button has been clicked!'),
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

export default FurnitureProductCardDemo
