<template lang="pug">
  header
    .clear-bank-background
    .page-container
      .content
        a.logo
          span.sr-only Welcome to ClearBank®
      .content
        h1.common-page-title Contact us
        p.common-intro-text Experience the ClearBank® difference.
</template>

<script>
export default {
  name: 'HeaderDefault'
}
</script>

<style lang="stylus" scoped>
  header
    z-index 50
    position relative
    max-height 450px
    height 100vh
    position relative
    text-align center
    padding 0 20px
    overflow hidden

  .content
    z-index 1
    position relative
    padding 2rem 0

  .logo
    background-image url('../../assets/clear.bank-white-logo.svg')
    background-repeat no-repeat
    width 140px
    height 20px
    display block

</style>
