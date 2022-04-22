import ReactDOM from "react-dom/client"
import './styles.css'
import {useState} from 'react'
import PrintMaze from "./Components/Maze"

const MazeN = async (w,h) => {

    const urlOrigen = 'https://maze.juanelcaballo.club/?type=json&w=%&h=#'
    const NewWeight = urlOrigen.replace('%',w)
    const urlFinal = NewWeight.replace('#',h)
    
    const NewMaze = await fetch(urlFinal)
    .then((response) => {
        return response.json()
    })
    .then((responseInJSON) =>{
        return responseInJSON
    })

    console.log("Maze: ",NewMaze)
    return NewMaze
}

const App = () => {

    const [Maze, setMaze] = useState([])
    const [width, setWidth] = useState(4)
    const [height, setHeight] = useState(4)
        
    const setW = (val) => {
        const inputw = Number(val.target.value)
        inputw ? setWidth(inputw) : width = 4
    }

    const setH = (val) => {
        const inputh = Number(val.target.value)
        inputh ? setHeight(inputh) : height = 4
    }

    const NewMazeGen = async() => {
        const NewM = await MazeN(width, height)
        setMaze(NewM)
    }

    return (
        <div>
            <h1 id ="Titulo">Amazeing</h1>
            <form id="settings" action="">
                <input id="width" type="number" min="1" max="10" placeholder="Ancho" onChange={setW}/>
                <input id="height" type="number" min="1" max="10" placeholder="Alto" onChange={setH}/>
                <input id="submit" type="submit" value="Generar laberinto" onClick={NewMazeGen}/>
            </form>
            <PrintMaze laberinto={Maze} width={width} height={height}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
  