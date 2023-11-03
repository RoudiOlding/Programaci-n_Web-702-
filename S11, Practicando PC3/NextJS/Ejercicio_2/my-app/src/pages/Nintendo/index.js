import React, { useEffect, useState, createContext } from "react";
import Link from "next/link";
import ListaJuegos from "@/components/ListaJuegos/ListaJuegoslearning";

export const JuegosContext = createContext();

function Nintendo(){
    const juegosNintendo = [
        {
            id: 1,
            nombre: "Mario Wonders",
            año: 2021,
            genero: "Plattforms"
        },
        {
            id:2,
            nombre: "The legend of Zelda: Tears of the Kingdom",
            año: 2023,
            genero: "Open world"
        },
        {
            id:3,
            nombre: "Pokemon Shield",
            año: 2019,
            genero: "RPG"
        }
    ]

    const [juegosNin, setJuegosNin] = useState(juegosNintendo);
    
    useEffect(() => { //Por única vez, vamos a obtener el LocalStorage y vamos almacenarlo en "juegosNin"
        if (typeof window !== "undefined") {
            const juegoNinSto = localStorage.getItem(window.location.pathname);
            setJuegosNin(juegoNinSto ? JSON.parse(juegoNinSto) : juegosNintendo);
        }
    }, []);

    useEffect(() => { //Cada vez que  modifique "juegosNin" actualizaremos el localStorage que almacena los juegos de Nintendo
        if (typeof window !== "undefined") { 
            localStorage.setItem(window.location.pathname, JSON.stringify(juegosNin));
        }
    }, [juegosNin]);
    
    const handleOnAgregarJuego = (juego) => {
        setJuegosNin([...juegosNin, juego]);
        if (typeof window !== "undefined") {
            localStorage.setItem(window.location.pathname, JSON.stringify(juegosNin));
        }
    };

    return (
        <JuegosContext.Provider value={{ juegosNin, handleOnAgregarJuego }}>
            <div>
                <h1>Juegos de Nintendo</h1>
                <ListaJuegos juegos={juegosNin} onEnviar={handleOnAgregarJuego} />
                <Link href="/">Back</Link>
            </div>
        </JuegosContext.Provider>   
    )
}

export default Nintendo;