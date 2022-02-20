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
    link rel = "stylesheet"
href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
integrity = "sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
crossorigin = "anonymous" >

    <
    style >
    form {
        padding: 20 px;
        position: fixed;
        bottom: 0;
        width: 100 % ;
        padding - right: 50 px;
    }

#
messages {
    list - style - type: none;
    margin: 0;
    padding: 0;
    width: 100 % ;
}

#
messages li {
    padding: 5 px 10 px;
}

#
messages li: nth - child(odd) {
        background: #eee;
    } <
    /style> <
    /head>

<
body >

    <
    div class = "container-fluid" >
    <
    div class = "row" >
    <
    ul id = "messages" > < /ul> <
    /div> <
    div class = "row" >
    <
    div class = "col-lg-6" >
    <
    form action = "" >
    <
    div class = "input-group" >
    <
    input id = "m"
autocomplete = "off"
type = "text"
class = "form-control"
placeholder = "Message..."
aria - label = "Message..." >
    <
    span class = "input-group-btn" >
    <
    button class = "btn btn-secondary"
type = "submit" > Send < /button> <
    /span> <
    /div> <
    /form> <
    /div> <
    /div> <
    /div>

<
script src = "https://code.jquery.com/jquery-3.2.1.slim.min.js"
integrity = "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
crossorigin = "anonymous" > < /script> <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
integrity = "sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
crossorigin = "anonymous" > < /script> <
    script src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
integrity = "sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1"
crossorigin = "anonymous" > < /script> <
    script src = "/socket.io/socket.io.js" > < /script> <
    script >
    const room = 'javascript';
const socket = io('/tech');
$('form').submit(() => {
    let msg = $('#m').val();
    socket.emit('message', {
        msg,
        room
    });
    $('#m').val('');
    return false;
});

socket.on('connect', () => {
    socket.emit('join', {
        room: room
    });
})

socket.on('message', (msg) => {
        $('#messages').append($('<li>').text(msg));
    }) <
    /script>

<
/body>

<
/html>