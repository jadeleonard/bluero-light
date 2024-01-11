import React from 'react'
import {Routes,Route} from 'react-router-dom'
import App from './pages/app'
import Tutorial from './pages/tutorial'
import Components from './pages/components'
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />

      <Route path='/tutorial' element={<Tutorial />} />
      <Route path='/components' element={<Components />} />
    </Routes>
  )
}

export default Router
