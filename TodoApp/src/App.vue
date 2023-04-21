<template>
  <Header v-on:addTodo="addTodoHandler"></Header>
  <Main></Main>
  <Footer></Footer>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  setup() {
    const store = useStore();
    const addTodoHandler = (todo) => {
      console.log(todo);
      const jsonData = {
        content: todo,
      };
      axios
        .post("http://localhost/todo/vue", jsonData)
        .then((response) => {
          store.dispatch("addAllTodo", response.data.todos);
          alert("작성완료");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return { addTodoHandler };
  },
};
</script>

<style scoped></style>
