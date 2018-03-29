<template lang="pug">
  div
    header-default
    el-main
      router-view
</template>

<script>
import HeaderDefault from '@/components/Header/HeaderDefault'

export default {
  name: 'Default',

  components: {
    HeaderDefault
  }
}
</script>

<style lang="stylus">

</style>
