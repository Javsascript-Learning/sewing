
class Person {
    constructor(username,chest,waist) {
        this.username = username
        this.chest = chest
        this.waist = waist
    }
}


function insertPerson(username, chest, waist) {
    let personArray = [{username:"Kiarash",chest:22, waist:22}]
    let exists = personArray.filter((item) => {
        return item.username == username
    }).length >= 1
    if (!exists) {
        personArray.push(new Person(username,chest,waist))
        return "Done"
    } else {
        return "Failed"
    }
}

module.exports = insertPerson;
