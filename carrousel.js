const carrousel = document.getElementById('carrousel');
const btnRight = document.getElementById('btn-right');
const btnLeft = document.getElementById('btn-left');
let counter = 0;
carrousel.innerHTML = '0';

btnRight.addEventListener('click', rightClick);
function rightClick() {
     
    if (counter == 0) {
        carrousel.innerHTML = '1';
        carrousel.style.backgroundImage = "url('images/2.jpg')";
        counter = 1;
        console.log(counter);
    } else if (counter == 1){
        carrousel.innerHTML = '2';
        carrousel.style.backgroundImage = "url('images/3.jpg')";
        counter = 2;
        console.log(counter);
    }
    else if (counter == 2){
        carrousel.innerHTML = '3';
        carrousel.style.backgroundImage = "url('images/4.jpg')";
        counter = 3;
        console.log(counter);
    }
    else if (counter == 3){
        carrousel.innerHTML = '4';
        carrousel.style.backgroundImage = "url('images/5.jpg')";
        counter = 4;
        console.log(counter);
    }
    else {
        carrousel.innerHTML = '0';
        carrousel.style.backgroundImage = "url('images/1.jpg')";
        counter = 0;
        console.log(counter);
    }
}

btnLeft.addEventListener('click', leftClick);
function leftClick() {
     
    if (counter == 0) {
        carrousel.innerHTML = '4';
        carrousel.style.backgroundImage = "url('images/5.jpg')";
        counter = 4;
        console.log(counter);
    } else if (counter == 4){
        carrousel.innerHTML = '3';
        carrousel.style.backgroundImage = "url('images/4.jpg')";
        counter = 3;
        console.log(counter);
    }
    else if (counter == 3){
        carrousel.innerHTML = '2';
        carrousel.style.backgroundImage = "url('images/3.jpg')";
        counter = 2;
        console.log(counter);
    }
    else if (counter == 2){
        carrousel.innerHTML = '1';
        carrousel.style.backgroundImage = "url('images/2.jpg')";
        counter = 1;
        console.log(counter);
    }
    else {
        carrousel.innerHTML = '0';
        carrousel.style.backgroundImage = "url('images/1.jpg')";
        counter = 0;
        console.log(counter);
    }
}
setInterval(rightClick, 500);
