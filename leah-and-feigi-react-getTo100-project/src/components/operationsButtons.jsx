
import GameBoard from "./gameBoard";
function OperationsButtons({ steps, players, player, setUserDetails, number, setSteps, availableBord, setNumber, setAvailableBord, length, index }) {
    const operations = ["+1", "-1", "*2", "/2"];

    function reset() {
        setNumber(Math.floor(Math.random() * 100))
        setSteps(0)
    }

    function exit() {
        setUserDetails((prev) => {
            for (let i = 0; i < length; i++) {
                // console.log([{a:1},{a:2},{a:3},{a:4}]);
                if (prev[i].fullName == player.fullName) {
                    // prev.splice(i, 1)
                    // prev[i] = { fullName: null, scors: null };
                     prev[i] = null;
                    return prev
                }
            }
        });
        length=length-1;
        setAvailableBord(prevBord => (prevBord + 1) % length)
        return;        
        // setAvailableBord((prevBord) => {
        //     // if (players[(prevBord + 1) % length].fullName == null)
        //     if (players[(prevBord + 1) % length]== null)
        //         return (prevBord + 2) % length
        //     return (prevBord + 1) % length
        // })


        // setAvailableBord(availableBord);
        // if (index == availableBord) {
        //     setAvailableBord((prevBord) => {
        //         let next = (prevBord + 1) % length;
        //         // while (players[next].fullName == null)
        //     while (players[next] == null)
        //             next = (next + 1) % length
        //         return next;
        //     })
        // }

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
        // setAvailableBord((prevBord) => {
        //     // if (players[(prevBord + 1) % length].fullName == null)
        //     if (players[(prevBord + 1) % length]== null)
        //         return (prevBord + 2) % length
        //     return (prevBord + 1) % length
        // })


        setAvailableBord(prevBord => (prevBord + 1) % length)



        // setAvailableBord((prevBord) => {
        //     let next = (prevBord + 1) % length;
        //     // while (players[next].fullName == null)
        //     while (players[next] == null)
        //         next = (next + 1) % length
        //     return next;
        // })
    }
    return (<>
        {number == 100 ? <button onClick={() => reset()}>התחל משחק חדש</button> : operations.map((operation, i) => <button disabled={(index == availableBord) ? false : true} key={"button_" + i} onClick={() => operate(operation)}>{operation}</button>)}
        {number == 100 && <button onClick={() => exit()}>יציאה</button>}
        {/* && <GameBoard players={players} setUserDetails={setUserDetails} />} */}
    </>
    )
}
export default OperationsButtons