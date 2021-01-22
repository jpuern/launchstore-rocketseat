const { formatprice } = require('./utils')
// carrinho fica guardado na sessão (req.session)

const Cart = {
    init(oldCart) {
        if(oldCart) {
            this.items = oldCart.items
            this.total = oldCart.total
        } else {
            this.items = []
            this.total = {
                quantity: 0,
                price: 0,
                formattedPrice: formatPrice(0)
            }
        }
        return this
    },
    addOne(product) {

    },
    removeOne(productId) {

    },
    delete(productId) {

    }
}

module.exports = Cart

// adcionar 1 item ao carrinho
// remover 1 item do carrinho
// deletar todo o item