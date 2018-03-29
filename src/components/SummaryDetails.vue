<template lang="pug">
    .success-box
      h2.title Form sent
      p Your form has been sent. Please review your details below
      .summary-details
        el-row
          el-col.bold(:sm="6") Name
          el-col(:sm="12") {{ formData.firstName }} {{ formData.surname }}
        el-row
          el-col.bold(:sm="6") Mobile
          el-col(:sm="12") {{ formData.mobile }}
        el-row
          el-col.bold(:sm="6") Email
          el-col(:sm="12") {{ formData.email }}
        el-row
          el-col.bold(:sm="6") Age
          el-col(:sm="12") {{ formData.age || 'N/A' }}
        el-row
          el-col.bold(:sm="6") Date of birth
          el-col(:sm="12") {{ formData.dob | formatDate }}
        el-row
          el-col.bold(:sm="6") Your query
          el-col(:sm="12") {{ formData.query }}

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
  .success-box
    text-align center

  .summary-details
    text-align left
    padding-top 1rem
  
  .el-row
    margin-bottom .6rem
</style>
