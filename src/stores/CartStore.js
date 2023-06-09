import { defineStore } from "pinia";
import { groupBy } from "lodash";

import { useAuthUserStore } from "./AuthUserStore";

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
    grouped: (state) => {
      const grouped = groupBy(state.items, (item) => item.name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach((key) => (inOrder[key] = grouped[key]));
      return inOrder;
    },
    // groupCount: (state) => (name) => state.grouped[name]?.length || 0,
    groupCount: (state) => (name) => state.grouped[name].length,
    getTotal: (state) => {
      // let total = 0;
      // for (const name in state.grouped) {
      //   console.log(name);
      //   const price = parseInt(state.grouped[name][0].price);
      //   const count = parseInt(state.groupCount(name));
      //   // console.log(state.grouped);
      //   // console.log(price, count);
      //   // console.log(price * count);
      //   total += price * count;
      // }
      // return total;
      return state.items.reduce((preValue, item) => preValue + item.price, 0);
    },
  },
  actions: {
    checkout() {
      const authStore = useAuthUserStore();
      alert(
        `${authStore.username} bought ${this.count} items for $${this.getTotal}.`
      );
    },
    addItems(count, product) {
      console.log(count);
      count = parseInt(count);

      for (let i = 0; i < count; i++) {
        this.items.push({ ...product });
      }

      // cartStore.items.push(product)
      console.log(this.items);
    },
    removeItem(itemName) {
      this.items = this.items.filter((item) => item.name !== itemName);
    },
    setItemCount(item, count) {
      // this.items = this.items.filter((i) => i.name !== item.name);
      // for (let i = 0; i < count; i++) {
      //   this.items.push({ ...item });
      // }
      this.removeItem(item.name);
      this.addItems(count, item);
    },
  },
});
