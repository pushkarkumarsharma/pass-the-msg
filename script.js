const messgaeInput=document.getElementById("message-input");
function getmessage(){
    document.getElementById("passed").innerHTML=messgaeInput.value;
    messgaeInput.value="";

}