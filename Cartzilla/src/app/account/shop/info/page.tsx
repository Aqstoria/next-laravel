import type { Metadata } from 'next'
import AccountInfoPanels from './info-panels'

export const metadata: Metadata = {
  title: 'Cartzilla | Account - Personal Info',
}

const ShopAccountInfoPage = () => (
  <>
    <h1 className="h2 mb-1 mb-sm-2">Personal info</h1>
    <AccountInfoPanels />

    {/* Delete account */}
    <div className="pt-3 mt-2 mt-sm-3">
      <h2 className="h6">Delete account</h2>
      <p className="fs-sm">
        When you delete your account, your public profile will be deactivated immediately. If you change your mind
        before the 14 days are up, sign in with your email and password, and we&apos;ll send you a link to reactivate
        your account.
      </p>
      <a href="#" className="text-danger fs-sm fw-medium">
        Delete account
      </a>
    </div>
  </>
)

export default ShopAccountInfoPage
