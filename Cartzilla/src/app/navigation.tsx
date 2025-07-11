interface NavItemProps {
  icon?: string
  image?: string
  title: string
  subtitle?: string
  href: string
  submenu?: NavItemProps[]
  megamenu?: {
    title?: string
    href?: string
    links?: NavItemProps[]
    group?: {
      title: string
      href: string
      links?: NavItemProps[]
    }[]
    banner?: {
      title: string | React.ReactNode
      description?: string | React.ReactNode
      href: string
      image: [string, string]
      icon?: string
      badge?: string
      button?: string
      mode?: 'light' | 'dark'
    }
  }[]
  preview?: [string, string]
}

export const mainNavigation: NavItemProps[] = [
  {
    title: 'Home',
    href: '/home',
    // submenu: [
    //   {
    //     title: 'Electronics Store',
    //     subtitle: 'Megamenu + Hero slider',
    //     href: '/home',
    //     preview: [
    //       '/img/mega-menu/demo-preview/electronics-light.jpg',
    //       '/img/mega-menu/demo-preview/electronics-dark.jpg',
    //     ],
    //   },
    //   {
    //     title: 'Fashion Store v.1',
    //     subtitle: 'Hero promo slider',
    //     href: '/home/fashion-v1',
    //     preview: ['/img/mega-menu/demo-preview/fashion-1-light.jpg', '/img/mega-menu/demo-preview/fashion-1-dark.jpg'],
    //   },
    //   {
    //     title: 'Fashion Store v.2',
    //     subtitle: 'Hero banner with hotspots',
    //     href: '/home/fashion-v2',
    //     preview: ['/img/mega-menu/demo-preview/fashion-2-light.jpg', '/img/mega-menu/demo-preview/fashion-2-dark.jpg'],
    //   },
    //   {
    //     title: 'Furniture Store',
    //     subtitle: 'Fancy product carousel',
    //     href: '/home/furniture',
    //     preview: ['/img/mega-menu/demo-preview/furniture-light.jpg', '/img/mega-menu/demo-preview/furniture-dark.jpg'],
    //   },
    //   {
    //     title: 'Grocery Store',
    //     subtitle: 'Hero slider + Category cards',
    //     href: '/home/grocery',
    //     preview: ['/img/mega-menu/demo-preview/grocery-light.jpg', '/img/mega-menu/demo-preview/grocery-dark.jpg'],
    //   },
    //   {
    //     title: 'Marketplace',
    //     subtitle: 'Multi-vendor, digital goods',
    //     href: '/home/marketplace',
    //     preview: [
    //       '/img/mega-menu/demo-preview/marketplace-light.jpg',
    //       '/img/mega-menu/demo-preview/marketplace-dark.jpg',
    //     ],
    //   },
    //   {
    //     title: 'Single Product Store',
    //     subtitle: 'Single product / mono brand',
    //     href: '/home/single-store',
    //     preview: [
    //       '/img/mega-menu/demo-preview/single-store-light.jpg',
    //       '/img/mega-menu/demo-preview/single-store-dark.jpg',
    //     ],
    //   },
    // ],
  },
  {
    title: 'Shop',
    href: '/shop',
    // megamenu: [
    //   {
    //     title: 'Electronics Store',
    //     links: [
    //       { title: 'Categories Page', href: '/shop' },
    //       { title: 'Catalog with Side Filters', href: '/shop/electronics' },
    //       { title: 'Product General Info', href: '/shop/electronics/product' },
    //       { title: 'Product Details', href: '/shop/electronics/product?tab=details' },
    //       { title: 'Product Reviews', href: '/shop/electronics/product?tab=reviews' },
    //     ],
    //   },
    //   {
    //     title: 'Fashion Store',
    //     links: [
    //       { title: 'Catalog with Side Filters', href: '/shop/fashion' },
    //       { title: 'Product Page', href: '/shop/fashion/product' },
    //     ],
    //   },
    //   {
    //     title: 'Furniture Store',
    //     links: [
    //       { title: 'Catalog with Top Filters', href: '/shop/furniture' },
    //       { title: 'Product Page', href: '/shop/furniture/product' },
    //     ],
    //   },
    //   {
    //     title: 'Grocery Store',
    //     links: [
    //       { title: 'Catalog with Side Filters', href: '/shop/grocery' },
    //       { title: 'Product Page', href: '/shop/grocery/product' },
    //     ],
    //   },
    //   {
    //     title: 'Marketplace',
    //     links: [
    //       { title: 'Catalog with Top Filters', href: '/shop/marketplace' },
    //       { title: 'Digital Product Page', href: '/shop/marketplace/product' },
    //       { title: 'Cart / Checkout', href: '/shop/marketplace/checkout' },
    //     ],
    //   },
    //   {
    //     title: 'Checkout v.1',
    //     links: [
    //       { title: 'Shopping Cart', href: '/shop/checkout-v1' },
    //       { title: 'Delivery Info (Step 1)', href: '/shop/checkout-v1/delivery-1' },
    //       { title: 'Delivery Info (Step 2)', href: '/shop/checkout-v1/delivery-2' },
    //       { title: 'Shipping Address', href: '/shop/checkout-v1/shipping' },
    //       { title: 'Payment', href: '/shop/checkout-v1/payment' },
    //       { title: 'Thank You Page', href: '/shop/checkout-v1/thank-you' },
    //     ],
    //   },
    //   {
    //     title: 'Checkout v.2',
    //     links: [
    //       { title: 'Shopping Cart', href: '/shop/checkout-v2' },
    //       { title: 'Delivery Info', href: '/shop/checkout-v2/delivery' },
    //       { title: 'Pickup from Store', href: '/shop/checkout-v2/pickup' },
    //       { title: 'Thank You Page', href: '/shop/checkout-v2/thank-you' },
    //     ],
    //   },
    // ],
  },
  {
    title: 'Account',
    href: '/account',
    submenu: [
      {
        title: 'Auth Pages',
        href: '#',
        submenu: [
          { title: 'Sign In', href: '/account' },
          { title: 'Sign Up', href: '/account/signup' },
          { title: 'Password Recovery', href: '/account/password-recovery' },
        ],
      },
      {
        title: 'Shop User',
        href: '#',
        submenu: [
          { title: 'Orders History', href: '/account/shop' },
          { title: 'Wishlist', href: '/account/shop/wishlist' },
          { title: 'Payment Methods', href: '/account/shop/payment' },
          { title: 'My Reviews', href: '/account/shop/reviews' },
          { title: 'Personal Info', href: '/account/shop/info' },
          { title: 'Addresses', href: '/account/shop/addresses' },
          { title: 'Notifications', href: '/account/shop/notifications' },
        ],
      },
      // {
      //   title: 'Marketplace User',
      //   href: '#',
      //   submenu: [
      //     { title: 'Dashboard', href: '/account/marketplace' },
      //     { title: 'Products', href: '/account/marketplace/products' },
      //     { title: 'Sales', href: '/account/marketplace/sales' },
      //     { title: 'Payouts', href: '/account/marketplace/payouts' },
      //     { title: 'Purchases', href: '/account/marketplace/purchases' },
      //     { title: 'Favorites', href: '/account/marketplace/favorites' },
      //     { title: 'Settings', href: '/account/marketplace/settings' },
      //   ],
      // },
    ],
  },
  {
    title: 'Pages',
    href: '/pages',
    submenu: [
      {
        title: 'About',
        href: '#',
        submenu: [
          { title: 'About v.1', href: '/about' },
          { title: 'About v.2', href: '/about/v2' },
        ],
      },
      {
        title: 'Blog',
        href: '#',
        submenu: [
          { title: 'Grid View v.1', href: '/blog' },
          { title: 'Grid View v.2', href: '/blog/grid-v2' },
          { title: 'List View', href: '/blog/list' },
          { title: 'Single Post v.1', href: '/blog/single-post-v1' },
          { title: 'Single Post v.2', href: '/blog/single-post-v2' },
        ],
      },
      {
        title: 'Contact',
        href: '#',
        submenu: [
          { title: 'Contact v.1', href: '/contact' },
          { title: 'Contact v.2', href: '/contact/v2' },
          { title: 'Contact v.3', href: '/contact/v3' },
        ],
      },
      {
        title: 'Help Center',
        href: '#',
        submenu: [
          { title: 'Help Topics v.1', href: '/help' },
          { title: 'Help Topics v.2', href: '/help/v2' },
          { title: 'Help Single Article v.1', href: '/help/article' },
          { title: 'Help Single Article v.2', href: '/help/v2/article' },
        ],
      },
      {
        title: '404 Error',
        href: '#',
        submenu: [
          { title: '404 Electronics', href: '/404' },
          { title: '404 Fashion', href: '/404/fashion' },
          { title: '404 Furniture', href: '/404/furniture' },
          { title: '404 Grocery', href: '/404/grocery' },
        ],
      },
      {
        title: 'Terms & Conditions',
        href: '/terms',
      },
    ],
  },
  {
    title: 'Docs',
    href: '/docs/installation',
  },
  {
    title: 'Components',
    href: '/docs/typography',
  },
]

