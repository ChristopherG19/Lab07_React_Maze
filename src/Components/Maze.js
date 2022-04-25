import React from "react";
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
const PrintMaze = ({laberinto, width, height, MazeTurn}) => {
    
    const widthR =  parseInt(height, 10)*2 + 1
    const heightR = (Number(width * 2) + Number( width + 1 ))

    const style = css`
    margin-top: 25px;
    color: #fff;
    background: #34495E;
    display: grid;
    text-align: center;
    grid-template-columns: repeat(${heightR}, 60px);
    grid-template-rows: repeat(${widthR}, 40px);
    justify-items: center;
    `

    const StyleWall = css`
    width: 60px;
    height: 40px;
    background-color: #A9DFBF;
    clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
    `

    const StylePlayer = css`
    width: 40px;
    height: 40px;
    background-color: #FFD700;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    `
    
    const StyleGoal = css`
    width: 60px;
    height: 40px;
    background-color: #ffffff;
    opacity: 1;
    background-image:  repeating-linear-gradient(45deg, #000000 25%, transparent 25%, transparent 75%, #000000 75%, #000000), repeating-linear-gradient(45deg, #000000 25%, #ffffff 25%, #ffffff 75%, #000000 75%, #000000);
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
    `

    const EggMove = () => {
        const Move = event.key.toLowerCase();

        if (Move == "arrowleft" || Move == "a"){
            MazeTurn ((laberinto) =>{
                const temp = [...laberinto]
                const y = temp.findIndex((row) => {return row.indexOf("p") > -1})
                const x = temp[y].findIndex((column) => {return column === "p"})

                if(temp[y][x-1] === "+" || temp[y][x-1] === "|"){
                    console.log("Chocaste")
                } else if(temp[y][x-1] === "g"){
                    temp[y][x] = " "
                    temp[y][x-1] = "p"
                    alert("FELICIDADES!!! Has logrado escapar. Ingresa otros valores para comenzar de nuevo")
                    MazeTurn(null)
                } else {
                    temp[y][x] = " "
                    temp[y][x-1] = "p"
                }
                return temp
            })
        } else if (Move == "arrowright" || Move == "d") {
            MazeTurn ((laberinto) =>{
                const temp = [...laberinto]
                const y = temp.findIndex((row) => {return row.indexOf("p") > -1})
                const x = temp[y].findIndex((column) => {return column === "p"})

                if(temp[y][x+1] === "+" || temp[y][x+1] === "|"){
                    console.log("Chocaste")
                } else if(temp[y][x+1] === "g"){
                    temp[y][x] = " "
                    temp[y][x+1] = "p"
                    alert("FELICIDADES!!! Has logrado escapar. Ingresa otros valores para comenzar de nuevo")
                    MazeTurn(null)
                } else {
                    temp[y][x] = " "
                    temp[y][x+1] = "p"
                }
                return temp
            })
        } else if (Move == "arrowup" || Move == "w") {
            MazeTurn ((laberinto) =>{
                const temp = [...laberinto]
                const y = temp.findIndex((row) => {return row.indexOf("p") > -1})
                const x = temp[y].findIndex((column) => {return column === "p"})

                if(temp[y-1][x] === "+" || temp[y-1][x] === "-"){
                    console.log("Chocaste")
                } else if(temp[y-1][x] === "g"){
                    temp[y][x] = " "
                    temp[y-1][x] = "p"
                    alert("FELICIDADES!!! Has logrado escapar. Ingresa otros valores para comenzar de nuevo")
                    MazeTurn(null)
                } else {
                    temp[y][x] = " "
                    temp[y-1][x] = "p"
                }
                return temp
            })
        } else if (Move == "arrowdown" || Move == "s") {
            MazeTurn ((laberinto) =>{
                const temp = [...laberinto]
                const y = temp.findIndex((row) => {return row.indexOf("p") > -1})
                const x = temp[y].findIndex((column) => {return column === "p"})

                if(temp[y+1][x] === "+" || temp[y+1][x] === "-"){
                    console.log("Chocaste")
                } else if(temp[y+1][x] === "g"){
                    temp[y][x] = " "
                    temp[y+1][x] = "p"
                    alert("FELICIDADES!!! Has logrado escapar. Ingresa otros valores para comenzar de nuevo")
                    MazeTurn(null)
                } else {
                    temp[y][x] = " "
                    temp[y+1][x] = "p"
                }
                return temp
            })
        }
    }

    window.onkeydown = EggMove

    return (
        <div id = 'gridMaze' css={style}>
            {
                laberinto.map( (row, key1) =>
                    row.map( (part, key2) => {
                        if (part == "-" || part == "|" || part == "+") {
                            return <div key={(key1*5+key2+2).toString()} css={StyleWall}></div>
                        }
                        else if (part == "p"){
                            return <div key={(key1*10+key2+13).toString()} css={StylePlayer}></div>
                        }
                        else if (part == "g"){
                            return <div key={(key1*50+key2+16).toString()} css={StyleGoal}></div>
                        }
                        else {
                            return <div key={(key1*100+key2+3).toString()}>{part}</div>
                        }
                    })
                )
            }
        </div>
    )
}

export default PrintMaze
