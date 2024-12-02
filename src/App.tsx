import './App.css'
import {
  RecoilRoot
} from 'recoil'
import { RouterProvider } from 'react-router-dom'
import router, { BaseRoutes } from './routes/BaseRoutes'
import { Routes,Route, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home'
import { Blog } from './pages/Blog';
import { Login } from './pages/Login';
import { Admin } from './pages/admin/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import { globalState } from './state/global/global.atom';
import { useRecoilState } from 'recoil';
import { NotFound } from './pages/NotFound';
import { AllBlogs } from './pages/AllBlogs';

function App() {

  const [global, setGlobal] = useRecoilState(globalState);

      const router = createBrowserRouter( 
          [
              {
                  index: true,
                  path:'/',
                  element: <Home />

              },
              {
                  path:'/blogs',
                  element: <AllBlogs />
              },
              {
                  path:'/blog/:id',
                  element: <Blog />
              },
              {
                  path:'/login',
                  element: <Login />
              },
              {
                  path:'/admin',
                  element: <ProtectedRoute isAuthenticated={global.token}></ProtectedRoute>,
                  children: [
                      {
                          index: true,
                          path: 'dashboard',
                          element: <Admin />
                      }
                  ]
              },
              {
                path: '/*',
                element: <NotFound />
              }
          ]
      )

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
