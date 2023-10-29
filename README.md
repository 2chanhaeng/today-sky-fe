# 그날의 하늘

감정에 휘둘리지 않고 나 자신을 아끼고 챙기는 가장 첫 단계는 바로 감정을 기록하는 것입니다. **그날의 하늘**은 오늘 할 일과 해낸 일에 대해 느꼈던 감정을 기록할 수 있도록 제작한 웹사이트입니다.

## Page

| Path                          | Summary         | Description                                        |
| :---------------------------- | :-------------- | -------------------------------------------------- |
| `/`                           | 메인 페이지     | 로그인, 회원가입으로 이동                          |
| `/login`                      | 로그인 페이지   | Username, Password를 입력받아 로그인               |
| `/signup`                     | 회원가입 페이지 | Username, Password을 입력받아 회원가입             |
| `/home`                       | 홈 페이지       | 오늘 할 일, 해낸 일, 이번 달 할 일, 해낸 일로 이동 |
| `/diary/[year]/[month]`       | 월 별 일기      | 월 별 일기를 조회                                  |
| `/diary/[year]/[month]/[day]` | 일 별 일기      | 일 별 일기를 조회 및 수정                          |
| `/todo/[year]/[month]`        | 월 별 할 일     | 월 별 할 일을 조회 및 수정                         |
| `/todo/[year]/[month]/[day]`  | 일 별 할 일     | 일 별 할 일을 조회 및 수정                         |

## API

현재 리포지토리는 [Next.js](https://nextjs.org/) 기반의 프론트 전용 리포지토리입니다.  
따라서 대부분의 API는 간단한 데이터 처리를 위한 미들웨어로 구성되어 있습니다.
실질적인 처리는 [Today Sky BE](https://github.com/2chanhaeng/today-sky-be) 리포지토리에서 이루어집니다.

| Path              | Method | Summary          | Description                            |
| :---------------- | :----- | :--------------- | :------------------------------------- |
| `/login`          | POST   | 로그인           | Username, Password를 입력받아 로그인   |
| `/signup`         | POST   | 회원가입         | Username, Password을 입력받아 회원가입 |
| `/signup/is-dupl` | GET    | 아이디 중복 확인 | Username을 입력받아 중복 확인          |
| `/logout`         | GET    | 로그아웃         | 로그아웃                               |
