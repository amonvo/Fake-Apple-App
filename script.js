let nickname = null;

while (!nickname || nickname.trim() === "") {
  nickname = prompt("What is your nickname?");
}

// Uložení přezdívky do localStorage
localStorage.setItem("nickname", nickname);

// Zobrazení přezdívky na stránce
const greetingContainer = document.getElementById("greeting");
greetingContainer.textContent = "Hello, " + nickname + "!";

const parallax = document.getElementById("parallax");
const rect = parallax.getBoundingClientRect();
const icons = document.getElementsByClassName("ui")[0];
const iconsRect = icons.getBoundingClientRect();

var pos = {
    x:0,
    y:0
};
var mousePos = {
    x: 0,
    y:0
}
var iconPos = {
    x: 0,
    y:0
}
var iconsDesiredPos = {
    x: 0,
    y:0
}
parallax.addEventListener("pontermove", function(e){
    mousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };

    iconsDesiredPos = {
        x:(e.clientX - window.innerWidth / 2) - iconRect.left,
        y:(e.clientY - window.innerHeight / 2) - iconRect.top,
    }
});
function render(){
    pos.x += easing(pos.x, mousePos.x, 0.01);
    pos.y += easing(pos.y, mousePos.y, 0.01);
    parallax.style.transformOrigin = `${pos.x}px ${pos.y}px`;
    parallax.style.transform = `scale(.25)`;

    iconPos.x += easing(iconPos.x, iconsDesiredPos.x / -10, 0.01);
    iconPos.y += easing(iconPos.y, iconsDesiredPos.y / -10, 0.01);
    icons.style.transform = `translateX(${iconPos.x}px) translateY(${iconPos.y}px)`;

    requestAnimationFrame(render);
}
render();
function easing(a, b, speed){
    return (b-a) * speed;
}
