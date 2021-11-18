"use strict";

let button = document.querySelector(".btn");
let showOutput1 = document.querySelector(".Output1");
let showOutput2 = document.querySelector(".Output2");
let showOutput3 = document.querySelector(".Output3");
let showOutput4 = document.querySelector(".Output4");

button.addEventListener("click",() =>{
    let userInput = document.getElementById("textInput").value;

    let process1 = document.querySelector("#vowToFib");
    let process2 = document.querySelector("#vowToOdd");
    let process3 = document.querySelector("#vowToEven");
    let process4 = document.querySelector("#vowToAlnum");

    let resultOfSeq = {};
    let typeofSequence;

    if (process1.checked){
        typeofSequence = process1.value;
        showOutput1.textContent = replaceVowel(
            userInput,
            processFib(userInput),
            typeofSequence
        );
    }
    else if (process2.checked) {
        typeofSequence = process2.value;
        showOutput2.textContent = replaceVowel(
            userInput,
            processOdd(userInput),
            typeofSequence
        );
    }
    else if (process3.checked) {
        typeofSequence = process3.value;
        showOutput3.textContent = replaceVowel(
            userInput,
            processEven(userInput),
            typeofSequence
        );
    }
    else if (process4.checked) {
        typeofSequence = process4.value;
        showOutput4.textContent = replaceVowel(
            userInput,
            processNum(userInput),
            typeofSequence,
            processAlp(userInput)
        );
    }

    console.log(resultOfSeq);

    function checkChar(string) {
        return string.trim().split(" ").join("").length;
    }

    function checkVowel(string){
        let vowels = "aiueoAIUEO";
        let count = 0;

        for (let i = 0; i < string.length; i++){
            if(vowels.includes(string[i])){
                count++;
            }
        }
        return count;
    }

    function processFib(string) {
        let fibNum = [0];
        let fib1 = 1;
        let fib2 = 0;
        let fibAdd = 0;
        let vowelCount = checkVowel(string);

        for (let i = 0; i <= vowelCount - 2; i++){
            fibAdd = fib1 + fib2;
            fib1 = fib2;
            fib2 = fibAdd;
            fibNum.push(fibAdd);
        }
        resultOfSeq.fibonacciSequence = fibNum;
        return resultOfSeq;
    }

    function processEven(string) {
        let vowelCount = checkVowel(string);
        let evenNumber = [];

        for (let i = 2; i <= 2 * vowelCount; i++){
            if (i % 2 == 0) {
                evenNumber.push(i);
            }
        }
        resultOfSeq.evenSequence = evenNumber;
        return resultOfSeq;
    }

    function processOdd(string) {
        let vowelCount = checkVowel(string);
        let oddNumber = [];

        for (let i = 1; i <= 2 * vowelCount; i++) {
            if (i % 2 != 0) {
                oddNumber.push(i);
            }
        }
        resultOfSeq.oddSequence = oddNumber;
        return resultOfSeq;
    }


    function processNum(string) {
        let totalChar = checkVowel(string) / 2;
        let numSequence = [];

        for (let i = 1; i <= totalChar; i++) {
            numSequence.push(i);
        }
        resultOfSeq.numSequence = numSequence;
        return resultOfSeq;
    }

    function processAlp(string) {
        let alphabet = [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
            "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
            "w", "x", "y", "z",
            "A","B","C","D","E","F","G","H","I","J","K","L","M","N",
            "O","P","Q","R","S","T","U","V","W","X","Y","Z"
        ];
        let alpSequence = [];
        let totalChar = checkVowel(string)/2;
        
        for (let i = 0; i <= totalChar - 1; i++){
            alpSequence.push(alphabet[i]);
        }
        resultOfSeq.alpSequence = alpSequence;
        return resultOfSeq;
    }

    function replaceVowel(string, sequence, typeofSequence, sequenceAlph){
        let vowels = "aiueoAIUEO";
        let arrayOfString = string.split("");
        let count = 0;
        let countNumAp = 0;
        let countNum = 0;
        let countAlp = 0;

        for (let i = 0; i < arrayOfString.length; i++){
            if (vowels.includes(arrayOfString[i])){
                if (typeofSequence == "vowelFib") {
                    arrayOfString[i] = sequence.fibonacciSequence[count];
                    sequence.fibonacciSequence;
                    count++;
                }
                else if (typeofSequence == "vowelOdd") {
                    arrayOfString[i] = sequence.oddSequence[count];
                    sequence.oddSequence;
                    count++;
                }
                else if (typeofSequence == "vowelEven") {
                    arrayOfString[i] = sequence.evenSequence[count];
                    sequence.evenSequence;
                    count++;
                }
                else if (typeofSequence == "vowelAlnum") {
                    if(countNumAp % 2 == 0){
                        arrayOfString[i] = sequence.numSequence[countNum];
                        countNum++;
                    }
                    else {
                        arrayOfString[i] = sequenceAlph.alpSequence[countAlp];
                        countAlp++;
                    }
                  countNumAp++;
                }
            }
        }
        return arrayOfString.join("");
    }
});