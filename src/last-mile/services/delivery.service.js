import {DeliveryAssembler} from "@/last-mile/services/delivery.assembler.js";
import httpInstance from "../../shared/http.instance.js";


export class DeliveryService {
    resourceEndpoint = import.meta.env.VITE_DELIVERY_ENDPOINT_PATH;

    async getAllDeliveries() {
        const response = await httpInstance.get(this.resourceEndpoint);
        return DeliveryAssembler.toEntitiesFromResponse(response);
    }

    async getDeliveryById(id) {
        const response = await httpInstance.get(`${this.resourceEndpoint}/${id}`);
        return DeliveryAssembler.toEntityFromResource(response);

    }

    async getDeliveredCountByProductId() {
        const deliveries = await this.getAllDeliveries()
        const counts = {};

        deliveries.forEach(delivery => {
            if(delivery.status === 'Delivered') {
                counts[delivery.productId] = (counts[delivery.productId] || 0) + 1;
            }
        })
        return counts;
    }

    async updateDelivery(id, resource) {
        const response = await httpInstance.put(`${this.resourceEndpoint}/${id}`, resource);
        return DeliveryAssembler.toEntityFromResource(response);
    }

    async getDeliveryByOrderId(orderId) {
        const deliveries = await this.getAllDeliveries();
        return deliveries.find(delivery => delivery.orderId === orderId);
    }

}