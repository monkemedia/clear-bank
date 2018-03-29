<template lang="pug">
  header
    .page-container
      .content
        a.logo
          span.sr-only Welcome to ClearBank®
</template>

<script>
export default {
  name: 'HeaderDefault'
}
</script>

<style lang="stylus" scoped>
  header
    z-index 50
    position absolute
    top 0
    text-align center
    overflow hidden
    width 100%

  .content
    z-index 1
    position relative
    padding 2rem 1.8rem

  .logo
    background-image url('../../assets/clear.bank-white-logo.svg')
    background-repeat no-repeat
    width 140px
    height 20px
    display block

</style>
