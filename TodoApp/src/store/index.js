/**
 * Vuex 전역스토어 인스턴스 생성
 * 설치 : npm init vite@latest
 * vuex 라이브러리 설치 : npm install vuex@next
 * 새로고침시에도 전역스토어 데이터 저장하기위한 라이브러리 : npm install vuex-persistedstate
 */
import { createStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();

const store = createStore({
  // state : store에서 관리하는 상태(전역변수)를 정의
  state: {
    todos: [],
  },

  // mutations : store의 상태값을 변경하는 메서드를 정의
  mutations: {
    ADD_ALL_TODO(state, todos) {
      state.todos = todos;
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1);
    },
    CLEAR_TODO(state) {
      state.todos = [];
    },
  },
  // actions : 비동기 처리를 수행하고 mutations  메서드를 실행하는 메서드 정의
  actions: {
    addAllTodo(context, todos) {
      context.commit("ADD_ALL_TODO", todos);
    },
    addTodo(context, todo) {
      context.commit("ADD_TODO", todo);
    },
    removeTodo(context, index) {
      context.commit("REMOVE_TODO", index);
    },
    clearTodo(context) {
      context.commit("CLEAR_TODO");
    },
  },
  // getters : 외부에 상태값을 반환하는 메서드 정의
  getters: {
    todos: (state) => {
      return state.todos;
    },
  },
});

export default store;
