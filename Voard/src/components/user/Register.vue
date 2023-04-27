<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>회원가입</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-card>
            <v-card-item>
              <v-card-title>사이트 이용정보 입력</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-row no-gutters class="mb-2">
                <v-col cols="5">
                  <v-text-field
                    label="아이디 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.uid"
                  ></v-text-field>
                </v-col>
                <v-col cols="7">
                  <v-btn
                    :loading="loading"
                    color="warning"
                    class="ml-2"
                    @click="btnCheckUid"
                    >중복확인</v-btn
                  >
                  <v-chip
                    v-if="chipRed"
                    class="ma-2"
                    color="red"
                    text-color="white"
                  >
                    이미 사용중인 아이디입니다.
                  </v-chip>

                  <v-chip
                    v-if="chipGreen"
                    class="ma-2"
                    color="green"
                    text-color="white"
                  >
                    사용 가능한 아이디입니다.
                  </v-chip>
                </v-col>
              </v-row>
              <v-row no-gutters class="mb-2">
                <v-col cols="5">
                  <v-text-field
                    label="비밀번호 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.pass"
                  ></v-text-field>
                </v-col>
                <v-col cols="7"> </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="5">
                  <v-text-field
                    label="비밀번호 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.passComfirm"
                  ></v-text-field>
                </v-col>
                <v-col cols="7"> </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card class="mt-4">
            <v-card-item>
              <v-card-title>개인정보 이용정보 입력</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-row no-gutters class="mb-2">
                <v-col cols="5">
                  <v-text-field
                    label="이름 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="7"> </v-col>
              </v-row>
              <v-row no-gutters class="mb-2">
                <v-col cols="5">
                  <v-text-field
                    label="별명 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.nick"
                  ></v-text-field>
                </v-col>
                <v-col cols="7"> </v-col>
              </v-row>
              <v-row no-gutters class="mb-2">
                <v-col cols="5">
                  <v-text-field
                    label="이메일 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="7"> </v-col>
              </v-row>
              <v-row no-gutters class="mb-2">
                <v-col cols="5">
                  <v-text-field
                    label="휴대폰 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.hp"
                  ></v-text-field>
                </v-col>
                <v-col cols="7"> </v-col>
              </v-row>
              <v-row no-gutters class="mb-2">
                <v-col cols="5">
                  <v-text-field
                    label="우편번호 검색"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.zip"
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-btn block color="success" class="ml-2">검색</v-btn>
                </v-col>
              </v-row>
              <v-row no-gutters class="mb-2">
                <v-col cols="8">
                  <v-text-field
                    label="기본주소 검색"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.addr"
                  ></v-text-field>
                </v-col>
                <v-col cols="4"> </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="8">
                  <v-text-field
                    label="상세주소 검색"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.addrDetail"
                  ></v-text-field>
                </v-col>
                <v-col cols="4"> </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-sheet class="text-center py-4">
            <v-btn class="mr-2" @click="btnCancel">취소</v-btn>
            <v-btn color="primary" @click="btnRegister">등록</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import axios from "axios";
const router = useRouter();
const user = reactive({
  uid: null,
  pass: null,
  passConfirm: null,
  name: null,
  nick: null,
  email: null,
  hp: null,
  zip: null,
  addr: null,
  addrDetail: null,
});

const chipRed = ref(false);
const chipGreen = ref(false);
const loading = ref(false);

const btnCancel = () => {
  router.push("/user/login");
};
const btnRegister = () => {
  axios
    .post("/user/register", user)
    .then((response) => {
      console.log(response);
      alert("회원가입 완료!");
      router.push("/user/login");
    })
    .catch((error) => {
      console.log(error);
    });
};

const btnCheckUid = () => {
  loading.value = true;

  axios
    .get("http://localhost/Voard/user/check-uid", {
      params: { uid: user.uid },
    })
    .then((response) => {
      console.log(response);
      const result = response.data;
      setTimeout(() => {
        loading.value = false;
        if (result > 0) {
          chipRed.value = true;
          chipGreen.value = false;
        } else {
          chipRed.value = false;
          chipGreen.value = true;
        }
      }, 600);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
