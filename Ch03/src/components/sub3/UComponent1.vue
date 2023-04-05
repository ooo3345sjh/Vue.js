<template>
  <h4>UComponent1</h4>
  <p>name : {{ name }}</p>
  <p>age : {{ age }}</p>
</template>
<script>
export default {
  name: "UComponent1",
  // 상위 컴포넌트에 속성값을 수신하기 위한 API
  props: ["name", "age"],
};
</script>
<style scoped></style>
