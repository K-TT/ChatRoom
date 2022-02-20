< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    title > ChatRoom < /title> <
    meta charset = "UTF-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1" >
    <
    /head>

<
body >

    <
    script src = "/socket.io" >
    <
    /body>

<
/html>sole.log('user connected');
socket.emit('message', { manny: 'hey there!' });
socket.on('another event', (data) => {
console.log(data);
});
})