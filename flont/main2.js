
const conn = peer.connect('client1')
peer.on('connection', conn => {
	console.log('他のクライアントからの接続あり')
	conn.on('data', data => {
		console.log(`client1からのメッセージ：${data}`);
	});
});
conn.on('open',()=>{
    console.log('client1に接続できました。')
    conn.send('こんにちは！')

})