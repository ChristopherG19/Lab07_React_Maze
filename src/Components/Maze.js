/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from "react"
const PrintMaze = ({laberinto, width, height}) => {

    const style = css`
    color: #fff;
    background: black;
    display: grid;
    text-align: center;
    grid-template-columns: repeat(${height}, 40px);
    grid-template-rows: repeat(${width}, 20px);
    `

    return (
        <div id = 'gridMaze' css={style}>
            {
                laberinto.map( row =>
                    row.map( part => {
                        if (part == "-" || part == "|" || part == "+") {
                            return <div>{part}</div>
                        }
                        else {
                            return <div>{part}</div>
                        }
                    })
                )
            }
        </div>
    )
}

export default PrintMaze
