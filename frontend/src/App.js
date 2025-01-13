
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Container from './components/container';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />
  }
])
function App() {
  return (
    <div className="">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
