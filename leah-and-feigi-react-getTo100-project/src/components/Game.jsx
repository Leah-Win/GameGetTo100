import { useState } from "react"
import AddUser from './addUser'

function Game() {
    const [users, setUsers] = useState([]);
    return (
        <>
            <AddUser />
            {users.map((gamer) => <GameBoard />)}
        </>
    )
}
export default Game
