# 제7장 HTTP 통신과 JWT

## 1. HTTP 통신

- HTTP는 브라우저와 서버간에 통신을 위한 프로토콜
- HTTP Method 구분으로 REST API 통신을 구현
- Vue.js에서 HTTP 통신을 위해 다양한 외부 라이브러리를 지원

![Untitled](https://user-images.githubusercontent.com/111489860/235610333-c9fc00f2-8f21-4fb5-b0ab-7dd41c83ffc5.png)

## 2. Axios

- Axios는 Vue.js에서 가장 많이 사용하는 Promise 기반 HTTP 통신 라이브러리
- Vue.js 뿐만 아니라 다른 프레임워크에서도 가장 많이 사용

![Untitled](https://user-images.githubusercontent.com/111489860/235610373-41b8c4bb-f31c-4f19-94e2-c3c8d6a465d8.png)

## 3. JWT

- HTTP 통신에서 사용자 인증(Authentication)을 위해 Session 기반 인증과 Token 기반 인증
- Token 기반 인증은 사용자의 인증 정보와 Server에서 발급되었음을 증명하는 서명이 포함되어 있는 암호화된 문자열을 Client에서 저장 관리하는 방식
- JWT(JSON Web Token)는 사용자를 인증하고 식별하기 위한 Token 기반 인증 기술

![Untitled](https://user-images.githubusercontent.com/111489860/235610411-65b5bb1c-5de1-4695-bf62-c087aa63f3cb.png)

## 4. 프로젝트 실습

- [백엔드](https://github.com/ooo3345sjh/SpringBoot/tree/main/Voard)
