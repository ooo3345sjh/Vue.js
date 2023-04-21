<template>
  <main>
    <ul>
      <Item v-for="(value, index) in todos" :todo="{ value, index }"></Item>
    </ul>
  </main>
</template>
<script>
import Item from "./Item.vue";
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import axios from "axios";
export default {
  name: "Main",
  components: {
    Item,
  },
  setup() {
    onBeforeMount(() => {
      axios
        .get("http://localhost/todo/vue")
        .then((response) => {
          store.dispatch("addAllTodo", response.data.todos);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    const store = useStore();
    const todos = computed(() => store.getters.todos);

    return { todos };
  },
};
</script>

<style>
main {
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
}
main > ul {
  width: 100%;
  height: auto;
  list-style: none;
  padding: 0;
  box-sizing: border-box;
}
main > ul > li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  margin-bottom: 6px;
  background-color: white;
  box-sizing: border-box;
}
main > ul > li > i {
  color: #62acde;
}
main > ul > li > span {
  margin-left: 10px;
}
main > ul > li > button {
  float: right;
  width: 40px;
  height: 40px;
  border: none;
  color: #de4343;
}
</style>
