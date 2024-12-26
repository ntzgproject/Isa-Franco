import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
function Footer () {
  return (
    <>
      <section id='footer-container'>

      <div className='img-container'>
      <img src="/logos/Isa Franco Logo.png" alt="logo-isafranco" className='logo-footer' />
      </div>

        <div className='canales-container'>
          <h4 id='redes-title'>Nuestras Redes</h4>
          <Link href="https://www.instagram.com/isafrancooficial/" target="_blank" rel="noopener noreferrer">
            <img src="/public/logos/Instagram.png" alt="Instagram" className='redes-logo' />
          </Link>

          <Link href="https://www.facebook.com/isafrancooficial" target="_blank" rel="noopener noreferrer">
            <img src="/public/logos/Facebook.png" alt="Facebook" className='redes-logo' />
          </Link>

          <Link href="https://wa.me/5493515109239" target="_blank" rel="noopener noreferrer">
            <img src="/public/logos/Whatsapp (2).png" alt="WhatsApp" className='redes-logo' />
          </Link>
      </div>

      <div className='contacto-container'>

        <article className='contacto-1'>
          <div>
            <h3>Casa Central</h3>
            <br />
            <p>Av. Sagrada familia 311, Cordoba, Argentina.</p>
            <Link href="tel:+543515109239" className="contacto">351-510-9239</Link>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.8047573139602!2d-64.23536912668945!3d-31.396321059332728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298f226a27da5%3A0x4b14c6c8082e6fd1!2sIsaFranco%20Motos%20-%20Sagrada%20Familia!5e0!3m2!1ses-419!2sar!4v1734552436205!5m2!1ses-419!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </article>

          <article className='contacto-2'>
              <div>
                <h3>Sucursal</h3>
                <br />
                <p>Av. Caraffa 1951, Cordoba, Argentina.</p>
                <Link href="tel:+5435118801601" className="contacto">351-880-1601</Link>
                
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.2623858314663!2d-64.20613735984618!3d-31.390567838152528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298f1f6f16e79%3A0x8332488b52b9e9ad!2sAv.%20Emilio%20Caraffa%201951%2C%20X5008KKB%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1734623160273!5m2!1ses-419!2sar"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
          </article>
        </div>

      </section>
    </>
  )
}

export default Footer;
