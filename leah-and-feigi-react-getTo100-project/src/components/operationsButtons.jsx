
function OperationsButtons({setUserDetails, number, setSteps, availableBord, setNumber, setAvailableBord, length, index }) {
    const operations = ["+1", "-1", "*2", "/2"];
    // function win(){
    //     setUserDetails(prevUserDetails=>[...prevUserDetails, prevUserDetails[index].scors.push()])
    // }

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
        setAvailableBord(prevBord => (prevBord + 1) % length)
        // if (number == 100) {
        //     alert("הידד")
        // }
    }
    return (<>
        {operations.map((operation, i) => <button disabled={(index == availableBord) ? false : true} key={"button_" + i} onClick={() => operate(operation)}>{operation}</button>)}
        {/* {number == 100 && win()} */}
    </>
    )
}
export default OperationsButtons