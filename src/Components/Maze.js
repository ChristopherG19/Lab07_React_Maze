/** @jsx jsx */
import { css, jsx } from '@emotion/react'
const PrintMaze = ({laberinto, width, height}) => {
    
    const widthR = parseInt(width, 10)*2 + 1
    const heightR = (Number(width * 2) + Number( width + 1 ))

    const style = css`
    margin-top: 25px;
    color: #fff;
    background: black;
    display: grid;
    text-align: center;
    grid-template-columns: repeat(${heightR}, 40px);
    grid-template-rows: repeat(${widthR}, 20px);
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
