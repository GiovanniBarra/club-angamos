import React from 'react'
import { Link } from 'react-router-dom'
import imagen1 from '../../img/imagen1.jpeg'
import imagen2 from '../../img/imagen2.jpeg'
import imagen3 from '../../img/imagen3.jpeg'
import imagen4 from '../../img/imagen4.jpeg'
import imagen5 from '../../img/logoangamos.png'
import { findAllByPlaceholderText } from '@testing-library/react'

const imgCarousel = {
  height: "400px",
  width: "600px",
  objectFit: "contain"
}

const HomeComponents = () => {
  return (

    <>
      {/* Aqui inicia la imagen principal*/}
      <div>
        <img src={imagen4}
          style={{ width: 100 + "%", opacity: .2 }} />
      </div>
      {/* Aqui termina la imagen principal */}


      <h2 style={{ marginTop: 6 + "%", marginLeft: 1 + "%", color: 'white' }}>Nuestros Dirigentes</h2>


      {/* Aqui comienza el container de la directiva y los logos*/}
      <div className='container-fluid'>
        <div className="row justify-content-around" >

          {/* Aqui comienza el carrusel de la directiva (carrusel 1) */}
          <div id="carrusel1" className="carousel slide col-lg-8" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carrusel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carrusel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carrusel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={imagen1} className="d-block w-100" style={imgCarousel} />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className='text-white'>
                    DESCRIPCION DE LA FOTOGRAFIA
                  </h2>
                </div>
              </div>
              <div className="carousel-item">
                <img src={imagen2} className="d-block w-100" style={imgCarousel} />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className='text-white'>
                    DESCRIPCION DE LA FOTOGRAFIA
                  </h2>
                </div>
              </div>
              <div className="carousel-item">
                <img src={imagen3} className="d-block w-100" style={imgCarousel} />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className='text-white'>
                    DESCRIPCION DE LA FOTOGRAFIA
                  </h2>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carrusel1" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carrusel1" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* Aqui termina el carrusel de la directiva (carrusel 1) */}

          {/* Aqui comienza el carrusel de los logos (carrusel 2)*/}
          <div id="carrusel2" className="carousel slide col-lg-4" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carrusel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carrusel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carrusel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={imagen5} className="d-block w-100" style={imgCarousel} />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className='text-white'>
                    DESCRIPCION DE LA FOTOGRAFIA
                  </h2>
                </div>
              </div>
              <div className="carousel-item">
                <img src={imagen2} className="d-block w-100" style={imgCarousel} />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className='text-white'>
                    DESCRIPCION DE LA FOTOGRAFIA
                  </h2>
                </div>
              </div>
              <div className="carousel-item">
                <img src={imagen3} className="d-block w-100" style={imgCarousel} />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className='text-white'>
                    DESCRIPCION DE LA FOTOGRAFIA
                  </h2>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carrusel2" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carrusel2" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* Aqui termina el carrusel de los logos (carrusel 2)*/}

        </div>
      </div>
      {/* Aqui termina el container de la directiva y los logos*/}



      {/* Aqui comienza el container de las programaciones */}
      <div className='container-fluid' style={{ marginTop: 6 + "%" }}>
        <div className="row justify-content-around" >
          {/* Aqui comienza la programacion del dia sabado */}
          <div className='rounded col-lg-4'>
            <ul class="list-group list-group-flush rounded">
              <li class="list-group-item" style={{ backgroundColor: "#fded00" }}>
                <p style={{ color: "#106c44", textAlign: 'center' }}><strong>PROGRAMACIÓN DÍA DOMINGO</strong></p>
                <p style={{ color: "#106c44", textAlign: 'center' }}><strong>13 de abril 2024</strong></p>
                <p style={{ color: "#106c44", textAlign: 'center' }}><strong>Rival: Carrera</strong></p>
                <p style={{ color: "#106c44", textAlign: 'center' }}><strong>Cancha: Mario Osben</strong></p>
              </li>
              <li class="list-group-item" style={{ backgroundColor: "#106c44", color: "#fded00" }}>Segunda Infantil <p>13:00 hrs.</p></li>
              <li class="list-group-item" style={{ backgroundColor: "#106c44", color: "#fded00" }}>Primera Infantil<p>13:00 hrs.</p></li>
              <li class="list-group-item" style={{ backgroundColor: "#106c44", color: "#fded00" }}>Juveniles<p>13:00 hrs.</p></li>
              <li class="list-group-item" style={{ backgroundColor: "#106c44", color: "#fded00" }}>Super Senior<p>13:00 hrs.</p></li>
            </ul>
          </div>
          {/* Aqui termina la programacion del dia sabado */}

          {/* Aqui comienza la programacion del dia domingo */}
          <div className='rounded col-lg-4'>
            <ul class="list-group list-group-flush rounded">
              <li class="list-group-item" style={{ backgroundColor: "#fded00" }}>
                <p style={{ color: "#106c44", textAlign: 'center' }}><strong>PROGRAMACIÓN DÍA DOMINGO</strong></p>
                <p style={{ color: "#106c44", textAlign: 'center' }}><strong>13 de abril 2024</strong></p>
                <p style={{ color: "#106c44", textAlign: 'center' }}><strong>Rival: Carrera</strong></p>
                <p style={{ color: "#106c44", textAlign: 'center' }}><strong>Cancha: Mario Osben</strong></p>
              </li>
              <li class="list-group-item" style={{ backgroundColor: "#106c44", color: "#fded00" }}>Segunda Infantil <p>13:00 hrs.</p></li>
              <li class="list-group-item" style={{ backgroundColor: "#fded00", color: "#106c44" }}>Primera Infantil<p>13:00 hrs.</p></li>
              <li class="list-group-item" style={{ backgroundColor: "#106c44", color: "#fded00" }}>Juveniles<p>13:00 hrs.</p></li>
              <li class="list-group-item" style={{ backgroundColor: "#fded00", color: "#106c44" }}>Super Senior<p>13:00 hrs.</p></li>
            </ul>
          </div>
          {/* Aqui termina la programacion del dia domingo */}

          {/* Aqui empieza la programacion de la rama femenina */}
          <div className='col-lg-4'>
            <ul class="list-group list-group-flush rounded">
              <li class="list-group-item border border-warning" style={{ backgroundColor: "#106c44" }}>
                <p className='border border-warning' style={{ color: "#fded00", textAlign: 'center' }}><strong>PROGRAMACIÓN DÍA DOMINGO</strong></p>
                <p className='border border-warning' style={{ color: "#fded00", textAlign: 'center' }}><strong>13 de abril 2024</strong></p>
                <p className='border border-warning' style={{ color: "#fded00", textAlign: 'center' }}><strong>Rival: Carrera</strong></p>
                <p className='border border-warning' style={{ color: "#fded00", textAlign: 'center' }}><strong>Cancha: Mario Osben</strong></p>
              </li>
              <li class="list-group-item border border-warning" style={{ backgroundColor: "#106c44", color: "#fded00" }}>Segunda Infantil<p>13:00 hrs.</p></li>
              <li class="list-group-item border border-warning" style={{ backgroundColor: "#106c44", color: "#fded00" }}>Primera Infantil<p>13:00 hrs.</p></li>
              <li class="list-group-item border border-warning" style={{ backgroundColor: "#106c44", color: "#fded00" }}>Juveniles<p>13:00 hrs.</p></li>
              <li class="list-group-item border border-warning" style={{ backgroundColor: "#106c44", color: "#fded00" }}>Super Senior<p>13:00 hrs.</p></li>
            </ul>
          </div>
          {/* Aqui termina la programacion de la rama femenina */}

        </div>
      </div>
      {/* Aqui termina el container de las programaciones */}


      <div style={{ textAlign: 'center' }}>
        <h2 style={{ marginTop: 6 + "%", marginLeft: 1 + "%", color: 'white' }}>Nuestras Series</h2>
      </div>

      {/* Aqui comienza el carrusel de las fotos de cada serie (carrusel 3)*/}
      <div id="carrusel3" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carrusel3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carrusel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carrusel3" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagen1} className="d-block w-100" style={imgCarousel} />
            <div className="carousel-caption d-none d-md-block">
              <h2 className='text-white'>
                DESCRIPCION DE LA FOTOGRAFIA
              </h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imagen2} className="d-block w-100" style={imgCarousel} />
            <div className="carousel-caption d-none d-md-block">
              <h2 className='text-white'>
                DESCRIPCION DE LA FOTOGRAFIA
              </h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imagen3} className="d-block w-100" style={imgCarousel} />
            <div className="carousel-caption d-none d-md-block">
              <h2 className='text-white'>
                DESCRIPCION DE LA FOTOGRAFIA
              </h2>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carrusel3" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carrusel3" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Aqui termina el carrusel de las fotos de cada serie (carrusel 3)*/}



      <h2 style={{ marginTop: 6 + "%", marginLeft: 1 + "%", color: 'white' }}>Noticias</h2>

      {/* Aqui comienza el container de las noticias */}
      <div className='container-fluid' style={{ marginBottom: 20 + "px" }}>
        <div className="row justify-content-around" >

          {/* Aqui comienzan las card */}
          <div className="card col-lg-3 col-sm-6 " style={{ width: 400 + "px", backgroundColor: "#106c44" }}>
            <img className="card-img mt-3" src={imagen1} style={{ width: 100 + "%" }} />
            <div className="card-body">
              <h4 className="card-title" style={{color: "#fded00"}}>John Doe</h4>
              <p className="card-text" style={{color: "#fded00"}}>Some example text some example text. John Doe is an architect and engineer</p>
              <Link to="#" className="btn" style={{ backgroundColor: "#fded00", color: "#106c44" }}>See Profile</Link>
            </div>
          </div>

          <div className="card col-lg-3 col-sm-6" style={{ width: 400 + "px", backgroundColor: "#106c44" }}>
            <img className="card-img mt-3" src={imagen3} style={{ width: 100 + "%" }} />
            <div className="card-body">
              <h4 className="card-title" style={{color: 'white'}}>John Doe</h4>
              <p className="card-text" style={{color: 'white'}}>Some example text some example text. John Doe is an architect and engineer</p>
              <Link to="#" className="btn" style={{ backgroundColor: "#fded00", color: "#106c44"}}>See Profile</Link>
            </div>
          </div>

          <div className="card col-lg-3 col-sm-6" style={{ width: 400 + "px", backgroundColor: "#106c44" }}>
            <img className="card-img mt-3" src={imagen1} style={{ width: 100 + "%" }} />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <Link to="#" className="btn" style={{ backgroundColor: "#fded00" }}>See Profile</Link>
            </div>
          </div>
          {/* Aqui terminan las card */}

        </div>
      </div>
      {/* Aqui termina el container de las noticias */}



    </>
  )
}

export default HomeComponents 
