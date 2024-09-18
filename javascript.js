let gridSize;

let theGrid = document.querySelector('.the-grid');

let standardDiv = document.createElement('div');

let sizeButton = document.querySelector('button');

let arrayOfDivs =[];

for(let i = 0; i < 4096; i++){
    arrayOfDivs.push(standardDiv.cloneNode());
}

arrayOfDivs.forEach(element => {
    element.addEventListener("mouseover", function(){

        element.style.backgroundColor = "orange";
            setTimeout(() => {
                element.style.backgroundColor = "green";
            }, 1000);
            }
        )
    }
);

for (let y = 0; y < arrayOfDivs.length; y++){
    theGrid.appendChild(arrayOfDivs[y]);
}

sizeButton.addEventListener('click', function(){
    gridSize = prompt('Chose a grid size');
    if (!isNaN(gridSize)){
        // activate
    }else{
        alert('Nigga that aint a numba !')
    }
})