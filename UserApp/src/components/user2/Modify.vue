<template>
  <h4>User2 수정</h4>
  <form @submit.prevent="modifyUser1(user)">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" readonly /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="text" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="수정" />
        </td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import { computed, reactive } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();

const user = computed(() => store.getters.getUser);

const modifyUser1 = (user) => {
  axios
    .put("http://localhost:8080/Ch09/user1", user)
    .then((response) => {
      console.log(response);
      alert("수정완료");
      router.push("/user2/list");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
