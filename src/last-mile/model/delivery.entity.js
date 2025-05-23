export class Delivery {
    constructor ({id=0,orderId='',productId=0,clientId=0,deliveryDate=new Date(), deliveryAddress='',status=''}) {
        this.id = id;
        this.orderId = orderId;
        this.productId = productId;
        this.clientId = clientId;
        this.deliveryDate = deliveryDate;
        this.deliveryAddress = deliveryAddress;
        this.status = status;

    }
}