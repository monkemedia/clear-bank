import Vuex from 'vuex'
import form from './modules/form.js'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      form
    }
  })
}

export default createStore
