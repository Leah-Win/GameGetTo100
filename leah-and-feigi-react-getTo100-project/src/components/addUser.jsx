import { useState } from 'react';
import GameBoard from './gameBoard';

function AddUser() {
    const [userDetails, setUserDetails] = useState([]);
    const [isVisible, setisVisible] = useState(false)
    const [game, setGame] = useState(false)

    function findUser(personName) {
        let arrGemers = JSON.parse(localStorage.getItem('Gamers')) || [];
        return (arrGemers.find(person => (person.fullName === personName)))
    }

    function handleSubmit(event) {
        event.preventDefault();
        const { name, value } = event.target[0];
        if (value.length < 2)
            alert('שם חייב להיות לפחות בן 2 תווים!')
        else {
            let arrayScors = [];
            let foundUser = findUser(value);
            foundUser && (arrayScors = foundUser.scors);
            let newUser = { fullName: value, scors: arrayScors };
            if (!userDetails.find(person => (person.fullName === value)))
                setUserDetails(prevUserDetails=>[...prevUserDetails, newUser]);
            if (!foundUser) {
                let arrUsers = JSON.parse(localStorage.getItem('Gamers')) || [];
                arrUsers.push(newUser);
                localStorage.setItem('Gamers', JSON.stringify(arrUsers));
            }
            console.log(userDetails)
            setisVisible(false);
            setGame(true);
        }
    }

    return <>
            <h1>Get To 💯</h1>
        <button onClick={() => setisVisible(true)}>הוסף שחקן</button>
        {isVisible &&
            <form onSubmit={handleSubmit} required>
                <div className='fullName'>

                    <input type='text' name='fullName' required />
                    <label htmlFor="fullName"> שם מלא</label>
                </div>
                <div className='submit'>
                    <button type='submit'>התחל משחק</button>
                </div>
                <button onClick={() => setisVisible(false)} type='button'>סגור</button>
            </form>}
        {game && <GameBoard players={userDetails} setUserDetails={setUserDetails} />}
    </>
}
export default AddUser;