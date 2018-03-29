<template lang="pug">
  div
    .page-container
      header
        .clearBank-background
        .headline
          h1.common-page-title Contact us
          p.common-intro-text Experience the ClearBank® difference.
      el-row
        el-col.form-container(:sm="24" :md="12")
          .form-box
            contact-form(v-if="!loadedFormData")
            summary-details(:formData="loadedFormData" v-else)
</template>

<script>
import ContactForm from '@/components/ContactForm'
import SummaryDetails from '@/components/SummaryDetails'

export default {
  name: 'Contact',

  components: {
    ContactForm,
    SummaryDetails
  },

  computed: {
    loadedFormData () {
      return this.$store.getters['form/loadedFormData']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .page-container
    padding-top 3rem

  .headline
    padding 2rem 0 2.5rem
    position relative
    text-align center

  .form-container
    margin 0 auto
    float none

  .form-box
    border-radius 4px
    box-shadow 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1)
    background #fff
    padding 1.8rem 1rem
</style>
