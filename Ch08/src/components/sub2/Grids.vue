<template>
  <h4>Vuetify Grids 실습</h4>
  <h4>그리드 기본</h4>
  <v-container>
    <v-row>
      <v-col class="border text-center" cols="12">12</v-col>
    </v-row>
    <v-row>
      <v-col class="border text-center" cols="6">6</v-col>
      <v-col class="border text-center" cols="6">6</v-col>
    </v-row>
    <v-row>
      <v-col class="border text-center" cols="4">4</v-col>
      <v-col class="border text-center" cols="4">4</v-col>
      <v-col class="border text-center" cols="4">4</v-col>
    </v-row>
    <v-row>
      <v-col class="border text-center" cols="3">3</v-col>
      <v-col class="border text-center" cols="3">3</v-col>
      <v-col class="border text-center" cols="3">3</v-col>
      <v-col class="border text-center" cols="3">3</v-col>
    </v-row>
    <v-row>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
    </v-row>
    <v-row>
      <v-col class="border text-center" cols="5">5</v-col>
      <v-col class="border text-center" cols="5">5</v-col>
      <v-col class="border text-center" cols="2">2</v-col>
    </v-row>
  </v-container>
  <h4>반응형 레이아웃</h4>
  <v-container fluid>
    <v-row>
      <v-col lg="3" md="6" cols="12" class="border text-center">col1</v-col>
      <v-col lg="3" md="6" cols="12" class="border text-center">col2</v-col>
      <v-col lg="3" md="6" cols="12" class="border text-center">col3</v-col>
      <v-col lg="3" md="6" cols="12" class="border text-center">col4</v-col>
    </v-row>
  </v-container>
</template>
<script setup></script>
<style scoped></style>
