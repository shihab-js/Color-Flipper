const simpleColor = ['Black','Yellow','Gray','Green','Orange','Pink'];

const mainContent = document.querySelector(".row");
const clickBtn = document.querySelector(".btn");
const colorInfo = document.querySelector(".card-text");

clickBtn.addEventListener('click',function(){
        let bgColor = simpleColor[randomColor()];
        mainContent.style.backgroundColor = bgColor;
         
        colorInfo.innerHTML = `The color is: ${bgColor}`;
});
function randomColor() {
    return Math.floor(Math.random() * simpleColor.length);
}