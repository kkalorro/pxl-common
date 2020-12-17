// -------------------
// ACCOUNT LOGIN
// Get a string.
// Check if it exists at a array.
// CRUD.
// Run next step.
// -------------------

// Methods need to return object back
// Need a function that reads objects

//////////////////
// Declarations //
//////////////////

// Version
const version = '0.0.0.2';

// Container to host all functions
const methods = {};

// [Temp] Stored data
const storedData = [
    {
        id: 1,
        name: 'AAA'
    },
    {
        id: 2,
        name: 'BBB'
    },
    {
        id: 3,
        test: 'AAA'
    }
];

///////////////
// Functions //
///////////////

// Test to make sure file loaded successfully.
methods.test = () => console.log(`common.js loaded successfully. Version: ${version}`);

// Search array array for specified criteria and return matches
methods.findObjects = function(array, property, value) {
    // Return all results, no criteria
    function matchesAll() {
        for (i in array) console.log(array[i]);     
    }

    // Return all results matching Property
    function matchesProperty(property) {
        // Go through array
        for (let i = 0; i < array.length; i++) {
            // Go through each keypair in array and return object containing strings matching Property
            for (keypair in array[i]) {
                (keypair === property) ? console.log(array[i]) : false;
            }
        }
    }

    // Return all results matching Value
    function matchesValue(value) {
        // Go through array
        for (let i = 0; i < array.length; i++) {
            // Go through each keypair in array and return object containing strings matching Property
            for (keypair in array[i]) {
                (array[i][keypair] === value) ? console.log(array[i]) : false;
            }
        }
    }

    // Return all results with matching Property and Value
    function matchesKeypair(property, value) {
        // Go through preexisting stored data
        for (let i = 0; i < array.length; i++) {
            // Go through each keypair in array and return object containing strings matching Property and Value
            for (keypair in array[i]) {
                ((keypair === property) && (array[i][keypair] === value)) ? console.log(array[i]) : false;
            }
        }
    }

    // Error and arguement handling
    if (!property && value) {
        // console.log('ERROR: Property must be included when searching for a Value.');
        matchesValue(value);
    } else if (!property && !value) {
        matchesAll();
    } else if (property && value) {
        matchesKeypair(property, value);
    } else if (property && !value) {
        matchesProperty(property);
    }
}

/////////////
// Runtime //
/////////////

// Test functions
console.log('TESTING: Search by Property and Value.');
methods.findObjects(storedData, 'id', 3);

console.log('TESTING: Search by no criteria.');
methods.findObjects(storedData, '', null);

console.log('TESTING: Search by Value.');
methods.findObjects(storedData, '', 'AAA');

console.log('TESTING: Search by Property.')
methods.findObjects(storedData, 'name', null);

// Export methods for other files to use
module.exports = methods;