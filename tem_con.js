const textBox = document.getElementById("textBox");
const toFarenheit= document.getElementById("toFarenheit");
const toCelsius= document.getElementById("toCelsius");
const result= document.getElementById("result");
const toKelvin = document.getElementById("toKelvin");
const toCelsiuss = document.getElementById("toCelsiuss");
let temp;

function convert(){
    if(toFarenheit.checked){
        temp = Number(textBox.value);
        temp= temp*9/5 + 32;
        result.textContent = temp.toFixed(1)+ "°F";
    }
    else if(toCelsius.checked){
        temp= Number(textBox.value);
        temp= (temp-32)*(5/9);
        result.textContent= temp.toFixed(1) + "°C";
    }
    else if(toKelvin.checked){
        temp = Number(textBox.value);
        temp = (temp+273);
        result.textContent = temp.toFixed(1) + "°K";
    }
    else if(toCelsiuss.checked){
        temp = Number(textBox.value);
        temp = (temp-273);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent="Select a unit";
    }
}