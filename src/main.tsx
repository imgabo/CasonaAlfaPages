import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Index from "./Index";

import HeaderBar from "./componentes/Header";
import FooterComp from "./componentes/Footer";
import Equipo from "./Equipo";
import Proyecto from "./Proyecto";
import Contacto from "./Contacto";

const links = [
  { link: "./", label: "Inicio", links: [] },
  { link: "./about", label: "Nosotros", links: [] },
  { link: "/proyecto", label: "Proyecto", links: [] },
  { link: "/equipo", label: "Equipo", links: [] },
  { link: "/contacto", label: "Contacto", links: [] },
];
const linksFooter = [
  { link: "", label: "Inicio" },
  { link: "", label: "Inicios" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "equipo",
    element: <Equipo />,
  },

  {
    path: "proyecto",
    element: <Proyecto />,
  },
  {
    path: "contacto",
    element: <Contacto />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <header>
      <HeaderBar links={links} />
    </header>
    <div className="wrapper">
      <RouterProvider router={router} />
      <footer style={{ position: "relative", width: "100%", bottom: 0, zIndex: 1 }}>
        <FooterComp links={linksFooter} />
      </footer>
    </div>
    
    
  </React.StrictMode>
);
