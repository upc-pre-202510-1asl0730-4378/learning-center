<script>
import ProductSummaryView from '../components/product-summary-card.component.vue'
import {Product} from "@/cargo/model/product.entity.js";
import {ProductService} from "@/cargo/services/product.service.js";
import {DeliveryService} from "@/last-mile/services/delivery.service.js";
import ProductSummaryCard from "@/cargo/components/product-summary-card.component.vue";

export default {
  name: "product-summary-view",
  components: {ProductSummaryCard, ProductSummaryView},
  data() {
    return {
      title: {singular: 'Product', plural: 'Products'},
      products: [],
      productService: new ProductService(),
      deliveryService: new DeliveryService(),
      product: new Product({products:null,deliveryProducts:0}),
      deliveredCounts: {}
    }
  },
  methods: {
    async loadProducts() {
      try {
        this.products = await this.productService.getAllProducts();
        this.deliveredCounts = await this.deliveryService.getDeliveredCountByProductId();
        this.products = this.products.map(product => {
          return {
            ...product,
            deliveredProducts: this.deliveredCounts[product.id] || 0
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.loadProducts();

  }
}
</script>

<template>
  <div class="grid mt-8 mx-auto p-3 justify-content-center" style="max-width: 1200px;">
    <div v-for="product in products" :key="product.id" class="col-12 sm:col-6 md:col-3 lg:col-5">
      <product-summary-card :product="product"/>
    </div>
  </div>
</template>

<style scoped>

</style>