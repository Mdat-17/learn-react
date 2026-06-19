'use client'
export default function Child2({onLogout}) {
    return (
        <div>
            <h1>Child2</h1>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}
