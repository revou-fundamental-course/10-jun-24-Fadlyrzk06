//  let celciusValue = document.getElementById('celciusValue'); 
 let koversiButton = document.getElementById('konversiButton'); 
 let resetButton = document.getElementById('resetButton'); 
 let reverseButton = document.getElementById('reverseButton'); 
//  let fahrenheitValue = document.getElementById('fahrenheitValue')
 let case1 = document.getElementById('case1');
 let case2 = document.getElementById('case2');
 let case3 = document.getElementById('case3');
 let case4 = document.getElementById('case4');

 let infoRumus1 = document.getElementById('infoRumus1');
 let infoRumus2 = document.getElementById('infoRumus2');

 case2.style.display='none';
 case3.style.display='none';
 
 infoRumus2.style.display='none';


 function convertion(reverse){
    const celciusValue = document.getElementById('celciusValue'); 
    const fahrenheitValue = document.getElementById('fahrenheitValue');
    const rumus = document.getElementById('rumus');
    let celcius = parseFloat(celciusValue.value);
    let fahrenheit = parseFloat(fahrenheitValue.value);
    let rumuss = "";

    if (reverse && !isNaN(fahrenheit)){
        celcius = (fahrenheit - 32) * 5 / 9;
        rumuss = fahrenheit + '°F = (' + fahrenheit + '-32 * 5/9 = ' +  celcius.toFixed(1) + ')°C';
        celciusValue.value = celcius % 1 === 0 ? celcius.toFixed(0) : celcius.toFixed(1);
        infoRumus1.style.display='none';
        infoRumus2.style.display='block';
        // case3.style.display='block';
        // case4.style.display='none';
    } else if (!reverse && !isNaN(celcius)) {
        fahrenheit = (celcius * 9 / 5) + 32 ;
        rumuss = celcius + '°C = ('+ celcius + ' * 9/5) + 32 = ' + fahrenheit.toFixed(1)+ '°F';
        fahrenheitValue.value = fahrenheit % 1 === 0 ? fahrenheit.toFixed(0) : fahrenheit.toFixed(1);
        infoRumus1.style.display='block';
        infoRumus2.style.display='none';
        // case3.style.display='none';
        // case4.style.display='block';
    }
    rumus.value = rumuss;
}

function clearForm() {
    document.getElementById('celciusValue').value = '';
    document.getElementById('fahrenheitValue').value = '';
    document.getElementById('rumus').value = '';
}