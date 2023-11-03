import React, { useEffect, useState }  from 'react'
import Link from 'next/link'
import ListaJuegos from '@/components/ListaJuegos/ListaJuegoslearning'

function index() {
  const juegosXbox = [
    {
        id: 1,
        nombre: "Halo Infinite",
        año: 2021,
        genero: "Shooter"
    },
    {
        id:2,
        nombre: "Starfield",
        año: 2023,
        genero: "Open world"
    },
    {
        id:3,
        nombre: "Gears of War",
        año: 2019,
        genero: "Shooter"
    }
  ] 

  const [juegosXb, setJuegosXb] = useState(juegosXbox);
    
    useEffect(() => { //Por única vez, vamos a obtener el LocalStorage y vamos almacenarlo en "juegosNin"
        if (typeof window !== "undefined") {
            const juegosXbSto = localStorage.getItem(window.location.pathname);
            setJuegosXb(juegosXbSto ? JSON.parse(juegosXbSto) : juegosXbox);
        }
    }, []);

    useEffect(() => { //Cada vez que  modifique "juegosNin" actualizaremos el localStorage que almacena los juegos de Nintendo
        if (typeof window !== "undefined") { 
            localStorage.setItem(window.location.pathname, JSON.stringify(juegosXb));
        }
    }, [juegosXb]);
    
    const handleOnAgregarJuego = (juego) => {
        setJuegosXb([...juegosXb, juego]);
        if (typeof window !== "undefined") {
            localStorage.setItem(window.location.pathname, JSON.stringify(juegosXb));
        }
    };

  return (
    <div>
      <h1>Juegos de Xbox</h1>
      <ListaJuegos juegos={juegosXb} onEnviar={handleOnAgregarJuego} />
      <Link href="/">Back</Link>
    </div> 
  )
}

export default index