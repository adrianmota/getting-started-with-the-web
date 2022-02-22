let myImage = document.querySelector('img');

myImage.onclick = function () {
    let src = myImage.getAttribute('src');
    if (src === 'images/firefox.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let message = 'Mozilla is cool, ';

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = message + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = message + storedName;
}

myButton.onclick = function () {
    setUserName();
}
