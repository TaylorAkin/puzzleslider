// newindex = [1, 2, 14, 5, 6, 3, 11, 0, 7, 9, 12, 4, 8, 10, 13, 15];

var newindex;

var newArr = [];

var tileArray = []

var tileObjectArray = []

// console.log(tileArray);


class tileObject {
    constructor(location, id){
        this.id = id;
        this.location = location;

    }
}





function createpuzzle() {

    var puzzlecontainer = document.createElement("div");
    puzzlecontainer.id = 'containerid';
    puzzlecontainer.className = 'container mt-5 h-100 w-50 border';


    var puzzlerow = document.createElement("div");
    puzzlerow.id = 'rowid';
    puzzlerow.className = 'row h-100';


    var i = 0;
    while (i < 16) {

        var puzzletiles = document.createElement('div');
        puzzletiles.addEventListener('click', moveTile);
        puzzletiles.id = i;
        tileArray.push(i);
        puzzletiles.className = 'col-3 border';
        puzzlerow.appendChild(puzzletiles);
        puzzletiles.innerHTML = i;

        var tile = new tileObject(i,tileArray[i])
        tileObjectArray.push(tile);

        i++
        // console.log(puzzletiles.id);

    }

    // console.log(tileObjectArray);

    var buttonsContainer = document.createElement("div");
    buttonsContainer.id = 'buttonsContainerid';
    puzzlecontainer.className = 'container h-100 w-5 0';

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


function blankTile(locat){
    for(var i = 0; i < tileObjectArray.length; i++){

        if(tileObjectArray[i].location == locat){
                return i;
            
        }

    }
}


function moveTile(e) {

    let clickedId = blankTile(this.id);
    //location 0
    var new_location = tileObjectArray[0].location;

    //changing id's location placement. moving the 0 location to where you clicked
    tileObjectArray[0].location = tileObjectArray[clickedId].location;
    console.log(`new blank tile location: ${tileObjectArray[0].location}`)

    tileObjectArray[clickedId].location = new_location;
    console.log(`new clicked tile location: ${tileObjectArray[clickedId].location}`)


    for (let i = 0; i < 16; i++) {
        document.getElementById(`${tileObjectArray[i].location}`).innerHTML = i;
    }

    console.log(tileObjectArray);



}




//randomize puzzles id
function getRandomInt(min, max, arr) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}




function randomizer() {

    var newArr = [];

    for (var i = 0; i < tileArray.length; i++) {
        var r = getRandomInt(0, 16, tileArray);

        if (newArr.includes(r) == false) {

            newArr.push(r);
            document.getElementById(i).innerHTML = r;
            // console.log('lalala');
            tileObjectArray[i].id = r;

        }
        else {
            i--;
        }
    }

    tileArray = newArr;

    // keeping ranomizer to != win case
    if (tileArray[0] == 0) {

        console.log('ta');
        randomizer();

    }
console.log(tileObjectArray);

}

function photoUpload() {


}