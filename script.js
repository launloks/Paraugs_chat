//console.log(1)
    let message = document.querySelector('.message').value;
    let messages = document.querySelector('.chatmessage');
    
function sentmessage() {
    console.log ('sentmessage()works');
    messages.innerHTML = messages.innerHTML+'<br>'+message.value;

    
}