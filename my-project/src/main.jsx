import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './index.css'
import Hero from './Components/Hero.jsx';
import Navbar from './Components/Navbar.jsx';
import SymptomSelection from './Components/SymptomSelection.jsx';
import GenderSelection from './Components/GenderSelection.jsx';
import SymptomCheck from './Components/SymptomCheck.jsx';
import AgeInput from './Components/AgeInput.jsx';
import DiagnosisPage from './Components/DiagnosisPage.jsx';


const Layout = () => (
  <>
    <div className="min-h-screen relative">
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
    </div>
    <Navbar />
    <Outlet />
  </div>
  </>
)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/symptom-check",
        element: <SymptomCheck />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

// export default router;