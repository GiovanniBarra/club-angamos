import React from 'react'
import { Link } from 'react-router-dom'
import logonavbar from "../img/logoangamos.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark border border-warning border-2"
            style={{ backgroundColor: "#106c44", padding: 1 + "%"}} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img
                    src={logonavbar}
                    class="fixed-top"
                    style={{ height: 120 + "px", marginTop: 8 + "px", marginLeft: 20 + "px"}}
                />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto"   style={{marginLeft: 6 + "%"}}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/carga-de-noticias">Cargar noticia</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tabla-captacion">Captación</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ingreso-egreso">Tesorería</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Programación
                            </a>
                            <ul class="dropdown-menu border-warning" style={{backgroundColor: "#106c44"}}>
                                <li><a class="dropdown-item" href="/programacion-sabado">Programación día sábado</a></li>
                                <li><a class="dropdown-item" href="/programacion-domingo">Programación día domingo</a></li>
                                <li><a class="dropdown-item" href="/programacion-femenina">Programación femenina</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Buscar" />
                        <button className="btn" style={{ backgroundColor: "#fded00", color: "#106c44" }} type="button">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar