<template>
  <div>
    <pre>{{day}}</pre>
    <div class="TitleBox" :key='index' v-for='(item,index) in stories'>
      <img :src="item.images[0]" width="100px" alt="">
      <span @click="sendurl(item.id)">{{item.title}}</span>
      </div>
  </div>
</template>
<script>
import eventBus from '../evenBus'
export default {
  name: 'AsideHome',
  props: ['day', 'stories'],
  data () {
    return {
      article: ''
    }
  },
  methods: {
    sendurl:
    function (id) {
      this.axios.get('https://zhihu-daily.leanapp.cn/api/v1/contents/' + id).then(res => {
        this.article = res.data.CONTENTS.body
        eventBus.$emit('sendart', this.article)
      })
    }
  }
  // mounted () {
  //   this.$bus.emit('sendart', this.article)
  // }
}
</script>
<style lang="less" scoped>
.TitleBox{
  background-color: #F8F8F8;
  display: flex;
  align-items: center;
  >span{
    align-items: center
  }
}
</style>
