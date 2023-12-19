import { useState } from "react"
import AddUser from './addUser'
import GameBoard from './gameBoard';
// import { createRoot } from 'react-dom/client';

// const domNode = document.getElementById('root');
// const root = createRoot(domNode);

function Game() {
    const [userDetails, setUserDetails] = useState([]);
    const [game, setGame] = useState(false);

    function startGame() {
        if (0 < userDetails.length)
            setGame(true)
    }

    // function exit(player) {
    //     setUserDetails((prev) => {
    //         for (let i = 0; i < userDetails.length; i++) {
    //             if (prev[i] == player) {
    //                 prev[i].isActive = false;
    //                 return prev;
    //             }
    //         }
    //     });
    //     root.render(<GameBoard exit={exit} players={userDetails} setUserDetails={setUserDetails} />);
    // }
    
    return (
        <>
            <h1>Get To 💯</h1>
            {!game && <AddUser userDetails={userDetails} setUserDetails={setUserDetails} />}
            {!game && <button onClick={startGame}>התחל משחק</button>}
            {/* {game && <GameBoard exit={exit} players={userDetails} setUserDetails={setUserDetails} />} */}
            {game && <GameBoard players={userDetails} setUserDetails={setUserDetails} />}

        </>
    )
}
export default Game
