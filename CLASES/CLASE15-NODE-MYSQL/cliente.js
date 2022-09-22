import knex from "knex";

//creando el cliente

class ClienteSQL {
    constructor(config) {
        this.knexlib = knex(config)
    }

    createTable() {
        return this.knexlib.schema.dropTableIfExists("articulos").finally(() => {
           return this.knexlib.schema.createTable("articulos", table => {
                table.increments("id").primary();
                table.string("nombre", 15);
                table.string("codigo", 10).notNullable();
                table.float("precio", 50);
                table.integer("stock");
            })
        })}

    consultData() {


    }

    consultById(id) {

    }

    insertData(data) {
        return this.knexlib("articulos").insert(data)
    }

    dropDataById(id) {

    }

    updateDataById(id) {

    }

    close() {
        this.knex.destroy()
    }
}

export default ClienteSQL;