<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글목록</v-app-bar-title>
      <p>
        {{ user?.nick }}님 반갑습니다.
        <v-btn @click="btnLogout">로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-table>
            <thead>
              <tr>
                <th class="text-center" width="80">번호</th>
                <th class="text-center" width="auto">제목</th>
                <th class="text-center" width="100">글쓴이</th>
                <th class="text-center" width="100">조회수</th>
                <th class="text-center" width="100">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(arti, index) in state.data.articles">
                <td class="text-center">
                  {{ state.pg.totalCnt - state.pg.limitStart - index }}
                </td>
                <td class="text-left">
                  <router-link to="/view">{{ arti.title }}</router-link>
                </td>
                <td class="text-center">{{ arti.nick }}</td>
                <td class="text-center">{{ arti.hit }}</td>
                <td class="text-center">{{ arti.rdate.substr(2, 8) }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-sheet class="text-right pt-6">
            <v-btn color="success" @click="btnWrite">글쓰기</v-btn>
          </v-sheet>
          <div class="text-center">
            <v-pagination
              :length="state.pg.totalPage"
              :total-visible="7"
              v-model="page"
              @click="pageClickHandler"
              rounded="circle"
            ></v-pagination>
          </div>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, onBeforeMount, reactive, ref } from "vue";
import axios from "axios";
const router = useRouter();
const store = useStore();
const state = reactive({
  data: {},
  pg: {},
});
const page = ref(1);

const user = computed(() => store.getters.user);
const btnLogout = () => {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};
const btnWrite = () => {
  router.push("/write");
};
onBeforeMount(() => {
  getArticles(1);
});
const pageClickHandler = () => {
  getArticles(page.value);
};

const getArticles = (page) => {
  axios
    .get("/articles", { params: { page: page } })
    .then((response) => {
      state.data = response.data;
      state.pg = response.data.pageHandler;
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
