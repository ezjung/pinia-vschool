import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state: () => ({
    items: [],
  }),
  actions: {
    addItems(count, product) {
      console.log(count);
      count = parseInt(count);

      for (let i = 0; i < count; i++) {
        this.items.push({ ...product });
      }

      // cartStore.items.push(product)
      console.log(this.items);
    },
  },
});