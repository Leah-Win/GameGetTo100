import { useState } from "react"
import Board from "./board"

function GameBoard({ players, setUserDetails }) {
    const [availableBord, setAvailableBord] = useState(0)

    function topPlayers() {
        let arrGemers = JSON.parse(localStorage.getItem('Gamers'));
        let scoresArr = []
        for (let i = 0; i < arrGemers.length; i++) {
            let sum = 0;
            for (let j = 0; j < arrGemers[i].scors.length; j++)
                sum = sum + arrGemers[i].scors[j];
            scoresArr[i] = { name: arrGemers[i].fullName, average: sum / arrGemers[i].scors.length };
        }
        scoresArr.sort(function (a, b) { return a.average - b.average });
        return [scoresArr[0].name, scoresArr[1].name, scoresArr[2].name];
    }

    // function showBoards(player, i) {
    //     // if (player.fullName == null)
    //     if (player == null)
    //         // return null;
    //         return <button>not willy</button>
    //     else
    //         return <Board players={players} index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />
    // }

    return (<>
        <h3>{topPlayers().map((player) => player + " ")} :השחקנים המובילים </h3>
        <div id="container">

            {/* {players.map(showBoards)} */}

            {players.map((player, i) => {
                if (player == null)
                    // return <button>not willy</button>
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

