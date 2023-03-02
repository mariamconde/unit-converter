/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.2808
const literToGallon = 0.2642
const kilogramToPound = 2.2046
const gallonToLiter = 3.7854


convertBtn.addEventListener("click", function () {
    let inputValue = inputEl.value
    lengthEl.textContent = ` ${inputValue} meters = ${Number(inputValue * meterToFeet).toFixed(3)} feet | ${inputValue} feet = ${Number(inputValue / meterToFeet).toFixed(3)} meters`
    volumeEl.textContent = `${inputValue} liters = ${Number(inputValue * literToGallon).toFixed(3)} gallons | ${inputValue} gallons = ${Number(inputValue  * gallonToLiter).toFixed(3)} liters`
    massEl.textContent = `${inputValue} kilos = ${Number(inputValue * kilogramToPound).toFixed(3)} pounds | ${inputValue} pounds = ${Number(inputValue / kilogramToPound).toFixed(3)} kilos`

})



