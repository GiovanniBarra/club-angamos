import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (

        <div style={{ padding: .6 + "%", backgroundColor: "#106c44"}}>
            <footer style={{textAlign: 'center'}}>

                <p style={{color: "yellow"}}>Siguenos en
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faTiktok} />
                </p>

                <p style={{color: "yellow"}}>
                © Unión Angamos 2024 - Derechos Reservados
                </p>

            </footer>
        </div>
    )
}

export default Footer 