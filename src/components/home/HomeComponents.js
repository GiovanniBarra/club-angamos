import React from 'react'
import { Link } from 'react-router-dom'
import imagen1 from '../../img/imagen1.jpeg'
import imagen2 from '../../img/imagen2.jpeg'
import imagen3 from '../../img/imagen3.jpeg'
import imagen4 from '../../img/imagen4.jpeg'

export const HomeComponents = () => {
  return (

    <>
      <div>
        <img src={imagen4}
          style={{ width: 100 + "%", opacity: .2, marginBlockEnd: 2 + "%" }} />
      </div>

    <div className='row justify-content-around col-lg-9'>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>


        <div className="container carousel-inner pb-4" style={{width: 100 + "%", height: 400 + "px"}}>
          <div className="carousel-item active">
            <img src={imagen1}
              style={{ width: 100 + "%", height: 100 + "%"}} />
            <div className="carousel-caption">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imagen2}
              style={{ width: 100 + "%" }} />
            <div className="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imagen3}
              style={{ width: 100 + "%" }} />
            <div className="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>
          </div>
        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      </div>

      <div>
        <h2 style={{ color: 'green', marginLeft: 5.5 + "%" }}>
          Noticias
        </h2>
      </div>

      <div className='container-fluid' style={{marginBottom: 20 + "px"}}>
        <div className="row justify-content-around" >

          <div className="card col-lg-3 col-sm-6 " style={{ width: 400 + "px"}}>
            <img className="card-img-top" src={imagen1} alt="Card image" style={{ width: 100 + "%" }} />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <Link to="#" className="btn btn-primary">See Profile</Link>
            </div>
          </div>

          <div className="card col-lg-3 col-sm-6" style={{ width: 400 + "px" }}>
            <img className="card-img-top" src={imagen1} alt="Card image" style={{ width: 100 + "%" }} />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <Link to="#" className="btn btn-primary">See Profile</Link>
            </div>
          </div>

          <div className="card col-lg-3 col-sm-6" style={{ width: 400 + "px" }}>
            <img className="card-img-top" src={imagen1} alt="Card image" style={{ width: 100 + "%" }} />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <Link to="#" className="btn btn-primary">See Profile</Link>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}
