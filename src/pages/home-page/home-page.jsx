import React from 'react'
import './home-page.css'
import NavBar from '../../components/nav-bar/navbar'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'

function HomePage () {

return (
    <>
                    {/* Barra de Navegacion */}

        <NavBar />
        
                    {/* Seccion de Identidad */}


        <section className='section-container-identidad'>

            <div id='identidad-container'>
                <h1 className='title'>¿Quienes somos?</h1>

            <article className='article-container'>
            En ISAFRANCO, llevamos más de 40 años compartiendo nuestra pasión por las motos. <br /> 
            Nos destacamos por ofrecer el mejor asesoramiento y un servicio postventa de excelencia. <br />
            Nuestra experiencia y compromiso nos convierten en el punto de partida ideal para que cada viaje comience con confianza y respaldo.
            </article>

            <Link to="/historia" className='botton-history'>Conoce mas sobre nosotros </Link>
            </div>

            <div className='banner-container'>
            <img src="../../../public/assets/banner2.jpg" alt="Jose" className='banner' /> 
            </div>
        </section>


                    {/* Seccion de Motivos */}


    <section className='section-container-motivos'>

        <div className='title-motivos'>
            <h1>¿Porque elegirnos?</h1>
            <h2>Nuestras Fortalezas</h2>
        </div>

        <div className='motivos-container'>
            <div className='motivo'>
                <img className='img-motivos' src="../../../public/assets/motivo1.jpg" alt="motivo1" />

                <h2>Asesoramiento personalizado</h2>

                <article className='article-motivos'>
                Nuestro equipo de expertos te ayudarán a encontrar la moto perfecta para tus necesidades. <br />
                </article>  
            </div>

            <div className='motivo'>
                <img className='img-motivos' src="../../../public/assets/motivo2.webp" alt="motivo1" />

                <h2>Entrega Inmediata</h2>

                <article className='article-motivos'>
                En Isa Franco venis, abonas con el medio de pago mas comveniente y te la llevas. Incluso si financiaste una parte o toda la moto.<br />

                </article>  
            </div>

            <div className='motivo'>
                <img className='img-motivos' src="../../../public/assets/financiamiento.jpg" alt="motivo1" />

                <h2>El mejor financiamiento</h2>

                <article className='article-motivos'>
                Contamos con diversos medios de financiamiento para que elijas el que mejor se adapte a tus necesidades. <br />
                </article>  
            </div>

            <div className='motivo'>
                <img className='img-motivos' src="../../../public/assets/accesorios.jpg" alt="motivo1" />

                <h2>Accesorios de calidad</h2>

                <article className='article-motivos'>
                En Isa Franco contamos con una amplia gama de cascos, guantes y más para que disfrutes cada viaje con seguridad y comodidad. <br />
                </article>  
            </div>

            <div className='motivo'>
                <img className='img-motivos' src="../../../public/assets/banner1.jpg" alt="motivo1" />

                <h2>Servicio tecnico especializado</h2>

                <article className='article-motivos'>
                Contamos con un equipo de expertos para que realices tu service de forma segura y eficiente. Ademas, somos el unico servicio tecnico autorizado por VOGE en Cordoba. <br />
                </article>  
            </div>

            <div className='motivo'>
                <img className='img-motivos' src="../../../public/assets/evento.jpg" alt="motivo1" />

                <h2>Eventos Exclusivos</h2>

                <article className='article-motivos'>
                Realizamos eventos exclusivos para que pases momentos inolvidables. <br />
                </article>  
            </div>
        </div>
    </section>

    
                        {/* Footer */}
    <Footer />
    </>

    )
}


export default HomePage
