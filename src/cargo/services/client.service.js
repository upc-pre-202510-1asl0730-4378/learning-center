import {ClientAssembler} from "@/cargo/services/client.assembler.js";
import httpInstance from "../../shared/http.instance.js";

export class ClientService {
    resourceEndpoint = import.meta.env.VITE_CLIENT_ENDPOINT_PATH;

    getAllClients() {
        const response = httpInstance.get(this.resourceEndpoint);

        return ClientAssembler.toEntityFromResource(response);
    }

    getClientById(id){
        const response= httpInstance.get(`${this.resourceEndpoint}/${id}`);
        return ClientAssembler.toEntityFromResource(response);

    }
}