import httpInstance from "../../shared/http.instance.js";
import {ProductAssembler} from "@/cargo/services/product.assembler.js";

export class ProductService {
    resourceEndpoint = import.meta.env.VITE_PRODUCT_ENDPOINT_PATH;

    async getAllProducts() {
        const response = await httpInstance.get(this.resourceEndpoint);
        return ProductAssembler.toEntitiesFromResponse(response);
    }

    async getProductById(id) {
        const response = await httpInstance.get(`${this.resourceEndpoint}/${id}`);
        return ProductAssembler.toEntityFromResource(response);
    }
}