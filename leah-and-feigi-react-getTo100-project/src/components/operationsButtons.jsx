
import GameBoard from "./gameBoard";
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

// function OperationsButtons({ exitt, steps, players, player, setUserDetails, number, setSteps, availableBord, setNumber, setAvailableBord, length, index }) {
function OperationsButtons({ setNn, steps, players, player, setUserDetails, number, setSteps, availableBord, setNumber, setAvailableBord, length, index }) {

    const operations = ["+1", "-1", "*2", "/2"];

    function reset() {
        setNumber(Math.floor(Math.random() * 100))
        setSteps(0)
    }

    //אם משאירים את זה לנרמל שמות כמו של האורך וקבלת משתנים
    function exit(player) {
        setUserDetails((prev) => {
            for (let i = 0; i < players.length; i++) {
                if (prev[i] == player) {
                    prev[i].isActive = false;
                    return prev;
                }
            }
        });
        setNn(prev => prev + 1)
        // root.render(<GameBoard players={players} setUserDetails={setUserDetails} />);

    }
    function win() {
        let arrGemers = JSON.parse(localStorage.getItem('Gamers'));
        for (let i = 0; i < arrGemers.length; i++)
            if (arrGemers[i].fullName == player.fullName)
                arrGemers[i].scors.push(steps + 1)
        localStorage.setItem('Gamers', JSON.stringify(arrGemers));
    }

    function operate(an_operation) {
        setSteps(prevStepsNum => prevStepsNum + 1)
        switch (an_operation) {
            case "+1":
                setNumber(prevNumber => (prevNumber + 1));
                if (number == 99)
                    win();
                break;
            case "-1":
                setNumber(prevNumber => (prevNumber - 1));
                if (number == 101)
                    win();
                break;
            case "*2":
                setNumber(prevNumber => (prevNumber * 2));
                if (number == 50)
                    win();                         
                break;
            case "/2":
                setNumber(prevNumber => Math.floor(prevNumber / 2));
                if (number == 200)
                    win();
                break;
            default:
                break;
        }

        setAvailableBord((prevBord) => {
            console.log(players)
            let next = (prevBord + 1) % length;
            while (players[next].isActive == false)
                next = (next + 1) % length
            return next;
        })
    }

    return (
        <>
            {number == 100 ? <button onClick={() => reset()}>התחל משחק חדש</button> : operations.map((operation, i) => <button disabled={(index == availableBord) ? false : true} key={"button_" + i} onClick={() => operate(operation)}>{operation}</button>)}
            {number == 100 && <button onClick={() => exit(player)}>יציאה</button>}
        </>
    )
}

export default OperationsButtons