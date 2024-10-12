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
    let s = "";
    while(Math.floor(decimal / 2) != 0){
        let mod = decimal % 2;
        s = s.concat(mod);
        decimal = Math.floor(decimal / 2)
    }
    s = s.concat(decimal % 2);
    s = s.split('').reverse().join('');
    while(s.length < 8){
        s = '0' + s;
    }
    return s;
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


function clearText(box){
    box.value = "";
}
const dClear = document.getElementById("decimalClear");
const bClear = document.getElementById("binaryClear");
const sClear = document.getElementById("stringClear");

const dInput = document.getElementById("decimalInput");
const bInput = document.getElementById("binaryInput");
const sInput = document.getElementById("stringInput");

const dOutput = document.getElementById("decimalOutput");
const bOutput = document.getElementById("binaryOutput");
const sOutput = document.getElementById("stringOutput");

const dConvert = document.getElementById("decimalConvert");
const bConvert = document.getElementById("binaryConvert");
const sConvert = document.getElementById("stringConvert");

dClear.addEventListener('click',()=>{
    clearText(dInput);
});
bClear.addEventListener('click',()=>{
    clearText(bInput);
});
sClear.addEventListener('click',()=>{
    clearText(sInput);
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