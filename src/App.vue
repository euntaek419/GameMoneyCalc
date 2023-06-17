<template>
  <div>게임 머니 계산기</div>
  
  <div>
    <label> 캐시 할인 : </label>
    <label> 캐시 <select> <option> 할인</option> <option> 업</option></select> : </label>
    <input placeholder="0" v-model="salecash"> % (문화상품권, 넥슨카드 등)
  </div>

  <div>
    <label>게임 머니 가격 : </label>
    <input placeholder="100"> : 1 백만 비율 (원(N) : 게임 머니(1))
  </div>

  <div>
    <label>구매 아이템 가격 : </label>
    <input placeholder="원"> <input placeholder="게임머니">
  </div>

  <div>
    10000원 구매시 필요한 금액 : {{ Math.abs(((salecash * 0.01 + 1) * 10000) - 10000 - 10000) }} 원
  </div>

  <div>
    Type a number: <input v-model.number="number" />
    <p>{{ tweened.number.toFixed(0) }}</p>
  </div>
  
</template>

<script>
import gsap from 'gsap'

export default {
  data: () => {
    return {
      salecash : '',
      number: 0,
      tweened: 0,
    }
  },
  name: 'App',
  components: {
  },
  watch: {
    number(n) {
      gsap.to(this, { duration: 0.5, tweened: Number(n) || 0 })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
