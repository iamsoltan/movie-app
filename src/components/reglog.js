import React, { useState, useEffect } from 'react';
import "./Reglog.css";
import { NavLink } from 'react-router-dom';


function Reglog(props) {

    React.useEffect(() => {
        reglogform = document.getElementById("reglogform");


        logform = document.getElementById("myFormLogin");
        regform = document.getElementById("myFormRegister");

        regbtn = document.getElementById("registerbtn");
        logbtn = document.getElementById("loginbtn");
        logoutbtn = document.getElementById("logoutbtn");
        EmailReg = document.getElementById("emailRegister");
        PassReg = document.getElementById("passwordRegister");




    }, [])



    let NAME = "ok";
    // global vars
    let reglogform = document.getElementById("reglogform");


    let logform = document.getElementById("myFormLogin");
    let regform = document.getElementById("myFormRegister");

    let regbtn = document.getElementById("registerbtn");
    let logbtn = document.getElementById("loginbtn");
    let logoutbtn = document.getElementById("logoutbtn");

    let usersObjects = [];
    let users = [];

    //last user is still connected ?
    let lastUser = "not";
    //hide show items

    function show(x) {
        x.style.display = "block";
    }
    function hide(x) {
        x.style.display = "none";
    }


    // open and close of reg log forms
    function openFormLogin() {
        show(reglogform);
        hide(regform);
        show(logform);
    }
    function closeFormLogin() {
        hide(reglogform);
        hide(regform);
        hide(logform);
    }



    function openFormRegister() {
        show(reglogform);
        show(regform);
        hide(logform);

    }
    function closeFormRegister() {
        hide(reglogform);
        hide(regform);
        hide(logform);
    }

    // hide modal reglogform
    window.onclick = function (e) {
        if (e.target === reglogform) {
            closeFormRegister();
            closeFormLogin()
        }
    }
    //other syntax to hide modal
    /*document.addEventListener("click", (e)=>{
        if (e.target === reglogform) {
            closeFormRegister();
            closeFormLogin()
        }
    })*/

    /********************************* user object Constructor ************************ */
    function User(y) {
        this.email = "";
        this.password = "";
        this.islogged = false;
        this.adminUser = "user";
        this.fav = [];

        this.login = function () {
            this.islogged = true;
        }
        this.logout = function () {
            this.islogged = false;
        }

    }
    /*------------------------------Login function--------------------------------------------- */



    function login() {
        let emaillogin = document.getElementById("emailLogin").value;
        let passwordlogin = document.getElementById("passwordLogin").value;

        if ((window[emaillogin]) && lastUser == "not") {
            if (window[emaillogin].password == passwordlogin) {
                window[emaillogin].login();
                lastUser = "still";
                closeFormLogin();
                hide(reglogform);
                hide(regbtn);
                hide(logbtn);
                show(logoutbtn);

                alert("Congrats !,you are succussfully logged in !");
                NAME = window[emaillogin].email;

                logoutbtn.innerHTML = "Logout from  " + NAME;


                props.getUser(window[emaillogin]);

            } else {
                alert("right Email But wrong password!")
            }
        } else {
            alert("whether wrong Email or not registred , register first please !")
        }

    }

    /*------------------------------Register function--------------------------------------------- */
    let EmailReg = document.getElementById("emailRegister");
    let PassReg = document.getElementById("passwordRegister");

    function register() {

        let emailRegister = EmailReg.value;
        let passwordRegister = PassReg.value;
        if (controlM(EmailReg) == true) {
            if (controlP(PassReg) == true) {
                if ((users.includes(emailRegister) == true) && (lastUser == "not")) {
                    alert("you can't register with the same email more than once !");
                } else {
                    window[emailRegister] = new User();
                    window[emailRegister].email = emailRegister;
                    window[emailRegister].password = passwordRegister;
                    if (window[emailRegister].email == "kmkhalilo@gmail.com") { window[emailRegister].adminUser = "admin" };
                    users.push(emailRegister);
                    usersObjects.push(window[emailRegister]);

                    alert("succussfull registration !  you may now log in !")
                    closeFormRegister();



                }
            }
        }
    }


    /*--------------------------------logout------------------------------------------- */


    function logout() {
        console.log("usersObjects 1 : ", usersObjects);

        lastUser = "not";
        hide(reglogform);
        hide(regform);
        hide(logform);
        hide(logoutbtn);
        show(regbtn);
        show(logbtn);
        console.log("usersObjects 2 : ", usersObjects);

        props.getUser("");
        console.log("usersObjects 3 : ", usersObjects);

    }

    /*--------------------------------control Email with regex------------------------------------------- */

    function controlM(x) {
        const patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (patt.test(x.value) == false) {
            x.style.color = "red";
            x.value = "please enter a valid Email adress !";
            setTimeout(() => {
                x.value = "";
                x.style.color = "black";
                x.placeholder = "please enter a valid Email adress !";
            }, 1000);
        };
        return patt.test(x.value);
    }


    function controlP(z) {
        const pattx = /^\w{8}$/;
        if (pattx.test(z.value) == false) {
            z.value = "";
            z.type = "email";
            z.style.color = "red";
            z.value = "must be 8 characters !";
            setTimeout(() => {
                z.value = "";
                z.type = "password";
                z.style.color = "black";
                z.placeholder = "must be 8 characters !";
            }, 1000);
        };
        return pattx.test(z.value);
    }


    return (
        <React.Fragment>
            <div className="btn-container">
                <button className="register-button" id="registerbtn" onClick={openFormRegister}>register</button>
                <NavLink to="/"><button className="logout-button" id="logoutbtn" onClick={logout} >{"logout"}{NAME}</button></NavLink>
                <button className="open-button" id="loginbtn" onClick={openFormLogin}>login</button>
            </div>
            <div id="reglogform">
                {/* register form */}
                <div className="form-register-popup" id="myFormRegister">
                    <form className="form-container">
                        <h1>Register</h1>

                        <b>Email</b>
                        <input type="email" placeholder="Enter Email" name="email" id="emailRegister" required />

                        <b>Password</b>
                        <input type="password" placeholder="Enter Password" name="psw" id="passwordRegister" required />

                        <button type='button' id="registerSubmit" className="btn" onClick={register} >Register</button>
                        <button type='button' className="btn cancel" onClick={closeFormRegister}>Close</button>
                    </form>
                </div>
                {/*  login form */}
                <div className="form-login-popup" id="myFormLogin">
                    <form className="form-container">
                        <h1>Login</h1>

                        <b>Email</b>
                        <input type="email" placeholder="Enter Email" name="email" id="emailLogin" required />

                        <b>Password</b>
                        <input type="password" placeholder="Enter Password" name="psw" id="passwordLogin" required />

                        <button type='button' id="LoginSubmit" className="btn" onClick={login}>Login</button>
                        <button type='button' className="btn cancel" onClick={closeFormLogin}>Close</button>
                    </form>
                </div>
            </div>

        </React.Fragment>
    );
};


export default Reglog;
