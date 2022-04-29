import React from 'react'
import ReactDOM from 'react-dom/client'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import PrintMaze from './Components/Maze'

const StyleTitulo = css`
color: #fff;
font-family: "Montserrat", sans-serif;
`
const StyleSettings = css`
padding: 1rem;
height: 10%;
text-align: center;
border-radius: 10px;
background: rgb(255,215,0);
background: linear-gradient(90deg, rgba(255,215,0,1) 0%, rgba(226,220,42,0.9192051820728291) 55%, rgba(236,235,164,0.9808298319327731) 100%);
font-size: 0.8rem;
`
const StyleInput = css`
background-color: #ffffff;
justify-content: center;
text-align: center;
border: 2px solid #ffffff;
`
const StyleSubmit = css`
background: rgb(255,215,0);
background: linear-gradient(90deg, rgba(255,215,0,1) 2%, rgba(236,235,164,0.9808298319327731) 76%);
border-radius: 10px;
padding: 0.4rem;
text-align: center;
cursor: pointer;
margin: 1rem;
color: #000;
border: none;
`
const StyleContainer = css`
display: flex;
flex-direction:column;
align-items:center;
`

const MazeN = async (w, h) => {
  const urlOrigen = 'https://maze.juanelcaballo.club/?type=json&w=%&h=#'
  const NewWeight = urlOrigen.replace('%', w)
  const urlFinal = NewWeight.replace('#', h)
  const NewMaze = await fetch(urlFinal)
    .then((response) => response.json())
    .then((responseInJSON) => responseInJSON)
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
  const NewMazeGen = async () => {
    const NewM = await MazeN(width, height)
    setMaze(NewM)
  }

  const FinalMaze = async (MazeNw) => {
    setMaze(MazeNw)
  }
  return (
    <div id="Container" css={StyleContainer}>
      <h1 id="Titulo" css={StyleTitulo}> Eggcellent Amazeing</h1>
      <div id="settings" css={StyleSettings}>
        <input id="width" type="number" min="1" max="10" placeholder="Ancho" onChange={setW} css={StyleInput} />
        <input id="height" type="number" min="1" max="10" placeholder="Alto" onChange={setH} css={StyleInput} />
        <button type="submit" id="submit" onClick={NewMazeGen} css={StyleSubmit}>Generar Laberinto</button>
      </div>
      {Maze && <PrintMaze laberinto={Maze} width={width} height={height} MazeTurn={FinalMaze} />}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
