import React from 'react'
import { Link } from 'react-router-dom'

const FormNoticias = () => {
    return (

        <>
            <div className='container-fluid' style={{marginTop: 6 + "%", color: "white"}}>
                <div className="row justify-content-around" >

                    <div className='col-lg-3'>
                    </div>

                    <div className='col-lg-6'>
                        <form className='rounded border border-2 border-warning' style={{marginTop: 5 + "%", marginBottom: 5 + "%", backgroundColor: "#106c44"}}>
                            
                            <div style={{textAlign: "center", margin: 5 + "%"}}>
                            <h1>Carga de noticias</h1>
                            </div>

                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Ingrese titular de la noticia</label>
                                <input type='text' className='form-control border-warning'></input>
                            </div>
                            
                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Seleccione la imagen principal de la noticia</label>
                                <input type='file' className='form-control border-warning'></input>
                            </div>

                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Escriba el cuerpo de la noticia</label>
                                <textarea type='text-area' className='form-control border-warning'></textarea>
                            </div>

                            <div style={{margin: 5 + "%"}}>
                                <label className="form-label">Seleccione las imagenes para la galeria</label>
                                <input multiple type='file' className='form-control border-warning'></input>
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
export default FormNoticias