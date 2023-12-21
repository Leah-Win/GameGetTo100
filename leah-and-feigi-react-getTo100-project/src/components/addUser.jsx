import { useState } from 'react';

function AddUser({ users, setUsers }) {
    const [isVisible, setisVisible] = useState(false)

    function findUser(personName) {
        let arrGemers = JSON.parse(localStorage.getItem('Gamers')) || [];
        return (arrGemers.find(person => (person.name === personName)))
    }

    function handleSubmit(event) {
        event.preventDefault();
        const value = event.target[0].value;
        if (value.length < 2)
            alert('שם חייב להיות לפחות בן 2 תווים!')
        else {
            let arrayScors = [];
            let foundUser = findUser(value);
            foundUser && (arrayScors = foundUser.scors);
            let newUser = { name: value, scors: arrayScors, isActive: true };
            if (!users.find(person => (person.name === value)))
                setUsers(prevUser => [...prevUser, newUser]);
            if (!foundUser) {
                let arrUsers = JSON.parse(localStorage.getItem('Gamers')) || [];
                arrUsers.push(newUser);
                localStorage.setItem('Gamers', JSON.stringify(arrUsers));
            }
            setisVisible(false);
        }
    }

    return <>
        <button onClick={() => setisVisible(true)}>הוסף שחקן</button>
        {isVisible &&
            <form onSubmit={handleSubmit} required>
                <input type='text' name='name' required />
                <label htmlFor="name"> שם מלא</label>
                <div>
                    <button type='submit'>הוסף</button>
                </div>
                <button onClick={() => setisVisible(false)} type='button'>סגור</button>
            </form>}
    </>
}

export default AddUser;