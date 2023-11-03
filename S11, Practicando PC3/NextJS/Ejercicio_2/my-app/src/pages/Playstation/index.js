import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ListaJuegos from '@/components/ListaJuegos/ListaJuegoslearning'

function Playstation() {
  const juegosPs4 = [
    {
        id: 1,
        nombre: "God of War",
        año: 2018,
        genero: "Accion"
    },
    {
        id:2,
        nombre: "Marvel's Spiderman",
        año: 2018,
        genero: "Acción"
    },
    {
        id:3,
        nombre: "The last of Us Part 2",
        año: 2020,
        genero: "Narrativa"
    }
  ] 

  const [juegosPs, setJuegosPs] = useState(juegosPs4);

  useEffect(() => { //Por única vez, vamos a obtener el LocalStorage y vamos almacenarlo en "juegosNin"
    if (typeof window !== "undefined") {
        const juegoPsSto = localStorage.getItem(window.location.pathname);
        setJuegosPs(juegoPsSto ? JSON.parse(juegoPsSto) : juegosPs4);
    }
  }, []);

  useEffect(() => { //Cada vez que  modifique "juegosNin" actualizaremos el localStorage que almacena los juegos de Nintendo
    if (typeof window !== "undefined") { 
        localStorage.setItem(window.location.pathname, JSON.stringify(juegosPs));
    }
  }, [juegosPs]);

  const handleOnAgregarJuego = (juego) => {
    setJuegosPs([...juegosPs, juego]);
    if (typeof window !== "undefined") {
        localStorage.setItem(window.location.pathname, JSON.stringify(juegosPs));
    }
  };
  
  return (
    <div>
      <h1>Juegos de Playstation</h1>
      <ListaJuegos juegos={juegosPs} onEnviar={handleOnAgregarJuego}/>
      <Link href="/">Back</Link>
    </div>
    
  )
}

export default Playstation