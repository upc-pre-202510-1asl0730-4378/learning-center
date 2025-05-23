<script>
import {Button as PvButton} from "primevue";
import {DeliveryService} from "@/last-mile/services/delivery.service.js";
import {ProductService} from "@/cargo/services/product.service.js";

export default {
  name: "oder-identifier-form",
  components: {PvButton},
  data(){
    return {
      title: {singular: 'Form', plural: 'Forms'},
      productService: new ProductService(),
      orderId: '',
      productId: null,
      deliveryService: new DeliveryService(),
      submitted: false,
      validatedData: null,
      message:''
    }
  },
  methods: {
    notifySuccessAction(message) {
      this.$toast.add({severity: 'success', summary: 'Success!', detail: message, life: 3000});
    },
    notifyErrorAction(message) {
      this.$toast.add({severity: 'error', summary: 'Error!', detail: message, life: 3000});
    },

    async onSubmit() {
      this.submitted = true;
      this.message='';
      this.validatedData = null;
      await this.validateData();
    },

    async validateData() {
      try {
        const order = await this.deliveryService.getDeliveryByOrderId(this.orderId);

        if(!order) {
          this.message = 'Invalid Order Identifier';
          return;
        }

        if(order.status === 'Pending') {
          this.message = 'You can only deliver shipped products';
          return;
        }

        if(order.status === 'Shipped') {
          if(order.productId === this.productId) {
            const updated = {...order,status:'Delivered'}

            await this.deliveryService.updateDelivery(order.id, updated);
            this.notifySuccessAction('Order delivered successfully');
          } else {
            this.message = 'Invalid Product Identifier';
          }
        } else {
          this.notifySuccessAction('Order already delivered');
        }
      }
      catch (error) {
        this.notifyErrorAction('Error validating data');
        console.log(error);
      }
    }
  }
}
</script>

<template>
  <div class="p-4 mx-auto" style="width: 400px;">
    <h2 class="text-2xl font-bold mb-4">Product Delivery</h2>
    <p class="mb-4 text-gray-600">Record the delivery of products to client</p>

    <div class="mb-4">
      <label class="block font-semibold mb-1">Order Identifier</label>
      <input v-model="orderId" type="text" class="p-inputText p-component w-full" />
    </div>

    <div class="mb-4">
      <label class="block font-semibold mb-1">Product Identifier</label>
      <input v-model.number="productId" type="number" class="p-inputText p-component w-full" />
    </div>

    <pv-button label="Deliver Product" class="p-button-success w-full" @click="onSubmit" />

    <p v-if="message" class="mt-4 text-center font-medium text-primary">
      {{ message }}
    </p>
  </div>
</template>

<style scoped>

</style>