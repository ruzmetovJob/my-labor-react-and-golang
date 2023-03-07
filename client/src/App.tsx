import { useState } from 'react';
import CacheBuster from 'utils/CacheBuster';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MetronicStylePage from 'layouts/MetronicStylePage';
import { Ads, ErrorElement, Main, NotFound, OAuth, Out, Room, Services } from 'pages';
import { oauthLoader } from 'pages/OAuth';
import { EpsTopik } from 'pages/services/index';
import { RefreshModal } from 'components';



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
  const [confirm, setConfirm]:any = useState(null);
  return (
    <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload,text }:any) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            if(confirm===true) {
              refreshCacheAndReload();
            }
            return (<RefreshModal title={"Dasturning yangi "+text+" versiyasi ishga tushirildi, sizda faol holatda eski versiya ishlayapti. Shuni inobatga olib yangilashingizni tafsiya qilamiz"} disc={text} handle={s => setConfirm(s)}/>)
          }
          return (
            <RouterProvider router={router} />
          );
        }}
      </CacheBuster>
  )
}

export default App
