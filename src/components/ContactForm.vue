<template lang="pug">
  el-form(ref="form" :model="form" :rules="rules" label-position="left" label-width="180px")
    el-form-item(label="First name" prop="firstName")
      el-input(v-model="form.firstName")
    el-form-item(label="Surname" prop="surname")
      el-input(v-model="form.surname")
    el-form-item(label="Mobile number" prop="mobile")
      el-input(v-model="form.mobile" type="tel")
    el-form-item(label="E-mail address" prop="email")
      el-input(v-model="form.email" type="email")
    el-form-item(label="Age" prop="age")
      el-input(v-model.number="form.age" type="number")
    el-form-item(label="Date of birth" prop="dob")
      el-date-picker(
        v-model="form.dob"
        type="date"
        placeholder="Pick a day")
    el-form-item(label="Query" prop="query")
      el-input(v-model="form.query" type="textarea")
    el-form-item.button-container
      el-button(type="primary" :loading="isLoading" @click="submitForm()") Submit
      el-button(@click="clearForm()") Clear
</template>

<script>
export default {
  name: 'ContactForm',

  data () {
    const validateLettersOnly = (rule, value, callback) => {
      const letters = /^[A-Za-z\s]+$/

      if (!value.match(letters)) {
        return callback(new Error('Whoops! Please use alphabetical letters only'))
      }
      return callback()
    }

    return {
      form: {
        firstName: '',
        surname: '',
        mobile: '',
        email: '',
        age: '',
        dob: '',
        query: ''
      },
      isLoading: false,
      rules: {
        firstName: [
          { required: true, message: 'Whoops! Please enter your first name' },
          { validator: validateLettersOnly, trigger: 'blur' }
        ],
        surname: [
          { required: true, message: 'Whoops! Please enter your surname' },
          { validator: validateLettersOnly, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: 'Whoops! Please enter your mobile number', trigger: 'blur, change' }
        ],
        email: [
          { required: true, message: 'Whoops! Please enter your email address', trigger: 'blur, change' },
          { type: 'email', message: 'Whoops! Please enter a valid email address' }
        ],
        dob: [
          { required: true, message: 'Whoops! Please select a date', trigger: 'blur' }
        ],
        query: [
          { required: true, message: 'Whoops! Please leave us a query', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    submitForm () {
      // Validate form before submitting
      this.$refs['form'].validate((valid) => {
        // if (!valid) {
        //   return false
        // }

        this.isLoading = true
        return this.$store.dispatch('form/submitForm', this.form)
          .then((success) => {
            this.$notify({
              title: 'Success',
              message: 'Form has been sent',
              type: 'success'
            })
            this.isLoading = false
          })
          .catch((err) => {
            this.$notify({
              title: 'Error',
              message: 'Whoops! something has gone wrong. Try again',
              type: 'error'
            })
            this.isLoading = false
            console.log('ERROR: ', err)
          })
      })
    },

    clearForm () {
      this.$refs['form'].resetFields()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-form-item
    margin-bottom 2rem

  .button-container
    text-align right
    margin-bottom 0
</style>
