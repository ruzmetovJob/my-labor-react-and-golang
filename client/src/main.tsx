import ReactDOM from 'react-dom/client'
import App from './App'
import "assets/css/metronic.css";
import './index.css'
import MyAppContextProvider from 'contexts/ThemeContext'
import { Provider } from 'react-redux';
import { store } from 'store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
  <Provider store={store}>
    <MyAppContextProvider>
      <App />
    </MyAppContextProvider>
    </Provider>
  </>,
)
