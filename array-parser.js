////////////////////////////////////////
// NOTES                              //
// Need a function that reads objects //
////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// PURPOSE                                                                    //
// This is intended to parse arrays and return all entries when no parameters //
// are provided or return the first match when parameters are provided.       //
////////////////////////////////////////////////////////////////////////////////

//////////////////
// DECLARATIONS //
//////////////////

// Version
const version = '0.0.3';

// Container to host all functions
const methods = {};

///////////////
// FUNCTIONS //
///////////////

// Test to make sure file loaded successfully.
methods.test = () => console.log(`common.js loaded successfully. Version: ${version}`);

// Search an array by no given criteria and return all matches
methods.matchesAny = function(array) {
    for (i in array) return array[i];
}

// Search an array by a specific Property and return all matches
methods.matchesProperty = function(array, property) {
    // Go through array
    for (let i = 0; i < array.length; i++) {
        // Go through each keypair in array and return object containing strings matching Property
        for (keypair in array[i]) {
            if (keypair === property) return array[i];
        }
    }
}

// Search an array by a specific Value and return all matches
methods.matchesValue = function(array, value) {
    // Go through array
    for (let i = 0; i < array.length; i++) {
        // Go through each keypair in array and return object containing strings matching Property
        for (keypair in array[i]) {
            if (array[i][keypair] === value) return array[i];
        }
    }
}

// Search an array by a specific keypair and return all matches
methods.matchesKeypair = function(array, property, value) {
    // Go through preexisting stored data
    for (let i = 0; i < array.length; i++) {
        // Go through each keypair in array and return object containing strings matching Property and Value
        for (keypair in array[i]) {
            if ((keypair === property) && (array[i][keypair] === value)) return array[i];
        }
    }
}

/////////////
// RUNTIME //
/////////////

/////////////
// TESTING //
/////////////

// const storedData = [
//     {
//         id: 1,
//         name: 'AAA'
//     },
//     {
//         id: 2,
//         name: 'BBB'
//     },
//     {
//         id: 3,
//         test: 'AAA'
//     },
//     {
//         id: 4,
//         name: 'DDD'
//     }
// ];

// console.log('TESTING: Search by no criteria.');
// console.log(methods.matchesAny(storedData));

// console.log('TESTING: Search by Property.')
// console.log(methods.matchesProperty(storedData, 'test'));

// console.log('TESTING: Search by Value.');
// console.log(methods.matchesValue(storedData, 4));

// console.log('TESTING: Search by Property and Value.');
// console.log(methods.matchesKeypair(storedData, 'name', 'BBB'));

// Export methods for other files to use
module.exports = methods;