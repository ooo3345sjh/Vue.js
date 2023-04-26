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
            v-model="article.title"
          ></v-text-field>
          <v-textarea
            label="내용"
            hide-details="true"
            variant="outlined"
            v-model="article.content"
            no-resize
            rows="10"
          ></v-textarea>
          <v-file-input
            label="File input"
            variant="outlined"
            class="mt-5"
            name="fname"
            id="file"
          ></v-file-input>
          <v-sheet class="text-right">
            <v-btn class="mr-2" @click="btnCancel">작성취소</v-btn>
            <v-btn color="success" @click="btnWrite">작성완료</v-btn>
          </v-sheet>
        </v-sheet>
        <v-dialog v-model="dialog" width="400">
          <v-card>
            <v-card-text> 등록 완료 </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="btnDialog">확인</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";

const article = reactive({
  title: null,
  content: null,
  uid: null,
});
const dialog = ref(false);

const store = useStore();
const router = useRouter();
const btnLogout = () => {
  router.push("/user/login");
};
const btnCancel = () => {
  router.push("/list");
};
const btnWrite = () => {
  article.uid = store.getters.user.uid;
  const frm = new FormData();
  var fileInput = document.getElementById("file");
  frm.append("fname", fileInput.files[0]);
  frm.append("title", article.title);
  frm.append("content", article.content);
  frm.append("uid", article.uid);

  axios
    .post("http://localhost/Voard/article", frm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
      // alert("작성 완료!");
      dialog.value = true;
    })
    .catch((error) => {
      console.log(error);
    });
};

const btnDialog = () => {
  dialog.value = false;
  router.push("/list");
};
</script>
<style scoped></style>
