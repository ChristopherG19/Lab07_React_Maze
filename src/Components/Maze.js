/** @jsx jsx */
import { css, jsx } from '@emotion/react'
const PrintMaze = ({laberinto, width, height}) => {
    
    const widthR = parseInt(width, 10)*2 + 1
    const heightR = (Number(width * 2) + Number( width + 1 ))

    const style = css`
    margin-top: 25px;
    color: #fff;
    background: #34495E;
    display: grid;
    text-align: center;
    grid-template-columns: repeat(${heightR}, 60px);
    grid-template-rows: repeat(${widthR}, 40px);
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

    return (
        <div id = 'gridMaze' css={style}>
            {
                laberinto.map( (row, key1) =>
                    row.map( (part, key2) => {
                        if (part == "-" || part == "|" || part == "+") {
                            return <div key={(key1*2+key2+2).toString()} css={StyleWall}></div>
                        }
                        else if (part == "p"){
                            return <div key={(key1*10+key2+5).toString()} css={StylePlayer}></div>
                        }
                        else if (part == "g"){
                            return <div key={(key1*20+key2+10).toString()} css={StyleGoal}></div>
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