export const categoriesElectronics: NavItemProps[] = [
 
  {
    icon: 'ci-battery-2',
    title: 'Charging Stations',
    href: '/shop/electronics',
    megamenu: [
      {
        title: 'Charging Stations',
        href: '/shop/electronics',
        links: [
          { title: 'Portable Power Stations', href: '/shop/electronics' },
          { title: 'Inverter Power Stations', href: '/shop/electronics' },
          { title: 'Outdoor Generators', href: '/shop/electronics' },
          { title: 'Gasoline Generators', href: '/shop/electronics' },
          { title: 'Cell Phone Chargers', href: '/shop/electronics' },
          { title: 'Power Strips', href: '/shop/electronics' },
          { title: 'Wall Charges', href: '/shop/electronics' },
        ],
      },
      {
        banner: {
          title: 'Portable Power Stations',
          description: (
            <>
              Save up to <span className="fw-semibold">$350</span>
            </>
          ),
          href: '/shop/electronics',
          image: ['/img/mega-menu/electronics/07.png', 'Power Station'],
          badge: 'Huge sale!',
        },
      },
    ],
  },
  {
    icon: 'ci-headphones-2',
    title: 'Headphones',
    href: '/shop/electronics',
    megamenu: [
      {
        group: [
          {
            title: 'Headphones',
            href: '/shop/electronics',
            links: [
              { title: 'Earbud Headphones', href: '/shop/electronics' },
              { title: 'Over-Ear Headphones', href: '/shop/electronics' },
              { title: 'On-Ear Headphones', href: '/shop/electronics' },
              { title: 'Bluetooth Headphones', href: '/shop/electronics' },
              { title: 'Sports & Fitness', href: '/shop/electronics' },
              { title: 'Noise-Cancelling', href: '/shop/electronics' },
            ],
          },
          {
            title: 'Accessories',
            href: '/shop/electronics',
            links: [
              { title: 'Cases & Sleeves', href: '/shop/electronics' },
              { title: 'Cables & Cords', href: '/shop/electronics' },
              { title: 'Ear Pads', href: '/shop/electronics' },
              { title: 'Repair Kits', href: '/shop/electronics' },
              { title: 'Cleaning Equipment', href: '/shop/electronics' },
            ],
          },
        ],
      },
      {
        banner: {
          title: 'Wireless Headphones',
          description: 'Starts from $119.99',
          href: '/shop/electronics',
          image: ['/img/mega-menu/electronics/08.png', 'Wireless Headphones'],
          badge: 'Save up to $200',
        },
      },
    ],
  },
  {
    icon: 'ci-watch-2',
    title: 'Wearable Electronics',
    href: '/shop/electronics',
    megamenu: [
      {
        title: 'Wearable Gadgets',
        href: '/shop/electronics',
        links: [
          { title: 'Smartwatches', href: '/shop/electronics' },
          { title: 'Fitness Trackers', href: '/shop/electronics' },
          { title: 'Smart Glasses', href: '/shop/electronics' },
          { title: 'Rings', href: '/shop/electronics' },
          { title: 'Virtual Reality', href: '/shop/electronics' },
          { title: 'Clips, Arm & Wristbands', href: '/shop/electronics' },
          { title: 'Accessories', href: '/shop/electronics' },
        ],
      },
      {
        banner: {
          title: 'Pixel Watch',
          description: 'Deal of the week',
          href: '/shop/electronics',
          image: ['/img/mega-menu/electronics/09.png', 'Pixel Watch'],
          icon: 'ci-google fs-2',
        },
      },
    ],
  },
  {
    icon: 'ci-powerbank',
    title: 'Powerbanks',
    href: '/shop/electronics',
    megamenu: [
      {
        title: 'Powerbanks',
        href: '/shop/electronics',
        links: [
          { title: 'Fast Charging', href: '/shop/electronics' },
          { title: 'Built In Cable', href: '/shop/electronics' },
          { title: 'Built In Wall Plug', href: '/shop/electronics' },
          { title: 'LED Indicator Lights', href: '/shop/electronics' },
          { title: 'Pocket Size', href: '/shop/electronics' },
          { title: 'Wireless Charging', href: '/shop/electronics' },
          { title: 'Short Circuit Protection', href: '/shop/electronics' },
          { title: 'Scratch Resistant', href: '/shop/electronics' },
          { title: 'Flashlight', href: '/shop/electronics' },
          { title: 'Lightweight', href: '/shop/electronics' },
        ],
      },
      {
        banner: {
          title: 'Powerbank Deals',
          description: (
            <>
              Save up to <span className="fw-semibold">$50</span> on our
            </>
          ),
          href: '/shop/electronics',
          image: ['/img/mega-menu/electronics/10.png', 'Powerbank'],
        },
      },
    ],
  },
  {
    icon: 'ci-hard-drive-2',
    title: 'HDD/SSD Data Storage',
    href: '/shop/electronics',
    megamenu: [
      {
        title: 'Data Storage',
        href: '/shop/electronics',
        links: [
          { title: 'External Hard Drives', href: '/shop/electronics' },
          { title: 'External SSD', href: '/shop/electronics' },
          { title: 'External Zip Drives', href: '/shop/electronics' },
          { title: 'Floppy & Tape Drives', href: '/shop/electronics' },
          { title: 'Internal Hard Drives', href: '/shop/electronics' },
          { title: 'Internal SSD', href: '/shop/electronics' },
          { title: 'Network Attached Storage', href: '/shop/electronics' },
          { title: 'USB Flash Drives', href: '/shop/electronics' },
        ],
      },
      {
        banner: {
          title: 'Samsung SSD Deals',
          description: 'Starts from $89.99',
          href: '/shop/electronics',
          image: ['/img/mega-menu/electronics/11.png', 'SSD'],
          badge: 'Save up to $100',
        },
      },
    ],
  },
  {
    icon: 'ci-game',
    title: 'Video Games',
    href: '/shop/electronics',
    megamenu: [
      {
        title: 'Games & Hardware',
        href: '/shop/electronics',
        links: [
          { title: 'Video Games', href: '/shop/electronics' },
          { title: 'PlayStation 5', href: '/shop/electronics' },
          { title: 'PlayStation 4', href: '/shop/electronics' },
          { title: 'Xbox Series X', href: '/shop/electronics' },
          { title: 'Xbox Series S', href: '/shop/electronics' },
          { title: 'Nintendo Switch', href: '/shop/electronics' },
          { title: 'Gaming PC', href: '/shop/electronics' },
          { title: 'Gaming Laptops', href: '/shop/electronics' },
          { title: 'Wii U', href: '/shop/electronics' },
          { title: 'Wii', href: '/shop/electronics' },
          { title: 'Nintendo 3DS', href: '/shop/electronics' },
          { title: 'Nintendo 2DS', href: '/shop/electronics' },
          { title: 'Nintendo DS', href: '/shop/electronics' },
          { title: 'Mac', href: '/shop/electronics' },
        ],
      },
      {
        links: [
          { title: 'PlayStation Vita', href: '/shop/electronics' },
          { title: 'Sony PSP', href: '/shop/electronics' },
          { title: 'Retro Gaming', href: '/shop/electronics' },
          { title: 'Microconsoles', href: '/shop/electronics' },
          { title: 'Controllers', href: '/shop/electronics' },
          { title: 'Accessories', href: '/shop/electronics' },
          { title: 'Digital Games Screens', href: '/shop/electronics' },
          { title: 'Game Pass', href: '/shop/electronics' },
          { title: 'PlayStation Plus', href: '/shop/electronics' },
        ],
      },
      {
        banner: {
          title: 'Xbox Series X',
          description: (
            <>
              Starts from <del>$599.00</del> $499.00
            </>
          ),
          href: '/shop/electronics',
          image: ['/img/mega-menu/electronics/12.png', 'Xbox'],
          badge: 'Save $100',
        },
      },
    ],
  },
]

