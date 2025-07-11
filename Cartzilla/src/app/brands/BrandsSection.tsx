'use client';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { useBrands } from '@/contexts/BrandContext';

const BrandsSection = () => {
  const { brands } = useBrands(); // ✅ Destructure brands from context

  return (
    <Container as="section" className="pt-4 pt-md-5 pb-5 mt-sm-2 mb-2 mb-sm-3 mb-md-4 mb-lg-5">
      <Row xs={2} sm={3} md={4} lg={6} className="g-3 g-md-4 g-lg-3 g-xl-4">
        {brands.slice(0, 5).map((brand, index) => (
          <Col key={index}>
            <Link
              // href={`/shop/brand/${brand.slug}`}
               href={`/brands/${brand.slug}`}
              className="btn btn-outline-secondary w-100 rounded-4 p-3"
            >
              <Image
                src={brand.logo_with_sizes?.thumb || brand.logo}
                width={162}
                height={79}
                alt={brand.name}
                className="mx-auto"
              />
            </Link>
            <h6 className='mt-3 text-center'>{brand.name}</h6>
          </Col>
        ))}

        <Col>
          <Link
            href="/brands"
            className="btn btn-outline-secondary w-100 h-80 rounded-4  p-3 d-flex align-items-center justify-content-center"
          >
            All brands
              
            <i className="ci-plus-circle fs-base ms-2" />
          </Link>
         
        </Col>
      </Row>
    </Container>
  );
};

export default BrandsSection;
