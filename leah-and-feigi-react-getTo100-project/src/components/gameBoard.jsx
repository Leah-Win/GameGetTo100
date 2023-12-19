import { useState } from "react"
import Board from "./board"
// import { createRoot } from 'react-dom/client';

// const domNode = document.getElementById('root');
// const root = createRoot(domNode);

function GameBoard({ players, setUserDetails }) {
    // function GameBoard({ exit, players, setUserDetails }) {
    const [availableBord, setAvailableBord] = useState(initialAvailableBord)
    //אם באמת משתמשים בזה לתת משמעות
    const [nn, setNn] = useState(0)

    function initialAvailableBord() {
        let bord = 0;
        while (players[bord].isActive == false)
            bord = (bord + 1) % players.length
        return bord
    }

    // function exit(player) {
    //     setUserDetails((prev) => {
    //         for (let i = 0; i < players.length; i++) {
    //             if (prev[i] == player) {
    //                 prev[i].isActive = false;
    //                 return prev;
    //             }
    //         }
    //     });
    //     root.render(<GameBoard exit={exit} players={players} setUserDetails={setUserDetails} />);
    // }

    //מה אם יש רק שחקן אחד וכו?
    //מה אם לשחקן אין נקודות?
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
        const topPlayersArr = []
        for (let j = 0; j < scoresArr.length; j++) {
            topPlayersArr[j] = { name: scoresArr[j].name, average: scoresArr[j].average }
            if (j == 2)
                break;
        }
        return topPlayersArr;
    }
    //כשמוחקים שחקן נעלם הכותרת
    //כשמוחקים את כולם אין מה לעשות
    //אוי לא, הוא מרפשר את כולם כששחקן יוצא
    return (<>
        <h3> :השחקנים המובילים </h3>
        <table>
            <tr><th>שם</th><th>ממוצע</th></tr>
            {topPlayers().map((player) => {
                return <tr><td>{player.name}</td><td>{player.average.toFixed(2)}</td></tr>
            })}

            {/* {topPlayers().map((player) => player.name + " : " + player.average.toFixed(2) + " ")} */}
        </table>

        <div id="container">
            {console.log(players)}
            {players.map((player, i) => {
                if (player.isActive == false)
                    return;
                // return <Board exit={exit} players={players} index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />
                return <Board setNn={setNn} players={players} index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />
            })}
        </div>
    </>)
}

export default GameBoard

