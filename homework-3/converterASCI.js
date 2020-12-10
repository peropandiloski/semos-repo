
let word = 'Javascript';
// return charcode of the current char
function ascii (a) { return a.charCodeAt(0); }

// convert text to ascii with callback function
function textToAsci(text) {
    // make an array of the text param and get all charcodes of every char with map function
    let res = text.split('').map(ascii);

    // join the arary into string
    return res.join('');
}
// console.log(textToAsci(word));


// convert text to asci only with one function
function convertTextToAscii(text) {
    // make array from the text string
    let array = text.split('');
    res = ''
    // take all charcode and concatenate 
    for (let i = 0; i < array.length; i++) {
        res += array[i].charCodeAt(0);
    }
    // return result.
    return res;
}

// console.log(convertTextToAscii(word));

// asci codes to be converted into chars
let asciiCode = [106,097,118,097,115,099,114,105,112,116];
function asciiToText (codeParam) {
    let res = '';
    // take char from every charcode and put it into res variable
    for (let i = 0; i < codeParam.length; i++) {
        console.log('function I element:' + codeParam[i]);
        res += String.fromCharCode(codeParam[i]);
        console.log('asci to text : ' + res);
    }
    // return result.
    return res;
}

console.log(String.fromCharCode('11599'));

// console.log(asciiToText(asciiCode));
const asciAndChar = "j97va11599ri112116";
function asciAndCharConverter (text) {
    let niza = text.match(/[\d\.]+|\D+/g);
    let string = "";
    let result = "";
    for(let i = 0; i < niza.length; i++){
        if (isNaN(niza[i])) {
            result = textToAsci(niza[i]);
        } else {
            result = asciiToText([niza[i]]);
        }
        string += result;
    }
    console.log(string);
}

//charAndAsci
const string = "j97va11599ri112116";
​
const charAndAscii = function (charAndAsciiCombination) {
    const char = /[a-z]/;
    const array = [];
      for (let i = 0; i < charAndAsciiCombination.length; i++) {
        if (charAndAsciiCombination[i].match(char)) {
          let charToNumber = charAndAsciiCombination.charCodeAt(i);
          array.push(charToNumber);
        } else {
          const asciiToChar = charAndAsciiCombination[i] === "1" ? 3 : 2;
          const addToArray = String.fromCharCode(
            Number(charAndAsciiCombination.substr(i, asciiToChar))
          );
          array.push(addToArray);
          i += asciiToChar - 1;
        }
      }
      return array.join('');     
    }
​
console.log(charAndAscii(string));


//Promise
​
const promise = new Promise (function(resolve, reject) {
  let charAndAsciiPromise = true;
​
  if (charAndAsciiPromise) {
    resolve(charAndAscii(string))
  }
  else {
    reject(string);
  }
});
​
promise.then(function(fromResolve) {
  console.log(`${fromResolve}`)
}).catch(function(fromReject){
  console.log(`${fromReject}`)
});