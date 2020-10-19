console.log('app.js loaded.');

// -------------------
// ACCOUNT LOGIN
// Get a string.
// Check if it exists at a source.
// CRUD.
// Run next step.
// -------------------

// PREVIOUSLY STORED DATA
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

// RETURN OBJECT OF KEYPAIR
function findObjects(container, property, value) {

    // Return all results, no criteria
    function returnAll() {
        console.log('Running returnAll().');
        // Go through preexisting stored data
        for (let i = 0; i < container.length; i++) {
            // Return containing objects for Property matches
            console.log(container[i]);
        }
    }

    // Return all results with matching Property
    function returnByProperty(property) {
        console.log('Running returnByProperty().');
        // Go through preexisting stored data
        for (let i = 0; i < container.length; i++) {
            // On every keypair
            for (keypair in container[i]) {
                // Return containing objects for Property matches
                (keypair === property) ? console.log(container[i]) : false;
            }
        }
    }

    // Return all results with matching Property and Value
    function returnByKeypair(property, value) {
        console.log('Running returnByKeypair().');
        // Go through preexisting stored data
        for (let i = 0; i < container.length; i++) {
            // On every keypair
            for (keypair in container[i]) {
                // Return containing objects for Property matches
                ((keypair === property) && (container[i][keypair] === value)) ? console.log(container[i]) : false;
            }
        }
    }

    // Error checking
    if (!property && value) {
        console.log('ERROR: Property must be included when searching for a Value.');
    // Return all if no keypair value is declared
    } else if (!property && !value) {
        console.log('This will output all results.');
        returnAll();
    } else if (property && value) {
        console.log('This will output all results matching Property and Value.');
        returnByKeypair(property, value);
    } else if (property && !value) {
        console.log('This will output all results matching Property name.');
        returnByProperty(property);
    }
        
}

// Test functions
console.log('TESTING: Full search.');
findObjects(storedData, 'id', 3);

console.log('TESTING: Minimal search.');
findObjects(storedData, '', null);

console.log('TESTING: Missing Property.');
findObjects(storedData, '', 'second');

console.log('TESTING: Missing Value.')
findObjects(storedData, 'name', null);

// Check if stored data pointer matches target string

// CRUD.
// Run next step.