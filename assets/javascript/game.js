
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

          initCrystalValues();
          for (var i = 0; i < 4; i++) {
              $("#img" + (i+1)).attr("data-value", crystalValuesArr[i]);
             // $("#buttons").append(letterBtn);
          }
          randomNumber = getRandomNumber(19,120);
          $("#randomNumber").html(randomNumber);
        }

        function write() {
          console.log(wins);
          console.log(losses);
          console.log(totScore);
          console.log(crystalValuesArr);
          console.log(status);
          console.log(randomNumber);
          console.log($("#img1").attr("data-value"));
          console.log($("#img2").attr("data-value"));
          console.log($("#img3").attr("data-value"));
          console.log($("#img4").attr("data-value"));
        }


$(document).ready(function() {

    initGame(status);
    write();

});
