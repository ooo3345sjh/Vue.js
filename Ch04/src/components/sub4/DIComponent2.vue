<template>
  <h4>DIComponent2</h4>
  <p>
    name: {{ user1.name }}<br />
    age: {{ user1.age }}<br />
    addr: {{ user1.addr }}<br />
  </p>
  <p>
    name: {{ user2.name }}<br />
    age: {{ user2.age }}<br />
    addr: {{ user2.addr }}<br />
  </p>
</template>
<script setup>
import { inject } from "vue";

const user1 = inject("user1");
const user2 = inject("user2");
</script>
<style scoped></style>
