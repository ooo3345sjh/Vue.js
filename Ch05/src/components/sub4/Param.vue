<template>
  <h4>Param</h4>
  <p>params : {{ user }}</p>
  <p>uid : {{ user.uid }}</p>
  <p>name : {{ user.name }}</p>
  <p>age : {{ user.age }}</p>
</template>
<script setup>
import { useRoute } from "vue-router";

// route 생성
const route = useRoute();

// params 데이터 수신 --> 주소 파라미터 서식 설정
const user = route.params;
</script>
<style scoped></style>
