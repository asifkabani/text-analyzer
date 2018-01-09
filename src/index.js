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
console.log(cleanStrArr('hi 4545 hi kfsjdfkd hello hello'))


// Create function to get the average length of a word.
const averageWordLength = (string) => {
    let stringArr = string.split(" ");
    let wordCount = stringArr.length;
    let countAll = stringArr.sort().join('').length;
    let getAverage = countAll / wordCount;
    return getAverage.toFixed(1);
};
console.log(averageWordLength('hi 4545 hi kfsjdfkd hello hello'))

const testArr = 'hi 4545 hi kfsjdfkd hello hello';
console.log(testArr)
// const testArrRed = testArr.reduce((total, amount) => total + amount);
console.log(typeof testArr.split(" "));


// Create function to get unique word count. A unique word is one that is not repeated.
const uniqueWordCount = (string) => {
    let resultArr = [];
    let origArr = cleanStrArr(string);
    origArr.forEach(function(element, index) {
        if (origArr.indexOf(element, index + 1) > -1) {
            if (resultArr.indexOf(element) === -1) {
                resultArr.push(element);
            }
        }
    });
    return origArr.length - resultArr.length;
};

// If there is valid input, then process the input.
const runAnalyzer = (value) => {
    let cleanStr = removeNonAlpha(value);
    let getWordCount = cleanStrArr(cleanStr).length;
    let getAverageLength = averageWordLength(cleanStr);
    let getUniqueCount = uniqueWordCount(cleanStr);

    // Show the results.
    let wordCountInput = document.getElementById('js-word-count');
    wordCountInput.value = getWordCount;
    let averageLengthInput = document.getElementById('js-average-length');
    averageLengthInput.value = `${getAverageLength} characters`;
    let uniqueCountInput = document.getElementById('js-unique-count');
    uniqueCountInput.value = `${getUniqueCount}`;
};

// If there is no input, run the error function.
const error = (el) => {
    if (el.className !== 'alert-danger') {
        el.className += ' alert-danger';
        el.setAttribute('placeholder', 'No input received. Please enter some text.');
    }
    // el.setAttribute('placeholder', 'No input received. Please enter some text.');
    // el.className += ' alert-danger';
    // el.addEventListener('click', () => {
    //     el.classList.remove('alert-danger');
    // });
};

// Run Text Analyzer
// const checkEmpty = () => {
    // console.log(submitButEl)
    // console.log(userInputEl)
    // if (!userInputEl.value) {
    //     error(userInputEl)
    // }
    // return runAnalyzer(userInputEl.value);
    // let userTextEl = document.getElementById('js-user-text');
    // let userTextVal = userTextEl.value;
    // if (!userTextVal) {
    //     error(userTextEl);
    // } else {
    //     runAnalyzer(userTextVal);
    // }
// };

// Handle form submit
const handleSubmit = () => {
    // console.log(submitButEl);
    // submitButEl.addEventListener()
    // submitButEl.click(checkEmpty);
    // submitButEl.addEventListener('click', checkEmpty);
};
handleSubmit();