import React, { useState } from 'react'
import style from './style.module.css'

function Form({onEnviar}) {

    const juegoDefault = {
        id: 0,
        nombre: "",
        año: 0,
        genero: ""
    }

    const [juego, setJuego] = useState(juegoDefault);

    const handleAgregar = () => {
        onEnviar(juego)
    }

    return (
        <>
            <label className={style.label}>ID</label>
            <input type="text" onChange={event => setJuego({...juego, id: event.target.value})} value={juego.id}/>
            <label className={style.label}>NOMBRE</label>
            <input type="text" onChange={event => setJuego({...juego, nombre: event.target.value})} value={juego.nombre} />
            <label className={style.label}>AÑO</label>
            <input type="text" onChange={event => setJuego({...juego, año: event.target.value})} value={juego.año}/>
            <label className={style.label}>GENERO</label>
            <input type="text" onChange={event => setJuego({...juego, genero: event.target.value})} value={juego.genero} />
            <button className={style.boton} onClick={handleAgregar}>AGREGAR</button>
        </>
    
    )
}

export default Form