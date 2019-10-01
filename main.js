
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
    puzzlecontainer.className = 'container h-100 w-50';

    var buttonsRow = document.createElement("div");
    buttonsRow.id = 'buttonsRowId';
    puzzlerow.className = 'row h-100 d-flex';

    var randomizeCol = document.createElement('button');
    randomizeCol.addEventListener('click', randomizer);
    randomizeCol.id = 'randomizeColId';
    randomizeCol.className = 'col-4 offset-4 mt-2';
    randomizeCol.innerHTML = 'RANDOMIZE';

    var uploadCol = document.createElement('button');
    uploadCol.addEventListener('click', photoUpload);
    uploadCol.id = 'uploadColId';
    uploadCol.className = 'col-1 offset-9 align-items-start';
    uploadCol.innerHTML = '^';





    puzzlecontainer.appendChild(puzzlerow);
    buttonsRow.appendChild(randomizeCol);
    buttonsRow.appendChild(uploadCol);
    buttonsContainer.appendChild(buttonsRow);



    document.getElementById('puzzleslider').appendChild(puzzlecontainer);
    document.getElementById('puzzleslider').appendChild(buttonsContainer);


}



function moveTile() {




}
//randomize puzzles id
function randomizer() {


}

function photoUpload() {


}