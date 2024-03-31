import React from 'react'
import { Link } from 'react-router-dom'

const FormProgramacionSabado = () => {
    return (

        <>
            <div className='container-fluid' style={{marginTop: 6 + "%", color: "white"}}>
                <div className="row justify-content-around" >

                    <div className='col-lg-3'>
                    </div>

                    <div className='col-lg-6'>
                        <form className='rounded border border-2 border-warning' style={{marginTop: 5 + "%", marginBottom: 5 + "%", backgroundColor: "#106c44"}}>
                            
                            <div style={{textAlign: "center", margin: 5 + "%"}}>
                            <h1>Programación dia sábado</h1>
                            </div>

                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Ingrese fecha</label>
                                <input type='date' className='form-control border-warning'></input>
                            </div>
                            
                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Ingrese rival</label>
                                <input type='text' className='form-control border-warning'></input>
                            </div>

                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Ingrese cancha</label>
                                <input type='text' className='form-control border-warning'></input>
                            </div>

                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Ingrese horario Segunda Infantil</label>
                                <input type='time' className='form-control border-warning'></input>
                            </div>

                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Ingrese horario Primera Infantil</label>
                                <input type='time' className='form-control border-warning'></input>
                            </div>

                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Ingrese horario Juveniles</label>
                                <input type='time' className='form-control border-warning'></input>
                            </div>

                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Ingrese horario Super Senior</label>
                                <input type='time' className='form-control border-warning'></input>
                            </div>

                            <div style={{margin: 5 + "%", textAlign:"center"}}>
                            <button className="btn" style={{ backgroundColor: "#fded00", color: "#106c44", paddingLeft: 5 + "%", paddingRight: 5 + "%"}} type="button">Cargar</button>
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
export default FormProgramacionSabado