class Api {
    constructor() {

    }

    getAll(req, res, products, next) {
        res.send(products)
    }

    getById(req, res, id, products, next) {
        const productSelect = products.filter(item => item.id == id)

        if (productSelect.length == 0) {
            res.status(400).send({ error: "producto no encontrado" })
            return null
        }
        else {
            res.send(productSelect)
            return productSelect

        }
    }

    postData(req, res, product, products, next) {

        if (products.length == 0) {
            product.id = 1
            products.push(product)
        }
        else {
            const newId = products.length + 1
            product.id = newId
            products.push(product)
        }

        res.send(product)
    }
    putData(req, res, id, product, products, next) {

        products.map(item => {
            if (item.id == id) {
                item.title = product.title
                item.price = product.price
                item.thumbnail = product.thumbnail
            }
        })

        res.send(products)

    }
    deleteData(req, res, id, products, next) {
        const productSelect = products.filter(item => item.id != id)
        console.log(productSelect)
        products = productSelect
        res.send(products)
    }

}
module.exports = Api
