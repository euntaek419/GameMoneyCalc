<template>

  <div>
    <Title></Title>
    <Main></Main>
  </div>

</template>

<script>
import Main from './components/Main.vue'
import Title from './components/Title.vue'

export default {
  data: () => {
    return {
    }
  },
  name: 'App',
  components: {
    Title,
    Main,
  },
}
</script>

<style>
@font-face{
  font-family: 'MorganiteBold';
  src : url('assets/fonts/MorganiteBold.ttf');
}

@font-face{
  font-family: 'NeurimboGothicRegular';
  src : url('assets/fonts/neurimboGothicRegular.otf');
}

@font-face{
  font-family: 'PretendardMedium';
  src : url('assets/fonts/PretendardMedium.otf');
}

@font-face{
  font-family: 'PyeongChangPeaceBold';
  src : url('assets/fonts/PyeongChangPeaceBold.ttf');
}

@font-face{
  font-family: 'PyeongChangPeaceLight';
  src : url('assets/fonts/PyeongChangPeaceLight.ttf');
}

@font-face{
  font-family: 'Galmuri11';
  src : url('assets/fonts/Galmuri11.ttf');
}


* {
  background-color: #000000;
  }

/* 크롬 기본 스타일링 처리 */
body {
  padding: 0;
  margin: 0;
}
</style>
