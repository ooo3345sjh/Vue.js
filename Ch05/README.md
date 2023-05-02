# 제5장 Router

## 1. SPA 란?

- SPA(Single Page Application) 하나의 페이지로 구성된 웹 애플리케이션
- Page Rendering을 기존 Server(SSR)에서 Client 로 처리하는 방식(CSR)
- 앱의 규모가 커지면 Javascript 파일이 너무 커지고, SEO 최적화가 SSR에 비해 불리하다는 단점

![Untitled](https://user-images.githubusercontent.com/111489860/235608750-0cbb7520-bcc7-4beb-ba21-b20ca35cd4c3.png)

## 2. Router 란?

- Route는 SPA(Single Page Application)에서 Component(화면) 간의 이동 또는 전환하는 방법
- SPA에서는 페이지를 이동할 때마다 Server에 요청하는 것이 아닌 Client에서 미리 가지고 있는 페이지를 Router을 이용해 페이지를 Routing
- Vue Router는 Vue.js에서 Route 기능을 지원하는 공식 라이브러리

## 3. Nested Router

- Nested Router(중첩 Router)는 Router로 페이지를 이동할 때 2개 이상의 컴포넌트를 화면에 출력
- 상위 컴포넌트와 하위 컴포넌트로 이루어진 구조

![Untitled](https://user-images.githubusercontent.com/111489860/235608775-e2062401-714a-417f-acb7-90f33652bd27.png)

## 4. Named View

- Named View는 특정 페이지로 이동했을 때 여러 개의 컴포넌트를 동시에 화면에 출력
- Named View는 같은 레벨에서 컴포넌트가 한 번에 출력

![Untitled](https://user-images.githubusercontent.com/111489860/235608813-756278aa-0549-4def-9f22-70e3613b8c03.png)

## 5. 프로젝트 실습

- [프로젝트 링크](https://github.com/ooo3345sjh/Vue.js/tree/main/Ch05)
