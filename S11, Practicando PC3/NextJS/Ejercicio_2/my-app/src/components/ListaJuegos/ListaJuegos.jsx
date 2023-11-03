import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import Form from './Form/Form'

function ListaJuegos({juegos, onEnviar}) {
    
    const [mostrarForm, setMostrarForm] = useState(false);

    function handleOnMostrarForm(){
        setMostrarForm(!mostrarForm);
    }

    return (
        <div>
            <table className={style.tabla}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>AÑO</th>
                        <th>GENERO</th>
                    </tr>
                </thead>
                <tbody>
                    {juegos.map(item => (
                        <tr key={item}>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.año}</td>
                            <td>{item.genero}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        <button onClick={handleOnMostrarForm}>Formulario</button>
        {mostrarForm && <Form onEnviar={onEnviar}/>}
        </div>
        
    )
}

export default ListaJuegos