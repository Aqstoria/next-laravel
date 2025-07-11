'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import ShoppingCartListItem from '@/components/shop/shopping-cart-list-item'

const ShoppingCartListItemDemo = () => {
  const code = `'use client'

import { useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import ShoppingCartListItem from '@/components/shop/shopping-cart-list-item'

export default function ShoppingCartListItemDemo() {
  const [count, setCount] = useState(1)

  return (
    <Stack gap={4} style={{ maxWidth: 435 }}>

      {/* Electronics store cart item example. State-controlled component. */}
      <ShoppingCartListItem
        image={{
          src: '/img/shop/electronics/thumbs/09.png',
          alt: 'iPad Pro', // If this field is left empty, the default title string will be used.
          // bg: 'body-tertiary', // 'body-secondary' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white' | 'black' | 'primary-subtle' | 'success-subtle' | 'danger-subtle' | 'warning-subtle' | 'info-subtle'
          // style: { backgroundColor: '#e0e5eb' }, // Sets inline styles, like backgroundColor for more customization
        }}
        title="Tablet Apple iPad Pro M2"
        // multilineTitle // Optionally allow the title to span multiple lines instead of being cropped.
        href="#"
        price={{
          current: 989,
          original: 1099,
          // prefix: '€', // Optionally override prefix, "$" is used by default
          // suffix: 'including tax', // Optional suffix text
          // decimals: false, // Optionally disallow decimals
        }}
        badge={{
          label: '-10%',
          bg: 'danger', // 'primary' | 'secondary' | 'success' | 'warning' | 'body-tertiary' | 'body-secondary' | 'info' | 'light' | 'dark' | 'white' | 'black' | 'primary-subtle' | 'success-subtle' | 'danger-subtle' | 'warning-subtle' | 'info-subtle'
          // color: 'dark' // 'light' | 'primary' | 'secondary' | 'success' | 'warning' | 'body-tertiary' | 'body-secondary' | 'info' | 'light' | 'dark' | 'white' | 'black'
        }}
        // countInput={false} // Disable count input
        countInput={{
          // pill: true, // Optionally apply a pill-shaped style to the count input.
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
        // removeButton={false} // Disable remove button button
        removeButton={{
          // label: 'Remove', // Optionally override the button's aria-label and tooltip text.
          // icon: 'ci-trash', // Optionally override button's icon by appling Cartzilla icons CSS classes.
          onClick: () => console.log('"Remove" button is clicked!'),
        }}
      />

      {/* Fashion store cart item example. Thumbnail image with an optional background color. */}
      <ShoppingCartListItem
        image={{
          src: '/img/shop/fashion/thumbs/07.png',
          alt: 'Sneakers',
          bg: 'body-tertiary',
        }}
        title="Leather sneakers with golden laces"
        href="#"
        price={{
          current: 74,
        }}
      />

      {/* Grocery store cart item example. It features multiline title and pill-shaped count input. */}
      <ShoppingCartListItem
        image={{
          src: '/img/shop/grocery/thumbs/02.png',
          alt: 'Pesto sauce',
        }}
        title="Pesto sauce Barilla with basil, Italy"
        multilineTitle // Allow the title to span multiple lines instead of being cropped.
        href="#"
        price={{
          current: 3.95,
        }}
        countInput={{ pill: true }}
      />

      {/* Marketplace cart item example. It features large thumbnail and select instead of count input. */}
      <ShoppingCartListItem
        image={{
          large: true,
          src: '/img/home/marketplace/cart/02.jpg',
          alt: 'Mockups',
        }}
        title="Isometric device mockups"
        href="#"
        price={{
          current: 12,
          decimals: false,
        }}
        countInput={false}
        license="Standart"
        removeButton={{
          icon: 'ci-trash',
        }}
      />
    </Stack>
  )
}`

  const [count, setCount] = useState(1)

  return (
    <section id="cart-items" className="docs-section">
      <h4>Cart items list</h4>
      <DocsComponentDemo code={code}>
        <Stack gap={4} style={{ maxWidth: 435 }}>
          <ShoppingCartListItem
            image={{
              src: '/img/shop/electronics/thumbs/09.png',
              alt: 'iPad Pro',
            }}
            title="Tablet Apple iPad Pro M2"
            href="#"
            price={{
              current: 989,
              original: 1099,
            }}
            badge={{
              label: '-10%',
              bg: 'danger',
            }}
            countInput={{
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
            removeButton={{
              onClick: () => console.log('"Remove" button is clicked!'),
            }}
          />
          <ShoppingCartListItem
            image={{
              src: '/img/shop/fashion/thumbs/07.png',
              alt: 'Sneakers',
              bg: 'body-tertiary',
            }}
            title="Leather sneakers with golden laces"
            href="#"
            price={{
              current: 74,
            }}
          />
          <ShoppingCartListItem
            image={{
              src: '/img/shop/grocery/thumbs/02.png',
              alt: 'Pesto sauce',
            }}
            title="Pesto sauce Barilla with basil, Italy"
            multilineTitle
            href="#"
            price={{
              current: 3.95,
            }}
            countInput={{ pill: true }}
          />
          <ShoppingCartListItem
            image={{
              large: true,
              src: '/img/home/marketplace/cart/02.jpg',
              alt: 'Mockups',
            }}
            title="Isometric device mockups"
            href="#"
            price={{
              current: 12,
              decimals: false,
            }}
            countInput={false}
            license="Standard"
            removeButton={{
              icon: 'ci-trash',
            }}
            className="mt-2"
          />
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default ShoppingCartListItemDemo
