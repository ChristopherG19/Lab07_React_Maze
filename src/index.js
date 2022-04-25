import React from "react";
import ReactDOM from "react-dom/client";
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import PrintMaze from "./Components/Maze"

const StyleTitulo = css`
color: #fff;
font-family: "Montserrat", sans-serif;
`
const StyleSettings = css`
padding: 1rem;
height: 10%;
text-align: center;
border: 1px solid black;
border-radius: 10px;
background-color: #161616;
font-size: 0.8rem;
`
const StyleInput = css`
background-color: #ffffff;
justify-content: center;
text-align: center;
border: 2px solid #ffffff;
`
const StyleSubmit = css`
background-color: #161616;
border: 1px solid #ffffff;
border-radius: 10px;
padding: 0.4rem;
text-align: center;
cursor: pointer;
margin: 1rem;
color: #ffffff;
`
const StyleContainer = css`
display: flex;
flex-direction:column;
align-items:center;
`

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

    return NewMaze
}

const App = () => {

    const [Maze, setMaze] = React.useState(null)
    const [width, setWidth] = React.useState(4)
    const [height, setHeight] = React.useState(4)
        
    const setW = (val) => {
        const inputw = Number(val.target.value)
        setWidth(inputw)
    }

    const setH = (val) => {
        const inputh = Number(val.target.value)
        setHeight(inputh)
    }

    const NewMazeGen = async() => {
        const NewM = await MazeN(width, height)
        setMaze(NewM)
    }
    

    return (
        <div id='Container' css={StyleContainer}>
            <h1 id ="Titulo" css={StyleTitulo}>Amazeing</h1>
            <div id="settings" css={StyleSettings}>
                <input id="width" type="number" min="1" max="10" placeholder="Ancho" onChange={setW} css={StyleInput}/>
                <input id="height" type="number" min="1" max="10" placeholder="Alto" onChange={setH} css={StyleInput}/>
                <button id="submit" onClick={NewMazeGen} css={StyleSubmit}>Generar Laberinto</button>
            </div>
            {Maze && <PrintMaze laberinto={Maze} width={width} height={height}/>}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
  