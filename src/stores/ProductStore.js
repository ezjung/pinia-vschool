import { defineStore } from "pinia";
// import products from "@/data/products.json";

export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    products: [],
  }),
  actions: {
    async fill() {
      // this.products = (await axios.get('some/end/point)).data
      this.products = (await import("@/data/products.json")).default;
    },
  },
});
