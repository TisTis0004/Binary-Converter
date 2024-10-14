function binaryToDecimal(binary){
    for(let i = 0 ; i < binary.length ; i++){
        if(binary[i] != '0' && binary[i] != '1'){
            return "The value you entered is not in binary."
        }
    }
    let cnt = binary.length, sum = 0;
    for(let i = 0 ; i < cnt ; i++){
        sum += Math.pow(2,i) * parseInt(binary[cnt - 1 - i]);
    }
    return sum;
}


function decimalToBinary(decimal){
    for(let i = 0 ; i < decimal.length ; i++){
        if(isNaN(decimal[i])){
            return "The value you entered is not in decimal."
        }
    }
    decimal = decimal.split(' ');
    let s = "";
    for(let i = 0 ; i < decimal.length; i++){
        while(Math.floor(decimal[i] / 2) != 0){
            let mod = decimal[i] % 2;
            s = s.concat(mod);
            decimal[i] = Math.floor(decimal[i] / 2)
        }
        s = s.concat(decimal[i] % 2) + ' ';
    }
    s = s.split('').reverse().join('');
    return s.slice(1,s.length - 1);
}


function stringToBinary(string){
    let letters = string.split('');
    for(let i = 0 ; i < letters.length ; i++){
        letters[i] = letters[i].charCodeAt(0);
        letters[i] = decimalToBinary(letters[i]);
        while(letters[i].length < 8){
            letters[i] = '0' + letters[i];
        }
    }
    let s = letters.join(' ');
    return s;
}


function binaryToString(binary){
    for(let i = 0 ; i < binary.length ; i++){
        if(binary[i] != 0 && binary[i] != 1){
            return "The value you entered is not in binary.";
        }
    }
    const letters = binary.split(' ');
    let txt = "";
    for(let i = 0 ; i < letters.length ; i++){
        txt += String.fromCharCode(binaryToDecimal(letters[i]));
    }
    console.log(letters);
    return txt;
}



function clearText(box){
    box.value = "";
}
const dClear = document.getElementById("decimalClear");
const bClear = document.getElementById("binaryClear");
const sClear = document.getElementById("stringClear");
const bsClear = document.getElementById("binaryStringClear");


const dInput = document.getElementById("decimalInput");
const bInput = document.getElementById("binaryInput");
const sInput = document.getElementById("stringInput");
const bsInput = document.getElementById("binaryStringInput");

const dOutput = document.getElementById("decimalOutput");
const bOutput = document.getElementById("binaryOutput");
const sOutput = document.getElementById("stringOutput");
const bsOutput = document.getElementById("binaryStringOutput");

const dConvert = document.getElementById("decimalConvert");
const bConvert = document.getElementById("binaryConvert");
const sConvert = document.getElementById("stringConvert");
const bsConvert = document.getElementById("binaryStringConvert");

dClear.addEventListener('click',()=>{
    clearText(dInput);
});
bClear.addEventListener('click',()=>{
    clearText(bInput);
});
sClear.addEventListener('click',()=>{
    clearText(sInput);
});
bsClear.addEventListener('click',()=>{
    clearText(bsInput);
});

dConvert.addEventListener('click',()=>{
    bOutput.innerHTML = decimalToBinary(dInput.value);
})
bConvert.addEventListener('click',()=>{
    dOutput.innerHTML = binaryToDecimal(bInput.value);
})
sConvert.addEventListener('click',()=>{
    sOutput.innerHTML = stringToBinary(sInput.value);
})
bsConvert.addEventListener('click',()=>{
    bsOutput.innerHTML = binaryToString(bsInput.value);
})

dInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        dConvert.click();
    }
})
bInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        bConvert.click();
    }
})
sInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        sConvert.click();
    }
})
bsInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        bsConvert.click();
    }
})
