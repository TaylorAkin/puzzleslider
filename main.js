
var tileArray = []

console.log(tileArray);

function createpuzzle() {

    var puzzlecontainer = document.createElement("div");
    puzzlecontainer.id = 'containerid';
    puzzlecontainer.className = 'container mt-5 h-100 w-50 border';


    var puzzlerow = document.createElement("div");
    puzzlerow.id = 'rowid';
    puzzlerow.className = 'row h-100';


    var i = 1;
    while (i < 17) {

        var puzzletiles = document.createElement('div');
        puzzletiles.addEventListener('click', moveTile);
        puzzletiles.id = i;
        tileArray.push(i);
        puzzletiles.className = 'col-3 border';
        puzzlerow.appendChild(puzzletiles);
        puzzletiles.innerHTML = i;

        i++
        console.log(puzzletiles.id);

    }

    var buttonsContainer = document.createElement("div");
    buttonsContainer.id = 'buttonsContainerid';
    puzzlecontainer.className = 'container h-100 w-100';

    var buttonsRow = document.createElement("div");
    buttonsRow.id = 'buttonsRowId';
    puzzlerow.className = 'row h-100 justify-content-center';

    var buttonsCol = document.createElement('button');
    buttonsCol.id = 'buttonsColId';
    buttonsCol.className = 'col-4';

    puzzlecontainer.appendChild(puzzlerow);
    buttonsRow.appendChild(buttonsCol);
    buttonsContainer.appendChild(buttonsRow);



    document.getElementById('puzzleslider').appendChild(puzzlecontainer);
    document.getElementById('puzzleslider').appendChild(buttonsContainer);


}



function moveTile() {




}
//randomize puzzles id
function randomize() {


}