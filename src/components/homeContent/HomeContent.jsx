
import Programador from '../icons/Programador';
import './css/homeContent.css';


export default function HomeContent() {
    return (
        <div className="content_body">
            <h1>
                <span className='title_body'>Hola a todos</span>
            </h1>
            <section className='seccion_descripcion'>
                <p className='text_descripcion'>
                    <span>Frontend Developer</span> que le encanta implementar diseños que inspiran y atraen a las personas.
                </p>
                <div className='imagen_descripcion'> 
                    <Programador/>
                </div>
            </section>
        </div>
    )
}
