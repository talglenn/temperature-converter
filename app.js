const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(number){
  return Math.round(number*100)/100;
}

function celciusToFahrenheitToKelvin(){
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = (cTemp * (9/5) ) + 32
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelciusToKelvin(){
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5/9);
  const kTemp = (fTemp + 459.67) * 5/9;
  celciusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelciusToFahrenheit(){
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = 9/5 * (kTemp - 273) + 32;
  celciusInput.value = roundNum(cTemp);
  fahrenheitInput.value = roundNum(fTemp);
}

function main(){
  celciusInput.addEventListener('input', celciusToFahrenheitToKelvin);
  fahrenheitInput.addEventListener('input', fahrenheitToCelciusToKelvin);
  kelvinInput.addEventListener('input', kelvinToCelciusToFahrenheit);
}

main();
