import React from 'react'
import { Product, ProductService } from '@/services/products'
import { useCart } from '@/contexts/cart-context'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
  showAddToCart?: boolean
  className?: string
}

export default function ProductCard({ product, showAddToCart = true, className = '' }: ProductCardProps) {
  const { addToCart } = useCart('electronics')

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    addToCart({
      id: product.id.toString(),
      image: ProductService.getProductImage(product),
      title: product.name,
      href: ProductService.getProductUrl(product),
      price: [ProductService.getProductPrice(product), ProductService.getProductOriginalPrice(product)],
      quantity: 1,
    })
  }

  return (
    <Card className={`h-100 product-card ${className}`}>
      <Link href={ProductService.getProductUrl(product)} className="text-decoration-none">
        <div className="position-relative">
          <Image
            src={ProductService.getProductImage(product)}
            alt={product.name}
            width={300}
            height={300}
            className="card-img-top"
            style={{ objectFit: 'cover', height: '200px' }}
          />
          
          {/* Sale Badge */}
          {ProductService.isProductOnSale(product) && (
            <Badge 
              bg="danger" 
              className="position-absolute top-0 start-0 m-2"
            >
              -{ProductService.getProductDiscountPercentage(product)}%
            </Badge>
          )}
          
          {/* Out of Stock Badge */}
          {!ProductService.canAddToCart(product) && (
            <Badge 
              bg="secondary" 
              className="position-absolute top-0 end-0 m-2"
            >
              Out of Stock
            </Badge>
          )}
          
          {/* Featured Badge */}
          {product.is_featured && (
            <Badge 
              bg="primary" 
              className="position-absolute bottom-0 start-0 m-2"
            >
              Featured
            </Badge>
          )}
        </div>
      </Link>
      
      <Card.Body className="d-flex flex-column">
        <Link href={ProductService.getProductUrl(product)} className="text-decoration-none">
          <Card.Title className="h6 mb-2 text-dark">{product.name}</Card.Title>
        </Link>
        
        {/* Brand */}
        {product.brand && (
          <small className="text-muted mb-2">
            Brand: {product.brand.name}
          </small>
        )}
        
        {/* Price */}
        <div className="mb-2">
          {ProductService.isProductOnSale(product) ? (
            <div>
              <span className="text-danger fw-bold">
                {ProductService.formatProductPrice(ProductService.getProductPrice(product))}
              </span>
              <span className="text-muted text-decoration-line-through ms-2">
                {ProductService.formatProductPrice(ProductService.getProductOriginalPrice(product))}
              </span>
            </div>
          ) : (
            <span className="fw-bold">
              {ProductService.formatProductPrice(ProductService.getProductPrice(product))}
            </span>
          )}
        </div>
        
        {/* Stock Status */}
        <small className="text-muted mb-2">
          {ProductService.getProductStockStatus(product)}
        </small>
        
        {/* Add to Cart Button */}
        {showAddToCart && (
          <div className="mt-auto">
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddToCart}
              disabled={!ProductService.canAddToCart(product)}
              className="w-100"
            >
              Add to Cart
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  )
} 