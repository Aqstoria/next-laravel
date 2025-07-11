import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeaderIndex from '@/components/layout/header-index'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import LightDarkModeSection from './index-light-dark-mode-section'
import styles from './index.module.css'

const IndexPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Cartzilla Frontend</h1>
      <p>If you can see this, the basic Next.js setup is working!</p>
    </div>
  )
}

export default IndexPage
