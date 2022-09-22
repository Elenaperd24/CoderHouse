const knex = require('knex');

// AQUI COMIENZA MI CLASE CONTENEDOR 

class ModelProducts {
    constructor(config, nameTable) {
        this.knexlib = knex(config)
        this.nameTable = nameTable

    }
    createTable() {
        return this.knexlib.schema.dropTableIfExists(this.nameTable).finally(() => {
            return this.knexlib.schema.createTable(this.nameTable, table => {
                table.increments("id").primary();
                table.string("title", 15);
                table.float("price", 50);
                table.string("thumbnail", 250);
            })
        })
    }


    async getAll() {
        try {
        let contenido = await this.knexlib.from(this.nameTable).select("*")
    
        return  contenido            
        }
        catch (err) {
          throw err 
        }
    }

    async postData(data) {
     return  this.knexlib(this.nameTable).insert(data)
    }

}

module.exports = ModelProducts
