import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './store/AuthContextProvider';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import ReduxStore from './reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ReduxStore}>
  <AuthContextProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
  </Provider>
);
