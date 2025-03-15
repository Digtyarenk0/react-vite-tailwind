import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { ErrorBoundary } from '@/widgets/error-boundary'
import { APP_ROUTES } from '@/shared/constants/routes'
import MainPage from '@/pages/main/ui/page'

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <Routes>
          <Route path={APP_ROUTES.main} element={<MainPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
