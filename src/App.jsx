import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import VerifyEmail from './pages/VerifyEmail'
import VerifyLayout from './layouts/VerifyLayout'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<VerifyLayout/>}>
        <Route path="/" element={<VerifyEmail/>} />
      </Route>
    )
   )
   
  return (
    <RouterProvider router={router} />
  )
}

export default App