import React from 'react'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Neumaticos Sobre Ruedas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to='/'>Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Quienes Somos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Me Interesa
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Contacto</a></li>
            <li><a className="dropdown-item" href="#">Productos</a></li>
          </ul>
        </li>
      </ul>
      <button id="mostrar-carrito" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Carrito
    </button>
    </div>
  </div>
</nav>

        </>
    )
}

export default Navbar
