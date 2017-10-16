
        var wins = 0;
        var losses= 0;
        var randomNumber = 0;
        var crystalValuesArr = [0,0,0,0];
        var totScore = 0;
        var status =  'new';

        function addWins() {
          wins++;
        }

        function addLosses() {
          losses++;
        }

        function getRandomNumber(minVal,maxVal) {
          return (Math.floor(Math.random() * (maxVal - minVal)) + minVal);
        }

        function initCrystalValues(){
            crystalValuesArr[0] = getRandomNumber(1,12);
            var crystalVal = getRandomNumber(1,12);
            for (i=1; i < 4; i++){
                while (crystalValuesArr.includes(crystalVal)){
                    crystalVal = getRandomNumber(1,12);
                }
                crystalValuesArr[i] = crystalVal;
            }
        }

        function match(n1,n2) {
             if  (n1===n2){
              return true ;
            }
            else{
               return false;
             }        
        }

        function initGame(stat){
          totScore = 0;
          initCrystalValues();
          randomNumber =0;
          for (var i = 0; i < 4; i++) {
             $("#img" + (i+1)).attr("data-value", crystalValuesArr[i]);
          }
          randomNumber = getRandomNumber(19,120);
          if (status === 'new'){
              wins =0;
              losses =0;
              //$("#randomNumber").html(randomNumber);
          }
          status = 'new';
          refreshDisplay(); 
        }

        function refreshDisplay(){
           $("#randomNumber").html(randomNumber);
           $("#totalScore").html("Your Total Score is: " + totScore);
           $("#wins").html("Wins: " + wins);
           $("#losses").html("Losses: " + losses);
        }

 //       function write() {
 //         console.log(wins);
 //         console.log(losses);
 //         console.log(totScore);
 //         console.log(crystalValuesArr);
 //         console.log(status);
 //         console.log(randomNumber);
 //         console.log($("#img1").attr("data-value"));
 //         console.log($("#img2").attr("data-value"));
 //         console.log($("#img3").attr("data-value"));
 //         console.log($("#img4").attr("data-value"));
 //       }

$(document).ready(function() {



  $(".imgCrystals").on("click", function() {
        if (status==='new') {
            totScore = totScore + parseInt($(this).attr("data-value"));
            $("#totalScore").html("Your Total Score is: " + totScore);
            
            if (match(totScore,randomNumber)){
                addWins();
                status = 'resume';
            }
            else if (totScore > randomNumber){
              addLosses();
              status = 'resume';
            }
            refreshDisplay();
            
      }

    });

  $("#btnNewGame").on("click", function() {
     status ='new';
     initGame(status);
  });

  $("#btnResume").on("click", function() {
    if (status==='resume'){
      initGame(status);
    }
  });

  $("#btnDisplay").on("click", function() {
     write();
  });


  });