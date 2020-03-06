<template>
<div>
<span v-html="article"></span>
</div>
</template>
<script>
import eventBus from '../evenBus'
export default {
  name: 'MainHome',
  data () {
    return {
      arturl: '',
      article: '',
      single: false
    }
  },
  mounted () {
    eventBus.$on('sendart', res => {
      this.article = res
      this.single = true
    })
    // this.$bus.on('sendart', article => {
    //   this.single = true
    // })
  }
}
</script>
<style lang="less" scoped>

</style>
