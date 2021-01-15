const searchByName = require ("./SearchByName.js");

test ("searching username", () => {
    expect (searchByName("Kiarash")).toStrictEqual({username:"Kiarash",chest:22, waist:22})
    expect (searchByName("Mohsen")).toStrictEqual(null)
})