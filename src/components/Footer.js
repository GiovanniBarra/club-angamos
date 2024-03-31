import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (

        <div style={{ padding: .6 + "%", backgroundColor: "#106c44" }}>
            <footer style={{ textAlign: 'center' }}>

                <p style={{ color: "yellow" }}>Siguenos en
                    <FontAwesomeIcon icon={faFacebook} style={{marginRight: 10 + "px", marginLeft: 10 + "px"}} />
                    <FontAwesomeIcon icon={faInstagram} style={{marginRight: 10 + "px"}}/>
                    <FontAwesomeIcon icon={faTwitter} style={{marginRight: 10 + "px"}}/>
                    <FontAwesomeIcon icon={faTiktok} style={{marginRight: 10 + "px"}}/>
                </p>

                <p style={{ color: "yellow" }}>
                    © Unión Angamos 2024 - Derechos Reservados
                </p>

            </footer>
        </div>
    )
}

export default Footer 