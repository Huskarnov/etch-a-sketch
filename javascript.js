let gridSize;
let elementSize = prompt("chose a size");

let theGrid = document.querySelector('.the-grid');

let standardDiv = document.createElement('div');

let sizeButton = document.querySelector('button');

let arrayOfDivs =[];


function cloneAndAdd(side){
    arrayOfDivs = [];
for(let i = 0; i < side*side; i++){
    arrayOfDivs.push(standardDiv.cloneNode());
    console.log(arrayOfDivs.i);
    }
}
cloneAndAdd(elementSize);

function styleAndAppend(dimention){
    arrayOfDivs.forEach(element => {
    let sHeight = (550 / dimention) - 1;
    element.style.height = `${sHeight}px`;
    element.style.width = `${sHeight}px`;

    element.addEventListener("mouseover", function(){

        element.style.backgroundColor = "orange";
            setTimeout(() => {
                element.style.backgroundColor = "green";
            }, 1000);
            }
        )
    }
);
}
styleAndAppend(elementSize);

function appendAndWrapThisShit(){
    for (let y = 0; y < arrayOfDivs.length; y++){
    theGrid.appendChild(arrayOfDivs[y]);
    }
}
appendAndWrapThisShit();


sizeButton.addEventListener('click', function(){
    gridSize = prompt('Chose a grid size');

    if (!isNaN(gridSize)){
        while(theGrid.lastChild){
            theGrid.removeChild(theGrid.lastChild);

            }
        
        cloneAndAdd(gridSize);

        styleAndAppend(gridSize);

        appendAndWrapThisShit();
        
    }else{
        alert('Nigga that aint a numba !')
    }
})

