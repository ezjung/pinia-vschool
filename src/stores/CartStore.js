import { defineStore } from "pinia";
import { groupBy } from "lodash";

export const useCartStore = defineStore("CartStore", {
  state: () => ({
    items: [],
  }),
  getters: {
    count() {
      return this.items.length;
    },
    // When arrow functions add state arguments
    isNotEmpty: (state) => state.count > 0,
    grouped: (state) => groupBy(state.items, (item) => item.name),
    // groupCount: (state) => (name) => state.grouped[name]?.length || 0,
    groupCount: (state) => (name) => state.grouped[name].length,
  },
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
