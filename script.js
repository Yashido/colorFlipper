function randomNumber() {
    const rndNum = Math.floor(Math.random()*2);
};

const btnColor =document.getElementById('btn--color');
var i = 0;

function colorArray() {
    let clrArray = ['red','blue', 'green', 'purple'];
    document.getElementById('page--container').style.backgroundColor = clrArray[i];
    i++;
    console.log(i);
    return;
}