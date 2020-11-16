const hexColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const mainContent = document.querySelector(".row");
const clickBtn = document.querySelector(".btn");
const colorInfo = document.querySelector(".card-text");

var newColor = "#";

clickBtn.addEventListener('click',function () {

    for (let i = 0; i < 6; i++) {
        newColor += hexColor[genRandom()];   
    }

    mainContent.style.backgroundColor = newColor;
    colorInfo.innerHTML = `The hex code is: ${newColor}`;
    newColor = "#";
});

function genRandom() {
    return Math.floor(Math.random() * hexColor.length);
}
