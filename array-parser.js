/////////////////////////////////////////////////////////////
// NOTES                                                   //
// Need to make this return more than just the first match //
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// PURPOSE                                                                    //
// This is intended to parse arrays and return all entries when no parameters //
// are provided or return the first match when parameters are provided.       //
////////////////////////////////////////////////////////////////////////////////

//////////////////
// DECLARATIONS //
//////////////////

// Version
const version = '0.0.4';

// Container to host all functions
const methods = {};

///////////////
// FUNCTIONS //
///////////////

// Test to make sure file loaded successfully.
methods.test = () => console.log(`common.js loaded successfully. Version: ${version}`);

// Search an array by no given criteria and return all matches
methods.findItemAny = function(array) {
    for (i in array) return array[i];
}

// Search an array by a specific Property and first match
methods.findItemByProperty = function(array, property) {
    // Go through array
    for (let i = 0; i < array.length; i++) {
        // Go through each keypair in array and return object containing strings matching Property
        for (keypair in array[i]) {
            if (keypair === property) return array[i];
        }
    }
}

// Search an array by a specific Property and return first matching value
methods.findValueByProperty = function(array, property) {
    // Go through array
    for (let i = 0; i < array.length; i++) {
        // Go through each keypair in array and return object containing strings matching Property
        for (keypair in array[i]) {
            if (keypair === property) return array[i].property;
        }
    }
}

// Search an array by a specific Value and return first match
methods.findItemByValue = function(array, value) {
    // Go through array
    for (let i = 0; i < array.length; i++) {
        // Go through each keypair in array and return object containing strings matching Property
        for (keypair in array[i]) {
            if (array[i][keypair] === value) return array[i];
        }
    }
}

// Search an array by a specific keypair and return first match
methods.findItemByKeypair = function(array, property, value) {
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

// Export methods for other files to use
module.exports = methods;