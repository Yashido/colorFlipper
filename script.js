function randomNumber() {
    const rndNum = Math.floor(Math.random()*2);
};

var i = 0;
let clrArray = ['red', 'orange', 'yellow','green','cyan','azure','blue','violet','magenta','rose'];


function colorArray() {
    document.getElementById('page--container').style.backgroundColor = clrArray[i];
    i++;
        if(i >= 9) {
            i = 0;
        };
    return;
}
