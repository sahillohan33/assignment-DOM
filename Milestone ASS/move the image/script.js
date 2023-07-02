const image=document.getElementById('image');
let positionX=0;
let positionY=0;
const stepSize=10;
function moveImage(event){
    // check the arrow key code
    switch(event.keyCode){
        case 37: // left arrow key
            positionX-=stepSize;
            break;
        case 38: // up arrow key
            positionY-=stepSize;
            break;
        case 39: //  right arrow key
            positionX+=stepSize;
            break;
        case 40: // down arrow kry
            positionY+=stepSize;
            break;
        default:
            return;
    }
    image.style.transform=`translate(${positionX}px,${positionY}px)`;
}
document.addEventListener("keydown",moveImage);