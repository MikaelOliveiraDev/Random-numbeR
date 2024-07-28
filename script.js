function newNumber() {
	let min = document.querySelector("input#from").value
	let max = document.querySelector("input#to").value
	min = Number(min)
	max = Number(max)
	
	let range = max - min
	let number = Math.floor(Math.random() * range) + min
	console.log(min, max, range)
	document.querySelector("#number").innerText = number
}