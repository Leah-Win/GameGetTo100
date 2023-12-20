import { useState } from "react"
import AddUser from './addUser'
import GameBoards from './gameBoards';

function Game() {
    const [users, setUsers] = useState([]);
    const [game, setGame] = useState(false);

    //אחרי שהוספתי וגם וגם לכפתור צריך את הפונקציה?
    function startGame() {
        if (0 < users.length)
            setGame(true)
        else
            setGame(false)
    }

    //להוסיף e ל scors
    //לאחד user & players

    return (
        <>
            <h1>Get To 💯</h1>
            {!game && <AddUser users={users} setUsers={setUsers} />}
            {!game &&0 < users.length&& <button onClick={startGame}>התחל משחק</button>}
            {game && <GameBoards setGame={setGame} players={users} setUsers={setUsers} />}
        </>
    )
}
export default Game
