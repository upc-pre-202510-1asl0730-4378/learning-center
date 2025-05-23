<script>
import {Card as PvCard} from "primevue";

export default {
  name: "product-summary-card",
  components: {
    PvCard

  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <pv-card>
    <template #header>
      <p class="text-lg font-bold text-primary text-center"><strong>Product Name</strong>: {{product.name}}</p>
    </template>
    <template #content>
      <p class="mb-2 text-sm"><strong>Product Description</strong>: {{product.description}}</p>
      <p class="mb-1 text-sm"><strong>Product Price</strong>: {{product.price}}</p>
      <p class="mb-1 text-sm"><strong>Product Category</strong>: {{product.category}}</p>
    </template>
    <template #footer>
      <p class="text-sm font-medium" :class="{'text-green-600': product.deliveredProducts}">
        {{ product.deliveredProducts > 0 ? product.deliveredProducts + ' Delivered' : 'No Delivered' }}
      </p>
    </template>

  </pv-card>
</template>

<style scoped>

</style>