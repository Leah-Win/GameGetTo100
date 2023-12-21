import { useState } from "react"
import OperationsButtons from "./operationsButtons"

function Board(props) {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100))
    const [steps, setSteps] = useState(0)
    const scorsArr = findUser(props.player.name).scors;

    function findUser(personName) {
        let arrGemers = JSON.parse(localStorage.getItem('Gamers')) || [];
        return (arrGemers.find(person => (person.name === personName)))
    }

    return (<>
        <div className="bord">
            <h4>{props.player.name} :שחקן</h4>
            <h4>{number} :מספר</h4>
            <h4> {steps} :מספר צעדים</h4>
            <OperationsButtons setPlayed={props.setPlayed} exits={props.exits} setGame={props.setGame} setExits={props.setExits} steps={steps} players={props.players} player={props.player} setUsers={props.setUsers} number={number} setSteps={setSteps} availableBord={props.availableBord} setNumber={setNumber} setAvailableBord={props.setAvailableBord} index={props.index} />
            <h4>{scorsArr.map((score) => score + " ")} :נקודות</h4>
        </div>
    </>)
}

export default Board
