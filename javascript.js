
let gridSideDimention = 16;

if(gridSideDimention > 100 || isNaN(gridSideDimention)){
    alert("Must be a number under 100");
    window.location.reload();
}

let theGrid = document.querySelector('.the-grid');

let sizeButton = document.querySelector('button');

let standardDiv = document.createElement('div');
let arrayOfDivs =[];


function cloneAndPush(side){
    arrayOfDivs = [];
for(let i = 0; i < side*side; i++){
    arrayOfDivs.push(standardDiv.cloneNode());
    console.log(arrayOfDivs.i);
    }
}
cloneAndPush(gridSideDimention);

function stylingAndEventListener(dimention){

    arrayOfDivs.forEach(element => {
        
    let sHeight = (480 / dimention) - 1;
    element.style.height = `${sHeight}px`;
    element.style.width = `${sHeight}px`;
    element.dataset.brightValue = 100;
    element.style.filter = `brightness(${element.dataset.brightValue}%)`

    element.addEventListener("mouseover", function(){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random()*256);
        element.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;
        element.dataset.brightValue -= 10;
        element.style.filter = `brightness(${element.dataset.brightValue}%)`;
        
            }
        )
    }
);
}
stylingAndEventListener(gridSideDimention);

function AppendArrayDivsToTheGrid(){
    for (let y = 0; y < arrayOfDivs.length; y++){
    theGrid.appendChild(arrayOfDivs[y]);
    }
}
AppendArrayDivsToTheGrid();


sizeButton.addEventListener('click', function(){
    let gridSize = prompt('Chose a grid size');

    if (!isNaN(gridSize) && gridSize < 100 && gridSize){
        while(theGrid.lastChild){
            theGrid.removeChild(theGrid.lastChild);

            }
        
        cloneAndPush(gridSize);

        stylingAndEventListener(gridSize);

        AppendArrayDivsToTheGrid();
        
    }else{
        alert("Must be a number under 100");
        
    }
})

