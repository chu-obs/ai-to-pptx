// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'
import ReactHotToast from '@/libs/styles/react-hot-toast'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import HeaderIndex from '@components/layout/front-pages/HeaderIndex'

import { AuthProvider } from '@/context/AuthContext'
import { Toaster } from 'react-hot-toast'
import authConfig from '@configs/auth'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: authConfig.AppName,
  description: authConfig.AppDesc
}

const Layout = ({ children }: ChildrenType) => {
  // Vars
  const systemMode = 'light'

  return (
    <html id='__next'>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <AuthProvider>
          <Providers direction='ltr'>
            <BlankLayout systemMode={systemMode}>
              <IntersectionProvider>
                <HeaderIndex>{children}</HeaderIndex>
              </IntersectionProvider>
              <ReactHotToast>
                <Toaster position={'top-center'} toastOptions={{ className: 'react-hot-toast' }} />
              </ReactHotToast>
            </BlankLayout>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
}

export default Layout