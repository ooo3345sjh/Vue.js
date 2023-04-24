<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글보기</v-app-bar-title>
      <v-btn @click="btnLogout">로그아웃</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-card title="제목입니다." class="mb-2"></v-card>
          <v-card class="pa-2 mb-2">
            <v-row>
              <v-col cols="8">
                <i class="fa-solid fa-download">파일.jpg</i>
              </v-col>
              <v-col cols="4" class="d-flex justify-end">
                <span class="mr-2">그린컴터</span>
                <span>2021.03.12</span>
              </v-col>
            </v-row>
          </v-card>
          <v-card text="내용입니다." min-height="500"></v-card>
          <v-sheet class="text-right mt-2">
            <v-btn class="mr-2" @click="btnCancel">목록</v-btn>
            <v-btn color="success" @click="btnModify">수정</v-btn>
          </v-sheet>

          <v-sheet class="mt-2">
            <v-card variant="outlined">
              <h3 class="text-h6 pa-3">댓글</h3>
              <v-card-item>
                <v-row>
                  <v-col cols="9">
                    <p>작성자 <span>23.05.20</span></p>
                    <p>댓글 내용</p>
                  </v-col>
                  <v-col cols="3">
                    <v-btn class="border mr-2"> 수정 </v-btn>
                    <v-btn color="primary"> 삭제</v-btn>
                  </v-col>
                </v-row>
              </v-card-item>
              <v-card-item>
                <v-textarea
                  label="댓글작성"
                  variant="outlined"
                  hide-details="true"
                ></v-textarea>
                <v-sheet class="text-right mt-2">
                  <v-btn class="border mr-2"> 작성취소 </v-btn>
                  <v-btn color="primary"> 작성완료 </v-btn>
                </v-sheet>
              </v-card-item>
            </v-card>
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
