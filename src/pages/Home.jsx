import { useState } from "react";
import { data } from '../services/data';
import ElementModal from '../components/ElementModal';
import '../css/Home.css';

function Home() {
    const [seleccionado, setSeleccionado] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);

    const manejarSeleccion = (elemento) => {
        setSeleccionado(elemento);
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setSeleccionado(null);
    };

    return (
        <div className="container">

            <div className="periodic-table">
                {data.slice(1).map((element) => (
                    <div
                        key={element.number}
                        className={`element-card ${element.category.split(' ')[0]}`}
                        onClick={() => manejarSeleccion(element)}
                        style={{
                            gridColumn: element.xpos,
                            gridRow: element.ypos
                        }}
                    >
                        <div className="element-number">{element.number}</div>
                        <div className="element-symbol">{element.symbol}</div>
                        <div className="element-name">{element.name}</div>
                    </div>
                ))}
            </div>

            {modalAbierto && (
                <ElementModal 
                    elemento={seleccionado} 
                    alCerrar={cerrarModal} 
                />
            )}

        </div>
    );
}

export default Home;