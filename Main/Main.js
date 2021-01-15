let PersonArrayStorage = require("../Models/PersonArrayStorage");
let personMapStorage = require("../Models/PersonMapStorage");
let personDB = require("../Models/PersonDB");

let person = new personDB();

function router (command) {
    switch (command) {
        case 'insert':
            console.log(person.insertPerson("Kaveh",90,22));
            break;
        case 'search':
            console.log(person.searchByName('Kaveh'))
            break;

        case 'update':
            console.log(person.updatePerson('Mohsen',20,45))
            break;
    }
}
// router('insert')
router('search')
router('update')