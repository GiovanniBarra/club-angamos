import React from 'react'
import { Link } from 'react-router-dom'

const FormIngresoEgreso = () => {
    return (

        <>
            <div className='container-fluid' style={{ marginTop: 6 + "%", color: "white" }}>
                <div className="row justify-content-around" >

                    <div className='col-lg-3'>
                    </div>

                    <div className='col-lg-6'>
                        <form className='rounded border border-2 border-warning' style={{ marginTop: 5 + "%", marginBottom: 5 + "%", backgroundColor: "#106c44" }}>

                            <div style={{ textAlign: "center", margin: 5 + "%" }}>
                                <h1>Registro de ingreso o egreso</h1>
                            </div>

                            <div style={{ margin: 5 + "%" }}>
                                <label>Seleccione una opción</label>
                                <input style={{marginLeft:50 + "px"}} type="radio" value="male"/> Ingreso
                                    <input style={{marginLeft:25 + "px"}} type="radio" value="female"/> Egreso
                                        </div>

                                        <div style={{ margin: 5 + "%" }}>
                                            <label className="form-label">Ingrese monto</label>
                                            <input type='number' className='form-control border-warning'></input>
                                        </div>

                                        <div style={{ margin: 5 + "%" }}>
                                            <label className="form-label">Ingrese descripcion</label>
                                            <textarea type='text-area' className='form-control border-warning'></textarea>
                                        </div>

                                        <div style={{ margin: 5 + "%" }}>
                                            <label className="form-label">Ingrese foto del recibo o boleta</label>
                                            <input type='file' className='form-control border-warning'></input>
                                        </div>

                                        <div style={{ margin: 5 + "%", textAlign: "center" }}>
                                            <button className="btn" style={{ backgroundColor: "#fded00", color: "#106c44", paddingLeft: 5 + "%", paddingRight: 5 + "%" }} type="button">Guardar</button>
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
                        export default FormIngresoEgreso