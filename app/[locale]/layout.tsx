import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avoca Education',
  description: 'Lms app',
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const translate = await getMessages()

  return (
    <html lang={locale}>
       <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <NextIntlClientProvider messages={translate}>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Script
          type='text/javascript'
          src='../node_modules/tw-elements/dist/js/tw-elements.umd.min.js'
        ></Script>
      </body>
    </html>
  )
}
