//console.log(1)
function sentmessage() {
    console.log ('sentmessage()works');
    let message = document.querySelector('message').value;
    let messages = document.querySelector('chatmessage');
    messages.innerHTML = messages.innerHTML+'<br>'+message.value;

    
}