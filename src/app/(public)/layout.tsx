import { Footer, Header, MobileMenu, Modal } from '@/components'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header />
      <MobileMenu />
      <main>{children}</main>
      <Modal />
      <Footer />
    </div>
  )
}
