# 제6장 Vuex

## 1. Vuex 란?

- Vuex는 Vue.js에서 지원하는 공식 애플리케이션 상태 관리 라이브러리 *2023년 현재 Pinia로 변경*
- 상태(state)란 컴포넌트에서 사용하는 data로 컴포넌트 간에 공유할 수 있다.
- Vuex는 모든 컴포넌트들에게 중앙 집중 저장소(전역스토어)를 제공해서 state를 공유한다.

![Untitled](https://user-images.githubusercontent.com/111489860/235609455-37e1df06-10e4-4b87-8e4f-b841a58b5065.png)

## 2. Vuex 작동 원리

- Vuex는 state, mutations, getters, actions 4가지 속성을 통해 상태 관리를 수행

![Untitled](https://user-images.githubusercontent.com/111489860/235609491-05138f79-73c0-4ee9-8c88-527dba153c02.png)
