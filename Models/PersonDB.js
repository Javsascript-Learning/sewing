const {Pool} = require("pg");
let config = require("./Config");
let personStorage = require("./PersonStorage");

class PersonDB extends personStorage{
    pool = new Pool(config);
    async insertPerson(username, chest, waist) {
        super.insertPerson(username, chest, waist);
        let exists = this.searchByName(username)
        try {
            if(exists) {
                await this.pool.query(`INSERT INTO person VALUES('${username}','${chest}', '${waist}')`);
                return 'Done';
            }
        } catch {
            return 'Exists';
        }
    }

    async searchByName(username) {
        super.searchByName(username);
        let find = `SELECT * FROM person WHERE username='${username}'`;
        let done = await this.pool.query(find)
        if (done.rows.length >= 1) {
            return this.showTable(done.rows);
        } else {
            return 'undefined'
        }
    }

    async updatePerson(username, nChest, nWaist) {
        super.updatePerson(username, nChest, nWaist);
        let getCurrUsername = this.searchByName(username)
        if (getCurrUsername) {
            await this.pool.query(`UPDATE person SET chest = '${nChest}', waist = '${nWaist}' WHERE username = '${username}'`);
            return this.showTable(getCurrUsername.rows)
        } else {
            return undefined
        }
    }
}
module.exports = PersonDB;