

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

    if (homeTeamName == ""){
        if (awayTeamName == ""){
            document.getElementById("namesOfTeams").innerHTML = "Home" + " VS " + "Away"
        }else{
            document.getElementById("namesOfTeams").innerHTML = "Home" + " VS " + awayTeamName
        }
    }else if (awayTeamName == ""){
        if (homeTeamName == ""){
            document.getElementById("namesOfTeams").innerHTML = "Home" + " VS " + "Away"
        }else{
            document.getElementById("namesOfTeams").innerHTML = homeTeamName + " VS " + "Away"  
        }
    }else{
        document.getElementById("namesOfTeams").innerHTML = homeTeamName + " VS " + awayTeamName
    }
}

var homeScore = 0
var awayScore = 0
var awaySetsWon = 0
var homeSetsWon = 0
var homeScoreTwo = 0
var awayScoreTwo = 0
window.addEventListener("keyup", onKeyUp, false);


function onKeyUp(event){
    var keyCode = event.keyCode;
    switch(keyCode){
        case 84:  //t key Home Sets goes up
            if (homeSetsWon < 3){
                homeSetsWon = homeSetsWon + 1
                document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
                if (homeSetsWon + awaySetsWon == 1){
                    secondSetOn.style.display = "block";
                    firstSetOn.style.display = "none";
                    firstSet.style.display = "block";
                }else if(homeSetsWon + awaySetsWon == 2){
                    secondSetOn.style.display = "none";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    thirdSetOn.style.display = "block";
                }else if(homeSetsWon + awaySetsWon == 3){
                    if (homeSetsWon == 3){
                        fourthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                    }else{
                        fourthSetOn.style.display = "block";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                    }
                }else if(homeSetsWon + awaySetsWon == 4){
                    if (homeSetsWon == 3){
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                    }else{
                        fifthSetOn.style.display = "block";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                    }
                }else{
                    fifthSetOn.style.display = "none";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    fifthSet.style.display = "block";
                    thirdSet.style.display = "block";
                    fourthSet.style.display = "block";
                }
            }
        break;
        case 71:  //g key Home Sets goes down
            if (homeSetsWon > 0){
                homeSetsWon = homeSetsWon - 1
                document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
                if (homeSetsWon + awaySetsWon == 0){
                    secondSetOn.style.display = "none";
                    firstSetOn.style.display = "block";
                    firstSet.style.display = "none";
                }else if(homeSetsWon + awaySetsWon == 1){
                    secondSetOn.style.display = "block";
                    secondSet.style.display = "none";
                    firstSet.style.display = "block";
                    thirdSetOn.style.display = "none";
                }else if(homeSetsWon + awaySetsWon == 2){
                    fourthSetOn.style.display = "none";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    thirdSetOn.style.display = "block";
                    thirdSet.style.display = "none";
                }else if(homeSetsWon + awaySetsWon == 3){
                    fifthSetOn.style.display = "none";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    fourthSetOn.style.display = "block";
                    thirdSet.style.display = "block";
                    fourthSet.style.display = "none";
                }else if(homeSetsWon + awaySetsWon == 4){
                    fifthSetOn.style.display = "block";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    fifthSet.style.display = "none";
                    thirdSet.style.display = "block";
                    fourthSet.style.display = "block";
                }
            }
        break;
        case 87:  //W Key Home score goes up
            if (homeSetsWon + awaySetsWon == 0){
                homeScore = homeScore + 1
                document.getElementById("firstSetOn").innerHTML = homeScore + " VS " + awayScore
                document.getElementById("firstSet").innerHTML = homeScore + " VS " + awayScore
            }else if (homeSetsWon + awaySetsWon == 1){
                homeScoreTwo = homeScoreTwo + 1
                document.getElementById("secondSetOn").innerHTML = homeScoreTwo + " VS " + awayScoreTwo
                document.getElementById("secondSet").innerHTML = homeScoreTwo + " VS " + awayScoreTwo
            }
        break;
        case 83:  //s Key Home score goes down
            homeScore = homeScore - 1
            document.getElementById("firstSetOn").innerHTML = homeScore + " VS " + awayScore
        break;
        case 89:  //y key Away Sets goes up
            if (awaySetsWon < 3){
            awaySetsWon = awaySetsWon + 1
            document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
                if (homeSetsWon + awaySetsWon == 1){
                    secondSetOn.style.display = "block";
                    firstSetOn.style.display = "none";
                    firstSet.style.display = "block";
                }else if(homeSetsWon + awaySetsWon == 2){
                    secondSetOn.style.display = "none";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    thirdSetOn.style.display = "block";
                }else if(homeSetsWon + awaySetsWon == 3){
                    if (awaySetsWon == 3){
                        fourthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                    }else{
                        fourthSetOn.style.display = "block";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                    }
                }else if(homeSetsWon + awaySetsWon == 4){
                    if (awaySetsWon == 3){
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                    }else{
                        fifthSetOn.style.display = "block";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                    }
                }else{
                    fifthSetOn.style.display = "none";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    fifthSet.style.display = "block";
                    thirdSet.style.display = "block";
                    fourthSet.style.display = "block";
                }
            }

            break;
            case 72:  //h key Away sets goes down
            if (awaySetsWon > 0 ){
            awaySetsWon = awaySetsWon - 1
            document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
                if (homeSetsWon + awaySetsWon == 0){
                    secondSetOn.style.display = "none";
                    firstSetOn.style.display = "block";
                    firstSet.style.display = "none";
                }else if(homeSetsWon + awaySetsWon == 1){
                    secondSetOn.style.display = "block";
                    secondSet.style.display = "none";
                    firstSet.style.display = "block";
                    thirdSetOn.style.display = "none";
                }else if(homeSetsWon + awaySetsWon == 2){
                    fourthSetOn.style.display = "none";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    thirdSetOn.style.display = "block";
                    thirdSet.style.display = "none";
                }else if(homeSetsWon + awaySetsWon == 3){
                    fifthSetOn.style.display = "none";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    fourthSetOn.style.display = "block";
                    thirdSet.style.display = "block";
                    fourthSet.style.display = "none";
                }else if(homeSetsWon + awaySetsWon == 4){
                    fifthSetOn.style.display = "block";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    fifthSet.style.display = "none";
                    thirdSet.style.display = "block";
                    fourthSet.style.display = "block";
                }
            }
        break;
        case 73:  //i key Away score goes up
            awayScore = awayScore + 1
            document.getElementById("firstSetOn").innerHTML = homeScore + " VS " + awayScore
        break;
        case 75:  //k key Away score goes down
            awayScore = awayScore - 1
            document.getElementById("firstSetOn").innerHTML = homeScore + " VS " + awayScore
        break;
    }
}
