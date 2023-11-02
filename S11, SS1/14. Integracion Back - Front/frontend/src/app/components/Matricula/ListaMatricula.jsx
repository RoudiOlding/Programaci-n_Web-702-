const ListaMatricula = ({matriculas}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Fecha de Matricula
                    </th>
                    <th>
                        Alumno
                    </th>
                    <th>
                        Carrera
                    </th>
                    <th>
                        Cursos
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    matriculas.map(m => {
                        return(
                            <tr>
                                <td>{m.id}</td>
                                <td>{m.fechaMatricula}</td>
                                <td>{m.alumno?.nombre + " " + m.alumno?.apellido}</td>//Validad que no sea nulo
                                <td>{m.carrera?.nombre}</td>
                                <td>{m.cursos?.map(x=>x.nombre).join(', ')}</td> 
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}