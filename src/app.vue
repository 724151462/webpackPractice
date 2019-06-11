<template>
  <div id='content'>
    <span>hello</span>
    <img :src="img" style="height:300px" alt="">
    <div class="bg">3210</div>
    <!-- <notification content="test notify"></notification> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require('../src/assets/images/cat.png')
    }
  },
  created() {
    setTimeout( () => {
      console.log(2321)
    }, 1000)
  },
  mounted() {
    this.$notify({
      content: "test $notify",
      btn: "close"
    })
  },
}
</script>

<style>
  .bg{
    height: 300px;
    width: 300px;
    background-image: url('assets/images/cat.png')
  }
</style>
