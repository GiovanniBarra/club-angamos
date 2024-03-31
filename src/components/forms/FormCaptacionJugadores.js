import React from 'react'
import { Link } from 'react-router-dom'

const FormCaptacionJugadores = () => {
    return (

        <>
            <div className='container-fluid' style={{marginTop: 6 + "%", color: "white"}}>
                <div className="row justify-content-around" >

                    <div className='col-lg-3'>
                    </div>

                    <div className='col-lg-6'>
                        <form className='rounded border border-2 border-warning' style={{marginTop: 5 + "%", marginBottom: 5 + "%", backgroundColor: "#106c44"}}>
                            
                            <div style={{textAlign: "center", margin: 5 + "%"}}>
                            <h1>Ingresa tus datos para que te contactemos</h1>
                            </div>

                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Ingrese nombre completo</label>
                                <input type='text' className='form-control border-warning'></input>
                            </div>
                            
                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Ingresa tu numero telefonico</label>
                                <input type='text' className='form-control border-warning'></input>
                            </div>

                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Ingresa tu email</label>
                                <input type='email' className='form-control border-warning'></input>
                            </div>

                            <div style={{margin: 5 + "%", textAlign:"center"}}>
                            <button className="btn" style={{ backgroundColor: "#fded00", color: "#106c44", paddingLeft: 5 + "%", paddingRight: 5 + "%"}} type="button">Enviar</button>
                            </div>

                        </form>
                    </div>

                    <div className='col-lg-3'>
                    </div>

                </div>
            </div>
        </>

    )
}
export default FormCaptacionJugadores