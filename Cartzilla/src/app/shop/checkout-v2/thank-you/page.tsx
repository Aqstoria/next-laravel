import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeaderGrocery from '@/components/layout/header-grocery'
import ProductsCarouselGrocery from '@/components/shop/products-carousel-grocery'
import FooterGrocery from '@/components/layout/footer-grocery'
import Container from 'react-bootstrap/Container'

export const metadata: Metadata = {
  title: 'Cartzilla | Checkout v.2 - Thank You Page',
}

const Checkout_V2_ThankYouPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderGrocery featuredCategories={false} />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Thank you message */}
      <Container as="section" className="pt-3 pt-sm-4 pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        <div
          className="position-relative overflow-hidden rounded-5 p-4 p-sm-5"
          style={{ backgroundColor: 'var(--cz-success-border-subtle)' }}
        >
          <div
            className="position-relative z-2 text-center py-4 py-md-5 my-md-2 my-lg-5 mx-auto"
            style={{ maxWidth: 536 }}
          >
            <h1 className="pt-xl-4 mb-4">Thank you for your order!</h1>
            <p className="text-dark-emphasis pb-3 pb-sm-4">
              Your order <span className="fw-semibold">#234000</span> accepted and will be processed shortly. Expect our
              courier <span className="fw-semibold">today (Sunday, May 9) at 12:00 - 14:00.</span>
            </p>
            <Link href="/shop/grocery" className="btn btn-lg btn-dark rounded-pill mb-xl-4">
              Continue shopping
            </Link>
          </div>
          <Image
            priority
            fill
            src="/img/shop/grocery/thankyou-bg-1.png"
            sizes="2592px"
            className="animate-up-down object-fit-cover"
            alt="Background image"
          />
          <Image
            priority
            fill
            src="/img/shop/grocery/thankyou-bg-2.png"
            sizes="2592px"
            className="animate-down-up object-fit-cover"
            alt="Background image"
          />
        </div>
      </Container>

      {/* Similar products carousel */}
      <Container as="section" className="pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        <h2 className="h3 text-center mb-4">You may also like</h2>
        <ProductsCarouselGrocery
          dataUrl="/data/grocery/recommended-products.json"
          sliderBullets
          slidesPerView={5}
          loop
        />
      </Container>
    </main>

    {/* Page footer */}
    <FooterGrocery />
  </>
)

export default Checkout_V2_ThankYouPage
