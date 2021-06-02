

var firstSet = document.getElementById("firstSet")
firstSet.style.display = "none";
var firstSetOn = document.getElementById("firstSetOn")
firstSetOn.style.display = "block";

var secondSet = document.getElementById("secondSet")
secondSet.style.display = "none";
var secondSetOn = document.getElementById("secondSetOn")
secondSetOn.style.display = "none";

var thirdSet = document.getElementById("thirdSet")
thirdSet.style.display = "none";
var thirdSetOn = document.getElementById("thirdSetOn")
thirdSetOn.style.display = "none";

var fourthSet = document.getElementById("fourthSet")
fourthSet.style.display = "none";
var fourthSetOn = document.getElementById("fourthSetOn")
fourthSetOn.style.display = "none";

var fifthSet = document.getElementById("fifthSet")
fifthSet.style.display = "none";
var fifthSetOn = document.getElementById("fifthSetOn")
fifthSetOn.style.display = "none";

function enterFiveSet(){
    var homeTeamName = document.getElementById("homeTeamFive").value
    var homePlayerOne = document.getElementById("homePlayerOne").value
    var homePlayerTwo = document.getElementById("homePlayerTwo").value
    var homePlayerThree = document.getElementById("homePlayerThree").value
    var homePlayerFour = document.getElementById("homePlayerFour").value
    var homePlayerFive = document.getElementById("homePlayerFive").value
    var homePlayerSix = document.getElementById("homePlayerSix").value
    var homeLibero = document.getElementById("homePlayerLib").value

    var awayTeamName = document.getElementById("awayTeamFive").value
    var awayplayerOne = document.getElementById("homePlayerOne").value
    var awayplayerTwo = document.getElementById("homePlayerTwo").value
    var awayPlayerThree = document.getElementById("homePlayerThree").value
    var awayPlayerFour = document.getElementById("homePlayerFour").value
    var awayPlayerFive = document.getElementById("homePlayerFive").value
    var awayPlayerSix = document.getElementById("homePlayerSix").value
    var awayLibero = document.getElementById("homePlayerLib").value

    document.getElementById("namesOfTeams").innerHTML = homeTeamName + " VS " + awayTeamName

}

var homeScore = 0
