import { lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MetronicStylePage from './layouts/MetronicStylePage';
import { Ads, ErrorElement, Main, NotFound, OAuth, Out, Room, Services } from './pages';
import { oauthLoader } from './pages/OAuth';
import { EpsTopik } from './pages/services/index';

import "./assets/css/metronic.css";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MetronicStylePage />} errorElement={<ErrorElement />} >
    <Route index element={<Main />} />
    <Route path='/login/oauth' element={<OAuth />} loader={oauthLoader} />
    <Route path='/login/out' element={<Out />} />
    <Route path='/room' element={<Room />} />
    <Route path='/services' element={<Services />} />
    <Route path='/services/test-2023' element={<EpsTopik />} />
    <Route path='/ads' element={<Ads />} />
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
