import {useState} from 'react'
import {useEffect} from 'react'

const Maze = () => {
    
    const MazeList = ({ Maze }) => <div>{Maze.map(row => <p>{String(row).concat(" ").replaceAll("", " ").split(",")}</p>)}</div>
    
    const [Maze, setMaze] = useState([])

    useEffect(() => {

        const urlOrigen = 'https://maze.juanelcaballo.club/?type=json&w=%&h=#'
        const NewWeight = urlOrigen.replace('%',4)
        const urlFinal = NewWeight.replace('#',4)
        
        fetch(urlFinal)
            .then((response) => response.json())
            .then((responseInJSON) =>{
                setMaze(responseInJSON)
            })
    }, [])

    return (
        <div id="Maze">
            <MazeList Maze = {Maze}/>
        </div>
    )
}

export default Maze