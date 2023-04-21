<template>
  <h4>User1 목록</h4>
  <table border="1">
    <tr>
      <td>아이디</td>
      <td>이름</td>
      <td>휴대폰</td>
      <td>나이</td>
      <td>관리</td>
    </tr>
    <tr v-for="user in state.users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
      <td>
        <a href="#" @click="modifyUser1(user)">수정</a>
        <a href="#" @click="deleteUser1(user)">삭제</a>
      </td>
    </tr>
  </table>
</template>
<script setup>
import { ref, onBeforeMount, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const state = reactive({
  users: [],
});

onBeforeMount(() => {
  axios
    .get("http://localhost:8080/Ch09/user1s")
    .then((response) => {
      console.log(response);
      console.log(response.data);
      state.users = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});

const modifyUser1 = (user) => {
  router.push({ name: "User1Modify", params: user });
};
const deleteUser1 = (user) => {
  if (!confirm("정말 삭제하시겠습니까?")) return;

  const uid = user.uid;
  axios
    .delete(`http://localhost:8080/Ch09/user1/${uid}`)
    .then((response) => {
      console.log(response);
      console.log(response.data);
      state.users = state.users.filter((u) => u.uid != user.uid);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
