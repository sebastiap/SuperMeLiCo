class Order {
    constructor(id, product, quantity,) {
        this.id = id.toString()
        this.name = product
        this.total = quantity
    }
}

export class Item {
    constructor(id, order_id , product, quantity,) {
        this.id = id.toString()
        this.order_id = order_id 
        this.name = product
        this.total = quantity
    }
}

export default Order