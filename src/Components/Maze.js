
const PrintMaze = ({laberinto, width, height}) => {

    console.log("Laberinto recibido: ",laberinto)

    return (
        <div className = 'tablero' id = 'grid' >
            {
                laberinto.map( linea =>
                    linea.map( element => {
                        if (element === "-" || element === "|" || element === "+") {
                          return <h1>{element}</h1>
                        }
                        return <p>{element}</p>
                    })
                )
            }
    
        </div>
    )
}

export default PrintMaze
