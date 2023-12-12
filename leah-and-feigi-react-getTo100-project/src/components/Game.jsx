import { useState } from "react"
import AddUser from './addUser'

function Game() {
    const [users, setUsers] = useState([]);
    return (
        <>
            <AddUser />
            {/* {users.map((gamer) => <GameBoard />)}
            לדעתי זה כן אמור לעבור דרך כאן, ביום שנסדר.... */}
        </>
    )
}
export default Game
