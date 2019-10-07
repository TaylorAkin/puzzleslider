

var newArr = [];

var tileArray = []

var tileObjectArray = []

var imageSource = 'images/Oregon.jpg'






//class that holds object constructor function to build my tild objects
class tileObject {
    constructor(id, location) {
        this.id = id;
        this.location = location;
        // ht = document.createElement('div');
        // ht.innerHTML = id;
        // this.content = ht;
        // console.log(location);



        this.render = function () {
            var puzzletiles = document.createElement('div');
            puzzletiles.addEventListener('click', this.render);
            // render this specific tile object in html
            var puzzlerow = document.getElementById('rowid');
            puzzletiles.id = this.id;
            puzzletiles.className = 'border display-1';
            puzzletiles.setAttribute('style', 'height: 150px; width:150px; overflow: hidden; ');
            puzzletiles.innerHTML = `<img id='image${this.id}' src='${imageSource}' height="600px" width="600px"></img>`;
            puzzlerow.appendChild(puzzletiles);
        }


    }
}





function createpuzzle() {

    var puzzlecontainer = document.createElement("div");
    puzzlecontainer.id = 'containerid';
    puzzlecontainer.className = 'container mt-5 border h-100 w-50';


    var puzzlerow = document.createElement("div");
    puzzlerow.setAttribute('id', 'rowid');
    puzzlerow.className = 'row h-100';


    var i = 0;
    while (i < 16) {

        var puzzletiles = document.createElement('div');
        puzzletiles.addEventListener('click', checkTile);
        puzzletiles.id = i;
        tileArray.push(i);
        puzzletiles.className = 'border display-1';
        puzzletiles.setAttribute('style', 'height: 150px; width:150px; overflow: hidden; background-color:black');


        var image = document.createElement('img');
        image.id = 'image' + i;
        image.src = imageSource;
        image.style = `height="600px"; width="600px";`

        if (i == 0) {

            image.setAttribute('style', 'opacity: 0');
        }

        else {
            image.setAttribute('style', `margin-left:${i % 4 * -150}px; margin-top:${parseInt(i / 4) * -150}px`);
        }
        puzzletiles.appendChild(image);
        puzzlerow.appendChild(puzzletiles);



        //variable to hold object instance then passed to array.
        var tile = new tileObject(i, tileArray[i]);
        //tile.render();
        tileObjectArray.push(tile);

        i++
        // console.log(puzzletiles.id);



    }



    // console.log(tileObjectArray);

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

    var uploadCol = document.createElement('input');
    uploadCol.addEventListener('change', photoUpload);
    uploadCol.id = 'uploadColId';
    uploadCol.className = 'col-1 offset-9 align-items-start';
    uploadCol.setAttribute('type', 'file');






    puzzlecontainer.appendChild(puzzlerow);
    buttonsRow.appendChild(randomizeCol);
    buttonsRow.appendChild(uploadCol);
    buttonsContainer.appendChild(buttonsRow);



    document.getElementById('puzzleslider').appendChild(puzzlecontainer);
    document.getElementById('puzzleslider').appendChild(buttonsContainer);

    // imageSlicer();
}


function checkTile(e) {
    var getPuzzleSliderId = e.target.id;
    // console.log(getPuzzleSliderId);
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
    // console.log(locat);
    locat = parseInt(locat.replace('image', ''));
    console.log(locat);
    for (var i = 0; i < tileObjectArray.length; i++) {
     
        if (tileObjectArray[i].location == locat) {
            return i;

        }
        else {
        

        }
    }
    console.log("out of for loop - could not find match")
}

function moveTile(getPuzzleSliderId) {

    // console.log(getPuzzleSliderId)
    var clickedId = getTileId(getPuzzleSliderId);
    console.log(clickedId);
    //location 0
    var new_location_ofClicked = tileObjectArray[0].location;

    //changing id's location placement. moving the 0 location to where you clicked
    tileObjectArray[0].location = tileObjectArray[clickedId].location;

    // console.log(`new blank tile location: ${tileObjectArray[0].location}`)

    tileObjectArray[clickedId].location = new_location_ofClicked;
    // console.log(`new clicked tile location: ${tileObjectArray[clickedId].location}`)


    for (let i = 0; i < 16; i++) {

        let image = document.getElementById(`image${tileObjectArray[i].location}`);

        // .style = i;
        if (i == 0) {

            image.setAttribute('style', 'opacity: 0');
        }

        else {
            image.setAttribute('style', `margin-left:${i % 4 * -150}px; margin-top:${parseInt(i / 4) * -150}px`);
        }

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


    for (var i = 0; i < 1000; i++) {

        var randomNum = Math.floor((Math.random() * 16));

        document.getElementById(`${randomNum}`).click();



    }





    // keeping ranomizer to != win case
    if (tileArray[0].location == 0) {

        console.log('ta');
        randomizer();

    }
    // console.log(tileObjectArray);

}





function photoUpload() {

    
    let imageId = document.getElementById('uploadColId');
    let newImage = imageId.files[0];
    

    imageSource = `'images/${newImage}'`;

    // console.log(imageSource);


    // console.log(newImage);





    // inputElement.addEventListener('change', function () {
    //     var url = URL.createObjectURL(inputElement.files[0]);
    //     imgElement.src = url;
    // });




createpuzzle();


}