export const categoriesFashion: NavItemProps[] = [
  {
    title: "Women's",
    href: 'womens',
    megamenu: [
      {
        title: 'Clothing',
        href: '/shop/fashion',
        links: [
          { title: 'Shirts & Tops', href: '/shop/fashion' },
          { title: 'Coats & Outerwear', href: '/shop/fashion' },
          { title: 'Underwear', href: '/shop/fashion' },
          { title: 'Sweatshirts', href: '/shop/fashion' },
          { title: 'Dresses', href: '/shop/fashion' },
          { title: 'Swimwear', href: '/shop/fashion' },
          { title: 'View all', href: '/shop/fashion' },
        ],
      },
      {
        title: 'Shoes',
        href: '/shop/fashion',
        links: [
          { title: 'Boots', href: '/shop/fashion' },
          { title: 'Sandals', href: '/shop/fashion' },
          { title: 'Heels', href: '/shop/fashion' },
          { title: 'Loafers', href: '/shop/fashion' },
          { title: 'Slippers', href: '/shop/fashion' },
          { title: 'Oxfords', href: '/shop/fashion' },
          { title: 'View all', href: '/shop/fashion' },
        ],
      },
      {
        title: 'Accessories',
        href: '/shop/fashion',
        links: [
          { title: 'Handbags', href: '/shop/fashion' },
          { title: 'Eyewear', href: '/shop/fashion' },
          { title: 'Hats', href: '/shop/fashion' },
          { title: 'Watches', href: '/shop/fashion' },
          { title: 'Jewelry', href: '/shop/fashion' },
          { title: 'Belts', href: '/shop/fashion' },
          { title: 'View all', href: '/shop/fashion' },
        ],
      },
      {
        title: 'Specialty Sizes',
        links: [
          { title: 'Plus Size', href: '/shop/fashion' },
          { title: 'Petite', href: '/shop/fashion' },
          { title: 'Wide Shoes', href: '/shop/fashion' },
          { title: 'Narrow Shoes', href: '/shop/fashion' },
        ],
      },
      {
        banner: {
          title: (
            <>
              Women&apos;s
              <br />
              Heels
              <br />
              Collection
            </>
          ),
          href: '/shop/fashion',
          image: ['/img/mega-menu/fashion/01.jpg', 'Heels'],
          mode: 'light',
        },
      },
    ],
  },
  {
    title: "Men's",
    href: 'mens',
    megamenu: [
      {
        title: 'Clothing',
        href: '/shop/fashion',
        links: [
          { title: 'T-Shirts', href: '/shop/fashion' },
          { title: 'Jeans', href: '/shop/fashion' },
          { title: 'Coats & Outerwear', href: '/shop/fashion' },
          { title: 'Sweatshirts', href: '/shop/fashion' },
          { title: 'Underwear', href: '/shop/fashion' },
          { title: 'Pants', href: '/shop/fashion' },
          { title: 'View all', href: '/shop/fashion' },
        ],
      },
      {
        title: 'Shoes',
        href: '/shop/fashion',
        links: [
          { title: 'Sneakers', href: '/shop/fashion' },
          { title: 'Oxfords', href: '/shop/fashion' },
          { title: 'Loafers', href: '/shop/fashion' },
          { title: 'Sandals', href: '/shop/fashion' },
          { title: 'Boots', href: '/shop/fashion' },
          { title: 'Slippers', href: '/shop/fashion' },
          { title: 'View all', href: '/shop/fashion' },
        ],
      },
      {
        title: 'Accessories',
        href: '/shop/fashion',
        links: [
          { title: 'Backpacks', href: '/shop/fashion' },
          { title: 'Sunglasses', href: '/shop/fashion' },
          { title: 'Bags', href: '/shop/fashion' },
          { title: 'Watches', href: '/shop/fashion' },
          { title: 'Hats', href: '/shop/fashion' },
          { title: 'Belts', href: '/shop/fashion' },
          { title: 'View all', href: '/shop/fashion' },
        ],
      },
      {
        title: 'Specialty Shops',
        links: [
          { title: 'Active Wear', href: '/shop/fashion' },
          { title: 'Sports Clothing', href: '/shop/fashion' },
          { title: 'Athletic Shoes', href: '/shop/fashion' },
        ],
      },
      {
        banner: {
          title: (
            <>
              Men&apos;s
              <br />
              Sunglasses
              <br />
              Offers
            </>
          ),
          href: '/shop/fashion',
          image: ['/img/mega-menu/fashion/02.jpg', 'Sunglasses'],
          mode: 'dark',
        },
      },
    ],
  },
  {
    title: "Kids'",
    href: 'kids',
    megamenu: [
      {
        title: 'Boys',
        href: '/shop/fashion',
        links: [
          { title: 'Pants', href: '/shop/fashion' },
          { title: 'Sneakers', href: '/shop/fashion' },
          { title: 'Coats & Outerwear', href: '/shop/fashion' },
          { title: 'Sweatshirts', href: '/shop/fashion' },
          { title: 'Boots', href: '/shop/fashion' },
          { title: 'Shorts', href: '/shop/fashion' },
          { title: 'View all', href: '/shop/fashion' },
        ],
      },
      {
        title: 'Girls',
        href: '/shop/fashion',
        links: [
          { title: 'Shirts & Tops', href: '/shop/fashion' },
          { title: 'Dresses', href: '/shop/fashion' },
          { title: 'Sneakers', href: '/shop/fashion' },
          { title: 'Hoodies', href: '/shop/fashion' },
          { title: 'Sandals', href: '/shop/fashion' },
          { title: 'Coats & Outerwear', href: '/shop/fashion' },
          { title: 'View all', href: '/shop/fashion' },
        ],
      },
      {
        title: 'Accessories',
        href: '/shop/fashion',
        links: [
          { title: 'Backpacks', href: '/shop/fashion' },
          { title: 'Gloves', href: '/shop/fashion' },
          { title: 'Shoe Laces', href: '/shop/fashion' },
          { title: 'Scarves', href: '/shop/fashion' },
          { title: 'Hats', href: '/shop/fashion' },
          { title: 'Belts', href: '/shop/fashion' },
          { title: 'View all', href: '/shop/fashion' },
        ],
      },
      {
        title: 'Shop by Age',
        links: [
          { title: 'Infant', href: '/shop/fashion' },
          { title: 'Toddler', href: '/shop/fashion' },
          { title: 'Little Kid', href: '/shop/fashion' },
          { title: 'Big Kid', href: '/shop/fashion' },
        ],
      },
      {
        banner: {
          title: (
            <>
              Kids&apos;
              <br />
              Spring
              <br />
              Collection
            </>
          ),
          href: '/shop/fashion',
          image: ['/img/mega-menu/fashion/03.jpg', 'Kids'],
          mode: 'light',
        },
      },
    ],
  },
]

