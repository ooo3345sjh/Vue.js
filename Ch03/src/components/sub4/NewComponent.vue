<template>
  <h4>NewComponent</h4>
  <p>카운터 : {{ count }}</p>
  <button v-on:click="countOne">증가</button>
</template>
<script>
export default {
  name: "NewComponent",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    countOne: function () {
      this.count++;
    },
  },
  beforeCreate() {
    console.log("beforeCreate...");
  },
  created() {
    console.log("created...");
  },
  beforeMount() {
    console.log("beforeMount...");
  },
  mounted() {
    console.log("mounted...");
  },
  beforeUpdate() {
    console.log("beforeUdate...");
  },
  updated() {
    console.log("updated...");
  },
  beforeUnmount() {
    console.log("beforeUnmount...");
  },
  unmounted() {
    console.log("unmounted...");
  },
};
</script>
<style></style>
