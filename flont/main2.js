let send_user = "client1"

let conn = peer.connect(send_user)
peer.on('connection', conn => {

	conn.on('data', data => {
		alert(data)
	});
});
conn.on('open',()=>{
    console.log('client1に接続できました。')
    conn.send('こんにちは！')

})
const send_mess = (mess)=>{
	let box = document.getElementById("box")

	// peer.destroy();
	if(conn){
		conn.send(box.value)
		// conn = null
		
	}
}