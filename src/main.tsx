import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Ramais } from './pages/Ramais/index.tsx';
import { Inventario } from './pages/Inventario/index.tsx';
import { Chamados } from './pages/Chamados/index.tsx';
import { Dashboard } from './pages/Dashboard/index.tsx';
import { ControleMaquinas } from './pages/ControleMaquinas/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/ramais",
    element: <Ramais />,
  },
  {
    path: "/inventario",
    element: <Inventario />,
  },
  {
    path: "/controle-maquinas",
    element: <ControleMaquinas />,
  },
  {
    path: "/chamados",
    element: <Chamados />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
