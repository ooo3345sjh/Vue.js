<template>
  <h3>Ch05.Router 실습</h3>

  <h4>1)Router 기본</h4>
  <router-link to="/hello">Hello</router-link> /
  <router-link to="/welcome">Welcome</router-link> /
  <router-link to="/greeting">Greeting</router-link>
  <hr />

  <h4>2)Nested Router</h4>
  <router-link to="/parent">Parent</router-link>
  <hr />

  <h4>3)Named View</h4>
  <router-link to="/main1">Main1</router-link>&nbsp;/
  <router-link to="/main2">Main2</router-link>&nbsp;/
  <router-link to="/main3">Main3</router-link>&nbsp;/
  <hr />

  <h4>4)Router 데이터 전송</h4>
  <router-link
    v-bind:to="{
      name: 'Query',
      query: { uid: 'a101', name: '홍길동', age: 21 },
    }"
    >Query</router-link
  >
  /
  <router-link
    v-bind:to="{
      name: 'Param',
      params: { uid: 'a101', name: '홍길동', age: 21 },
    }"
    >Param</router-link
  >
  /
  <router-link to="/form1">Form1</router-link> /
  <router-link to="/form2">Form2</router-link>
  <hr />

  <h4>라우팅 컴포넌트 출력</h4>
  <routerView name="header"></routerView>
  <routerView></routerView>
  <routerView name="footer"></routerView>
</template>
<script setup>
// npm install vue@latest vue 버전 최신화
</script>

<style scoped></style>
