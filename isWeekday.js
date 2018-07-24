function isWeekday(inputDay){
  if(!inputDay.startsWith("S")){
    return "Is A Weekday";
  }
  else {
    return "Is Not A Weekday"
  }
}
var weekday = isWeekday("Friday");
console.log(weekday);

//Original alternative function code:
// var notWeekend = !input.startsWith("S");
// return notWeekend;
// (will return boolean)
