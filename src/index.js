// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

// Image Imports
// import Icon from './background.png';

// function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');
  
//     // Lodash, now imported by this script
//     element.innerHTML = 'Hello Mom'

//     // Add the image to our existing div.
//     var myIcon = new Image();
//     myIcon.src = Icon;

//     // Check if second JS is calling
//     btn.innerHTML = 'Click Me';
//     btn.onclick = printMe;
    
//     element.appendChild(btn, myIcon);
    
//     return element;
// }
  
// let element = component(); // Store the element to re-render on print.js changes
// document.body.appendChild(element);

// if (module.hot) {
//     module.hot.accept('./print.js', function() {
//         console.log('Accepting the updated printMe module!');
//         document.body.removeChild(element);
//         element = component(); // Re-render the "component" to update the click handler
//         document.body.appendChild(element);
//     })
// }