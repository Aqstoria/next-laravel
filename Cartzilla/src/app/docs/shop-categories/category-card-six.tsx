'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import CategoryCardVariantSix from '@/components/shop/category-card-variant-six'

const CategoryCardVariantSixDemo = () => {
  const code = `'use client'

import CategoryCardVariantSix from '@/components/shop/category-card-variant-six'

export default function CategoryCardVariantSixDemo() {
  return (
    <CategoryCardVariantSix
      images={[
        ['/img/home/marketplace/collections/07.jpg', 'Image'],
        ['/img/home/marketplace/collections/08.jpg', 'Image'],
        ['/img/home/marketplace/collections/09.jpg', 'Image'],
      ]}
      href="#"
      title="Device mockups"
      subtitle="305 resources"
      // wishlistButton={false} // Disable Add to Wishlist button
      wishlistButton={{
        // active: true, // The wishlist button appears in an active state, indicating that the item has been added to the wishlist.
        // labelAdd: 'Add to Wishlist', // Optionally override the button's aria-label in "add" state.
        // labelRemove: 'Remove from Wishlist', // Optionally override the button's aria-label in "remove" state.
        onClick: () => console.log('"Add to Wishlist" button is clicked!'),
      }}
      style={{ maxWidth: 306 }}
    />
  )
}`

  return (
    <section id="category-card-6" className="docs-section pb-sm-2 mb-5">
      <h4>Category card: Variant 6</h4>
      <DocsComponentDemo code={code}>
        <CategoryCardVariantSix
          images={[
            ['/img/home/marketplace/collections/07.jpg', 'Image'],
            ['/img/home/marketplace/collections/08.jpg', 'Image'],
            ['/img/home/marketplace/collections/09.jpg', 'Image'],
          ]}
          href="#"
          title="Device mockups"
          subtitle="305 resources"
          wishlistButton={{
            onClick: () => console.log('"Add to Wishlist" button is clicked!'),
          }}
          style={{ maxWidth: 306 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default CategoryCardVariantSixDemo
