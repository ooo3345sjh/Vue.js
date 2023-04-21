/**
 * Vuex 전역스토어 인스턴스 생성
 * 설치 : npm init vite@latest
 * vuex 라이브러리 설치 : npm install vuex@next
 * 새로고침시에도 전역스토어 데이터 저장하기위한 라이브러리 : npm install vuex-persistedstate
 */
import { createStore } from "vuex";
import { useRouter } from "vue-router";
import createPersistedState from "vuex-persistedstate";

const router = useRouter();

const store = createStore({
  // state : store에서 관리하는 상태(전역변수)를 정의
  state: {
    user: null,
  },

  // mutations : store의 상태값을 변경하는 메서드를 정의
  mutations: {
    SET_USER: (state, data) => {
      state.user = data;
    },
  },
  // actions : 비동기 처리를 수행하고 mutations  메서드를 실행하는 메서드 정의
  actions: {
    setUser: (context, data) => {
      context.commit("SET_USER", data);
    },
  },
  // getters : 외부에 상태값을 반환하는 메서드 정의
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
  plugins: [createPersistedState()],
});

// store 내보내기 -> main.js 등록
export default store;
