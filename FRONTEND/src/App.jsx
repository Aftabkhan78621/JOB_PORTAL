import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Browser from './components/Browser';
import JobDescription from './components/Cards/JobDescription';
import Profile from './components/Cards/Profile';
import Home from './components/Home';
import Job from "./components/Job";
//  routing will be added here later

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Job />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browser",
    element: <Browser />
  },
  {
    path: "/profile",
    element: <Profile />
  }
])









function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App;