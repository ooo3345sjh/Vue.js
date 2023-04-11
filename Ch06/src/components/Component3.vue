<template>
  <h4>Component3</h4>
  <p>
    <input type="number" v-model="no" placeholder="번호 입력" /><br />
    <input type="text" v-model="text" part="할일 입력" />
  </p>
  <button @click="btnAdd">등록</button>
  <button @click="btnInit">초기화</button>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

// vuex 전역스토어 가져오기
const store = useStore();

const no = ref(0);
const text = ref("");

const btnAdd = function () {
  const data = {
    no: no.value,
    text: text.value,
    done: false,
  };
  console.log(data);
  store.dispatch("addItem", data);
};

const btnInit = () => {
  store.dispatch("clearItem");
};
</script>
<style scoped></style>
