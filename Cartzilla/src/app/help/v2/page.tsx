import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderElectronics from '@/components/layout/header-electronics'
import HelpHeroSearchAlt from '@/components/help/help-hero-search-alt'
import HelpTopics, { type HelpTopic } from '@/components/help/help-topics'
import HelpArticlesCarousel from '@/components/help/help-articles-carousel'
import HelpFaq from '@/components/help/help-faq'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'

export const metadata: Metadata = {
  title: 'Cartzilla | Help Topics v.2',
}

const helpTopics: HelpTopic[] = [
  {
    icon: 'ci-delivery',
    title: 'Delivery',
    links: [
      ['How does courier delivery work?', '/help/v2/article'],
      ["What happens if I'm not available to receive the delivery?", '/help/v2/article'],
      ['Can I track my order in real-time?', '/help/v2/article'],
      ['Is there an option for express delivery?', '/help/v2/article'],
      ['Will my parcel be charged customs charges?', '/help/v2/article'],
      ['Are there any restrictions on shipping certain products internationally?', '/help/v2/article'],
      ['Can I request a specific delivery time?', '/help/v2/article'],
      ["How can I cancel or modify my order before it's shipped?", '/help/v2/article'],
      ['What is your policy on lost or damaged items during delivery?', '/help/v2/article'],
      ['How are shipping costs calculated?', '/help/v2/article'],
      ['Are there any additional fees for expedited delivery services?', '/help/v2/article'],
      ['Can I schedule a return pick-up for a product?', '/help/v2/article'],
    ],
  },
  {
    icon: 'ci-refresh-cw',
    title: 'Returns & refunds',
    links: [
      ['How do I initiate a return for a product?', '/help/v2/article'],
      ['What is your return policy?', '/help/v2/article'],
      ['Can I exchange a product instead of getting a refund?', '/help/v2/article'],
      ['How long does it take to process a refund?', '/help/v2/article'],
      ['What should I do if my returned item is damaged or defective?', '/help/v2/article'],
      ['Are there any items that are not eligible for returns?', '/help/v2/article'],
      ['Can I return a gift that was purchased for me?', '/help/v2/article'],
      ['Is there a restocking fee for returned items?', '/help/v2/article'],
      ['How can I track the status of my return?', '/help/v2/article'],
      ['What do I do if I receive the wrong item in my order?', '/help/v2/article'],
      ['Are shipping costs refundable for returned items?', '/help/v2/article'],
      ['Do you provide return labels for international customers?', '/help/v2/article'],
    ],
  },
  {
    icon: 'ci-credit-card',
    title: 'Payment options',
    links: [
      ['What payment methods do you accept?', '/help/v2/article'],
      ['Can I change the payment method after placing an order?', '/help/v2/article'],
      ['Are my credit card details secure on your website?', '/help/v2/article'],
      ['Do you offer installment payment options?', '/help/v2/article'],
      ['How do I use a promo code or gift card during checkout?', '/help/v2/article'],
      ['Are there any additional fees for using certain payment methods?', '/help/v2/article'],
      ['Can I split the payment between two different cards?', '/help/v2/article'],
      ['What currencies do you accept for international orders?', '/help/v2/article'],
      ['Is it safe to save my payment information for future purchases?', '/help/v2/article'],
      ['Why was my payment declined?', '/help/v2/article'],
      ['How can I request a refund for an overcharged amount?', '/help/v2/article'],
      ['Do you offer cash-on-delivery (COD) as a payment option?', '/help/v2/article'],
    ],
  },
  {
    icon: 'ci-shopping-bag',
    title: 'Order issues',
    links: [
      ['How can I track the status of my order?', '/help/v2/article'],
      ['What should I do if my order is delayed?', '/help/v2/article'],
      ['Can I cancel my order after it has been placed?', '/help/v2/article'],
      ['What happens if an item in my order is out of stock?', '/help/v2/article'],
      ['How do I add or remove items from my existing order?', '/help/v2/article'],
      ['Do you offer expedited shipping options?', '/help/v2/article'],
      ['My tracking information is not updating; what should I do?', '/help/v2/article'],
      ['Can I change the shipping address for my order?', '/help/v2/article'],
      ['What if my order is missing items or is incomplete?', '/help/v2/article'],
      ['How do I report a problem with my delivered package?', '/help/v2/article'],
      ['Can I request a gift receipt with my order?', '/help/v2/article'],
      ['Are there any restrictions on shipping to certain locations?', '/help/v2/article'],
    ],
  },
  {
    icon: 'ci-archive',
    title: 'Products & stock',
    links: [
      ['How often is your product inventory updated?', '/help/v2/article'],
      ['Can I pre-order items that are out of stock?', '/help/v2/article'],
      ['Are your products authentic and original?', '/help/v2/article'],
      ['What should I do if an item I want is out of stock?', '/help/v2/article'],
      ['Do you restock popular or sold-out items?', '/help/v2/article'],
      ['Can I modify or customize a product before purchasing?', '/help/v2/article'],
      ['Are there any warranties on your products?', '/help/v2/article'],
      ['How do I sign up for product restock notifications?', '/help/v2/article'],
      ['Can I review products on your website?', '/help/v2/article'],
      ['What is the difference between in-stock and pre-order items?', '/help/v2/article'],
      ['Are the product images on your website accurate representations?', '/help/v2/article'],
      ['Do you offer bulk or wholesale discounts?', '/help/v2/article'],
    ],
  },
  {
    icon: 'ci-settings',
    title: 'Managing account',
    links: [
      ['How do I create an account on your website?', '/help/v2/article'],
      ['Can I change my email address associated with my account?', '/help/v2/article'],
      ['What should I do if I forgot my password?', '/help/v2/article'],
      ['How can I update my personal information on my account?', '/help/v2/article'],
      ['Is my account information secure on your website?', '/help/v2/article'],
      ['Can I have multiple shipping addresses saved in my account?', '/help/v2/article'],
      ['How do I unsubscribe from newsletters or promotional emails?', '/help/v2/article'],
      ['Can I delete my account, and what happens to my order history?', '/help/v2/article'],
      ['How do I check the status of my recent orders?', '/help/v2/article'],
      ['Do you offer a guest checkout option without creating an account?', '/help/v2/article'],
      ['How can I subscribe or unsubscribe from SMS notifications?', '/help/v2/article'],
      ['What benefits come with creating an account on your website?', '/help/v2/article'],
    ],
  },
]

const HelpTopics_V2_Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Hero search */}
      <HelpHeroSearchAlt />

      {/* Help topics */}
      <Container as="section" className="py-5">
        <HelpTopics topics={helpTopics} />
        <div className="pt-4 pb-1 pb-sm-3 pb-md-4 pb-xl-5 mt-2 mt-sm-3">
          <h3 className="fs-sm pb-sm-1">Can&apos;t find an answer to your question?</h3>
          <Link href="#" className="btn btn-lg btn-primary">
            Contact us
          </Link>
        </div>
      </Container>

      {/* Popular articles */}
      <HelpArticlesCarousel
        heading="Popular articles"
        className="bg-body-tertiary py-1 py-sm-2 py-md-3 py-lg-4 py-xl-5"
      />

      {/* FAQ accordion */}
      <HelpFaq />
    </main>

    {/* Page footer */}
    <FooterElectronics className="border-top" />
  </>
)

export default HelpTopics_V2_Page
