import { useState } from "react"
import Board from "./board"

function GameBoard({ players, setUserDetails }) {
    const [availableBord, setAvailableBord] = useState(0)

    // const [availability,setAvailability]= useState(true)
    // availableBord.disabled = false;

    return (<>
        <h1>Get To 💯</h1>
        <div id="container">
            {players.map((player, i) => <Board index={i} key={"board_" + i} availableBord={availableBord} player={player} setUserDetails={setUserDetails} setAvailableBord={setAvailableBord} length={players.length} />)}
        </div>
    </>
    )
}
export default GameBoard

