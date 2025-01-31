import { Suspense, lazy } from 'react'
import './App.css'
import Loading from './components/Loading/Loading'

const ImageList = lazy(() => {
  return import('../src/components/ImageList/ImageList')
})

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Loading/>}>
        <ImageList />
      </Suspense>
    </div>
  )
}

export default App
