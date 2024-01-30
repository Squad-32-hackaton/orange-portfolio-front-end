import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import MyPortfolio from './screens/MyPortfolio'
import { DefaultLayout } from './layouts/DefaultLayout'
import DetailProject from './screens/DetailProject'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-portfolio" element={<MyPortfolio />} />
        <Route path="/detail-project" element={<DetailProject />} />
      </Route>
    </Routes>
  )
}