export const categoriesGrocery: NavItemProps[] = [
  {
    icon: 'ci-grid',
    title: 'Categories',
    href: '#',
    megamenu: [
      {
        group: [
          {
            title: 'Bakery & bread',
            href: '#',
            links: [
              { title: 'Shop all', href: '/shop/grocery' },
              { title: 'Bread', href: '/shop/grocery' },
              { title: 'Pastries', href: '/shop/grocery' },
              { title: 'Bakery cookies', href: '/shop/grocery' },
              { title: 'Cupcakes', href: '/shop/grocery' },
              { title: 'Buns & rolls', href: '/shop/grocery' },
            ],
          },
          {
            title: 'Meat products',
            href: '#',
            links: [
              { title: 'Shop all', href: '/shop/grocery' },
              { title: 'Fresh meat', href: '/shop/grocery' },
              { title: 'Processed meat', href: '/shop/grocery' },
              { title: 'Seafood', href: '/shop/grocery' },
              { title: 'Poultry products', href: '/shop/grocery' },
              { title: 'Prepared meat', href: '/shop/grocery' },
            ],
          },
        ],
      },
      {
        group: [
          {
            title: 'Vegetables',
            href: '#',
            links: [
              { title: 'Shop all', href: '/shop/grocery' },
              { title: 'Leafy greens', href: '/shop/grocery' },
              { title: 'Root vegetables', href: '/shop/grocery' },
              { title: 'Allium vegetables', href: '/shop/grocery' },
              { title: 'Peppers and tomatoes', href: '/shop/grocery' },
              { title: 'Cruciferous', href: '/shop/grocery' },
              { title: 'Seasonal squashes', href: '/shop/grocery' },
              { title: 'Beans, peas & lentils', href: '/shop/grocery' },
            ],
          },
          {
            title: 'Sauces and ketchup',
            href: '#',
            links: [
              { title: 'Shop all', href: '/shop/grocery' },
              { title: 'Tomato-based sauces', href: '/shop/grocery' },
              { title: 'Salad dressing', href: '/shop/grocery' },
              { title: 'Hot sauces', href: '/shop/grocery' },
            ],
          },
        ],
      },
      {
        group: [
          {
            title: 'Fresh fruits',
            href: '#',
            links: [
              { title: 'Shop all', href: '/shop/grocery' },
              { title: 'Citrus fruits', href: '/shop/grocery' },
              { title: 'Berries', href: '/shop/grocery' },
              { title: 'Tropical fruits', href: '/shop/grocery' },
              { title: 'Stone fruits', href: '/shop/grocery' },
              { title: 'Exotic fruits', href: '/shop/grocery' },
              { title: 'Melons', href: '/shop/grocery' },
            ],
          },
          {
            title: 'Italian dinner',
            href: '#',
            links: [
              { title: 'Shop all', href: '/shop/grocery' },
              { title: 'Pasta & sauces', href: '/shop/grocery' },
              { title: 'Italian cheese', href: '/shop/grocery' },
              { title: 'Italian meats', href: '/shop/grocery' },
              { title: 'Desserts & beverages', href: '/shop/grocery' },
            ],
          },
        ],
      },
      {
        group: [
          {
            title: 'Beverages',
            href: '#',
            links: [
              { title: 'Shop all', href: '/shop/grocery' },
              { title: 'Soft drinks', href: '/shop/grocery' },
              { title: 'Juices', href: '/shop/grocery' },
              { title: 'Sports & energy drinks', href: '/shop/grocery' },
              { title: 'Tea and coffee', href: '/shop/grocery' },
              { title: 'Alcoholic beverages', href: '/shop/grocery' },
            ],
          },
          {
            title: 'Dairy & eggs',
            href: '#',
            links: [
              { title: 'Shop all', href: '/shop/grocery' },
              { title: 'Chees', href: '/shop/grocery' },
              { title: 'Milk & yogurt', href: '/shop/grocery' },
              { title: 'Sour cream', href: '/shop/grocery' },
              { title: 'Eggs', href: '/shop/grocery' },
              { title: 'Butter & margarine', href: '/shop/grocery' },
            ],
          },
        ],
      },
    ],
  },
]

export const featuredCategoriesGrocery: NavItemProps[] = [
  { icon: 'ci-percent', title: 'Weekly sale', href: '/shop/grocery' },
  { image: '/img/mega-menu/grocery/th01.png', title: 'Vegetables', href: '/shop/grocery' },
  { image: '/img/mega-menu/grocery/th02.png', title: 'Easter is coming', href: '/shop/grocery' },
  { image: '/img/mega-menu/grocery/th03.png', title: 'Poultry meat', href: '/shop/grocery' },
  { image: '/img/mega-menu/grocery/th04.png', title: 'Fresh fruits', href: '/shop/grocery' },
  { image: '/img/mega-menu/grocery/th05.png', title: "St. Patrick's day", href: '/shop/grocery' },
  { image: '/img/mega-menu/grocery/th06.png', title: 'Exotic fruits', href: '/shop/grocery' },
]
