

// Conversion kilometer To Meter

function kilometerToMeter(kilometer){
        var meter = kilometer * 1000;
         return meter;
}
 var result = kilometerToMeter(10);
 console.log(result);






// budgetCalculator

function budgetCalculator(watch, mobile, laptop){
        var result = watch + mobile + laptop;
        return result;
}
var sum = budgetCalculator(50, 100, 500);
console.log(sum)






// hotelCost 

function hotelCost(staying){
 var cost = 0;
 if(staying <=10){
     cost = staying * 100;
 }
 else if(staying <= 20){
     var firstTenDays = 10 * 100;
     var remaining = staying - 10;
     var secondTenDays = remaining * 80;
     cost = firstTenDays + secondTenDays;
 }
 else{
     var firstTenDays = 10 * 100;
     var secondTenDays = 10 * 80;
     var remaining = staying - 20;
     var restingDays = remaining * 50;
     cost = firstTenDays + secondTenDays + restingDays;
 }
     return cost;
}
  var result = hotelCost(25);
  console.log(result);




  


// megaFriend 

function megaFriend(friendsName){
        var max = friendsName[0];
        for(var i=0; i <= friendsName.length; i++){
                var element = friendsName[i];
               if(element > max){
                       max = element;
               }
                } 
                return max;
        }
var friendsName = ["Amit", "Rafi", "Tipu", "Tutul", "Anik", "Mina", "Emon", "Zulker"];
var result = megaFriend(friendsName);
console.log(result);


