//Custom function
function calculateTip() {

  //Store the data of inputs
  var billAmount = document.getElementById('billAmount').value;
  var serviceQuality = document.getElementById('serviceQuality').value;
  var numPeople = document.getElementsByClassName('totalPeople').value;

//Quick Validation
if(billAmount ==="" || serviceQuality == 0){
  window.alert("Please enter some values to get this baby up and running!");
}
}


//Hide the tip amount on load
document.getElementById('totalTip').style.display ="none";
document.getElementById('each').style.display = "none";

//Clicking the button calls our custom function
document.getElementById('calculate').onclick=function () { calculateTip(); };
