chrome.runtime.onMessage.addListener(function(request, sender, sendResponnse){

    if (request.todo == "showPageAction") {

        chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);

            //console.log("It works!")
    
            chrome.storage.sync.get(['user', 'pass'], function(stored){
                //console.log("Value is set to " + stored.user);
                //console.log("Value is set to " + stored.pass);
                var newUser = stored.user;
                var newPass = stored.pass;
                
                chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
                    chrome.tabs.sendMessage(tabs[0].id,{todo:"fillUser", storedUser: newUser})
                    chrome.tabs.sendMessage(tabs[0].id,{todo:"fillPass", storedPass: newPass})
                    //console.log("Sended!")
               });
           });
        });
    }
});



