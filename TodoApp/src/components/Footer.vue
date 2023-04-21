<template>
  <footer>
    <button @click="btnClearAll">Clear All</button>
  </footer>
</template>
<script>
import { useStore } from "vuex";
import axios from "axios";
export default {
  name: "Footer",
  setup() {
    const store = useStore();
    const btnClearAll = () => {
      axios
        .delete(`http://localhost/todo/vue`)
        .then((response) => {
          console.log(response);
          store.dispatch("clearTodo");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return { btnClearAll };
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: auto;
  text-align: center;
}

footer > button {
  width: 100px;
  height: 30px;
  color: #e20303;
}
</style>
