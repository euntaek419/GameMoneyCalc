<template>
  <div class="wrap">
    <Title class="container yes" id="yes"></Title>
    <Main class="container"></Main>
  </div>

</template>

<script>
import Main from './components/Main.vue'
import Title from './components/Title.vue'

export default {
  name: 'App',
  components: {
    Title,
    Main,
  },
  mounted() {
    // 페이지를 감싸고 있는 영역 선택 (클래스명이 'wrap'인 첫 번째 요소)
    const wrap = document.getElementsByClassName('wrap')[0];
  
    // 각 페이지를 담고 있는 컨테이너들을 선택 (클래스명이 'container'인 모든 요소들)
    const container = document.getElementsByClassName('container');
  
    let page = 0; // 현재 페이지의 위치 (초기값은 0)
    const lastPage = container.length - 1; // 마지막 페이지의 인덱스

    // 스크롤 이벤트 리스너 등록
    const handleWheel = (e) => {
      // 스크롤 방향에 따라 페이지 위치 업데이트
      if(e.deltaY > 0){
        page++;
      }else if(e.deltaY < 0){
        page--;
      }

      // 페이지 범위 체크 (음수인 경우 0, 마지막 페이지를 초과하는 경우 마지막 페이지로 설정)
      if (page < 0){
        page = 0;
      }else if(page > lastPage){
        page = lastPage;
      }

      // console.log(e.deltaY); // 스크롤 이벤트 발생 시 deltaY 값 출력
      wrap.style.top = page * -100 + 'vh'; // 페이지에 따라 'wrap' 요소의 top 값을 조절하여 페이지를 표시
    };
      window.addEventListener('wheel', handleWheel, { passive: true });

      const initScrollEvent = new WheelEvent('wheel', { deltaY: 0 });
      window.dispatchEvent(initScrollEvent);

      window.scrollBy(0, window.innerHeight); // 세로로 한 화면만큼 스크롤합니다.
    },
  };

</script>

<style>
@font-face{
  font-family: 'MorganiteBold';
  src : url('assets/fonts/MorganiteBold.woff');
}

@font-face{
  font-family: 'NeurimboGothicRegular';
  src : url('assets/fonts/neurimboGothicRegular.woff'), url('assets/fonts/MorganiteBold.woff');
  font-display: fallback;
}

@font-face{
  font-family: 'PretendardMedium';
  src : url('assets/fonts/PretendardMedium.woff'), url('assets/fonts/MorganiteBold.woff');
  font-display: fallback;
}

@font-face{
  font-family: 'PyeongChangPeaceBold';
  src : url('assets/fonts/PyeongChangPeaceBold.woff'), url('assets/fonts/MorganiteBold.woff');
  font-display: fallback;
}

@font-face{
  font-family: 'PyeongChangPeaceLight';
  src : url('assets/fonts/PyeongChangPeaceLight.woff'), url('assets/fonts/MorganiteBold.woff');
  font-display: fallback;
}

@font-face{
  font-family: 'Galmuri11';
  src : url('assets/fonts/Galmuri11.woff'), url('assets/fonts/MorganiteBold.woff');
  font-display: fallback;
}


* {
  background-color: #000000;
  }

/* 크롬 기본 스타일링 처리 */
body {
  padding: 0;
  margin: 0;
}

.wrap {
    position:absolute;
    width:100%;
    height:100%;
    transition: 1.0s;
}
.container {
    /* width:100%; */
    height:100%;
}
</style>
