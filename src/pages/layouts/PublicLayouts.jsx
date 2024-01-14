import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

const PublicLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default PublicLayouts
