export class Product {
    constructor({id=0,name='',description='',price=0,category='',stock=0}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.stock = stock;

    }
}