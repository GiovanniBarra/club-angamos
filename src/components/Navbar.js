import React from 'react'
import { Link } from 'react-router-dom'
import logonavbar from "../img/logoangamos.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark border border-warning border-2 fixed-top"
            style={{ backgroundColor: "#106c44" }} >
            <div className="container-fluid">
                <Link className="navbar-brand"><img
                    src={logonavbar}
                    class="img-fluid rounded-top"
                    style={{ height: 50 + "px" }}
                    to="#"
                />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Buscar" />
                        <button className="btn" style={{ backgroundColor: "#fded00", color: "#106c44"}} type="button">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar