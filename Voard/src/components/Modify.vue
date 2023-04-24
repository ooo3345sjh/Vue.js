<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글쓰기</v-app-bar-title>
      <v-btn @click="btnLogout">로그아웃</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-text-field
            label="제목"
            class="mb-5"
            hide-details="true"
            placeholder="제목을 입력해주세요."
            variant="outlined"
            model-value="제목입니다."
          ></v-text-field>
          <v-textarea
            label="내용"
            hide-details="true"
            variant="outlined"
            model-value="내용입니다."
            no-resize
            rows="10"
          ></v-textarea>
          <v-file-input
            label="File input"
            variant="outlined"
            class="mt-5"
          ></v-file-input>
          <v-sheet class="text-right">
            <v-btn class="mr-2" @click="btnCancel">수정취소</v-btn>
            <v-btn color="success" @click="btnModify">수정완료</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const btnLogout = () => {
  router.push("/user/login");
};
const btnCancel = () => {
  router.push("/list");
};
const btnModify = () => {
  router.push("/modify");
};
</script>
<style scoped></style>
