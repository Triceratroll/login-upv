chrome.runtime.sendMessage({todo: "showPageAction"});
console.log("Content!")

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo === "fillUser"){
        var user = request.storedUser;
        document.getElementsByName("dni")[0].value = user;
        console.log(user);
    }
    if(request.todo === "fillPass"){
        var pass = request.storedPass;
        document.getElementsByName("clau")[0].value = pass;
        console.log(pass);
    }
    document.getElementsByClassName('upv_btsubmit')[0].click();
});