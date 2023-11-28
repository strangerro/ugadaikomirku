var n = 10;
var randomNumbers = [];
let count = 0;

let cellCountLabel = document.getElementById('cellCount');
let clickCountLabel = document.getElementById('clickCount');
let restartBttn = document.getElementById("restartBttn").addEventListener("click", restart);


let foundCell = n;
let clickCounter = 0;

for(let i=0; i < n; i++){
    let random = Math.floor(Math.random()*100);

    if(randomNumbers.indexOf(random) == -1 )
        randomNumbers[i] = random;
    else
        i--;

    count++;
}

let number = 1;
let table = document.getElementById("gameTable");
for(let i = 0; i < n; i++){
    let row = document.createElement('tr');
    for(let j = 0; j < n; j++){
        let cell = document.createElement('td');
        cell.addEventListener('click', check);
        cell.dataset.indexNumber = number++;
        row.append(cell);
    }
    table.append(row);  
}



function check(){
    let number = Number(this.dataset.indexNumber);

    if(randomNumbers.indexOf(number) === -1)
        this.style.backgroundColor = 'red';
    else {
        foundCell--;
        this.style.backgroundColor = 'green';
    }
   
    this.onclick = undefined;
    clickCounter++;

    if(foundCell == 0)
        alert("Congratulation!!");
   
    cellCountLabel.innerText = `Комірок залишилось: ${foundCell}`;
    clickCountLabel.innerText = `Кліків зроблено: ${clickCounter}`;
}

function restart(){
    window.location.reload()
    
}