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

* {
  background-color: #000000;
}
</style>
