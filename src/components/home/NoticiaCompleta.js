import React from 'react'
import imagen4 from '../../img/imagen4.jpeg'
import imagen5 from '../../img/logoangamos.png'

const NoticiaCompleta = () => {
    return (
        <>

            <div className='container-fluid'>
                <div style={{ marginTop: 6 + "%", color: 'white', paddingTop: 1 + "%" }}>
                    <p>13 de marzo 2024</p>
                </div>

                <div>
                    <h1 style={{ color: 'white' }}>"Ganamos el super clasico"</h1>
                </div>
            </div>

            <div className='container-fluid' style={{marginTop: 2 + "%"}}>
                <div className="row justify-content-around" >

                    <div className='col-lg-1'></div>

                    <div className='col-lg-10'>
                        <img src={imagen4}
                            style={{ width: 100 + "%"}} />
                    </div>

                    <div className='col-lg-1'></div>

                </div>
            </div>



            <div className='container-fluid' style={{marginTop: 6 + "%"}}>
                <div className="row justify-content-around" >

                    <div className='col-lg-9'>
                        <h2 style={{ color: 'white' }}>
                            4 - 1 Fue el resultado final en Serie honor!!!
                        </h2>
                        <p style={{ color: 'white' }}>
                            En un disputado encuentro llevado a cabo en la cancha mario osben con un marco de 1000 espectadores nuestra serie de honor se impuso por 4-1 al nuestro archienemigo chiguayante sur
                        </p>
                    </div>

                    <div className='col-lg-3'>
                    <img src={imagen5}
                            style={{ width: 80 + "%"}}/>
                    </div>

                </div>
            </div>

        </>
    )
}

export default NoticiaCompleta