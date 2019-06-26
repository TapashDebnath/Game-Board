
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var selectedGrid =[];
var nextLevel;
function randerGrid(CellNumber, state){
	selectedGrid =[];
    var output = document.getElementById('output');
	output.innerHTML = "";
	nextLevel = nextLevel == undefined ? (state == 0 ? CellNumber : CellNumber+state) : (state == 0 ? nextLevel : nextLevel+state);
    var x = 1;
	var randomArray = []
	for(let i=1; i<= (CellNumber*CellNumber); i++ ){
		randomArray.push(i)
	}
	var selected = shuffle(randomArray).slice(0,nextLevel-1);
	
    for(let i= 0; i<CellNumber; i++ ){
		var ele = document.createElement("div");
		output.appendChild(ele);
		for(let j= 0; j<CellNumber; j++ ){
			var eachCell = document.createElement("div");
			eachCell.setAttribute("onClick","Press('"+x+"','"+selected.toString()+"','"+CellNumber+"',)");			
			for(let d=0; d<selected.length; d++ ){
				if(selected[d] == x){
					eachCell.setAttribute("class","match");
					eachCell.appendChild(document.createElement("div"))
				}
			}
			ele.appendChild(eachCell);
			x++;
		}

    }
};


function Press(val, array, input){
	input = parseInt(input);
	array = array.split(',');
	if(array.find(e => e == val)){
		if(selectedGrid.findIndex(e => e == val) == -1){
			selectedGrid.push(val);
		}
		var output = document.getElementsByClassName('match');
		for(var j= output.length-1; j >= 0; j-- ){
			output[j].removeAttribute("class");
		}
		if(selectedGrid.sort().toString() == array.sort().toString()){
			alert('You won');
			randerGrid(input , 1);
		}
	}else{
		alert('You Loose');
		randerGrid(input , 0);
	}
}