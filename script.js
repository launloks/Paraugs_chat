//console.log(1)
    let message = document.querySelector('.message').value;
    let messages = document.querySelector('.chatmessage');
    
function sentmessage() {
    console.log ('sentmessage()works');
    messages.innerHTML = messages.innerHTML+'<br>'+message.value;

    
}
async function loadChatmessage()

{
    let DatafromServer = await fetch('chatmessage.txt');
    let Data = await DatafromServer.text;

}