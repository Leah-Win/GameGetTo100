
function OperationsButtons({ setPlayed, exits, setExits, steps, players, player, setUsers, number, setSteps, availableBord, setNumber, setAvailableBord, index }) {
    const length = players.length;
    const operations = ["+1", "-1", "*2", "/2"];

    function reset() {
        setPlayed(prev => prev + 1)
        win()
        setNumber(Math.floor(Math.random() * 100))
        setSteps(0)
    }

    function exit() {
        setPlayed(prev => prev + 1)
        win()
        setUsers((prev) => {
            for (let i = 0; i < length; i++) {
                if (prev[i] == player) {
                    prev[i].isActive = false;
                    return prev;
                }
            }
        });
        setExits(prev => prev + 1)
        if (availableBord == index && length - 1 != exits) {
            setAvailableBord((prevBord) => {
                let next = (prevBord + 1) % length;
                while (players[next].isActive == false)
                    next = (next + 1) % length
                return next;
            })
        }
    }

    function win() {
        alert(player.name + " ניצח ב " + steps + " צעדים")
        let arrGemers = JSON.parse(localStorage.getItem('Gamers'));
        for (let i = 0; i < arrGemers.length; i++)
            if (arrGemers[i].name == player.name)
                arrGemers[i].scors.push(steps)
        localStorage.setItem('Gamers', JSON.stringify(arrGemers));
    }

    function operate(an_operation) {
        setSteps(prevStepsNum => prevStepsNum + 1)
        switch (an_operation) {
            case "+1":
                setNumber(prevNumber => (prevNumber + 1));
                break;
            case "-1":
                setNumber(prevNumber => (prevNumber - 1));
                break;
            case "*2":
                setNumber(prevNumber => (prevNumber * 2));
                break;
            case "/2":
                setNumber(prevNumber => Math.floor(prevNumber / 2));
                break;
            default:
                break;
        }

        setAvailableBord((prevBord) => {
            let next = (prevBord + 1) % length;
            while (players[next].isActive == false)
                next = (next + 1) % length
            return next;
        })
    }

    return (
        <>
            {number != 100 && operations.map((operation, i) => <button disabled={(index == availableBord) ? false : true} key={"button_" + i} onClick={() => operate(operation)}>{operation}</button>)}
            {number == 100 && <button onClick={() => reset()}>התחל משחק חדש</button>}
            {number == 100 && <button onClick={() => exit()}>יציאה</button>}
        </>
    )
}

export default OperationsButtons