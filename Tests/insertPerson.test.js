const insertPerson = require ("./InsertPerson.js")

test ("Insert person in database", () => {
    expect (insertPerson("Kiarash",22,22)).
    toStrictEqual({username:"Kiarash",chest:22,waist:22})
})