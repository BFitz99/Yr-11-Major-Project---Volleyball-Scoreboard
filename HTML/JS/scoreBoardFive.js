

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

var homeScore = [0,0,0,0,0]
var awayScore = [0,0,0,0,0]
var awaySetsWon = 0
var homeSetsWon = 0
window.addEventListener("keyup", onKeyUp, false);



function onKeyUp(event){
    var keyCode = event.keyCode;
    switch(keyCode){
        case 84:  //t key Home Sets goes up
            if (homeSetsWon < 3){
                if (awaySetsWon !== 3){ //when a team hasn't made it to 3 sets
                    homeSetsWon = homeSetsWon + 1 //adds one to home teams sets
                    document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
                    if (homeSetsWon + awaySetsWon == 1){ //display second set
                        secondSetOn.style.display = "block";
                        firstSetOn.style.display = "none";
                        firstSet.style.display = "block";
                    }else if(homeSetsWon + awaySetsWon == 2){ //display third set
                        secondSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "block";
                    }else if(homeSetsWon + awaySetsWon == 3){ //display fourth set
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
                    }else if(homeSetsWon + awaySetsWon == 4){ //display fifth set
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
                    }else{ //display first set
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fifthSet.style.display = "block";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                    }  
                }
            }
        break;
        case 71:  //g key Home Sets goes down
            if (homeSetsWon > 0){
                if (awaySetsWon !== 3){
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
                
            }
        break;
        case 87:  //W Key Home score goes up
            if (homeSetsWon + awaySetsWon == 0){
                if (homeScore[0] < 24){
                    homeScore[0] = homeScore[0] + 1
                }else if (homeScore[0] - awayScore[0] < 1){
                    homeScore[0] = homeScore[0] + 1
                }else{
                    homeScore[0] = homeScore[0] + 1
                    homeSetsWon = homeSetsWon + 1
                    secondSetOn.style.display = "block";
                    firstSetOn.style.display = "none";
                    firstSet.style.display = "block";
                } 
                document.getElementById("firstSetOn").innerHTML = homeScore[0] + " 1st " + awayScore[0]
                document.getElementById("firstSet").innerHTML = homeScore[0] + " 1st " + awayScore[0]
            }else if (homeSetsWon + awaySetsWon == 1){
                if (homeScore[1] < 24){
                    homeScore[1]= homeScore[1] + 1
                }else if (homeScore[1] - awayScore[1] < 1){
                    homeScore[1] = homeScore[1] + 1
                }else{
                    homeScore[1] = homeScore[1] + 1
                    homeSetsWon = homeSetsWon + 1
                    secondSetOn.style.display = "none";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    thirdSetOn.style.display = "block";
                } 
                document.getElementById("secondSetOn").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
                document.getElementById("secondSet").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
            }else if (homeSetsWon + awaySetsWon == 2){
                if (homeScore[2] < 24){
                    homeScore[2]= homeScore[2] + 1
                }else if (homeScore[2] - awayScore[2] < 1){
                    homeScore[2] = homeScore[2] + 1
                }else{
                    homeScore[2] = homeScore[2] + 1
                    homeSetsWon = homeSetsWon + 1
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
                } 
                document.getElementById("thirdSetOn").innerHTML = homeScore[2] + " 3rd " + awayScore[2]
                document.getElementById("thirdSet").innerHTML = homeScore[2] + " 3rd " + awayScore[2]
            }else if (homeSetsWon + awaySetsWon == 4){
                if (homeScore[3] < 24){
                    homeScore[3]= homeScore[3] + 1
                }else if (homeScore[3] - awayScore[3] < 1){
                    homeScore[3] = homeScore[3] + 1
                }else{
                    homeScore[3] = homeScore[3] + 1
                    homeSetsWon = homeSetsWon + 1
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
                } 
                document.getElementById("fourthSetOn").innerHTML = homeScore[3] + " 4th " + awayScore[3]
                document.getElementById("fourthSet").innerHTML = homeScore[3] + " 4th " + awayScore[3]
            }
            document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
        break;
        case 83:  //s Key Home score goes down
            homeScore = homeScore - 1
            document.getElementById("firstSetOn").innerHTML = homeScore + " VS " + awayScore
        break;
        case 89:  //y key Away Sets goes up
            if (awaySetsWon < 3){
                if (homeSetsWon !== 3){
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
            }  
        

        break;
        case 72:  //h key Away sets goes down
            if (awaySetsWon > 0 ){
                if (homeSetsWon !== 3){
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
