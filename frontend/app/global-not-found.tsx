// app/global-not-found.tsx
'use client'
import NotFound from '@/app/[locale]/not-found'
import { Provider } from '@/components/ui/provider'
import { NextIntlClientProvider } from 'next-intl'
import messages from '@/messages/en.json'
import './[locale]/globals.css'

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale="en" messages={messages}>
          <Provider>
            <NotFound />
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}