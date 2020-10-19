console.log('app.js loaded.');

// ACCOUNT LOGIN
// Get a string.
// Check if it exists at a source.
// CRUD.
// Run next step.

// PREVIOUSLY STORED DATA
var storedData = [
    {
        id: 1,
        name: 'first'
    },
    {
        id: 2,
        name: 'second'
    },
    {
        id: 3,
        name: 'third'
    }
];

// ACCOUNT LOGIN
// Get a string.
var targetString = 'second';

// Go through preexisting stored data
for (let i = 0; i < storedData.length; i++) {

    let returnString = '';

    for (x in storedData[i]) {
        returnString += `${x}: ${storedData[i][x]}`;
    }
    
    console.log(returnString);
}



// Check if stored data pointer matches target string

// CRUD.
// Run next step.