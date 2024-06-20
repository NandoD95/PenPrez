import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn, setUserId }) {

    const [loginUser, setLoginUser] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const navigate = useNavigate()

    function logIn(e) {
        e.preventDefault()
        fetch('/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    username: loginUser,
                    password: loginPassword
                }
            )
        })
            .then(r => {
                if (r.ok) {
                    return r.json()
                }
                else {
                    alert("Not Valid Login")
                    return undefined
                }
            })
            .then(data => {
                if (data === undefined) {
                    alert("Something went wrong. Please try again.")
                }
                else {
                    const userId = data.id
                    setUserId(userId)
                    setLoginPassword("")
                    setLoginUser("")
                    navigate(`/user/${userId}`)
                    setIsLoggedIn(true)
                }
            })
    }

    return (
        <>
            <div className="container">
                <h1>PenPrez</h1>
            </div>
            <div>
                <h2 className="h2-login">Welcome to PenPrez</h2>
                <form className="login-form" onSubmit={(e) => logIn(e)}>
                    <div>
                        <h3 className="h3-login">Username:</h3>
                        <input id="username" className="inputs" autoComplete="username" onChange={(e) => setLoginUser(e.target.value)} />
                    </div>
                    <div>
                        <h3 className="">Password:</h3>
                        <input id="password" className="inputs" autoComplete="current-password" type="password" onChange={(e) => setLoginPassword(e.target.value)} />
                    </div>
                    <button className="login-btn" type="submit">Log In</button>
                </form>
                <h3 className="">New to PenPrez? <Link className="text-primaryBlue border-b-2 border-primaryBlue hover:border-primaryPurple hover:text-primaryPurple" to="/signup">Sign Up</Link></h3>
            </div>
        </>
    )
}

export default Login;