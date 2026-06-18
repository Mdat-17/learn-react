export default function Child3(props) {
    return (
        <div>
            <h1>Child3</h1>
            <button onClick={() => props.onReport(10)}>Nhấn để gọi hàm cha</button>
        </div>
    )
}