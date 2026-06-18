export default function Child1({status, onStatusChange}) {
    return (
        <div style={{ margin: '20px', padding: '15px', border: '1px dashed red' }}>
            <h1>Child1</h1>
            <p>Cha hiển thị: <strong>{status}</strong></p>

        <div style ={{ display :'flex', flexDirection: 'column', gap: '10px', maxWidth: '250px', padding: '10px', border: '1px dashed blue'}}>
            {/* Kích hoạt cha khi con thay đổi */}
            <button onClick={() => onStatusChange('Đang tập chạy')}>
                AI phát hiện đang chạy
            </button>

            <button onClick={() => onStatusChange('Đang tập leo cầu thang')}>
                AI phát hiện đang leo cầu thang
            </button>
        </div>      
    </div>
    )
}