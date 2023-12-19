import { useState } from "react"
import OperationsButtons from "./operationsButtons"

function Board(props) {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100))
    const [steps, setSteps] = useState(0)
    const scorsArr = findUser(props.player.fullName).scors;

    function findUser(personName) {
        let arrGemers = JSON.parse(localStorage.getItem('Gamers')) || [];
        return (arrGemers.find(person => (person.fullName === personName)))
    }

    return (<>
        <div className="bord">
            <h4>{props.player.fullName} :שחקן</h4>
            <h4>{number} :מספר</h4>
            <h4> {steps} :מספר צעדים</h4>
            {/* <OperationsButtons exitt={props.exit} steps={steps} players={props.players} player={props.player} setUserDetails={props.setUserDetails} number={number} setSteps={setSteps} availableBord={props.availableBord} setNumber={setNumber} setAvailableBord={props.setAvailableBord} length={props.length} index={props.index} /> */}
            <OperationsButtons setNn={props.setNn} steps={steps} players={props.players} player={props.player} setUserDetails={props.setUserDetails} number={number} setSteps={setSteps} availableBord={props.availableBord} setNumber={setNumber} setAvailableBord={props.setAvailableBord} length={props.length} index={props.index} />
            <h4>{scorsArr.map((score) => score + " ")} :נקודות</h4>
        </div>
    </>)
}

export default Board
