import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      firstName: '',
      lastName: ''
    };
  },
  mutations: {
    setFirstName(state, firstName) {
      state.firstName = firstName;
    },
    setLastName(state, lastName){
        state.lastName = lastName
    }
  }
});
