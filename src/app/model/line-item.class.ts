export class LineItem {
    id: number;
    quantity: number;
    productId: number;
    requestId: number;

    constructor(id: number = 0, quantity: number = 0,
                productId: number = 0, requestId: number = 0) {
        this.id = id;
        this.quantity = quantity;
        this.productId = productId;
        this.requestId = requestId;
    }
}
