import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/logo'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Button from 'react-bootstrap/Button'
import LoginForm from '@/components/forms/login-form'

export const metadata: Metadata = {
  title: 'Cartzilla | Account - Sign In',
}

const SignInPage = () => (
  <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: 1920 }}>
    <div className="d-lg-flex">
      <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: 416 }}>
        {/* Header / Logo */}
        <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
          <Logo className="pt-0">Cartzilla</Logo>
        </header>

        {/* Title + text */}
        <h1 className="h2 mt-auto">Welcome back</h1>
        <Nav className="fs-sm mb-4">
          Don&apos;t have an account?{' '}
          <NavLink as={Link} href="/account/signup" className="text-decoration-underline p-0 ms-2">
            Create an account
          </NavLink>
        </Nav>

        {/* Login form */}
        <LoginForm />

        {/* Divider */}
        <div className="d-flex align-items-center my-4">
          <hr className="w-100 m-0" />
          <span className="text-body-emphasis fw-medium text-nowrap mx-4">or continue with</span>
          <hr className="w-100 m-0" />
        </div>

        {/* Social login buttons */}
        <div className="d-flex flex-column flex-sm-row gap-3 pb-4 mb-3 mb-lg-4">
          {[
            { icon: 'ci-google', label: 'Google', href: '#' },
            { icon: 'ci-facebook', label: 'Facebook', href: '#' },
            { icon: 'ci-apple', label: 'Apple', href: '#' },
          ].map(({ icon, label, href }, index) => (
            <Button key={index} href={href} variant="outline-secondary" size="lg" className="w-100 px-2">
              <i className={`${icon} ms-1 me-1`} /> {label}
            </Button>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-auto">
          <Nav className="mb-4">
            <NavLink as={Link} href="/help" className="text-decoration-underline p-0">
              Need help?
            </NavLink>
          </Nav>
          <p className="fs-xs mb-0">
            &copy; All rights reserved. Made by{' '}
            <span className="animate-underline">
              <a
                className="animate-target text-dark-emphasis text-decoration-none"
                href="https://createx.studio/"
                target="_blank"
                rel="noreferrer"
              >
                Createx Studio
              </a>
            </span>
          </p>
        </footer>
      </div>

      {/* Cover image visible on screens > 992px wide (lg breakpoint) */}
      <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{ maxWidth: 1034 }}>
        <div className="d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden">
          <span
            className="position-absolute top-0 start-0 w-100 h-100 d-none-dark"
            style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }}
          />
          <span
            className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark"
            style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }}
          />
          <Image
            priority
            src="/img/account/cover.png"
            width={2068}
            height={2064}
            className="position-relative z-2"
            alt="Girl"
          />
        </div>
      </div>
    </div>
  </main>
)

export default SignInPage
