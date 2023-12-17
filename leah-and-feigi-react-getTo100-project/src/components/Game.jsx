import { useState } from "react"
import AddUser from './addUser'
import GameBoard from './gameBoard';


function Game() {
    const [userDetails, setUserDetails] = useState([]);
    const [game, setGame] = useState(false)
    function startGame() {
        if (0 < userDetails.length)
            setGame(true)

    }
    return (
        <>
            <h1>Get To 💯</h1>
            {!game && <AddUser userDetails={userDetails} setUserDetails={setUserDetails} />}
            {!game && <button onClick={startGame}>התחל משחק</button>}
            {game && <GameBoard players={userDetails} setUserDetails={setUserDetails} />}
        </>
    )
}
export default Game
