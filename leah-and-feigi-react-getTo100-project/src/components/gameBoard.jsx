import { useState } from "react"
import Board from "./board"

function GameBoard({ exit, players, setUserDetails }) {


    const [availableBord, setAvailableBord] = useState(initialAvailableBord)

    function initialAvailableBord() {
        let bord = 0;
        while (players[bord].isActive == false)
            bord = (bord + 1) % players.length
        return bord
    }

    // const [showBoards, setShowBoards] = useState([])
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
        for (let j = 0; j < 3; j++) {
            topPlayersArr[j] = { name: scoresArr[j].name, average: scoresArr[j].average }
        }
        return topPlayersArr;
    }
    // function showBoards(player, i) {
    //     // if (player.fullName == null)
    //     if (player == null)
    //         // return null;
    //         return <button>not willy</button>
    //     else
    //         return <Board players={players} index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />
    // }

    // setShowBoards((prev) => {
    //     prev = players.map((player, i) => {
    //         <Board setShowBoards={setShowBoards} players={players} index={i} key={"board_" + i}
    //             availableBord={availableBord} player={player} setUserDetails={setUserDetails}
    //             length={players.length} />
    //     })
    //     return prev;
    // })
    // setAvailableBord={setAvailableBord}

    // const showBoards = () => {
    //     let showBoard = players.map((player, i) => {
    //         return <Board players={players} index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />
    //     })
    // }

    // let showBoards = players.map((player, i) => {
    //     return <Board players={players} index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />
    // })

    return (<>
        <h3>{topPlayers().map((player) => player.name + " : " + player.average+"    ")} :השחקנים המובילים </h3>
        <div id="container">
            {/* {players.map(showBoards)} */}

            {/* {showBoards.map((bord, i) => bord)} */}
            {/* {showBoards.map((obj) => console.log("mmm " + obj))} */}
            {/* {showBoards}*/}
            {/* {console.log("ii "+showBoards)}  */}

            {/* {players.map((player, i) => {
                return <Board players={players} index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />
            })} */}
            {console.log(players)}
            {players.map((player, i) => {
                if (player.isActive == false)
                    // return <button>not willy</button>
                    return;
                return <Board exit={exit} players={players} index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />
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

