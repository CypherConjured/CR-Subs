chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({location:'www.google.com'}, function(){ 
        console.log("File location set!");
    });
    
    /*
    file://D:/My Documents/Downloads/[Kamigami] Senyuu - 26 [1080p x265 AAC].ass

    //Leftover code from the chrome tutorial.
    //Will be removed eventually, here for reference.
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'www.crunchyroll.com'},
            })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
    */
});

chrome.webRequest.onBeforeRequest.addListener( 
    function(details){
        //chrome.storage.sync.get('location', function(data){
            console.log("webRequest event triggered on data: ");
            console.log( details );
            if( details.url.indexOf(".txt") != -1 ){
                return { cancel: true };
            }else{
                console.log("String not matched.");
            }
        //});
    },
    {
        urls: [
            "*://www.crunchyroll.com/senyu/*",
            "*://a-vrv.akamaized.net/evs/*.txt*",
            "*://dl.v.vrv.co/*.txt*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
    },
        ["blocking"]
);