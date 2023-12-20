import { useState } from "react"
import Board from "./board"

function GameBoards({ setGame, players, setUsers }) {
    const [availableBord, setAvailableBord] = useState(0)
    const [exits, setExits] = useState(0)
    if (players.length == exits) {
        setUsers([]);
        setGame(false)
    }

    //כשזה לא צריך לעבור בין הלוחות הוא לא מעדכן את הממוצע

    function topPlayers() {
        let arrGemers = JSON.parse(localStorage.getItem('Gamers'));
        let scoresArr = []
        for (let i = 0; i < arrGemers.length; i++) {
            let result = 0;
            for (let j = 0; j < arrGemers[i].scors.length; j++)
                result = result + arrGemers[i].scors[j];
            if (result > 0)
                result = result / arrGemers[i].scors.length
            scoresArr[i] = { name: arrGemers[i].name, average: result };
        }
        scoresArr.sort(function (a, b) { return a.average - b.average });
        const topPlayersArr = []
        for (let j = 0; j < scoresArr.length; j++) {
            topPlayersArr[j] = { name: scoresArr[j].name, average: scoresArr[j].average }
            if (j == 2)
                break;
        }
        return topPlayersArr;
    }

    return (<>
        <h3> :השחקנים המובילים </h3>
        <table>
            <tr><th>שם</th><th>ממוצע</th></tr>
            {topPlayers().map((player, i) => {
                return <tr key={"row" + i}><td>{player.name}</td><td>{player.average.toFixed(2)}</td></tr>
            })}
        </table>

        <div id="container">
            {players.map((player, i) => {
                if (player.isActive == false)
                    return;
                return <Board exits={exits} setExits={setExits} players={players} index={i} key={"board_" + i} availableBord={availableBord} player={player} setUsers={setUsers} setAvailableBord={setAvailableBord} />
            })}
        </div>
    </>)
}

export default GameBoards

