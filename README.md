# GAMEMONEYCALC

###### GAMEMONEYCALC [주소 바로가기](https://www.ssuegg.site/) / [주소 바로가기 2](https://d33pay1yrazuf5.cloudfront.net)

### 프로젝트 주제
- 모든 게임 아이템의 가치를 현금과 비교

### 프로젝트 배경
- 게임을 하다보면 아이템을 구매 또는 판매를 위해 현금을 사용하게 된다.
- 이 때, 다양한 조건들 때문에 아이템의 가격이 변동하게 된다.
- 다양한 조건들을 고려해가면서 아이템의 가치를 계산하는 것이 생각보다 오래 걸리게 되는데, 이를 한 번에 처리해주는 계산기가 있으면 좋겠다고 생각해서 개발하게 되었다.

### 프로젝트 목적
- 모든 아이템의 가치를 쉽게 계산하여, 사용자에게 효율적으로 소비할 수 있도록 도움을 준다.
- 홈페이지를 이용함에 있어, 홈페이지가 너무 딱딱하지 않게 받아드릴 수 있도록 하며, 소소하지만 재미를 느낄 요소를 추가해본다.
- Vue.js에 대한 숙련도를 기른다.
- Vue.js의 CSR을 공부하면서 적절한 배포방식을 고민해보았고, aws s3 cloudfront를 공부하게 되었습니다.

### 프로젝트 사용방법
1. 게임 머니 아이템 금액 입력
2. 캐시(현금) 아이템 금액 입력
3. 현금 거래 비율 입력
4. 상품권 옵션 설정
5. 상품권 옵션 비율 입력

![ezgif-5-37bd2a46ba](https://github.com/euntaek419/GameMoneyCalc/assets/100109284/e8eae662-4967-4e4f-86c0-293ac70c98e8)


### 개발환경 & 기술스택
<div>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src='https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D'/>
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
  <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"/>
</div>

### LightHouse Score
![image](https://github.com/euntaek419/GameMoneyCalc/assets/100109284/58d51efb-9519-4720-97c8-2f4cafcba131)


### 트러블 슈팅
1. 성능 향상 시키기<br/>
   ![image](https://github.com/euntaek419/GameMoneyCalc/assets/100109284/d4d595e9-9bc7-4b0c-860d-ee7763037ce9)
   - 폰트로 인한 지연이 무려 650ms 정도 발생하고 있다. 우선 폰트 규격을 woff로 변경하였고, 가장 로드가 빠른 MorganiteBold를 먼저 적용시킨 뒤, 이후 폰트가 로드 되면 교체될 수 있도록 하였다. 폰트의 로드를 최소화 했다. <br/> ( 기존 6개 폰트 9.53MB / woff 변환 후 2.86MB 약 3.3배의 데이터 압축률, 기존 650ms의 지연 -> 수정 후 20ms의 지연 ) <br/>
   ![image](https://github.com/euntaek419/GameMoneyCalc/assets/100109284/d8b852d3-d840-449b-a366-fe8010503bf3)
   - GIF로 인한 지연 또한 webp로 변경하여 이미지의 로드를 최소화 했다. <br/>
   - Total Bloking Time 변경 전 780ms -> 변경 후 250ms 까지 낮추는데 성공했다! ( 3.12배 )
   - ![image](https://github.com/euntaek419/GameMoneyCalc/assets/100109284/0ae4b2e8-910a-47b1-96cb-24fcf776e45c) ![image](https://github.com/euntaek419/GameMoneyCalc/assets/100109284/319056aa-b132-44e2-83c8-87b78a29c3b8)
   - 리팩토링을 통해 기존 methods 에서 시행되던 계산의 일부를 computed 로 변경하여 로딩의 속도를 줄이도록 노력하였습니다.

   



### 프로젝트에서 잘한 부분
- 기능적인 부분에서 원하던 기능을 전부 개발하였다.
- 게임 사이트에 맞는 디자인으로 개발하였다.
- 홈페이지 이용에 있어 딱딱함을 최대한 덜어내려고 노력했는데, 잘 받아들여진 것 같다고 생각한다.
- Vue.js에 조금 더 익숙해진 상태가 된 것 같다.

### 프로젝트에서 부족한 부분
- 다른 프로젝트에서 CSS를 사용할 때 %를 잘 사용하지 않는 이유를 알게 되었다.
- 다른 프로젝트에서 CSS를 사용할 때 position : fixed를 자제하는지 알게 되었다.
- 다른 프로젝트에서 왜 화면 전체에 디자인을 하지 않고 width의 범위를 지정하는지 알게 되었다.
- 이전 프로젝트보다는 발전했지만, 클린 코드를 아직도 제대로 반영하지 못하였다.
- 데이터 사용에 있어 조금 더 효율이 좋은 방향으로 코드 리팩토링이 필요할 것 같다.

---
### 고려 중 사항
1. 미끄러지는 깔끔한 스크롤
2. 숫자가 촤르륵 올라가는 이펙트 추가
3. 더욱 가성비가 좋은 부분에서 소소한 폭죽 효과

### 개발 로그
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
* 현금 거래 비교 2차 작업

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
* 한글 통화 변환에서 '만' 단위 오류 4차 수정
* 할인 / 추가증정 CSS 및 개발
* 상품권 옵션 설정 입력에 따른 동작 개발 완료
* REVERSE 버튼 동작 개발

2023/07/11
* 한글 통화 변환에서 '만' 단위 오류 3차 수정

2023/07/10
* 한글 통화 변환에서 '만' 단위 오류 2차 수정

2023/07/09
* Title 페이지의 클릭 텍스트 이미지가 width가 일정 크기 이상 줄어드면 다른 이미지에 가려지는 오류 수정

2023/07/08
* 상품권 옵션 설정 CSS 1차
* 현금 거래 비율 CSS 1차
* Main 페이지 CSS 1차

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
