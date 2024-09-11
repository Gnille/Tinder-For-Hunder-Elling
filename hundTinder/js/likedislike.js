var likeDiv = document.getElementById("heart");

var settingsIcon = document.getElementById("settingsIcon");

var settingsTab = document.getElementById("settingsTab");

var darkMode = document.getElementById("toggleDarkMode");

var whiteMode = document.getElementById("toggleWhiteMode");

var chatBox = document.getElementById("chatBoxColumn")

// Images of dogs
var dogArray = [
    "images/stlitenhund.jpg",
    "images/veldigsnillhund.jpg",
    "images/kjempesnille.jpg",
    "images/cozydog.png",
    "images/goldenRetriever.jpg"
]

var previousRandom = -1;
// After pressing like, a random picture of a another dog will appear.
function dogPic(){
    var random;
    var chatBox = true;
    do {
        random = Math.floor(Math.random() * dogArray.length);
    } while (random === previousRandom); 

    previousRandom = random;
    document.getElementById("dogs").src = dogArray[random];
    return chatBox;
}
// opens settings tab, has dark mode and light mode implemented, need to make it a buttin which "toggles"
function openSettings(){
    if(settingsTab.style.display === "none"){
        settingsTab.style.display = "block";
        darkMode.innerHTML = "Dark mode";
        whiteMode.innerHTML = "Light mode";
        
    }else{
        settingsTab.style.display = "none";
    }
}


function darkToggle(){
    document.body.style.background = "#121212";
}

function whiteToggle(){
    document.body.style.background = "white";
}

function chatBox(){
    if(dogPic == true){

    }
}

likeDiv.onclick = dogPic;

settingsIcon.onclick = openSettings;

darkMode.onclick = darkToggle;

whiteMode.onclick = whiteToggle;

