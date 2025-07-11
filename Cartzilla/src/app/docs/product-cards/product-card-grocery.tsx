'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import ProductCardGrocery from '@/components/shop/product-card-grocery'

const GroceryProductCardDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import ProductCardGrocery from '@/components/shop/product-card-grocery'

export default function GroceryProductCardDemo() {
  const [count, setCount] = useState(0)

  return (
    <ProductCardGrocery
      image={{
        src: '/img/shop/grocery/02.png',
        width: 282,
        height: 236,
        alt: 'Fresh orange' // If this field is left empty, the default title string will be used.
      }}
      title="Fresh orange Klementina, Spain"
      href="#"
      price={{
        current: 3.12,
        original: 4.05,
        // prefix: '€', // Optionally override prefix, "$" is used by default
        // suffix: 'including tax', // Optional suffix text
      }}
      description="1kg"
      badge={{
        label: '-30%',
        bg: 'danger', // 'primary' | 'secondary' | 'success' | 'warning' | 'body-tertiary' | 'body-secondary' | 'info' | 'light' | 'dark' | 'white' | 'black' | 'primary-subtle' | 'success-subtle' | 'danger-subtle' | 'warning-subtle' | 'info-subtle'
        // color: 'dark' // 'light' | 'primary' | 'secondary' | 'success' | 'warning' | 'body-tertiary' | 'body-secondary' | 'info' | 'light' | 'dark' | 'white' | 'black'
      }}
      // cartButton={false} // Disable Add to cart button
      // wishlistButton={false} // Disable Add to wishlist button
      cartButton={{
        // defaultValue: 1, // Sets the initial quantity when using an uncontrolled component
        value: count,
        // incrementBtnLabel: "Increment quantity", // Optionally change increment button aria-label
        // decrementBtnLabel: "Decrement quantity", // Optionally change decrement button aria-label
        onChange: (value) => {
          console.log('Changed to:', value)
          setCount(value)
        },
        onIncrement: (value) => {
          console.log('Incremented to:', value)
          setCount(value)
        },
        onDecrement: (value) => {
          console.log('Decremented to:', value)
          setCount(value)
        },
      }}
      wishlistButton={{
        // active: true, // The wishlist button appears in an active state, indicating that the item has been added to the wishlist.
        // labelAdd: 'Add to Wishlist', // Optionally override the button's aria-label in "add" state.
        // labelRemove: 'Remove from Wishlist', // Optionally override the button's aria-label in "remove" state.
        onClick: () => console.log('"Add to Wishlist" button has been clicked!'),
      }}
      style={{ maxWidth: 224 }}
    />
  )
}`

  const [count, setCount] = useState(0)

  return (
    <section id="product-card-grocery" className="docs-section pb-sm-2 mb-5">
      <h4>Grocery product card</h4>
      <DocsComponentDemo code={code}>
        <ProductCardGrocery
          image={{
            src: '/img/shop/grocery/02.png',
            width: 282,
            height: 236,
            alt: 'Fresh orange',
          }}
          title="Fresh orange Klementina, Spain"
          href="#"
          price={{
            current: 3.12,
            original: 4.05,
          }}
          description="1kg"
          badge={{
            label: '-30%',
            bg: 'danger',
          }}
          cartButton={{
            value: count,
            onChange: (value) => {
              console.log('Changed to:', value)
              setCount(value)
            },
            onIncrement: (value) => {
              console.log('Incremented to:', value)
              setCount(value)
            },
            onDecrement: (value) => {
              console.log('Decremented to:', value)
              setCount(value)
            },
          }}
          wishlistButton={{
            onClick: () => console.log('"Add to Wishlist" button has been clicked!'),
          }}
          style={{ maxWidth: 224 }}
        />
      </DocsComponentDemo>
    </section>
  )
}

export default GroceryProductCardDemo
