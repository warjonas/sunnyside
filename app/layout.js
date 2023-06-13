import Navbar from '@/components/Navbar'
import './globals.css'

import Footer from '@/components/Footer'



export const metadata = {
  title: 'Sunnyside',
  description: 'A full-service creative agency that specializes in helping brands grow fast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
