# 제4장 Composition API

## 1. Composition API 란?

- Composition API는 Component를 작성하기 위해 Vue3에서 새롭게 도입된 함수 기반 API
- 기존 Options API 보다 좀 더 유연하고 가독성 높은 방식으로 컴포넌트를 작성 할 수 있도록 지원
- Composition API를 통해 연관성 있는 로직을 같이 구현할 수 있어 간결한 코드와 유지보수에 유리

![Untitled](https://user-images.githubusercontent.com/111489860/235608002-80d815c8-20e3-410f-a86a-48367c778916.png)

## 2. Reactivity

- 반응형 데이터 선언과 처리를 위한 API
- 반응형 데이터는 값이 변경됨에 따라 이를 감지하고 해당 값에 종속된 작업(Side Effect)이 수행

![Untitled](https://user-images.githubusercontent.com/111489860/235608049-96e1bda2-18ee-455d-aef7-c2dad6112f67.png)

## 3. LifeCycle Hooks

- Component 생명주기는 Component가 생성되고 화면에 출력된 후 소멸되기까지의 일련의 과정
- LifeCycle Hooks는 Component의 생명주기에 따라 제공되는 API

![Untitled](https://user-images.githubusercontent.com/111489860/235608073-76b286e8-f89d-410f-bff1-52162913574f.png)

## 4. Dependency Injection

- Vue3 추가된 Composition API
- 컴포넌트간 데이터 교환을 위한 API 제공

![Untitled](https://user-images.githubusercontent.com/111489860/235608114-9ec84884-51b5-4b8c-9c82-53a5bd7f1792.png)
