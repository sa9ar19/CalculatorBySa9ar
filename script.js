var string = ""

var button = document.querySelectorAll(".button");

const displayPanel = document.getElementById("input");

var clear = document.querySelector(".delete").innerHTML

button.forEach(button =>
button.addEventListener("click",()=>{
  var value = button.innerHTML

  if(value == '='){
    var result = eval(string)

    displayPanel.innerHTML = result

    string = ""
  }
  else if(value == "C"){
    string = ""

    displayPanel.innerHTML = string
  }
  else if (value == clear){
    //substring method returns the string from starting index to end index but excluding the last index
    string = string.substring(0, string.length-1);

    displayPanel.innerHTML = string
  }
  else {
    string = string + value

    displayPanel.innerHTML = string
  }
  
}))
