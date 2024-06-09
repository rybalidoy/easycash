import './bootstrap';
import  React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './app';
import { Toaster } from './lib/components/ui/toaster';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MyLoans from './pages/MyLoans';
import MyProfile from './pages/MyProfile';
import MyDashboard from './pages/MyDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MyDashboard />
      },
      {
        path: '/my-loans',
        element: <MyLoans />
      },
      {
        path: '/my-profile',
        element: <MyProfile />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <RouterProvider router={router}/>
        <Toaster />
    </React.StrictMode>
  );