import "./Home.css"

import basedatos from "../utils/basedatos.json"

export function Home(){

    //logica para leer la base de datos


    return(

        <>

        <div className="banner text-white">

            <h3>The barber's masters....</h3>
            <h5>Since 2024</h5>

        </div>

        <section className="container my-5">
            <div className="row">
                <div className="col-12 text-center">
                    <img src="../../src/assets/barbershop-logo.png" alt="img" className="w-50" />
                    <hr />
                    
                    <p>Bienvenidos a The barber's masters, el lugar donde la tradición y la innovación se encuentran para ofrecerte una experiencia de corte y cuidado personal sin igual. En nuestro elegante espacio, diseñado para el confort y la relajación de nuestros clientes, nos dedicamos a revivir el arte del barbero con un toque contemporáneo. Cada visita a nuestra barbería es más que un simple corte de cabello; es una experiencia holística donde cada detalle está pensado para tu bienestar. Desde el momento en que entras, te sumergirás en un ambiente acogedor, acompañado de un servicio personalizado que atiende tus necesidades específicas. Utilizamos solo productos de la más alta calidad, seleccionados meticulosamente para garantizar resultados excepcionales. Ya sea que busques un corte clásico, un afeitado tradicional, o las últimas tendencias en estilismo, nuestro equipo de profesionales altamente calificados está aquí para superar tus expectativas. En The barber's masters, no solo transformamos tu look, sino que te ofrecemos un momento de pausa y placer en tu día a día. Visítanos y descubre por qué somos más que una barbería; somos una comunidad, un estilo de vida</p>
                   

                </div>
                
            </div>
        </section>

       
        <section className="container">
            <section className="row row-cols-12 row-cols-md-5 g-3">
                {
                    //logica para recorrer la BD y mostrar la informacion de los 10 barberos
                    basedatos.map(function(barbero){
                        return(
                            <div className="col">
                                <div className="card h-100 shadow px-2">    
                                    <h3>{barbero.nombre}</h3>
                                    <h4>{barbero.especialidad}</h4>
                                    <h4>Experiencia: {barbero.experiencia}</h4>
                                    <h4>{barbero.correo}</h4>
                                    <h4>{barbero.contacto}</h4>
                                </div>
                            </div>
                        )
                    })


                }
            </section>
        </section>


        
        </>


    )

}