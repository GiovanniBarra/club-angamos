import React from 'react'

const IngresosEgresos = () => {
    return (
        <>

            <div className='container-fluid'>
                <div className="row justify-content-around">

                    <div className='col-lg-1'></div>

                    <div className='col-lg-10 mt-4'>

                    <div style={{textAlign:'center', marginBottom: 20 + "px"}}>
                    <button className="btn btn-success" style={{marginRight: 20 + "px"}} type="button">Registrar monto</button>
                    <button className="btn btn-danger" type="button">Eliminar monto</button>
                    </div>

                        <table className="table table-success table-borderer table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Ingreso o Egreso</th>
                                    <th scope="col">Monto $</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>ingreso</td>
                                    <td>10000</td>
                                    <td>
                                        <button className='btn btn-success'>Ver</button>
                                        <button className='btn btn-success'>Imprimir</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className='col-lg-1'></div>



                    <div className='container-fluid'>
                        <div className="row justify-content-around">

                            <div className='col-lg-5'></div>

                            <div className='col-lg-2'>
                                <table className="table table-success table-borderer table-responsive">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Total:</th>
                                            <td>10000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className='col-lg-5'></div>
                            
                        </div>
                    </div>




                </div>
            </div>

        </>
    )
}

export default IngresosEgresos