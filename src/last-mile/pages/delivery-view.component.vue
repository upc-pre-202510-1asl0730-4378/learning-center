<script>
import OrderIdentifierForm from "@/last-mile/components/order-identifier-form.component.vue";
export default {
  name: "delivery-view",
  components: {OrderIdentifierForm}
}
</script>

<template>
  <div class="justify-content-center">
    <h1 class="text-center">Product Delivery</h1>
    <div class="flex justify-content-center mt-4">
      <order-identifier-form />
    </div>


  </div>
</template>

<style scoped>

</style>