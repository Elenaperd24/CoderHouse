class Api {
    constructor() {
        this.products = []
    }

    getAll() {
        return this.products
    }

    getById(id) {
        const productSelect = this.products.filter(item => item.id == id)
        if (productSelect.length == 0) {
            return null
        }
        else {
            return productSelect
        }
    }

    postData(product) {
 
        if (this.products.length == 0) {
            product.id = 1
            this.products.push(product)
        }
        else {
            const newId = this.products.length + 1
            product.id = newId
            this.products.push(product)
        }
        
        return product
    }
    putData(id, product) {

        this.products.map(item => {
            if (item.id == id) {
                item.title = product.title
                item.price = product.price
                item.thumbnail = product.thumbnail
            }
        })

        return this.products

    }
    deleteData(id) {
        const productSelect = this.products.filter(item => item.id != id)        
        this.products = productSelect
        return this.products
    }

}
module.exports = Api