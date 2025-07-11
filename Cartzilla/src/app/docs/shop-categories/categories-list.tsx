import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Stack from 'react-bootstrap/Stack'
import CategoryList from '@/components/shop/category-list'

const CategoriesListDemo = () => {
  const code = `import Stack from 'react-bootstrap/Stack'
import CategoryList from '@/components/shop/category-list'

export default function CategoriesListDemo() {
  return (
    <Stack className="align-items-start gap-3 gap-sm-4">
      {[
        {
          image: '/img/shop/grocery/categories/01.png',
          title: 'Bakery & bread',
          subtitle: '230 products',
          href: '#',
        },
        {
          image: '/img/shop/grocery/categories/02.png',
          title: 'Vegetables',
          subtitle: '180 products',
          href: '#',
        },
        {
          image: '/img/shop/grocery/categories/03.png',
          title: 'Fresh fruits',
          subtitle: '205 products',
          href: '#',
        },
      ].map(({ image, title, subtitle, href }, index) => (
        <CategoryList
          key={index}
          href={href}
          image={{
            src: image
            // alt: 'Image', // Optionally set a custom image alt attribute, by default it is equal to title.
            // square // Optionally make image square instead of circle
            // bg: 'none', // 'body' | 'body-tertiary' (default) | 'body-secondary' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white' | 'black' | 'primary-subtle' | 'success-subtle' | 'danger-subtle' | 'warning-subtle' | 'info-subtle'
            // alt: 'Category image', // Optionally set a custom image alt attribute, by default it is equal to title.
            // style: { backgroundColor: '#e0e5eb' }, // Sets inline styles, like backgroundColor for more customization
          }}
          title={title}
          subtitle={subtitle}
        />
      ))}
    </Stack>
  )
}`

  return (
    <section id="categories-list" className="docs-section">
      <h4>Categories list</h4>
      <DocsComponentDemo code={code}>
        <Stack className="align-items-start gap-3 gap-sm-4">
          {[
            {
              image: '/img/shop/grocery/categories/01.png',
              title: 'Bakery & bread',
              subtitle: '230 products',
              href: '#',
            },
            {
              image: '/img/shop/grocery/categories/02.png',
              title: 'Vegetables',
              subtitle: '180 products',
              href: '#',
            },
            {
              image: '/img/shop/grocery/categories/03.png',
              title: 'Fresh fruits',
              subtitle: '205 products',
              href: '#',
            },
          ].map(({ image, title, subtitle, href }, index) => (
            <CategoryList key={index} href={href} image={{ src: image }} title={title} subtitle={subtitle} />
          ))}
        </Stack>
      </DocsComponentDemo>
    </section>
  )
}

export default CategoriesListDemo
