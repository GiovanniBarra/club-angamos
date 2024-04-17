import React from 'react'
import { Link } from 'react-router-dom'

const FormInicioSesion = () => {
    return (

        <>

            <div style={{color: "#106c44", textAlign: 'center', marginTop: 2 + "%"}}>
                <h1>Unión Angamos</h1>
            </div>

            <div className='container-fluid' style={{ marginTop: 1 + "%", color: "white" }}>
                <div className="row justify-content-around" >

                    <div className='col-lg-4'>
                    </div>

                    <div className='col-lg-4'>
                        <form className='rounded border border-2 border-warning' style={{ marginTop: 5 + "%", marginBottom: 5 + "%", backgroundColor: "#106c44" }}>

                        <div style={{ textAlign: "center", margin: 5 + "%" }}>
                                <h3>Iniciar sesión en Unión Angamos</h3>
                            </div>

                                        <div style={{ margin: 5 + "%" }}>
                                            <label className="form-label">Ingrese tu Email</label>
                                            <input type='email' className='form-control border-warning'></input>
                                        </div>

                                        <div style={{ margin: 5 + "%" }}>
                                            <label className="form-label">Ingrese tu contraseña</label>
                                            <input type='password' className='form-control border-warning'></input>
                                        </div>

                                        <div style={{ margin: 5 + "%", textAlign: "center" }}>
                                            <button className="btn" style={{ backgroundColor: "#fded00", color: "#106c44", paddingLeft: 5 + "%", paddingRight: 5 + "%" }} type="button">Iniciar Sesión</button>
                                        </div>

                                    </form>
                                    </div>

                                    <div className='col-lg-4'>
                                    </div>

                                </div>
                            </div>
                        </>

                        )
}
                        export default FormInicioSesion