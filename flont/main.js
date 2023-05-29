

const conn = peer.connect('client2')
peer.on('connection', conn => {
	console.log('他のクライアントからの接続あり')
	conn.on('data', data => {
		console.log(`client1からのメッセージ：${data}`);
	});
});
conn.on('open',()=>{
    console.log('client2に接続できました。')
    conn.send('こんにちは！')
})