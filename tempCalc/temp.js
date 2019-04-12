
const celciusInput = document.querySelector('#celcius > input');
const fInput = document.querySelector('#f > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundThatShit(num) {
    return Math.round(num*100)/100;
}

function celcisToFarenheitToKelvin() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp * 273.15;
    fInput.value = roundThatShit(fTemp);
    kelvinInput.value = roundThatShit(kTemp);
}

function farenheitToCelciusToKelvin(){
    const fTemp = parseFloat(fInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celciusInput.value = roundThatShit(cTemp);
    kelvinInput.value = roundThatShit(kTemp);
}

function kelvinToFarenheitToCelcius(){
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celciusInput.value = roundThatShit(cTemp);
    fInput.value = roundThatShit(fTemp);
}

celciusInput.addEventListener('input', celcisToFarenheitToKelvin);
fInput.addEventListener('input', farenheitToCelciusToKelvin);
kelvinInput.addEventListener('input', kelvinToFarenheitToCelcius);
