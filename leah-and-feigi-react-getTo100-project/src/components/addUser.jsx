import { useState } from 'react';

function AddUser() {
    const [user, setUser] = useState([]);
    const [userDetails, setUserDetails] = useState({ fullName: '', scors: [] });
    const [isVisible, setisVisible] = useState(false)

    function showForm() {
        setisVisible(true)
    }
    function hideForm() {
        setisVisible(false)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const player = event.target[0].value;
        // const userExisting = false;
        // user.forEach(check(person))
        // function check(person) {
        //     if (person == player)
        //         userExisting = true
        // }
        if (player.length < 2)
            console.info('Full Name must be at least 2 characters long!')
        setUser(prevUsers => [...prevUsers, player])
        console.log(user)
        // switch (player) {
        //     case player.length < 2:
        //         console.info('Full Name must be at least 2 characters long!');
        //         break;
        //     case userExisting == true:

    }
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUserDetails({ ...userDetails, [name]: value });
    }


    return <>


        <button onClick={showForm}>הוסף שחקן</button>
        {isVisible &&
            <form onSubmit={handleSubmit} noValidate>
                <div className='fullName'>
                    <label htmlFor="fullName">שם מלא</label>
                    <input type='text' name='fullName' onChange={handleChange} noValidate />
                </div>
                <br />
                <button onClick={hideForm}>סגור</button>
                <div className='submit'>
                    <button>הוסף</button>
                </div>
            </form>}

        {/* <input type="text" id="name" placeholder="first name:" required />
        <input type="password" id="password" placeholder="password:" required />
        <button onClick={signUp}>הוסף משתמש</button> */}

        {/*<input id="name" placeholder="name:" required />
        <br/>
        <input id="password" placeholder="password:" required />
        <br/>
        <button  id="login" onClick={logIn}>log in</button>
        <br/>
        <button  id="signUpLink" onClick={signUp}>sign up</button>*/}


    </>
}
export default AddUser;



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


    // function logIn() {
    //     const logInUserName = document.getElementById('name').value;
    //     const logInUserPassword = document.getElementById('password').value;
    //     if (!findUser(logInUserName, logInUserPassword)) {
    //         alert("you have to sign up")
    //         return
    //     }
    //     else {
    //         let user = new User(logInUserName, logInUserPassword);
    //         localStorage.setItem('player' + userNum, JSON.stringify(user));
    //         checkNumUser();
    //     }
    // }

    // function findUser(name, password) {
    //     let foundUser;
    //     let arrUsers = JSON.parse(localStorage.getItem(user)) || [];
    //     foundUser = arrUsers.find(person => {
    //         return person.name === name && person.password === password;
    //     })
    //     return foundUser;
    // }
















    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (validateForm(errors)) {
    //         console.info('Valid Form');
    //     } else {
    //         console.error('Invalid Form');
    //     }
    // }

    // const validateForm = (errors) => {
    //     let valid = true;
    //     Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    //     return valid;
    // };
    // const validEmailRegex = RegExp(
    //     /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    // );

    // const handleChange = (event) => {
    //     event.preventDefault();
    //     const { name, value } = event.target;

    //     switch (name) {
    //         case 'fullName':
    //             setErrors({ ...errors, fullName: value.length < 2 ? 'Full Name must be at least 2 characters long!' : '' });
    //             break;
    //         default:
    //             break;
    //     }

    //     setUserDetails({ ...userDetails, [name]: value });
    // }

