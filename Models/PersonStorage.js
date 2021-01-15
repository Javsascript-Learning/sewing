class PersonStorage {
    insertPerson (username,chest,waist) {}
    searchByName(username){}
    updatePerson(username,nChest,nWaist){}
    showTable (table){
        return console.table(table)
    }
}
module.exports = PersonStorage;