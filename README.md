# GAMEMONEYCALC

###### GAMEMONEYCALC [바로 가기](https://www.ssuegg.site/) / [바로 가기 2](https://d33pay1yrazuf5.cloudfront.net)

### 프로젝트 주제
- 모든 게임 아이템의 가치를 현금과 비교

### 프로젝트 배경
- 게임을 하다보면 아이템을 구매 또는 판매를 위해 현금을 사용하게 된다.
- 이 때, 다양한 조건들 때문에 아이템의 가격이 변동하게 된다.
- 다양한 조건들을 고려해가면서 아이템의 가치를 계산하는 것이 생각보다 오래 걸리게 되는데, 이를 한 번에 처리해주는 계산기가 있으면 좋겠다고 생각해서 개발하게 되었다.

### 프로젝트에서 배운점
- 이미지와 폰트로 인한 긴 로드시간을 해결하기 위해, 폰트와 이미지 포멧 최적화 및 로딩 최적화 작업을 진행하였습니다.
- VUE.JS로 1차 개발 후, VUEX로 리팩토링하는 과정을 거쳐 VUE.JS 구조와 VUEX의 상태관리법에 대해 공부하였습니다.
- gsap to를 사용하여, 숫자 카운트 애니메이션을 추가하였습니다.
- 기존 CAFE24를 통한 배포보다는 CSR 페이지의 적절한 배포방식을 고민하였고, AWS S3, CLOUDFRONT를 통한 정적 웹 사이트 호스팅을 선택하였습니다.
- 가비아를 통해 도메인을 구매하고, AWS Route53 호스팅을 통해서 개인 도메인 서비스를 사용해보았습니다.
- AWS Certificate Manager를 통해 SSL 인증서를 발급받고, https 서비스를 지원하도록 변경하였습니다.
- Github 에서 코드가 PUSH 되면 Github Actions를 통해 AWS에 자동으로 업로드 되도록 CI/CD를 구축하였습니다.
- Vite / TypeScript / Pinia를 통한 마이그레이션 작업을 진행했습니다. [[링크]](https://github.com/euntaek419/GameMoneyCalc_ts)

### 프로젝트 사용방법
1. 게임 머니 아이템 금액 입력
2. 캐시(현금) 아이템 금액 입력
3. 현금 거래 비율 입력
4. 상품권 옵션 설정
5. 상품권 옵션 비율 입력

![GAMEMONEYCALC 소개](https://github.com/euntaek419/GameMoneyCalc/assets/100109284/d630439e-308f-4b51-8f6c-c629e1f39806)

### 개발환경 & 기술스택
<div>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src='https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D'/>
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
  <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"/>
</div>

### 트러블 슈팅
성능 향상 시키기<br/>
   - 폰트로 인한 페이지 로드 지연을 확인했고, 폰트 규격을 woff로 변경하였습니다. 가장 로드가 빠른 MorganiteBold를 먼저 적용시킨 뒤, 이후 폰트가 로드 되면 교체될 수 있도록 하였습니다. 이를 통해 폰트로 인한 페이지 로드 지연 시간을 90% 이상 감소시켰습니다.  <br/>
     * 기존 6개 폰트 9.53MB / woff 변환 후 2.86MB 약 3.3배의 데이터 압축률
     * 폰트 지연 650ms -> 20ms
   - GIF로 인한 지연 또한 webp로 변경하여 이미지의 로드를 최소화 했고, 리팩토링을 통해 기존 methods 에서 시행되던 계산의 일부를 computed 로 변경하여 로딩의 속도를 줄이도록 노력하였습니다. 이로 인해 약 70%의 지연 시간을 감소시켰습니다. <br/>
     * Total Bloking Time 기준, 780ms -> 250ms
   - 기존 CAFE24를 통한 배포보다는 CSR 페이지의 적절한 배포방식을 고민하였고, AWS S3, CLOUDFRONT를 통한 정적 웹 사이트 호스팅을 선택하였습니다. 이를 통해 페이지 로딩 시간이 90% 이상 감소하였습니다.
     * Total Blocking Time 250ms -> 10ms
     * Largest Contentful Paint 15초 이상 -> 0.7초
   - Github 에서 코드가 PUSH 되면 Github Actions를 통해 AWS에 자동으로 업로드 되도록 CI/CD를 구축하였습니다. 이를 통해 기존 업로드 대비 시간이 25% 이상 감소하였습니다.
     * 기존 직접 업로드 80초 이상 -> Github Actions 약 1분 미만

---

### Lighthouse Score 성능 ( 24/02/09 기준 )

![Lighthouse Score](https://github.com/euntaek419/GameMoneyCalc/assets/100109284/719834a9-6452-4773-963d-011d84fea426)


<details>
<summary>개발 로그 & 고려 사항</summary>

### 고려 중 사항
1. 사용 친화적인 UI/UX 고려하여 변경
2. 모바일 웹 지원

### 개발 로그
2024/03/19
* Vite / TypeScript / Pinia 마이그레이션 [[링크]](https://github.com/euntaek419/GameMoneyCalc_ts)

2024/02/26
* 키보드 방향 키( 위, 아래 )를 사용한 페이지 전환 연출 & 이미지 클릭 시, 하단 이동

2024/02/02
* Github Actions를 사용한 CI/CD 구축

2024/01/13
* 더욱 가성비가 좋은 부분에서 소소한 폭죽 효과 추가

2024/01/12
* GSAP TO 적용하여, 숫자가 촤르륵 올라가는 이펙트 적용

2024/01/11
* smooth 스크롤 적용

2024/01/02
* 부분적인 금액 오류 해결

2023/11/9
* vuex 코드로 리팩토링 완성 & mapGetters 적용

2023/10/30
* CSR을 고려하여 배포 서버를 cafe24 에서 AWS CloudFront S3 로 변경

2023/07/27
* 현금 거래 비율, 상품권 옵션 설정의 박스 크기가 다른 현상 수정

2023/07/26
* 캐시샵 판매 금액과 경매장 판매 최종 금액의 비교
* 현금 거래 비율 클릭시 비율이 변경

2023/07/24
* 사용자의 편의성을 위한 비율 위치 변경

2023/07/23
* 현금 거래 비교 추가 작업

2023/07/22
* 현금 비율의 이미지 추가 작업
* 현금 비율 변경의 CSS 작업

2023/07/20
* 상품권 옵션 설정의 할인이 100%를 초과할 수 있는 현상 수정

2023/07/19
* 캐시샵 판매 금액과 경매장 판매 금액의 CSS 설정
* 상품권 옵션 설정에 따른 결과 설정
* 현금 거래 비율 입력에 따른 동작

2023/07/16
* 일정 이상의 상품권 옵션 설정 값 입력시 경고 메세지 출력

2023/07/13
* 환율 변환 개발 준비

2023/07/12
* 한글 통화 변환에서 '만' 단위 오류 추가 수정
* 할인 / 추가증정 CSS 및 개발
* 상품권 옵션 설정 입력에 따른 동작 개발 완료
* REVERSE 버튼 동작 개발

2023/07/09
* Title 페이지의 클릭 텍스트 이미지가 width가 일정 크기 이상 줄어드면 다른 이미지에 가려지는 오류 수정

2023/07/08
* 상품권 옵션 설정 CSS 일부
* 현금 거래 비율 CSS 일부
* Main 페이지 CSS 일부

2023/07/08
* 한글 통화 변환에서 1억 이상의 값이 입력되었을 때, '만' 단위 오류 수정 

2023/07/07
* 한글 통화 변환 개발

2023/07/04
* Main 페이지 부분 개발
* Title 페이지 가이드 아이콘 추가
* 너의 이름은? 페이지 링크 추가

2023/07/02
* Gif 변경, Gif 링크 연결 개발

2023/07/01
* Main 페이지 개발

2023/06/30
* 흐르는 글자 개발
* Title 페이지 개발

2023/06/29
* 메인 페이지 텍스트 개발

2023/06/28
* 로고 제작 및 컴포넌트 분할 개발

</details>
