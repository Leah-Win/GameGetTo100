import { useState } from "react"
import OperationsButtons from "./operationsButtons"

function Board(props) {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100))
    const [steps, setSteps] = useState(0)

    function win() {
        props.setUserDetails(prevUserDetails => [...prevUserDetails, prevUserDetails[props.index].scors.push(steps)]);
        let arrGemers = JSON.parse(localStorage.getItem('Gamers'));
        for (let i = 0; i < arrGemers.length; i++)
            if (arrGemers[i].fullName == props.player.fullName)
                arrGemers[i].scors.push(steps)
        localStorage.setItem('Gamers', JSON.stringify(arrGemers));
        // alert(steps)
    }

    function reset(){
        setNumber(Math.floor(Math.random() * 100))
        setSteps(0)
    }

    function exit(){

    }

    return (<>
        <div className="bord">
            <h4>{props.player.fullName} :שחקן</h4>
            <h4>{number} :מספר</h4>
            <h4> {steps} :מספר צעדים</h4>
            <OperationsButtons setUserDetails={props.setUserDetails} number={number} setSteps={setSteps} availableBord={props.availableBord} setNumber={setNumber} setAvailableBord={props.setAvailableBord} length={props.length} index={props.index} />
            <h4>{props.player.scors} :נקודות</h4>
            {number == 100 && win && <button onClick={()=>reset}>התחל משחק חדש</button>}
            {/* && <button onClick={()=>exit}>יציאה</button> */}
        </div>
    </>)
}
export default Board
