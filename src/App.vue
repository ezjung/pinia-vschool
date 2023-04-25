<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
// import products from "@/data/products.json";

import { useProductStore } from '@/stores/ProductStore.js'
import { useCartStore } from '@/stores/CartStore.js'
// import { toRefs } from 'vue'

const productStore = useProductStore()
const cartStore = useCartStore()
// const { products } = toRefs(productStore)

// const addToCart = (count, product) => {
//   console.log(count)
//   count = parseInt(count)
//   cartStore.$patch((state) => {
//     for (let i = 0; i < count; i++) {
//       state.items.push(product)
//     }
//   })
//   // cartStore.items.push(product)
//   console.log(cartStore.items)
// }


// init page
productStore.fill()

</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <!-- <ProductCard v-for="product in products" :key="product.name" :product="product" /> -->
      <!-- <ProductCard v-for="product in productStore.products" :key="product.name" :product="product"
        @addToCart="cartStore.items.push(product)" /> -->
      <ProductCard v-for="product in productStore.products" :key="product.name" :product="product"
        @addToCart="cartStore.addItems($event, product)" />
    </ul>
  </div>
</template>
