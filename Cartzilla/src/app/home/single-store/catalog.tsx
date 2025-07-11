'use client'

import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface CatalogItemProps {
  id: string
  colorSwatch: string
  colorName: string
  preview: string
  thumb: string
  price: number
}

const SingleProductStoreCatalog = () => {
  const { data, error, isLoading } = useSWR('/data/single-store/catalog.json', fetcher)
  const { addToCart } = useCart('single-store')
  const { createToast, ToastRenderer } = useToast()
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    if (data && data.length > 0) {
      setSelected(data[0].colorName.toLowerCase())
    }
  }, [data])

  const selectedProduct = data?.find((item: CatalogItemProps) => item.id === selected)

  // Handle add to cart with toast
  const handleAddToCart = () => {
    addToCart({
      id: selectedProduct.id,
      href: '#',
      image: selectedProduct.thumb,
      title: selectedProduct.colorName,
      price: [selectedProduct.price],
      quantity: 1,
    })

    createToast(
      {
        action: 'Added to cart: ',
        product: `${selectedProduct.colorName} bottle`,
      },
      'cart'
    )
  }

  if (isLoading)
    return (
      <Container as="section" id="catalog" className="text-center pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
        <Spinner animation="border" variant="body-tertiary" role="status" style={{ width: '3rem', height: '3rem' }} />
        <div className="pt-2">Loading...</div>
      </Container>
    )

  if (error)
    return (
      <Container as="section" id="catalog" className="pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
        <Alert variant="danger" className="d-inline-flex">
          <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
          <div>
            <span className="fw-semibold">Error loading data:</span> {error.message}
          </div>
        </Alert>
      </Container>
    )

  return (
    <>
      <Container
        as="section"
        id="catalog"
        className="pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3"
        style={{ scrollMarginTop: 80 }}
      >
        <TabContainer defaultActiveKey={data[0].id} onSelect={(key) => setSelected(key)}>
          <Row className="align-items-end justify-content-center">
            <Col md={5} className="mb-4 mb-md-0">
              <h2 className="display-4 pb-1 pb-sm-2 pb-lg-3 pb-xl-4">Express yourself with a rainbow of colors</h2>
              <ListGroup variant="borderless" className="gap-2 pb-1 pb-sm-2 pb-lg-3 pb-xl-4 mb-3">
                {data.map(({ id, colorSwatch, colorName, price }: CatalogItemProps) => (
                  <ListGroupItem
                    key={id}
                    action
                    eventKey={colorName.toLowerCase()}
                    className="d-flex align-items-center fs-xl fw-normal px-sm-4"
                    style={{ '--cz-list-group-border-radius': '25px' } as React.CSSProperties}
                  >
                    <span
                      className="border border-2 rounded-circle me-3"
                      style={
                        {
                          width: 24,
                          height: 24,
                          '--cz-border-color': 'var(--cz-body-bg)',
                          background: `linear-gradient(${colorSwatch})`,
                        } as React.CSSProperties
                      }
                    ></span>
                    {colorName}
                    <span className="fw-semibold ps-3 ms-auto">
                      ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </ListGroupItem>
                ))}
              </ListGroup>
              <p className="fs-sm mb-sm-4">
                We believe in the quality and performance of our bottles, and we want you to feel the same. We offer a{' '}
                <span className="fw-semibold text-body-emphasis">30-day money-back guarantee.</span>
              </p>
              {selectedProduct && (
                <Button variant="dark" size="lg" className="rounded-pill" onClick={handleAddToCart}>
                  Add to cart
                </Button>
              )}
            </Col>
            <Col xs={10} sm={8} md={7} xl={6} className="offset-xl-1">
              <TabContent>
                {data.map(({ id, colorName, preview }: CatalogItemProps) => (
                  <TabPane key={id} transition={false} eventKey={id}>
                    <Image src={preview} width={1272} height={1124} alt={colorName} />
                  </TabPane>
                ))}
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </Container>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default SingleProductStoreCatalog
