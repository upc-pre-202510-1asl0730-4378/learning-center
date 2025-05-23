import {Product} from '../model/product.entity.js';

export class ProductAssembler{
    static toEntityFromResource(resource){
        return new Product({...resource});
    }

    static toEntitiesFromResponse(response){
        const productResponse = response.data;
        if(Array.isArray(productResponse)){
            return productResponse.map(product => this.toEntityFromResource(product));
        }
        console.log('Invalid Format');
        return [];
    }
}