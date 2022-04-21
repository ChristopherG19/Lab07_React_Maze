import {useState} from 'react'

const setW = () => {
    const inputw = document.getElementById("width").value
    return inputw 
}
const setH = () => {
    const inputh = document.getElementById("height").value
    console.log(inputh)
}

const FormSet = () => {
    return (
        <form id="settings" action="">
            <input id="width" type="number" min="1" max="10" placeholder="Ancho" onChange={setW}/>
            <input id="height" type="number" min="1" max="10" placeholder="Alto" onChange={setH}/>
            <input id="submit" type="submit" value="Generar laberinto"/>
        </form>
    )
}

export default FormSet