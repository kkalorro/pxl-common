// Version
const version = '0.0.0.1';

// Container to host all functions
const methods = {};

methods.test = function() {
    console.log(`common.js loaded successfully. Version: ${version}`);
}

// -------------------
// ACCOUNT LOGIN
// Get a string.
// Check if it exists at a array.
// CRUD.
// Run next step.
// -------------------

//////////////////
// Declarations //
//////////////////

// [Temp] Stored data
const storedData = [
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
        test: 'new'
    }
];

// ACCOUNT LOGIN
// Get a string.


///////////////
// Functions //
///////////////

// Search array array for specified criteria and return matches
// Future: adjust array to object and array
methods.findObjects = function(array, property, value) {
    // Return all results, no criteria
    function returnAll() {
        console.log('Running returnAll().');
        // Go through preexisting stored data
        for (let i = 0; i < array.length; i++) {
            // Return containing objects for Property matches
            console.log(array[i]);
        }
    }

    // Return all results matching Property
    function returnByProperty(property) {
        console.log('Running returnByProperty().');
        // Go through preexisting stored data
        for (let i = 0; i < array.length; i++) {
            // On every keypair
            for (keypair in array[i]) {
                // Return containing objects for Property matches
                (keypair === property) ? console.log(array[i]) : false;
            }
        }
    }

    // Return all results with matching Property and Value
    function returnByKeypair(property, value) {
        console.log('Running returnByKeypair().');
        // Go through preexisting stored data
        for (let i = 0; i < array.length; i++) {
            // On every keypair
            for (keypair in array[i]) {
                // Return containing objects for Property matches
                ((keypair === property) && (array[i][keypair] === value)) ? console.log(array[i]) : false;
            }
        }
    }

    // Error and arguement handling
    if (!property && value) {
        console.log('ERROR: Property must be included when searching for a Value.');
    // Return all if no keypair value is declared
    } else if (!property && !value) {
        console.log('Outputting all results.');
        returnAll();
    } else if (property && value) {
        console.log('Outputting all results matching Property and Value.');
        returnByKeypair(property, value);
    } else if (property && !value) {
        console.log('Outputting all results matching Property name.');
        returnByProperty(property);
    }
        
}

// CRUD.
// Run next step.

/////////////
// Runtime //
/////////////

// Test functions
console.log('TESTING: Full search.');
methods.findObjects(storedData, 'id', 3);

console.log('TESTING: Minimal search.');
methods.findObjects(storedData, '', null);

console.log('TESTING: Missing Property.');
methods.findObjects(storedData, '', 'second');

console.log('TESTING: Missing Value.')
methods.findObjects(storedData, 'name', null);

// Export methods for other files to use
module.exports = methods;
