import type { Metadata } from 'next'
import AccountAddressPanels from './address-panels'

export const metadata: Metadata = {
  title: 'Cartzilla | Account - Addresses',
}

const ShopAccountAddressesPage = () => (
  <>
    <h1 className="h2 mb-1 mb-sm-2">Addresses</h1>
    <AccountAddressPanels />
  </>
)

export default ShopAccountAddressesPage
