'use client'

import { useState, Fragment, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export interface BundleProduct {
  id: string
  image: [string, string]
  title: string
  href: string
  price: [number] | [number, number]
  badge?: [string, string]
  selected?: boolean
}

const ProductBundleSaleElectronics = ({ bundle }: { bundle: BundleProduct[] }) => {
  // Initialize state with the provided bundle products
  const [products, setProducts] = useState<BundleProduct[]>(bundle)
  const [total, setTotal] = useState<number>(0)

  // Calculate total price when products change
  useEffect(() => {
    const selectedTotal = products
      .filter((product) => product.selected)
      .reduce((sum, product) => sum + product.price[0], 0)

    setTotal(selectedTotal)
  }, [products])

  // Handle checkbox change
  const handleCheckboxChange = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === id ? { ...product, selected: !product.selected } : product))
    )
  }

  // Format price as currency
  const formatPrice = (price: number) => {
    return price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  return (
    <Container as="section" className="pb-5 mb-1 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
      <div className="bg-body-tertiary rounded-5 pt-5">
        <h2 className="h3 text-center pb-2 py-lg-3">Cheaper together</h2>
        <Row className="justify-content-center px-4 px-md-0">
          <Col md={10}>
            <SimpleBar data-simplebar-auto-hide="false">
              <div className="d-flex align-items-center justify-content-between pb-4 mb-2" style={{ minWidth: 840 }}>
                {products.map((product, index, arr) => (
                  <Fragment key={index}>
                    <div className="w-100" style={{ maxWidth: 306 }}>
                      <FormCheck className="position-relative p-0 m-0 mb-3">
                        <FormCheck.Input
                          className="position-absolute top-0 end-0 mt-3 me-3"
                          id={product.id}
                          checked={product.selected}
                          disabled={index === 0}
                          onChange={() => index !== 0 && handleCheckboxChange(product.id)}
                        />
                        <FormCheck.Label
                          htmlFor={product.id}
                          className="d-flex justify-content-center bg-body rounded opacity-100 p-3"
                        >
                          <span
                            className="ratio d-block"
                            style={
                              { maxWidth: 258, '--cz-aspect-ratio': 'calc(240 / 258 * 100%)' } as React.CSSProperties
                            }
                          >
                            <Image src={product.image[0]} width={516} height={480} alt={product.title} />
                          </span>
                        </FormCheck.Label>
                      </FormCheck>
                      <h3 className="mb-2">
                        <Link href={product.href} className="d-block fs-sm fw-medium animate-underline text-truncate">
                          <span className="animate-target">{product.title}</span>
                        </Link>
                      </h3>
                      <div className="d-flex align-items-center gap-2">
                        {product.badge && <Badge bg={product.badge[0]}>{product.badge[1]}</Badge>}
                        <span className="h6 mb-0">${formatPrice(product.price[0])}</span>
                        {product.price[1] !== undefined && (
                          <del className="text-body-tertiary fs-xs">${formatPrice(product.price[1])}</del>
                        )}
                      </div>
                    </div>
                    {index < arr.length - 1 && <div className="ci-plus fs-4 mt-n5 mx-3 mx-lg-4" />}
                  </Fragment>
                ))}
              </div>
            </SimpleBar>
          </Col>
        </Row>
        <hr className="mb-0" />
        <Row className="justify-content-center p-4 px-md-0">
          <Col md={10} className="d-md-flex align-items-center py-md-3">
            <div className="fs-sm me-3 mb-3 mb-md-0">Total for selected products</div>
            <div className="d-flex align-items-center ms-auto">
              <span className="h5 mb-0 me-4">${formatPrice(total)}</span>
              <Button className="ms-auto">Purchase together</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default ProductBundleSaleElectronics
