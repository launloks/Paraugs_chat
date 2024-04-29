//console.log(1)
    let message = document.querySelector('.message');
    let messages = document.querySelector('.chatmessage');
    let name= document.querySelector('.name');
    
function sentmessage() {
    console.log ('sentmessage()works');
    messages.innerHTML = messages.innerHTML+'<br>'+ message.value;

    
}
async function loadChatmessage()

{
    let DatafromServer = await fetch('Chatmessage.txt');
    let Data = await DatafromServer.text;
   // console.log(Data);
   message.innerHTML = Data;
}