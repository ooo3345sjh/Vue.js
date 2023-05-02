# 제1장 Vue.js 소개 및 개발환경 설정

## 1. Vue.js 란?

- Vue.js는 웹 애플리케이션 개발을 위한 프런트엔드 프레임워크
- SPASingle Page Application 개발을 위한 프레임워크(Angular, React, Svelte) 가운데 하나
- ES6를 기본 언어로 하며 가장 직관적이고 쉽게 배울 수 있는 프레임워크

![Untitled](%E1%84%8C%E1%85%A61%E1%84%8C%E1%85%A1%E1%86%BC%20Vue%20js%20%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%20c43a18361ab8408e9c79992238d54cb0/Untitled.png)

## 2. Vue.js 특징

- Vue.js는 MVVM 패턴의 뷰 모델(ViewModel)에 해당하는 라이브러리
- MVVM 패턴은 화면을 Model – View – ViewModel 로 구조화하여 개발하는 방식
- Vue.js는 Component 기반 프레임워크로 화면 구성을 독립적인 모듈 형태로 구성하여 조립한 형태
    
    ![Untitled](%E1%84%8C%E1%85%A61%E1%84%8C%E1%85%A1%E1%86%BC%20Vue%20js%20%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%20c43a18361ab8408e9c79992238d54cb0/Untitled%201.png)
    

![Untitled](%E1%84%8C%E1%85%A61%E1%84%8C%E1%85%A1%E1%86%BC%20Vue%20js%20%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%20c43a18361ab8408e9c79992238d54cb0/Untitled%202.png)

## 3. Vue.js 프로젝트 구성

- 빠르고 간편한 프로젝트 구성을 위해 Vue CLI 또는 Vite 번들러 사용
- .vue 파일은 컴포넌트로 구성하는 파일로 template, script, style로 구성

![Untitled](%E1%84%8C%E1%85%A61%E1%84%8C%E1%85%A1%E1%86%BC%20Vue%20js%20%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%20c43a18361ab8408e9c79992238d54cb0/Untitled%203.png)

## 4. 모듈 번들러

- 모듈 번들러(module bundler)는 서로 관련 있는 웹앱 자원들을 하나로 파일로 만드는 번들링 도구
- Vue.js는 모듈 번들러 도구로 Webpack, Rollup, Vite 사용
- Vite는 Vue3에서 사용하는 공식 모듈 번들러 도구

![Untitled](%E1%84%8C%E1%85%A61%E1%84%8C%E1%85%A1%E1%86%BC%20Vue%20js%20%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%20c43a18361ab8408e9c79992238d54cb0/Untitled%204.png)

## 5. Vue.js 실습안내

1. Ch01. Vue.js 소개
2. Ch02. Directive
3. Ch03. Component
4. Ch04. Composition API
5. Ch05. Router
6. Ch06. Vuex
7. Ch07. Axios
8. Ch08. Vuetify
9. 미니프로젝트 – TodoApp
10. 종합프로젝트 – 게시판(Vue.js + Spring REST API)

## 6. 개발 환경 설정과 프로젝트 실습

1. Node.js 설치
2. VSCode + Vue.js extension 설치
3. Chrome + Vue.js plugin 설치
4. Vue.js 프로젝트 생성 및 실행

![Untitled](%E1%84%8C%E1%85%A61%E1%84%8C%E1%85%A1%E1%86%BC%20Vue%20js%20%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%20c43a18361ab8408e9c79992238d54cb0/Untitled%205.png)

## 7. 프로젝트 실습

- [프로젝트 링크](https://github.com/ooo3345sjh/Vue.js/tree/main/Ch01)
