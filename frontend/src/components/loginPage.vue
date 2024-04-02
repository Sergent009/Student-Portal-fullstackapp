<template>
  <div class="container">
    <nav>
      <img class="UOKlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGsYWxz_BVyQta9BQMzCUwjxbBadyjR05DZhKH6-98g&s">
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
        const response = await axios.post("http://localhost:3003/loginST", {
          email: this.email,
          password: this.password,
        });

        // Assuming your API returns the user ID in the response
        const userId = response.data.id;

        this.loggedIn = true;
        this.email = "";
        this.password = "";

        setTimeout(() => {
          this.$router.push({ name: "mainPage", params: { myid: userId } });
        }, 1000);
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  },
};
</script>

<style scoped>
nav{
  width: 100%;
  height: 8%;
  position: absolute;
  top: 0;
  left: 0;
  color: black;
  box-shadow: 0 0 5px 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
}

.UOKlogo{
  width: 10vh;
  height: 5vh;
  position: absolute;
  top: 2vh;
  left: 3vh;
}

.UOKlogo:hover{
  cursor: pointer;
}

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