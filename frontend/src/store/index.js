import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      firstName: ''
    };
  },
  mutations: {
    setFirstName(state, firstName) {
      state.firstName = firstName;
    }
  }
});
