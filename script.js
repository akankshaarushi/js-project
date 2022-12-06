 "use strict";

//* getting all the values of the elements


// from option
const value1 = document.getElementById('unit1');       

// to option
const value2 = document.getElementById('unit2');                   

// Enter value
const enterValue = document.getElementById('in'); 

// Output value
const outputValue = document.getElementById('out');       

// Convert Button
const convert = document.getElementById('clickToConvert');    

// swap button
const swap = document.getElementById('swapbtn');   

//  reset button
const reset = document.getElementById('resetbtn');   

//---------------------------------------------------------

// Add event on convert button

//operation no.1 converting from Binary to Decimal format

convert.addEventListener('click', ()=>{
    var val1 = +value1.value;
    var val2 = +value2.value;

    if(val1 == 2 && val2 == 10){
        var text = enterValue.value;
        if(!isNaN(Number('0B' + text))){
            var convertedVal = (parseInt(text, 2));
            outputValue.value = convertedVal;
            console.log(convertedVal);
            console.log(outputValue.value);
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }

// operation no.2 for converting from Binary to Octal


    if(val1 == 2 && val2 == 8){
        var text = enterValue.value;
        if(!(Number.isNaN('0B'+text))){
            var convertedVal = (parseInt(text, 2)).toString(8);
            outputValue.value = convertedVal;
            console.log(convertedVal);
            console.log(outputValue.value);
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }

//operation no.3 for converting from Binary to Hexadecimal
if(val1 == 2 && val2 == 16){
    var text = enterValue.value;
    if(!(Number.isNaN('0B'+text))){
        var convertedVal = (parseInt(text, 2)).toString(16);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

//operation no.4 for converting from Hexadecimal to Binary

if(val1 == 16 && val2 == 2){
    var text = enterValue.value;
    if(!(Number.isNaN('0x'+text))){
        var convertedVal = (parseInt(text, 16)).toString(2);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

// operation no.5 for converting from Hexadecimal to Decimal

if(val1 == 16 && val2 == 10){
    var text = enterValue.value;
    if(!(Number.isNaN('0x'+text))){
        var convertedVal = (parseInt(text, 16));
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}


// operation no.6 for converting from Hexadecimal to Octal

if(val1 == 16 && val2 == 8){
    var text = enterValue.value;
    if(!(Number.isNaN('0x'+text))){
        var convertedVal = (parseInt(text, 16)).toString(8);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

// operation no.7 operation no.4 for converting from Decimal to Binary

if(val1 == 10 && val2 == 2){
    var text = enterValue.value;
    if(!isNaN(text)){
        var convertedVal = (parseInt(text, 10)).toString(2);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

//operation no.8 for converting from Decimal to Octal

if(val1 == 10 && val2 == 8){
    var text = enterValue.value;
    if(!isNaN(text)){
        var convertedVal = (parseInt(text, 10)).toString(8);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}


//operation no.9 for converting from Decimal to Hexadecimal

if(val1 == 10 && val2 == 16){
    var text = enterValue.value;
    if(!isNaN(text)){
        var convertedVal = (parseInt(text, 10)).toString(16);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

//operation no.10 for converting from Octal to Binary

if(val1 == 8 && val2 == 2){
    var text = enterValue.value;
    if(!(Number.isNaN('0O'+text))){
        var convertedVal = (parseInt(text, 8)).toString(2);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

//operation no.11 for converting from Octal to Decimal

if(val1 == 8 && val2 == 10){
    var text = enterValue.value;
    if(!(Number.isNaN('0O'+text))){
        var convertedVal = (parseInt(text, 8));
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

//operation no.12 for converting from Octal to Hexadecimal

if(val1 == 8 && val2 == 16){
    var text = enterValue.value;
    if(!(Number.isNaN('0O'+text))){
        var convertedVal = (parseInt(text, 8)).toString(16);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

});

//------------------------------------------

// Add Event on Swap Button

swapbtn.addEventListener('click', ()=>{
    let changeTo = value2.value;
    let changeFrom = value1.value;
    value1.value = changeTo;
    value2.value = changeFrom;

    let inputFrom = enterValue.value;
    let inputTo = outputValue.value;
    outputValue.value = inputFrom;
    enterValue.value = inputTo;
});

//-------------------------------------------

// Add Event on Reset Button

reset.addEventListener("click", ()=>{
    outputValue.value = "";
    enterValue.value = "";
  });
