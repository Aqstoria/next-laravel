import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { OffcanvasProvider } from '@/contexts/offcanvas-context'
import { ModalProvider } from '@/contexts/modal-context'
import { CartProvider } from '@/contexts/cart-context'
import { ProgressProvider } from '@/contexts/progress-context'
import { AuthProvider } from '@/contexts/auth-context'
import { OrderProvider } from '@/contexts/order-context'
import InitialDataProvider from '@/components/providers/initial-data-provider'
import HydrationProvider from '@/components/providers/hydration-provider'
import ScrollTopButton from '@/components/scroll-top-button'
import '@/icons/font/cartzillaIcons.css'
import '@/styles/theme.scss'

export const metadata: Metadata = {
  title: 'Cartzilla | Multipurpose E-Commerce React / Next.js Bootstrap Template',
  description: 'Cartzilla - Multipurpose E-Commerce React / Next.js Bootstrap Template',
  keywords: [
    'online shop',
    'e-commerce',
    'online store',
    'market',
    'multipurpose',
    'product landing',
    'cart',
    'checkout',
    'react',
    'nextjs',
    'bootstrap',
    'ui kit',
    'light and dark mode',
    'gallery',
    'slider',
    'mobile',
    'pwa',
  ],
  authors: [{ name: 'Createx Studio' }],
}

const inter = Inter({ subsets: ['latin'] })

const cartzillaIcons = localFont({
  src: '../icons/font/cartzillaIcons.woff2',
  preload: true,
  adjustFontFallback: false,
})

const isRTLEnabled = process.env.NEXT_PUBLIC_ENABLE_RTL === 'true'

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en" dir={isRTLEnabled ? 'rtl' : 'ltr'} suppressHydrationWarning>
    <body className={`${inter.className}`} suppressHydrationWarning>
      <ThemeProvider attribute="data-bs-theme" defaultTheme="light" disableTransitionOnChange>
        <ProgressProvider>
          <OffcanvasProvider>
            <ModalProvider>
              <AuthProvider>
                <InitialDataProvider>
                  <HydrationProvider>
                    <CartProvider>
                      <OrderProvider>
                        {children}
                      </OrderProvider>
                    </CartProvider>
                  </HydrationProvider>
                </InitialDataProvider>
              </AuthProvider>
            </ModalProvider>
          </OffcanvasProvider>
          <div className="floating-buttons position-fixed top-50 end-0 z-sticky me-3 me-xl-4 pb-4">
            <ScrollTopButton scrollOffset={500} />
          </div>
        </ProgressProvider>
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
