import React from 'react'

function Navbar() {
    return (
      <div className="container-fluid bg-dark">
          <ul className="d-flex justify-content-center px-0 py-4">
              <div className="mx-3"><a href="#" className="link-light">Inicio</a></div>
              <div className="mx-3"><a href="#" className="link-light">Productos</a></div>
              <div className="mx-3"><a href="#" className="link-light">Sobre Nosotros</a></div>
              <div className="mx-3"><a href="#" className="link-light">Contacto</a></div>
          </ul>
      </div>
    );
}

export default Navbar

