//document.getElementById("countr").innerText = 5

let counter = 0

function increment(){
  counter = counter + 1
  document.getElementById("countr").innerText = counter
  console.log("Current logged amount: " + counter)
}

function reset(){
  counter = 0
  document.getElementById("countr").innerText = counter
}
