import axios from 'axios'

const store = {
  namespaced: true,

  state: {
    formData: null
  },

  mutations: {
    SET_FORM_DATA (state, payload) {
      state.formData = payload
    }
  },

  actions: {
    submitForm ({ commit }, formData) {
      // Fake API POST
      return axios.post('https://jsonplaceholder.typicode.com/posts', formData)
        .then((result) => {
          commit('SET_FORM_DATA', formData)
          return result
        })
        .catch((err) => {
          throw err
        })
    }
  },

  getters: {
    loadedFormData (state) {
      return state.formData
    }
  }
}

export default store
