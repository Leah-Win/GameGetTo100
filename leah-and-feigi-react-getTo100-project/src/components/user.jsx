import { useState } from 'react';

function User() {
    const [user, setUser] = useState([]);

    function signUp() {
        const logInUserName = document.getElementById('name').value;
        const logInUserPassword = document.getElementById('password').value;
        if (!findUser(logInUserName))
            if (!findUser(logInUserName, logInUserPassword)) {
                let user = new User(logInUserName, logInUserPassword);
                let arrUsers = JSON.parse(localStorage.getItem('gamers')) || []
                arrUsers.push(user)
                localStorage.setItem('gamers', JSON.stringify(arrUsers))
                localStorage.setItem('player' + userNum, JSON.stringify(user));
            }
            else {
                alert("you have to log in")
                return
            }
        checkNumUser();
        return false;
    }


    function logIn() {
        const logInUserName = document.getElementById('name').value;
        const logInUserPassword = document.getElementById('password').value;
        if (!findUser(logInUserName, logInUserPassword)) {
            alert("you have to sign up")
            return
        }
        else {
            let user = new User(logInUserName, logInUserPassword);
            localStorage.setItem('player' + userNum, JSON.stringify(user));
            checkNumUser();
        }
    }

    function findUser(name, password) {
        let foundUser;
        let arrUsers = JSON.parse(localStorage.getItem(user)) || [];
        foundUser = arrUsers.find(person => {
            return person.name === name && person.password === password;
        })
        return foundUser;
    }


    return <>
        {/* <input type="text" id="name" placeholder="first name:" required />
        <input type="password" id="password" placeholder="password:" required />
        <button onClick={signUp}>הוסף משתמש</button> */}

        <input id="name" placeholder="name:" required />
        <br/>
        <input id="password" placeholder="password:" required />
        <br/>
        <button  id="login" onClick={logIn}>log in</button>
        <br/>
        <button  id="signUpLink" onClick={signUp}>sign up</button>
    </>
}
export default User;