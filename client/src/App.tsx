import { lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MetronicStylePage from 'layouts/MetronicStylePage';
import { Ads, ErrorElement, Main, NotFound, OAuth, Out, Room, Services } from 'pages';
import { oauthLoader } from 'pages/OAuth';
import { EpsTopik } from 'pages/services/index';
import CacheBuster from 'utils/CacheBuster';



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
    <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }:any) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            refreshCacheAndReload();
          }

          return (
            <RouterProvider router={router} />
          );
        }}
      </CacheBuster>
  )
}

export default App
