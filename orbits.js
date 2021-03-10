var numCells = 10;			// Number of cells
var cellSize = 100;			// Size of a cell
var cellCenter = cellSize/2.0;		// Half that size (used to center UCMs)
var imgSize = numCells * cellSize;	// Size of the image

var colourOffset = 250.0/numCells;	// Setting the contrast to increase/decrease

var radius = 0.45 * cellSize;		// Radius of the orbits
var phi = 0;				// Angle from the actual point to the center
var w = 0.5;				// Angular velocity

function setup(){
	let img = createImage(imgSize, imgSize);
	createCanvas(img.width, img.height);
	background(0);
	angleMode(DEGREES);
}

function draw(){
	// Drawing background each frame to simulate fading effect
	background(0,0,0,5);
	for(let j = 0; j < numCells; ++j){
		for(let i = 0; i < numCells; ++i){
			// Drawing the grid
			stroke(255, 255, 255, 1);
			strokeWeight(2);
			line(i * cellSize, 0, i * cellSize, imgSize);
			line(0, i * cellSize, imgSize, i * cellSize);
			strokeWeight(4);
			if(i != 0 && j != 0){
				// Finding coordinates
				let centerX = i * cellSize + cellCenter;
				let centerY = j * cellSize + cellCenter;
				let angularXi = radius * cos(phi*i);
				let angularYi = radius * sin(phi*i);
				let angularXj = radius * cos(phi*j);
				let angularYj = radius * sin(phi*j);
				// Drawing the UCMs
				// First row
				stroke(250-i*colourOffset, i*colourOffset, 0);
				point(centerX + angularXi, cellCenter + angularYi);
				// First column
				stroke(250-j*colourOffset, 0, j*colourOffset);
				point(cellCenter + angularXj, centerY + angularYj);
				// Fill the grid
				stroke(250-j*colourOffset, i*colourOffset, j*colourOffset);
				point(centerX + angularXi, centerY + angularYj);
			}
		}
	}
	// Increasing angle for next frame
	phi = (phi + w);
}
