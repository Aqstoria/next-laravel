import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderElectronics from '@/components/layout/header-electronics'
import Container from 'react-bootstrap/Container'
import BannersElectronics from '@/components/shop/banners-electronics'

export const metadata: Metadata = {
  title: 'Cartzilla | 404 Not Found',
}

const NotFound = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      <Container>
        {/* Error message */}
        <section className="text-center py-5 px-2 px-sm-0 my-2 my-md-3 my-lg-4 my-xl-5 mx-auto">
          <div className="pb-4 mb-3 mx-auto" style={{ maxWidth: 524 }}>
            <svg className="text-body-emphasis" viewBox="0 0 524 200" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.422852 158.785C0.422852 159.89 1.31828 160.785 2.42285 160.785H88.4885V189C88.4885 190.105 89.3839 191 90.4885 191H128.607C129.711 191 130.607 190.105 130.607 189V160.785H150.423C151.527 160.785 152.423 159.89 152.423 158.785V128.127C152.423 127.022 151.527 126.127 150.423 126.127H130.607V11C130.607 9.89543 129.711 9 128.607 9H76.23C75.546 9 74.9094 9.34959 74.5423 9.92679L0.735186 125.991C0.531195 126.312 0.422852 126.684 0.422852 127.064V158.785ZM89.3789 55.5664H89.0558C88.37 55.5664 87.732 55.9178 87.3654 56.4975L44.4037 124.435C44.2922 124.611 44.233 124.816 44.233 125.024C44.233 125.633 44.7267 126.127 45.3356 126.127H89.3789V55.5664Z"
                fillRule="evenodd"
                fill="currentColor"
              ></path>
              <path
                d="M371.423 158.785C371.423 159.89 372.318 160.785 373.423 160.785H459.488V189C459.488 190.105 460.384 191 461.488 191H499.607C500.711 191 501.607 190.105 501.607 189V160.785H521.423C522.527 160.785 523.423 159.89 523.423 158.785V128.127C523.423 127.022 522.527 126.127 521.423 126.127H501.607V11C501.607 9.89543 500.711 9 499.607 9H447.23C446.546 9 445.909 9.34959 445.542 9.92679L371.735 125.991C371.531 126.312 371.423 126.684 371.423 127.064V158.785ZM460.379 55.5664H460.056C459.37 55.5664 458.732 55.9178 458.365 56.4975L415.404 124.435C415.292 124.611 415.233 124.816 415.233 125.024C415.233 125.633 415.727 126.127 416.336 126.127H460.379V55.5664Z"
                fillRule="evenodd"
                fill="currentColor"
              ></path>
              <path
                className="d-none d-block-dark"
                d="M316.912 38.6614V175.465C316.912 184.041 309.953 191 301.376 191H224.836C216.26 191 209.3 184.041 209.3 175.465V38.6614C209.3 30.0853 216.26 23.1261 224.836 23.1261H228.67C233.184 23.1261 236.842 19.4674 236.842 14.9541V14.9541C236.842 11.6657 239.508 9 242.796 9H283.438C286.726 9 289.392 11.6657 289.392 14.9541V14.9541C289.392 19.4674 293.05 23.1261 297.564 23.1261H301.398C309.963 23.1261 316.912 30.0853 316.912 38.6614Z"
                fill="#333d4c"
              ></path>
              <path
                className="d-none d-block-dark"
                d="M215.812 176.426V37.711C215.812 33.2536 219.428 29.6374 223.885 29.6374H302.338C306.795 29.6374 310.411 33.2536 310.411 37.711V176.426C310.411 180.883 306.795 184.5 302.338 184.5H223.885C219.428 184.5 215.812 180.883 215.812 176.426Z"
                fill="#3f4958"
              ></path>
              <path
                className="d-none-dark"
                d="M316.912 38.6614V175.465C316.912 184.041 309.953 191 301.376 191H224.836C216.26 191 209.3 184.041 209.3 175.465V38.6614C209.3 30.0853 216.26 23.1261 224.836 23.1261H228.67C233.184 23.1261 236.842 19.4674 236.842 14.9541C236.842 11.6657 239.508 9 242.796 9H283.438C286.726 9 289.392 11.6657 289.392 14.9541C289.392 19.4674 293.05 23.1261 297.564 23.1261H301.398C309.963 23.1261 316.912 30.0853 316.912 38.6614Z"
                fill="url(#paint0_linear_2927_3489)"
              ></path>
              <path
                className="d-none-dark"
                d="M215.812 176.426V37.711C215.812 33.2536 219.428 29.6374 223.885 29.6374H302.338C306.795 29.6374 310.411 33.2536 310.411 37.711V176.426C310.411 180.883 306.795 184.5 302.338 184.5H223.885C219.428 184.5 215.812 180.883 215.812 176.426Z"
                fill="url(#paint1_linear_2927_3489)"
              ></path>
              <path
                className="text-primary"
                d="M306.522 162.66V175.388C306.522 178.261 304.184 180.599 301.311 180.599H224.912C222.039 180.599 219.701 178.261 219.701 175.388V162.66H306.522Z"
                fill="currentColor"
              ></path>
              <rect
                className="animate-blink text-primary"
                x="219.7"
                y="141"
                width="86.82"
                height="17.94"
                fill="currentColor"
              ></rect>
              <defs>
                <linearGradient
                  id="paint0_linear_2927_3489"
                  x1="209.3"
                  y1="100"
                  x2="316.912"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#accbee"></stop>
                  <stop offset="1" stopColor="#e7f0fd"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2927_3489"
                  x1="263.111"
                  y1="184.5"
                  x2="263.111"
                  y2="29.6374"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#d3e6f5"></stop>
                  <stop offset="1" stopColor="#f0f7fc"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1>Page not found</h1>
          <p className="pb-3">The page you are looking for was moved, removed or might never existed.</p>
          <Link href="/home" className="btn btn-lg btn-primary">
            Go to homepage
          </Link>
        </section>

        {/* Banners */}
        <BannersElectronics />
      </Container>
    </main>

    {/* Page footer */}
    <footer className="footer pt-5 pb-4 mt-2 mt-md-3 mt-lg-4 mt-xl-5">
      <div className="container text-center pb-sm-2 pb-md-3">
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
      </div>
    </footer>
  </>
)

export default NotFound
