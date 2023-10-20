import { Footer, Header } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const sfProDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/SFProDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFProDisplay-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SFProDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFProDisplay-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SFProDisplay-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFProDisplay-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },

  ],
})

export const metadata: Metadata = {
  title: 'PushkaMusic',
  description: 'PushkaMusic подборка песен',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={sfProDisplay.className}>
      <div className="wrapper">
        {/* <Header /> */}
        {children}
        {/* <Footer/> */}
        </div>
      </body>
    </html>
  )
}
