
//Leftover code from the chrome tutorial.
//Will be removed eventually, here for reference.
let page = document.getElementById('buttonDiv');
const kButtonColors = [];
function constructOptions(kButtonColors){
    for(let i of kButtonColors){
        let button = document.createElement('button');
        button.style.backgroundColor = i;
        button.addEventListener('click', function(){
            chrome.storage.sync.set({color: i}, function(){
                console.log("color is" + i);
            })
        });
        page.appendChild(button);
    }
}
constructOptions(kButtonColors);