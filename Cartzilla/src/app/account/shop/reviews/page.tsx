import type { Metadata } from 'next'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SelectBox from '@/components/forms/select-box'
import AccountReviews from './reviews'

export const metadata: Metadata = {
  title: 'Cartzilla | Account - My Reviews',
}

const ShopAccountReviewsPage = () => <AccountReviews />

export default ShopAccountReviewsPage
