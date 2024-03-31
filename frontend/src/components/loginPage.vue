<template>
  <div class="container">
    <nav>
      <h1>Login Student</h1>
    </nav>

    <router-link :to="{ name: 'HomePage' }">
      <button class="backHomePage">Back</button>
    </router-link>

    <div v-if="!loggedIn" class="inputDataFields">
      <div class="field">
        <input
          type="email"
          class="input"
          placeholder="Enter Email Address .."
          v-model="email"
        />
        <br /><br /><br />
      </div>
      <div class="field">
        <input
          type="password"
          class="input"
          placeholder="Enter Password .."
          v-model="password"
        />
        <br /><br /><br />
      </div>
    </div>

    <transition name="fade">
      <div v-if="!loggedIn">
        <button class="loginButton" @click="loginStudent">Login</button>
      </div>
      <div v-else>
        <p class="successMessage">Successfully logged in!</p>
      </div>
    </transition>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      loggedIn: false,
      id: null,
    };
  },

  methods: {
    async loginStudent() {
      try {
        await axios.post("http://localhost:3003/loginST", {
          email: this.email,
          password: this.password,
        });

        this.loggedIn = true;
        this.email = "";
        this.password = "";

        setTimeout(() => {
          this.$router.push("/Home");
        }, 1000);
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  },
};
</script>

<style>
.loginButton {
  position: absolute;
  top: 50vh;
  left: 65vh;
  width: 70vh;
  height: 5.5vh;
  font-size: 3vh;
  font-weight: 550;
  border: none;
  color: black;
  font-family: "Rubik", sans-serif;
  transition: 0.1s;
}

.loginButton:hover {
  border-bottom: 2px solid black;
  cursor: pointer;
}

fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.successMessage {
  position: absolute;
  top: 40vh;
  left: 0;
  width: 199vh;
  height: 6vh;
  background: rgb(240, 238, 238);
  font-size: 5vh;
  color: green;
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  font-family: "Rubik", sans-serif;
}
</style>