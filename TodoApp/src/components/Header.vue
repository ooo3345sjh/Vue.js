<template>
  <header>
    <div>
      <input type="text" v-model="newTodo" placeholder="할일을 입력하세요." />
      <button @click="btnAddTodo">등록</button>
    </div>
  </header>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Header",
  setup(props, context) {
    const newTodo = ref("");
    const btnAddTodo = () => {
      if (newTodo.value || false) {
        // 상위 컴포넌트에 addTodo 이벤트 발생 시킴
        context.emit("addTodo", newTodo.value);
      }
    };
    return { newTodo, btnAddTodo };
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  background: white;
  padding: 10px;
  box-sizing: border-box;
}
header > div {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
header > div > input {
  width: 100%;
  height: 100%;
  padding: 6px;
  box-sizing: border-box;
  border: none;
  outline: none;
}
header > div > button {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border: none;
  background: #44ba81;
  color: white;
}
</style>
