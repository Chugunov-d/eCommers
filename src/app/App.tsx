import { Suspense } from 'react'
import {AppRouter} from './providers/index'

function App() {

  return (
    <>
      <Suspense fallback={<></>}>
        <AppRouter/>
      </Suspense>
    </>
  )
}

export default App
