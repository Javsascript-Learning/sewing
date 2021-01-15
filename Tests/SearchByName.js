function searchByName(username) {
    let personArray = [{username:"Kiarash",chest:22, waist:22}]
    for (let i = 0; i < personArray.length; i++) {
        if (personArray[i].username == username) {
            return personArray[i]
        } else {
            return null
        }
    }
}
module.exports = searchByName;