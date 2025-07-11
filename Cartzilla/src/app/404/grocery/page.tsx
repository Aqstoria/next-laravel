import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeaderGrocery from '@/components/layout/header-grocery'
import Container from 'react-bootstrap/Container'
import Ratio from 'react-bootstrap/Ratio'

export const metadata: Metadata = {
  title: 'Cartzilla | Grocery Store - 404 Error',
}

const Grocery404ErrorPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderGrocery featuredCategories={false} />

    {/* Page content */}
    <main className="content-wrapper position-relative d-flex align-items-center justify-content-center overflow-hidden">
      <Container className="position-relative z-2 py-5">
        <div className="text-center px-2 px-sm-0 mx-auto" style={{ maxWidth: 636 }}>
          <div className="position-relative mb-4 mb-sm-5 mx-auto" style={{ maxWidth: 542 }}>
            <Ratio aspectRatio="1x1" className="position-absolute top-50 start-0 translate-middle-y">
              <Image
                priority
                src="/img/404/grocery.png"
                width={542}
                height={542}
                className="animate-spin"
                alt="Lemon"
              />
            </Ratio>
            <svg
              className="text-dark-emphasis"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 542 182"
              fill="currentColor"
            >
              <path d="M150 117h-19.8V2c0-1.1-.9-2-2-2H76c-.7 0-1.3.4-1.7.9L.7 116.9c-.2.3-.3.7-.3 1.1v31.7c0 1.1.9 2 2 2h85.8v28.2c0 1.1.9 2 2 2h38c1.1 0 2-.9 2-2v-28.2H150c1.1 0 2-.9 2-2V119c0-1.1-.9-2-2-2zm-60.9 0H45.2a1.11 1.11 0 0 1-1.1-1.1c0-.2.1-.4.2-.6l42.8-67.9c.4-.6 1-.9 1.7-.9h.3V117zm450.5 0h-19.8V2c0-1.1-.9-2-2-2h-52.2c-.7 0-1.3.4-1.7.9l-73.6 115.9c-.2.3-.3.7-.3 1.1v31.7c0 1.1.9 2 2 2h85.8v28.2c0 1.1.9 2 2 2h38c1.1 0 2-.9 2-2v-28.2h19.8c1.1 0 2-.9 2-2V119c0-1.1-.9-2-2-2zm-104.8 0a1.11 1.11 0 0 1-1.1-1.1c0-.2.1-.4.2-.6l42.8-67.9c.4-.6 1-.9 1.7-.9h.3V117h-43.9z" />
            </svg>
          </div>
          <div className="position-relative z-2">
            <h1 className="h3 pt-4">Whoops! That page is missing...</h1>
            <p className="pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-5">
              The page you are looking for was moved, removed or might never existed.
            </p>
            <Link href="/home/grocery" className="btn btn-lg btn-outline-dark rounded-pill">
              Go to homepage
            </Link>
          </div>
        </div>
      </Container>
      <Image
        priority
        src="/img/404/grocery-bg-1.png"
        className="animate-up-down position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        width={3840}
        height={2160}
        alt="Background image"
      />
      <Image
        priority
        src="/img/404/grocery-bg-2.png"
        className="animate-down-up position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        width={3840}
        height={2160}
        alt="Background image"
      />
    </main>

    {/* Page footer */}
    <footer className="footer pb-4">
      <Container className="text-center pb-sm-2 pb-md-3">
        <p className="fs-sm mb-0">
          &copy; All rights reserved. Made by{' '}
          <span className="animate-underline">
            <a
              className="animate-target text-dark-emphasis fw-medium text-decoration-none"
              href="https://createx.studio/"
              target="_blank"
              rel="noreferrer"
            >
              Createx Studio
            </a>
          </span>
        </p>
      </Container>
    </footer>
  </>
)

export default Grocery404ErrorPage
