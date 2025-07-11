import type { Metadata } from 'next'
import NotificationSwitches from './notification-switches'
import Stack from 'react-bootstrap/Stack'
import FormCheck from 'react-bootstrap/FormCheck'

export const metadata: Metadata = {
  title: 'Cartzilla | Account - Notifications',
}

const ShopAccountNotificationsPage = () => (
  <>
    {/* Notification switches list with master switch */}
    <NotificationSwitches />

    {/* Communication channels */}
    <h2 className="h6 pt-5 mt-md-2">Communication channels</h2>
    <Stack gap={2}>
      {[
        { id: 'sms', label: 'SMS' },
        { id: 'whatsapp', label: 'Messages in WhatsApp' },
        { id: 'email', label: 'Email' },
        { id: 'push', label: 'App push notifications' },
      ].map(({ id, label }) => (
        <FormCheck key={id} id={id} label={label} />
      ))}
    </Stack>
  </>
)

export default ShopAccountNotificationsPage
