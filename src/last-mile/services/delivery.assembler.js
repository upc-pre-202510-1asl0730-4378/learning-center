import {Delivery} from '../model/delivery.entity.js';

export class DeliveryAssembler{
    static toEntityFromResource(resource){
        return new Delivery({...resource});
    }

    static toEntitiesFromResponse(response){
        const deliveryResponse = response.data;
        if(Array.isArray(deliveryResponse)){
            return deliveryResponse.map(delivery => this.toEntityFromResource(delivery));
        }
        console.log('Invalid Format');
        return [];
    }
}