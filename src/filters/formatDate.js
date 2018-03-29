import Vue from 'vue'
import moment from 'moment'

export default Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(value).format('DD/MM/YYYY')
  }
})
