// app/global-not-found.tsx
import NotFound from '@/app/(app)/not-found'
import { Provider } from '@/components/ui/provider'
import './(app)/globals.css'

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <NotFound />
        </Provider>
      </body>
    </html>
  )
}