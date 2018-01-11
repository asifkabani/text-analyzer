// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

// Text Analyzer
/*
We have three areas which show the word count, unique word count, and average word length. There is a field to input
text from user. Submit button to analyze the input from the text field.
*/

/* Globals */
const wordCountEl = document.getElementById('js-word-count');
const uniqueCountEl = document.getElementById('js-unique-count');
const averageLengthEl = document.getElementById('js-average-length');
const userInputEl = document.getElementById('js-user-input');
const submitButEl = document.getElementById('js-submit');

// Remove non-alphanumerice characters and spaces from user input.
const removeNonAlpha = (string) => string.toLowerCase().replace(/[^a-z0-9-]+/g, " ").trim();
console.log(removeNonAlpha(' hi 4545^$@&&%% hi kfsjdlfjsdflkds hello hello%$#%*^&* '))

// Create an array from the clean strings.
const cleanStrArr = (string) => string.split(" ");
console.log(cleanStrArr('hi 4545 hi kfsjdfkd hello hello'));

// Create function to get the average length of a word.
const averageWordLength = (string) => {
    let stringArr = cleanStrArr(string);
    let wordCount = stringArr.length;
    let characterCount = stringArr.sort().join('').length;
    let getAverage = (characterCount / wordCount).toFixed(2);
    return getAverage;
};
console.log(averageWordLength('hi 4545 hi kfsjdfkd hello hello'));

// Create function to get unique word count. A unique word is one that is not repeated.
// const uniqueWordCount = (string) => {
    // let temp = [];
    // array.forEach((element,index) => {
    //     if (array.indexOf(element, index + 1) > -1) {
    //         console.log(index);
    //         // if (temp.indexOf(element) === -1) {
    //         //     temp.push(element);
    //         // }
    //     }    
    // });
    // let resultArr = [];
    // let origArr = cleanStrArr(string);
    // origArr.forEach(function(element, index) {
    //     if (origArr.indexOf(element, index + 1) > -1) {
    //         if (resultArr.indexOf(element) === -1) {
    //             resultArr.push(element);
    //         }
    //     }
    // });
    // return origArr.length - resultArr.length;
// };
// console.log(uniqueWordCount(["hi", "4545", "hi", "kfsjdfkd", "hello", "hello"]));

// If there is valid input, then process the input.
const runAnalyzer = () => {
    let cleanStr = removeNonAlpha(userInputEl.value);
    let getWordCount = cleanStrArr(cleanStr).length;
    let getAverageLength = averageWordLength(cleanStr);

    wordCountEl.value = getWordCount;
    averageLengthEl.value = getAverageLength;
};

// Check if input is empty.
const checkEmpty = () => {
    if (!userInputEl.value) {
        if (!userInputEl.classList.contains('alert-danger')) {
            userInputEl.setAttribute('placeholder', 'No input received. Please enter some text.');
            userInputEl.className += ' alert-danger';
        }
    } else {
        userInputEl.classList.remove('alert-danger');
        runAnalyzer();
    }
};

// Handle form submit
const handleSubmit = () => {
    submitButEl.addEventListener('click', checkEmpty);
};
handleSubmit();