'use client'
import { useState } from "react";

export default function Child1({onLoginScreen}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            onLoginScreen();
            setError("Login success");
        } else {
            setError("Invalid username or password");
        }
    }
    return (
        <div>
        <div>
            <h1>Child1</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} placeholder="Nhập username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" value={password} placeholder="Nhập password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            <p>{error}</p>
        </div>
        </div>
    )
}