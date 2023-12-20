import { useState } from "react"
import AddUser from './addUser'
import GameBoards from './gameBoards';

function Game() {
    const [users, setUsers] = useState([]);
    const [game, setGame] = useState(false);

    //להוסיף e ל scors
    //לאחד user & players

    return (
        <>
            <h1>Get To 💯</h1>
            {!game && <AddUser users={users} setUsers={setUsers} />}
            {!game && 0 < users.length && <button onClick={() => setGame(true)}>התחל משחק</button>}
            {game && <GameBoards setGame={setGame} players={users} setUsers={setUsers} />}
        </>
    )
}
export default Game
