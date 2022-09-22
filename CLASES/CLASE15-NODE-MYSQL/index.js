import ClienteSQL from "./cliente.js";


//enviarle las opciones de conexion al cliente

const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1', //127.0.1 es lo mismo que localhost
        port: "33065",
        user: 'root',
        password: '',
        database: 'dbelena1',
    }
}

const clientSQL = new ClienteSQL(options)

//realizar operaciones sobe DB usando la conexion que creamos udsnfp node y knex

//crear una tabla
clientSQL.createTable()
    .then(() => {
        console.log("tabla creada")
        const articulos = [
            { nombre: "ford fiesta", codigo: "FORD-FIESTA01", precio: 2000, stock: 2 },
            { nombre: "ford focus", codigo: "FORD-FOCUS01", precio: 3000, stock: 1 },
            { nombre: "ford FESTIVA", codigo: "FORD-FESTIVA01", precio: 1000, stock: 5 }
        ]
        return clientSQL.insertData(articulos)
    })
    .then(() => {
        console.log("insertados")
    }).catch(err => console.log(err))
//insentar datos de la tabla
//....

