<template lang="pug">
    .success-box
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
        <g fill="none" fill-rule="evenodd">
          <circle cx="22" cy="22" r="22" fill="#C4F0FF" fill-rule="nonzero"></circle>
          <polyline stroke="#43458B" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" points="14 23.504 19.34 29 31 17"></polyline>
        </g>
      </svg>
      h2.title Thank you
      p {{ formData.firstName }}, we will get back to you as soon as possible at {{ formData.email }}
      .summary-details
        el-row
          el-col.bold(:sm="8") Name
          el-col(:sm="10") {{ formData.firstName }} {{ formData.surname }}
        el-row
          el-col.bold(:sm="8") Mobile
          el-col(:sm="10") {{ formData.mobile }}
        el-row
          el-col.bold(:sm="8") Email
          el-col(:sm="10") {{ formData.email }}
        el-row
          el-col.bold(:sm="8") Age
          el-col(:sm="10") {{ formData.age || 'N/A' }}
        el-row
          el-col.bold(:sm="8") Date of birth
          el-col(:sm="10") {{ formData.dob | formatDate }}
        el-row
          el-col.bold(:sm="8") Your query
          el-col(:sm="10") {{ formData.query }}
</template>

<script>
export default {
  name: 'SummaryDetails',

  props: {
    formData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../assets/css/utilities/variables.styl'

  .success-box
    text-align center

  p
    font-size 1.4rem
    color $secondary-color

  .summary-details
    text-align left
    padding-top 1rem
    margin-top 2rem
    background-color $grey-100-color
    border-radius 20px
    padding 2rem
    max-width 350px
    margin 3rem auto 0

  .el-row
    margin-bottom .6rem
</style>
