<template>
  <div class="wrap" ref="wrap">
    <Title class="container" @downEvent="downEvent" @upEvent="upEvent"></Title>
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
  data() {
    return {
      page: 0,
      lastPage: 0,
      wrap: null,
    }
  },
  mounted() {
    // 페이지를 감싸고 있는 영역 선택 (클래스명이 'wrap'인 첫 번째 요소)
    const wrap = this.$refs.wrap;
  
    // 각 페이지를 담고 있는 컨테이너들을 선택 (클래스명이 'container'인 모든 요소들)
    const container = document.getElementsByClassName('container');
  
    this.lastPage = container.length - 1; // 마지막 페이지의 인덱스

    // 스크롤 이벤트 리스너 등록
    const handleWheel = (e) => {
      // 스크롤 방향에 따라 페이지 위치 업데이트
      if(e.deltaY > 0){
        this.page++;
      }else if(e.deltaY < 0){
        this.page--;
      }

      // 페이지 범위 체크 (음수인 경우 0, 마지막 페이지를 초과하는 경우 마지막 페이지로 설정)
      if (this.page < 0){
        this.page = 0;
      }else if(this.page > this.lastPage){
        this.page = this.lastPage;
      }

      wrap.style.top = this.page * -100 + 'vh'; // 페이지에 따라 'wrap' 요소의 top 값을 조절하여 페이지를 표시
      //console.log(e.deltaY); // 스크롤 이벤트 발생 시 deltaY 값 출력
      //console.log(this.page)
    };
      window.addEventListener('wheel', handleWheel, { passive: true });

      const initScrollEvent = new WheelEvent('wheel', { deltaY: 0 });
      window.dispatchEvent(initScrollEvent);
    },
    methods: {
      downEvent() {
        this.page++;
        if(this.page > this.lastPage){
          this.page = this.lastPage;
        }
        this.$refs.wrap.style.top = this.page * -100 + 'vh'
      },
      upEvent() {
        this.page--;
        if (this.page < 0) {
          this.page = 0; // 페이지가 최소 페이지보다 작아지지 않도록 보정합니다.
        }
        this.$refs.wrap.style.top = this.page * -100 + 'vh'; // 페이지가 올라가는 효과를 적용합니다.
      }
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

body {
  overflow: hidden;  /* 수직 스크롤바를 숨김 */
}
</style>
