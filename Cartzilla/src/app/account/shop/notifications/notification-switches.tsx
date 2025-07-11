'use client'

import { useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import FormCheck from 'react-bootstrap/FormCheck'

const NotificationSwitches = () => {
  const initialNotifications = [
    {
      id: 'exclusive-offers',
      label: 'Exclusive offers',
      description: 'Receive alerts about exclusive discounts, promotions, and special offers tailored just for you.',
      checked: false,
    },
    {
      id: 'order-updates',
      label: 'Order updates',
      description:
        'Stay informed about the status of your orders, including confirmations, shipping updates, and delivery notifications.',
      checked: true,
    },
    {
      id: 'products-recommendations',
      label: 'Product recommendations',
      description:
        "Get personalized recommendations based on your browsing and purchase history to discover new products you'll love.",
      checked: true,
    },
    {
      id: 'restock',
      label: 'Restock notifications',
      description:
        'Be the first to know when out-of-stock items are back in inventory, ensuring you never miss out on your favorite products.',
      checked: false,
    },
    {
      id: 'events',
      label: 'Event reminders',
      description:
        "Receive reminders about upcoming sales events, flash sales, or product launches to make sure you're always in the loop.",
      checked: false,
    },
    {
      id: 'account-security',
      label: 'Account security alerts',
      description:
        'Receive notifications about any suspicious account activity or changes to your login credentials for enhanced security.',
      checked: true,
    },
    {
      id: 'support',
      label: 'Customer support updates',
      description:
        "Get updates on any inquiries or support tickets you've submitted, ensuring timely resolution of any issues.",
      checked: false,
    },
  ]

  const [notifications, setNotifications] = useState(initialNotifications)

  const atLeastOneSelected = notifications.some((n) => n.checked)
  const allSelected = notifications.every((n) => n.checked)

  const handleMasterToggle = () => {
    const newCheckedState = !atLeastOneSelected
    setNotifications(notifications.map((n) => ({ ...n, checked: newCheckedState })))
  }

  const handleToggle = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, checked: !n.checked } : n)))
  }

  return (
    <>
      <div className="nav flex-nowrap align-items-center justify-content-between pb-3 mb-3 mb-lg-4">
        <h1 className="h2 me-3 mb-0">Notifications</h1>
        <FormCheck type="switch" id="notifications-master" className="nav-link animate-underline p-0 m-0">
          <FormCheck.Label className="animate-target me-5">
            {atLeastOneSelected ? 'Unselect all' : 'Select all'}
          </FormCheck.Label>
          <div className="ps-3">
            <FormCheck.Input type="checkbox" checked={atLeastOneSelected} onChange={handleMasterToggle} />
          </div>
        </FormCheck>
      </div>
      <Stack gap={4}>
        {notifications.map(({ id, label, description, checked }) => (
          <FormCheck key={id} type="switch" id={id} className="mb-0">
            <FormCheck.Input type="checkbox" checked={checked} onChange={() => handleToggle(id)} />
            <FormCheck.Label className="ps-2">
              <span className="d-block h6 mb-2">{label}</span>
              <span className="fs-sm">{description}</span>
            </FormCheck.Label>
          </FormCheck>
        ))}
      </Stack>
    </>
  )
}

export default NotificationSwitches
