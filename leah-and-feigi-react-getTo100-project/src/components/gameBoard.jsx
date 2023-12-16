import { useState } from "react"
import Board from "./board"

function GameBoard({ players, setUserDetails }) {
    const [availableBord, setAvailableBord] = useState(0)

    function topPlayers() {
        let arrGemers = JSON.parse(localStorage.getItem('Gamers'));
        let scoresArr = []
        let topPlayersArr = []
        for (let i = 0; i < arrGemers.length; i++) {
            let sum = 0;
            for (let j = 0; j < arrGemers.scors.length; j++)
                sum = sum + arrGemers.scors[j];
            scoresArr[i] = sum / scors.length
        }
        //sort
        //יש לזה פונקציה או משהו?
        for (let k = 0; k < 3; k++) {
            topPlayersArr[i] = scoresArr[i] //?יש דרך קצרה יותר לעשות את זה
        }
        for (let i = 0; i < scoresArr.length; i++) {
            for (let j = 0; j < topPlayersArr.length; j++) {
                if (scoresArr[i] < topPlayersArr[j]) {
                    topPlayersArr[j] = scoresArr[i];
                    continue;
                }
            }


        }

    }

    function showBoards(player, i) {
        // if (player.fullName == null)
        if (player == null)
            // return null;
            return <button>not willy</button>
        else
            return <Board players={players} index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />
    }

    return (<>
        <h3>השחקנים המובילים { }</h3>
        <div id="container">

            {/* {players.map(showBoards)} */}

            {players.map((player, i) => {
                if (player == null)
                    return null;
                return <Board players={players} index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />
            })}

            {/* {players.map((player, i) => {
                if (i == 1)
                    i++;
                else
                    return <Board index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />
            })} */}
            {/* {players.map((player, i) => <Board index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />)} */}
        </div>
    </>
    )
}
export default GameBoard

