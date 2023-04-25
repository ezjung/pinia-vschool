<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
// import products from "@/data/products.json";

import { useProductStore } from '@/stores/ProductStore.js'
// import { toRefs } from 'vue'

const productStore = new useProductStore()
// const { products } = toRefs(productStore)

</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <!-- <ProductCard v-for="product in products" :key="product.name" :product="product" /> -->
      <ProductCard v-for="product in productStore.products" :key="product.name" :product="product" />
    </ul>
  </div>
</template>
