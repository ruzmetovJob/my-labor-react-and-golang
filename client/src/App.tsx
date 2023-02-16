import { lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import WindowPage from './layouts/WindowPage';
import { Ads, ErrorElement, Main, NotFound, OAuth, Out, Room, Services } from './pages';
import { oauthLoader } from './pages/OAuth';
import { EpsTopik } from './pages/services/index';


const NotFoundLazy = lazy(() => wait(1000).then(()=> import("./pages/NotFound")));


function wait(time: number){
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<WindowPage />} errorElement={<ErrorElement />} >
    <Route index element={<Main />} />
    <Route path='/login/oauth' element={<OAuth />} loader={oauthLoader} />
    <Route path='/login/out' element={<Out />} />
    <Route path='/room' element={<Room />} />
    <Route path='/services' element={<Services />} />
    <Route path='/services/test-2023' element={<EpsTopik />} />
    <Route path='/ads' element={<Ads />} />

    <Route path="*" element={<NotFoundLazy />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
