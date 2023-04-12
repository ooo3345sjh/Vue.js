<template>
  <h4>Rest 실습</h4>
  <h4>GET</h4>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
    </tr>
  </table>
  <hr />

  <h4>POST</h4>
  <form v-on:submit.prevent="registerUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
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
        <td><input type="number" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="등록" />
        </td>
      </tr>
    </table>
  </form>
  <hr />

  <h4>PUT</h4>
  <input type="text" v-model="inputText" />
  <button @click="btnGetUser">수정 데이터 출력</button>
  <form v-on:submit.prevent="modifyUser">
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
        <td><input type="number" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="등록" />
        </td>
      </tr>
    </table>
  </form>
  <hr />
  <h4>DELETE</h4>
  <input type="text" v-model="inputText" />
  <button @click="btnDeleteUser">User 삭제</button>
</template>
<script setup>
import axios from "axios";
import { onBeforeMount, ref, reactive } from "vue";

const inputText = ref(null);
const users = ref([]);
const user = reactive({
  uid: "",
  name: "",
  hp: "",
  age: 0,
});

const btnGetUser = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8080/Ch09/user1/${inputText.value}`
    );

    const data = response.data;
    user.uid = data.uid;
    user.name = data.name;
    user.hp = data.hp;
    user.age = data.age;
  } catch (error) {
    console.log(error);
  }
};

const registerUser = () => {
  axios
    .post("http://localhost:8080/Ch09/user1", user)
    .then((response) => {
      console.log(response.data);
      const data = response.data;

      if (data.result > 0) {
        alert("등록완료!");

        // 깊은 객체 복사
        users.value.push(JSON.parse(JSON.stringify(user)));

        // 객체 리스트 정렬
        users.value.sort(function (a, b) {
          let x = a.uid.toLowerCase();
          let y = b.uid.toLowerCase();

          if (x < y) return -1;
          if (x > y) return 1;
          return 0;
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const modifyUser = () => {
  axios
    .put("http://localhost:8080/Ch09/user1", user)
    .then((response) => {
      console.log(response.data);
      const data = response.data;

      if (data.result > 0) {
        alert("수정완료!");

        // 반복문
        users.value.map((u, index) => {
          // users 리스트 안의 uid와 입력한 uid가 같다면
          if (u.uid == user.uid) {
            // 깊은 객체 복사
            const tmp = JSON.parse(JSON.stringify(user));
            // 해당 리스트 인덱스 수정
            users.value[index] = tmp;
          }
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const btnDeleteUser = () => {
  axios
    .delete(`http://localhost:8080/Ch09/user1/${inputText.value}`)
    .then((response) => {
      console.log(response.data);
      const data = response.data;

      if (data.result > 0) {
        alert("삭제완료!");

        // users 리스트에 있는 uid와 삭제한 uid와 같은 객체는 제외한 후 리스트 저장
        users.value = users.value.filter((u) => u.uid != inputText.value);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
onBeforeMount(() => {
  axios
    .get("http://localhost:8080/Ch09/user1s")
    .then((response) => {
      console.log(response.data);
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
