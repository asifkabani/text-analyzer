// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

/* Globals */
const wordCountEl = document.getElementById('js-word-count');
const uniqueCountEl = document.getElementById('js-unique-count');
const averageLengthEl = document.getElementById('js-average-length');
const userInputEl = document.getElementById('js-user-input');
const submitButEl = document.getElementById('js-submit');
const menuButEl = document.getElementById('js-menu');
const infoBox = document.getElementById('js-info');
const closeButEl = document.getElementById('js-close');
const txtEl = document.getElementById('js-txt');
const aboutTxt = document.getElementById('js-about');

// Remove non-alphanumerice characters and spaces from user input.
const removeNonAlpha = (string) => string.toLowerCase().replace(/[^a-z0-9-]+/g, " ").trim();

// Create an array from the clean strings.
const cleanStrArr = (string) => string.split(" ");

// Create function to get the average length of a word.
const averageWordLength = (string) => {
    let wordCount = cleanStrArr(string).length;
    let totalLetters = cleanStrArr(string).sort().join('').length;
    return (totalLetters / wordCount).toFixed(2);
};

// Create function to get unique word count. A unique word is one that is not repeated.
const uniqueWordCount = (string) => {
    let tempArr = [];
    let origArr = cleanStrArr(string);
    origArr.forEach((element, index) => {
        if (origArr.indexOf(element, index + 1) > -1) {
            if (tempArr.indexOf(element) === -1) {
                tempArr.push(element);
            }
        }
    });
    return origArr.length - tempArr.length;
};

// If there is valid input, then process the input.
const runAnalyzer = () => {
    let cleanStr = removeNonAlpha(userInputEl.value);
    let getWordCount = cleanStrArr(cleanStr).length;
    let getAverageLength = averageWordLength(cleanStr);
    let getUniqueCount = uniqueWordCount(cleanStr); 

    userInputEl.value = cleanStr;
    wordCountEl.value = getWordCount;
    uniqueCountEl.value = getUniqueCount;
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
const handleSubmit = () => submitButEl.addEventListener('click', checkEmpty);
handleSubmit();

// Open menu on click
const openMenu = () => {
    txtEl.style.display = 'none';
    infoBox.style.display = 'block';
    aboutTxt.style.display = 'block';
};

// Handle menu click
const menuClick = () => menuButEl.addEventListener('click', openMenu);
menuClick();

// Close menu on click of X
const closeMenu = () => {
    txtEl.style.display = 'block';
    infoBox.style.display = 'none';
    aboutTxt.style.display = 'none';
};

// Handle close click
const closeClick = () => closeButEl.addEventListener('click', closeMenu);
closeClick();