<template>
  <li>
    <i v-if="status == 'complete'" class="fa-sharp fa-solid fa-check"></i>
    <span>{{ content }}</span>
    <button @click="btnDelete(index, no)">삭제</button>
  </li>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import axios from "axios";
export default {
  name: "Item",
  props: {
    todo: Object,
  },
  setup(props) {
    const index = computed(() => props.todo.index);
    const no = computed(() => props.todo.value.no);
    const content = computed(() => props.todo.value.content);
    const status = computed(() => props.todo.value.status);

    const store = useStore();

    const btnDelete = (index, no) => {
      console.log("index : " + index);
      console.log("no : " + no);
      axios
        .delete(`http://localhost/todo/vue/${no}`)
        .then((response) => {
          console.log(response);
          store.dispatch("removeTodo", index);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return { btnDelete, no, index, content, status };
  },
};
</script>

<style scoped></style>
