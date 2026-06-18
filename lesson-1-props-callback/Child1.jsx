export default function Child1(props) {
    return (
        <div>
            <h1>Child1</h1>
            <p>Tin nhắn nhận từ component cha: <strong>{props.message}</strong></p>
        </div>
    )
}