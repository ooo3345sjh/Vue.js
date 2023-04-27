<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>약관</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-textarea
            label="이용약관"
            variant="outlined"
            rows="10"
            hide-details="true"
            v-model="value.terms"
            readonly
          ></v-textarea>
          <v-checkbox
            label="동의합니다."
            class="d-flex justify-end"
            v-model="isCheck_terms"
          ></v-checkbox>
          <v-textarea
            label="개인정보 취급방침"
            variant="outlined"
            rows="10"
            hide-details="true"
            v-model="value.privacy"
            readonly
          ></v-textarea>
          <v-checkbox
            label="동의합니다."
            class="d-flex justify-end"
            v-model="isCheck_privacy"
          ></v-checkbox>
          <v-sheet class="text-center">
            <v-btn class="mr-2" @click="btnCancel">취소</v-btn>
            <v-btn color="primary" @click="btnNext">다음</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
import { onBeforeMount, reactive, ref } from "vue";

const router = useRouter();
const isCheck_terms = ref(false);
const isCheck_privacy = ref(false);

const value = reactive({
  terms: null,
  privacy: null,
});
const btnCancel = () => {
  router.push("/user/login");
};
const btnNext = () => {
  if (isCheck_terms.value && isCheck_privacy.value) {
    router.push("/user/register");
  } else {
    alert("동의를 체크하셔야 합니다.");
  }
};

onBeforeMount(() => {
  axios
    .get("/user/terms")
    .then((response) => {
      console.log(response);
      value.terms = response.data.terms;
      value.privacy = response.data.privacy;
    })
    .catch((error) => {});
});
</script>
<style scoped></style>
