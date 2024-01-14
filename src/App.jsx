import { Route, Routes } from 'react-router-dom'
import PublicLayouts from './pages/layouts/PublicLayouts'
import Home from './pages/public/Home'

function App() {
  return (
    <>
      <Routes>
        {/* public  */}
        <Route path="/" element={<PublicLayouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
