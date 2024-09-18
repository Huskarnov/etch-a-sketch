let gridSize;

let theGrid = document.querySelector('.the-grid');

let standardDiv = document.createElement('div');

let sizeButton = document.querySelector('button');

let arrayOfDivs =[];

for(let i = 0; i < 64; i++){
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
        while(theGrid.lastChild){
            theGrid.removeChild(theGrid.lastChild);
            
            }
        
        // for(let i = 0; i < gridSize; i++){
        //     arrayOfDivs.push(standardDiv.cloneNode());
            
        // }

        // for (let y = 0; y < arrayOfDivs.length; y++){
        //     theGrid.appendChild(arrayOfDivs[y]);
        // }

        
    }else{
        alert('Nigga that aint a numba !')
    }
})

