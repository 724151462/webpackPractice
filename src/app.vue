<template>
  <div id='content'>
    <span>hello</span>
    <img :src="img" style="height:300px" alt="">
    <div class="bg">3210</div>
    <button @click="notify">click me</button>
    <div class="tab-container">
      <tabs :value="tabValue" @change="handleChangeTab">
        <tab label="tab1" index="1">
          <span>4214</span>
        </tab>
        <tab index="2">
          <span slot="label" style="color:red">tab2</span>
          <span>4214rwq</span>
        </tab>
        <tab label="tab3" index="3">
          <span>4rwq4</span>
        </tab>
      </tabs>
    </div>
    
    <!-- <notification content="test notify"></notification> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabValue: '1',
      img: require('../src/assets/images/cat.png')
    }
  },
  created() {
    setTimeout( () => {
      console.log(2321)
    }, 1000)
  },
  mounted() {
    
  },
  methods: {
    notify() {
      this.$notify({
        content: "test $notify",
        btn: "close",
        autoClose: 1000
      })
    },
    handleChangeTab(value) {
      this.tabValue = value
    }
  },
}
</script>

<style lang="stylus">
  .bg{
    height: 300px;
    width: 300px;
    background-image: url('assets/images/cat.png')
  }
  .tab-container 
    background-color #fff
    padding 0 15px
</style>
