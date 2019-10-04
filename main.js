

var newArr = [];

var tileArray = []

var tileObjectArray = []




//class that holds object constructor function to build my tild objects
class tileObject {
    constructor(id, location) {
        this.id = id;
        this.location = location;
        // ht = document.createElement('div');
        // ht.innerHTML = id;
        // this.content = ht;
        // console.log(location);

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
        puzzletiles.addEventListener('click', checkTile);
        puzzletiles.id = i;
        tileArray.push(i);
        puzzletiles.className = 'border display-1';
        puzzletiles.setAttribute('style', 'height: 150px; width:150px; overflow: hidden');
        puzzletiles.innerHTML = '<img src="images/Oregon.jpg" width=600px; height:600px>';
        puzzlerow.appendChild(puzzletiles);
    



        //variable to hold object instance then passed to array.
        var tile = new tileObject(i, tileArray[i])
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


function checkTile(e) {
    var getPuzzleSliderId = e.target.id;
    var ClickID = getTileId(this.id)
    // var getNotClickId = tileObjectArray[this.id].location;
    // console.log(getTileId(this.id))
    // console.log(getNotClickId);


    if (tileObjectArray[ClickID].location == tileObjectArray[0].location + 1 &&

        tileObjectArray[ClickID].location % 4 != 0

    ) {
        // console.log('first');
        moveTile(getPuzzleSliderId);

    }
    else if (tileObjectArray[ClickID].location == tileObjectArray[0].location - 1 &&

        tileObjectArray[0].location % 4 != 0) {
        // console.log('second');
        moveTile(getPuzzleSliderId);
    }

    else if (tileObjectArray[ClickID].location == tileObjectArray[0].location + 4) {
        // console.log('third');
        moveTile(getPuzzleSliderId);
    }

    else if (tileObjectArray[ClickID].location == tileObjectArray[0].location - 4) {
        // console.log('fourth');
        moveTile(getPuzzleSliderId);

    }



}


function getTileId(locat) {
    for (var i = 0; i < tileObjectArray.length; i++) {

        if (tileObjectArray[i].location == locat) {
            return i;
            // console.log(i);

        }
    }
}

function moveTile(getPuzzleSliderId) {


    var clickedId = getTileId(getPuzzleSliderId);
    // console.log(clickedId);
    //location 0
    var new_location_ofClicked = tileObjectArray[0].location;

    //changing id's location placement. moving the 0 location to where you clicked
    tileObjectArray[0].location = tileObjectArray[clickedId].location;

    // console.log(`new blank tile location: ${tileObjectArray[0].location}`)

    tileObjectArray[clickedId].location = new_location_ofClicked;
    // console.log(`new clicked tile location: ${tileObjectArray[clickedId].location}`)


    for (let i = 0; i < 16; i++) {
        document.getElementById(`${tileObjectArray[i].location}`).innerHTML = i;
    }

//mywincondition
    var notWin = false;
    for (let j = 0; j < 16; j++) {
        if (tileObjectArray[j].location != tileObjectArray[j].id) {

            notWin = true
            console.log('true')
        }
    }

    if (notWin == false) {
        alert('WIN')
    }
}





function randomizer() {





    // keeping ranomizer to != win case
    if (tileArray[0] == 0) {

        console.log('ta');
        randomizer();

    }
    // console.log(tileObjectArray);

}


//every tile has the same image, just a certain same sized section of the image.
function imageSlicer() {
    var sliceImage = '';
    for (var i = 0; i < tileObjectArray.length; i++) {
      sliceImage =  tileObjectArray[i].innerhtml =  '<img src="images/Oregon.jpg" width=150px height:150px>'
    }





}

function photoUpload() {
    




}