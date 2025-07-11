'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ProductCardElectronics from '@/components/shop/product-card-electronics'

const ElectronicsProductCardDemo = () => {
  const code = `'use client'

import ProductCardElectronics from '@/components/shop/product-card-electronics'

export default function ElectronicsProductCardDemo() {
  return (
    <ProductCardElectronics
      image={{
        src: '/img/shop/electronics/01.png',
        width: 378,
        height: 352,
        alt: 'VR Glasses' // If this field is left empty, the default title string will be used.
      }}
      title="VRB01 Virtual Reality Glasses"
      href="#"
      price={{
        current: 340.99,
        original: 430,
        // prefix: '€', // Optionally override prefix, "$" is used by default
        // suffix: 'including tax', // Optional suffix text
      }}
      reviews={{
        rating: 3.5,
        count: 123,
      }}
      badge={{
        label: '-21%',
        bg: 'danger', // 'primary' | 'secondary' | 'success' | 'warning' | 'body-tertiary' | 'body-secondary' | 'info' | 'light' | 'dark' | 'white' | 'black' | 'primary-subtle' | 'success-subtle' | 'danger-subtle' | 'warning-subtle' | 'info-subtle'
        // color: 'dark' // 'light' | 'primary' | 'secondary' | 'success' | 'warning' | 'body-tertiary' | 'body-secondary' | 'info' | 'light' | 'dark' | 'white' | 'black'
      }}
      // stock={{
      //   current: 25, // Current number of items in stock
      //   initial: 60, // Initial number of items in stock
      //   label: 'Available', // Optionally override label
      //   ariaLabel: 'Available in stock',  // Optionally override the progress bar's aria-label
      // }}
      specs={{
        Display: 'OLED 1440x1600',
        Graphics: 'Adreno 540',
        Sound: '2x3.5mm jack',
        Input: '4 built-in cameras',
      }}
      // cartButton={false} // Disable Add to Cart button
      // wishlistButton={false} // Disable Add to Wishlist button
      // compareButton={false} // Disable Compare button
      cartButton={{
        // label: 'Add to Cart', // Optionally override the button's aria-label for desktop and its label for mobile devices.
        onClick: () => console.log('"Add to Cart" button has been clicked!'),
      }}
      wishlistButton={{
        // active: true, // The wishlist button appears in an active state, indicating that the item has been added to the wishlist.
        // labelAdd: 'Add to Wishlist', // Optionally override the button's aria-label in "add" state for desktop and its label for mobile devices.
        // labelRemove: 'Remove from Wishlist', // Optionally override the button's aria-label in "remove" state for desktop and its label for mobile devices.
        onClick: () => console.log('"Add to Wishlist" button has been clicked!'),
      }}
      compareButton={{
        // active: true, // The compare button appears in an active state, indicating that the item has been added to the comparison list.
        // labelAdd: 'Compare', // Optionally override the button's aria-label in "add" state for desktop and its label for mobile devices.
        // labelRemove: 'Remove from Comparison', // Optionally override the button's aria-label in "remove" state for desktop and its label for mobile devices.
        onClick: () => console.log('"Compare" button has been clicked!'),
      }}
      className="mb-4"
      style={{ maxWidth: 306 }}
    />
  )
}`

  return (
    <section id="product-card-electronics" className="docs-section pb-sm-2 mb-5">
      <h4>Electronics product card</h4>
      <DocsComponentDemo code={code}>
        <ProductCardElectronics
          image={{ src: '/img/shop/electronics/01.png', width: 378, height: 352, alt: 'VR Glasses' }}
          title="VRB01 Virtual Reality Glasses"
          href="#"
          price={{
            current: 340.99,
            original: 430,
          }}
          reviews={{
            rating: 3.5,
            count: 123,
          }}
          badge={{
            label: '-21%',
            bg: 'danger',
          }}
          specs={{
            Display: 'OLED 1440x1600',
            Graphics: 'Adreno 540',
            Sound: '2x3.5mm jack',
            Input: '4 built-in cameras',
          }}
          cartButton={{
            onClick: () => console.log('"Add to Cart" button has been clicked!'),
          }}
          wishlistButton={{
            onClick: () => console.log('"Add to Wishlist" button has been clicked!'),
          }}
          compareButton={{
            onClick: () => console.log('"Compare" button has been clicked!'),
          }}
          className="mb-4"
          style={{ maxWidth: 306 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default ElectronicsProductCardDemo
