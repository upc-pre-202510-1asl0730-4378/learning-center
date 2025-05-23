import {Client} from '../model/client.entity.js';

export class ClientAssembler{
    static toEntityFromResource(resource){
        return new Client({...resource});
    }

    static toEntitiesFromResponse(response){
        const clientResponse = response.data;
        if(Array.isArray(clientResponse)){
            return clientResponse.map(client => this.toEntityFromResource(client));
        }
        console.log('Invalid Format');
        return [];
    }
}