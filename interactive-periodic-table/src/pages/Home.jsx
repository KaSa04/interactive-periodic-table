import { useState } from "react";
import { data } from '../services/data';
import '../css/Home.css';

function Home() {
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
        </div>
    );
}

export default Home;