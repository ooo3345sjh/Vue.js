# 제3장 Component

## 1. Component 란?

- 컴포넌트는 화면 구성요소를 독립적인 모듈 형태로 구성하여 조립한 형태
- Vue의 가장 중요한 특징인 컴포넌트는 재활용이 가능한 사용자 정의 Element
- SFC(Single File Component)는 컴포넌트를 작성하는 파일 구조로 template, script, style로 나뉨

![Untitled](https://user-images.githubusercontent.com/111489860/235606157-2b74f4a2-17b8-4708-be6c-63400b208834.png)

## 2. Options API

- Options API는 Vue 컴포넌트를 정의하는 데 사용되는 일종의 구성 요소
- Options API는 Vue.js 2.x에서 주요한 컴포넌트 구문으로 사용되며, Vue.js 3.x에서도 사용 가능
- Options API는 컴포넌트의 데이터, 계산된 속성, 메서드, 라이프사이클 훅 등이 포함

![Untitled](https://user-images.githubusercontent.com/111489860/235606052-d20bdcf1-328b-4df3-9893-19c4b03ff92f.png)

## 3. Component 통신

- 컴포넌트간의 데이터(상태값)를 공유하기 위해서는 컴포넌트간 통신을 수행
- 상위, 하위 컴포넌트간 통신을 위해 props와 emit API를 사용
- 하위 컴포넌트에서는 상위 컴포넌트로 이벤트를 발생시켜 데이터를 전달

![Untitled](https://user-images.githubusercontent.com/111489860/235606090-0c989e2e-7662-4efb-8295-09d43ceed94d.png)

## 4. Component 생명주기

- Component 생명주기는 Component가 생성되고 화면에 출력된 후 소멸되기까지의 일련의 과정
- Vue.js 는 각 생명주기를 Hooking 할 수 있는 방법을 제공, 이를 LifeCycle Hook이라고 함

![Untitled](https://user-images.githubusercontent.com/111489860/235606139-9ddc5a01-bc5e-4ebf-90f1-38b384c84a2f.png)
