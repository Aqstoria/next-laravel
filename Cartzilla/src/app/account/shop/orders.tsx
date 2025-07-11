'use client'

import { useState, Fragment } from 'react'
import useSWR from 'swr'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import type { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Pagination from 'react-bootstrap/Pagination'
import Alert from 'react-bootstrap/Alert'
import Placeholder from 'react-bootstrap/Placeholder'
import SelectBox from '@/components/forms/select-box'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface Order {
  id: string
  date: string
  status: 'In progress' | 'Delivered' | 'Canceled'
  products: Product[]
  delivery?: {
    date: string
    method: string
    address: string
  }
  payment?: {
    method: string
    tax: number
    shipping?: number
  }
}

const AccountOrders = () => {
  const { data, error, isLoading } = useSWR<Order[]>('/data/account/shop/orders.json', fetcher)
  const [status, setStatus] = useState<string>()
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()

  // Calculate order total
  const calculateOrderTotal = (order: Order) => {
    const productsTotal = order.products.reduce((sum, product) => {
      const quantity = product.quantity || 1
      return sum + product.price[0] * quantity
    }, 0)

    const tax = order.payment?.tax || 0
    const shipping = order.payment?.shipping || 0
    const total = productsTotal + tax + shipping

    return total
  }

  if (isLoading)
    return (
      <>
        <h1 className="h2 mb-md-4 pb-md-1 pb-lg-2">Orders</h1>
        <Table className="align-middle fs-sm text-nowrap">
          <thead>
            <tr>
              <th scope="col" className="py-3 ps-0">
                <span className="text-body fw-normal">
                  Order <span className="d-none d-md-inline">#</span>
                </span>
              </th>
              <th scope="col" className="py-3 d-none d-md-table-cell">
                <span className="text-body fw-normal">Order date</span>
              </th>
              <th scope="col" className="py-3 d-none d-md-table-cell">
                <span className="text-body fw-normal">Status</span>
              </th>
              <th scope="col" className="py-3 d-none d-md-table-cell">
                <span className="fw-normal text-body">Total</span>
              </th>
              <th scope="col" className="py-3">
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }, (_, index) => {
              const placeholderCount =
                index === 0 ? 3 : index === 1 ? 1 : index === 2 ? 2 : index === 3 ? 3 : index === 4 ? 1 : 2
              return (
                <tr key={index}>
                  <td className="py-3 ps-0">
                    <div style={{ width: 100 }}></div>
                    <Placeholder animation="glow">
                      <Placeholder xs={12} />
                      <br className="d-md-none" />
                      <Placeholder xs={12} className="d-md-none" />
                      <br className="d-md-none" />
                      <Placeholder xs={8} className="d-md-none" />
                    </Placeholder>
                  </td>
                  <td className="py-3 d-none d-md-table-cell">
                    <Placeholder animation="glow">
                      <Placeholder xs={12} />
                    </Placeholder>
                  </td>
                  <td className="py-3 d-none d-md-table-cell">
                    <Placeholder animation="glow">
                      <Placeholder xs={12} />
                    </Placeholder>
                  </td>
                  <td className="py-3 d-none d-md-table-cell">
                    <Placeholder animation="glow">
                      <Placeholder xs={12} />
                    </Placeholder>
                  </td>
                  <td className="py-3 pe-0">
                    <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 opacity-75 ms-n2 ms-sm-0">
                      {Array.from({ length: placeholderCount }, (_, i) => (
                        <Placeholder
                          key={i}
                          as="div"
                          animation="wave"
                          className="position-relative"
                          style={{ width: 64 }}
                        >
                          <Placeholder className="ratio ratio-1x1 rounded-2" />
                          <i className="ci-image position-absolute top-50 start-50 translate-middle fs-4 opacity-40" />
                        </Placeholder>
                      ))}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </>
    )

  if (error)
    return (
      <>
        <h1 className="h2 mb-md-4 pb-md-1 pb-lg-2">Orders</h1>
        <Alert variant="danger" className="d-inline-flex">
          <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
          <div>
            <span className="fw-semibold">Error loading orders:</span> {error.message}
          </div>
        </Alert>
      </>
    )

  return (
    <>
      <div className="d-flex justify-content-between align-items-center pb-3 pb-md-4 mb-md-1 mb-lg-2">
        <h1 className="h2 me-3 mb-0">Orders</h1>
        <SelectBox
          choices={[
            {
              value: 'In progress',
              label:
                '<div class="d-flex align-items-center text-nowrap"><span class="bg-info rounded-circle p-1 me-2"></span>In progress</div>',
            },
            {
              value: 'Delivered',
              label:
                '<div class="d-flex align-items-center text-nowrap"><span class="bg-success rounded-circle p-1 me-2"></span>Delivered</div>',
            },
            {
              value: 'Canceled',
              label:
                '<div class="d-flex align-items-center text-nowrap"><span class="bg-danger rounded-circle p-1 me-2"></span>Canceled</div>',
            },
          ]}
          value={status}
          onChange={(value) => setStatus(value as string)}
          placeholder="Select status"
          className="w-100 ms-auto"
          style={{ maxWidth: 230 }}
        />
      </div>
      <Table className="align-middle fs-sm text-nowrap">
        <thead>
          <tr>
            <th scope="col" className="py-3 ps-0">
              <span className="text-body fw-normal">
                Order <span className="d-none d-md-inline">#</span>
              </span>
            </th>
            <th scope="col" className="py-3 d-none d-md-table-cell">
              <span className="text-body fw-normal">Order date</span>
            </th>
            <th scope="col" className="py-3 d-none d-md-table-cell">
              <span className="text-body fw-normal">Status</span>
            </th>
            <th scope="col" className="py-3 d-none d-md-table-cell">
              <span className="fw-normal text-body">Total</span>
            </th>
            <th scope="col" className="py-3">
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody className="text-body-emphasis">
          {(data || []).map((order) => {
            const color = order.status === 'In progress' ? 'info' : order.status === 'Canceled' ? 'danger' : 'success'
            const total = calculateOrderTotal(order)
            return (
              <Fragment key={order.id}>
                <tr className={status !== undefined && status !== order.status ? 'd-none' : undefined}>
                  <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                    <div
                      className="d-inline-block animate-underline text-body-emphasis cursor-pointer py-2"
                      onClick={() => openOffcanvas(order.id)}
                      aria-label="Show order details"
                    >
                      <span className="animate-target">{order.id}</span>
                    </div>
                    <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                      <li>{order.date}</li>
                      <li className="d-flex align-items-center">
                        <span className={`bg-${color} rounded-circle p-1 me-2`}></span>
                        {order.status}
                      </li>
                      <li className="fw-medium text-body-emphasis">
                        ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </li>
                    </ul>
                  </td>
                  <td className="fw-medium py-3 d-none d-md-table-cell">{order.date}</td>
                  <td className="fw-medium py-3 d-none d-md-table-cell">
                    <span className="d-flex align-items-center">
                      <span className={`bg-${color} rounded-circle p-1 me-2`}></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="fw-medium py-3 d-none d-md-table-cell">
                    ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="py-3 pe-0">
                    <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                      {order.products.slice(0, 3).map(({ id, image }) => (
                        <span key={id} className="d-block w-100" style={{ maxWidth: 64 }}>
                          <Image src={image as string} width={128} height={128} alt="Thumbnail" />
                        </span>
                      ))}
                      {order.products.length > 3 && (
                        <span className="fw-medium me-1">+{order.products.length - 3}</span>
                      )}
                      <Button
                        variant="secondary"
                        className="btn-icon btn-ghost stretched-link border-0"
                        onClick={() => openOffcanvas(order.id)}
                        aria-label="Show order details"
                      >
                        <i className="ci-chevron-right fs-lg" />
                      </Button>
                    </span>
                  </td>
                </tr>

                {/* Order details offcanvas */}
                <Offcanvas
                  show={isOpen(order.id)}
                  onHide={() => closeOffcanvas(order.id)}
                  placement="end"
                  className="pb-sm-2 px-sm-2"
                  style={{ width: 500 }}
                  aria-labelledby={`label-${order.id}`}
                >
                  <Offcanvas.Header className="align-items-start py-3 pt-lg-4">
                    <div>
                      <h4 className="offcanvas-title mb-1" id="orderDetailsLabel">
                        Order # {order.id}
                      </h4>
                      <span className="d-flex align-items-center fs-sm fw-medium text-body-emphasis">
                        <span className={`bg-${color} rounded-circle p-1 me-2`}></span>
                        {order.status}
                      </span>
                    </div>
                    <CloseButton className="mt-0" onClick={() => closeOffcanvas(order.id)} />
                  </Offcanvas.Header>
                  <Offcanvas.Body className="d-flex flex-column gap-4 pt-2 pb-3">
                    <div className="d-flex flex-column gap-3">
                      {order.products.map((product) => (
                        <div key={product.id} className="d-flex align-products-center">
                          <Link href={product.href} className="flex-shrink-0" style={{ width: 110 }}>
                            <Image src={product.image as string} width={220} height={220} alt={product.title} />
                          </Link>
                          <div className="w-100 min-w-0 ps-2 ps-sm-3">
                            <h5 className="d-flex animate-underline mb-2">
                              <Link
                                href={product.href}
                                className="d-block fs-sm fw-medium text-truncate animate-target"
                              >
                                {product.title}
                              </Link>
                            </h5>
                            <div className="h6 mb-0">
                              $
                              {product.price[0].toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </div>
                            <div className="fs-xs pt-2">Qty: {product.quantity}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {order.status !== 'Canceled' && (
                      <div className="border-top pt-4">
                        {order.delivery && (
                          <>
                            <h6>Delivery</h6>
                            <ul className="list-unstyled fs-sm mb-4">
                              <li className="d-flex justify-content-between mb-1">
                                {order.status === 'In progress' ? 'Estimated delivery date' : 'Delivered on'}:
                                <span
                                  className="d-block w-100 text-body-emphasis fw-medium text-end ms-2"
                                  style={{ maxWidth: 190 }}
                                >
                                  {order.delivery.date}
                                </span>
                              </li>
                              <li className="d-flex justify-content-between mb-1">
                                Shipping method:
                                <span
                                  className="d-block w-100 text-body-emphasis fw-medium text-end ms-2"
                                  style={{ maxWidth: 190 }}
                                >
                                  {order.delivery.method}
                                </span>
                              </li>
                              <li className="d-flex justify-content-between">
                                Shipping address:
                                <span
                                  className="d-block w-100 text-body-emphasis fw-medium text-end ms-2"
                                  style={{ maxWidth: 190 }}
                                >
                                  {order.delivery.address}
                                </span>
                              </li>
                            </ul>
                          </>
                        )}
                        {order.payment && (
                          <>
                            <h6>Payment</h6>
                            <ul className="list-unstyled fs-sm m-0">
                              <li className="d-flex justify-content-between mb-1">
                                Payment method:
                                <span className="text-body-emphasis fw-medium text-end ms-2">Cash on delivery </span>
                              </li>
                              <li className="d-flex justify-content-between mb-1">
                                Tax collected:
                                <span className="text-body-emphasis fw-medium text-end ms-2">
                                  $
                                  {order.payment.tax.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </span>
                              </li>
                              {order.payment.shipping && (
                                <li className="d-flex justify-content-between">
                                  Shipping:
                                  <span className="text-body-emphasis fw-medium text-end ms-2">
                                    $
                                    {order.payment.shipping.toLocaleString(undefined, {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    })}
                                  </span>
                                </li>
                              )}
                            </ul>
                          </>
                        )}
                      </div>
                    )}
                    <div className="d-flex align-items-center justify-content-between fs-sm border-top pt-4">
                      Estimated total:
                      <span className="h5 text-end ms-2 mb-0">
                        ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  </Offcanvas.Body>
                  {order.status === 'In progress' && (
                    <Offcanvas.Header>
                      <Button variant="secondary" size="lg" className="w-100">
                        Change the delivery time
                      </Button>
                    </Offcanvas.Header>
                  )}
                </Offcanvas>
              </Fragment>
            )
          })}
        </tbody>
      </Table>
      <Pagination className="pt-3 pb-2 pb-sm-0 mt-2 mt-md-3" aria-label="Orders pagination">
        <Pagination.Item active aria-current="page">
          1
        </Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
      </Pagination>
    </>
  )
}

export default AccountOrders
