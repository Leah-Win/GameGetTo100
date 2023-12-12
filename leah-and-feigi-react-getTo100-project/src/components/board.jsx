import { useState } from "react"
import OperationsButtons from "./operationsButtons"

function Board(props) {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100))
    const [steps, setSteps] = useState(0)
   // const [finish, setFinish] = useState(false)


    function findUser(personName) {
        let arrGemers = JSON.parse(localStorage.getItem('Gamers')) || [];
        return (arrGemers.find(person => (person.fullName === personName)))
    }

    const scorsArr = findUser(props.player.fullName).scors;

    return (<>
        <div className="bord">
            <h4>{props.player.fullName} :שחקן</h4>
            <h4>{number} :מספר</h4>
            <h4> {steps} :מספר צעדים</h4>
            <OperationsButtons steps={steps} players={props.userDetails} player={props.player} setUserDetails={props.setUserDetails} number={number} setSteps={setSteps} availableBord={props.availableBord} setNumber={setNumber} setAvailableBord={props.setAvailableBord} length={props.length} index={props.index} />
            <h4>{scorsArr.map((score) => score + " ")} :נקודות</h4>
            {/* {number == 100 && win()}*/}
            {/* {(number == 100) && win} */}
            {/* && <button onClick={() => reset()}>התחל משחק חדש</button>} */}

            {/* {number == 100 && setFinish(true)} */}
            {/* {finish && win}
            {finish && <button onClick={() => reset()}>התחל משחק חדש</button>} */}
            {/* finish && <button onClick={()=>exit}>יציאה</button> */}
        </div>
    </>)
}
export default Board
