let personStorage = require("./PersonStorage");
let person = require("./Person");

class PersonArrayStorage extends personStorage{
    personArray = []

    /**
     *  Insert username and their Information in Database but, at first it checks if the username (person) exists it
     *  does nothing, otherwise the username doesn't exists add username (person) in database
     * @param {string} username - add username into the database
     * @param {integer} chest - to add some value to show chest size in CM's
     * @param {integer} waist -  add values to show waist size in CM's
     * @returns {String} - if username doesn't exists, Set method can insert person if it's success,
     * it returns Done, otherwise it returns Exists, it means the username is already exists.
     */
    insertPerson(username, chest, waist) {
        super.insertPerson(username, chest, waist);
        let exists = this.searchByName(username)
        if (!exists) {
            this.personArray.push(new person(username,chest,waist));
            return "Done";
        } else {
            return "Exists"
        }
    }

    /**
     * Using this method to searching username in DB
     * @param {string} username - get username to searching into the Database
     * @returns {*[]} - if the username exists it pass the index of that username and return the whole information
     * of that index that object has been saved in. Otherwise it returns empty array
     */
    searchByName(username) {
        super.searchByName(username);
        for (let i = 0; i < this.personArray.length; i++) {
            if (this.personArray[i].username == username) {
                return this.personArray[i];
            } else {
                return undefined
            }
        }
    }

    /**
     * This method is using for update username information
     * @param {string} username - get username to check if exists
     * @param {integer} nChest - insert new chest size to update an old chest size
     * @param {integer} nWaist - insert new waist size to update an old waist size
     * @returns {Object} - if the username exists in DB it set and update the whole information using these param's and
     * returns true, but if it doesn't exists it returns false.
     */
    updatePerson(username,nChest,nWaist) {
        super.updatePerson(username,nChest,nWaist);
        let getCurrUsername = this.searchByName(username);
        if (getCurrUsername) {
            getCurrUsername.username = username
            getCurrUsername.chest = nChest
            getCurrUsername.waist = nWaist
            return getCurrUsername;
        } else {
            return undefined
        }
    }
}
module.exports = PersonArrayStorage;