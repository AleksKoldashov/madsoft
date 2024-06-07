import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import App from './components/App';
import TestContent from './components/TestContent';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';


const router = createBrowserRouter([
  {
    element: <App/>,
    path: '/',
    errorElement: <ErrorPage/>,
    children: [
      {
        path:'/q',
        element: <TestContent/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
<React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
  
);

