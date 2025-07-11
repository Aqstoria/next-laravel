'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ProductCardMarketplace from '@/components/shop/product-card-marketplace'

const MarketplaceProductCardDemo = () => {
  const code = `'use client'

import ProductCardMarketplace from '@/components/shop/product-card-marketplace'

export default function MarketplaceProductCardDemo() {
  return (
    <ProductCardMarketplace
      // large // Optional prop to increase the font size of the title and price.
      image={{
        src: '/img/shop/marketplace/13.jpg',
        width: 472,
        height: 342,
        alt: 'Device mockups' // If this field is left empty, the default title string will be used.
      }}
      title="Multi device mockup PSD"
      href="#"
      price={{
        current: 27,
        original: 34,
        // prefix: '€', // Optionally override prefix, "$" is used by default
        // suffix: 'including tax', // Optional suffix text
      }}
      author={{
        avatar: '/img/shop/marketplace/avatars/01.png',
        name: 'Createx Studio',
        href: '#',
      }}
      category={{
        label: 'Mockups',
        href: '#',
      }}
      sales={{ count: 43 }}
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
    <section id="product-card-marketplace" className="docs-section pb-sm-2 mb-5">
      <h4>Marketplace product card</h4>
      <DocsComponentDemo code={code}>
        <ProductCardMarketplace
          image={{ src: '/img/shop/marketplace/13.jpg', width: 472, height: 342, alt: 'Device mockups' }}
          title="Multi device mockup PSD"
          href="#"
          price={{
            current: 27,
            original: 34,
          }}
          author={{
            avatar: '/img/shop/marketplace/avatars/01.png',
            name: 'Createx Studio',
            href: '#',
          }}
          category={{
            label: 'Mockups',
            href: '#',
          }}
          sales={{ count: 43 }}
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

export default MarketplaceProductCardDemo
