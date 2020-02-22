import { Product } from './product.class';

export class LineItem {
    id: number;
    quantity: number;
    product: Product;
    request: Request;

    constructor(id: number = 0, quantity: number = 0,
                product: Product = null, request: Request = null) {
        this.id = id;
        this.quantity = quantity;
        this.product = product;
        this.request = request;
    }
}
