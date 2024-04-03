<template>
  <div class="container" v-if="!animation">
    <nav>
      <img
        class="UOKlogo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGsYWxz_BVyQta9BQMzCUwjxbBadyjR05DZhKH6-98g&s"
      />
      <h1>Register Student</h1>
    </nav>

    <router-link :to="{ name: 'HomePage' }">
      <button class="backHomePage">Back</button>
    </router-link>

    <div class="inputDataFields">
      <div class="field">
        <input
          type="text"
          class="input"
          placeholder="Enter Your First Name .."
          v-model="firstname"
        />
        <br /><br /><br />
      </div>
      <div class="field">
        <input
          type="text"
          class="input"
          placeholder="Enter Your Last Name .."
          v-model="lastname"
        />
        <br /><br /><br />
      </div>
      <div class="field">
        <input
          type="number"
          class="input"
          placeholder="Enter Your Semester .."
          v-model="semester"
        />
        <br /><br /><br />
      </div>
      <div class="field">
        <input
          type="email"
          class="input"
          placeholder="Enter Your Email Adress .."
          v-model="email"
        /><br>
         <!-- Display error message if email is invalid -->
        <span v-if="!isValidEmail" class="error-message">Email Adress should contain @</span>
        <br /><br /><br />
      </div>
      <div class="field">
        <input
          type="password"
          class="input"
          placeholder="Enter Your Password .."
          v-model="password"
        /><br>
        <!-- Display error message if password is invalid -->
        <span v-if="!isValidPassword" class="error-message">Password should be at least 8 characters</span>
        <br /><br /><br />
      </div>
    </div>

    <button class="registerButton" @click="registerStudent" :disabled = "!isValidEmail || !isValidPassword">Register</button>
  </div>

  <logOutAnimation v-if="animation" />
</template>

<script>
import logOutAnimation from "../components/logOutAnimation.vue";
import axios from "axios";

export default {
  components: {
    logOutAnimation,
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      semester: null,
      email: "",
      password: "",
      animation: false,
    };
  },

  methods: {
    async registerStudent() {
      try {
        await axios.post("http://localhost:3003/regST", {
          s_firstname: this.firstname,
          s_lastname: this.lastname,
          s_semester: this.semester,
          s_email: this.email,
          s_password: this.password,
        });

        (this.firstname = ""),
          (this.lastname = ""),
          (this.semester = null),
          (this.email = ""),
          (this.password = "");

        this.animation = true;
        setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    },
  },
   computed: {
    // Check if email is valid (contains '@' sign)
    isValidEmail() {
      return this.email.includes('@');
    },
    // Check if password is valid (at least 8 characters)
    isValidPassword() {
      return this.password.length >= 8;
    },
  },
};
</script>

<style>
nav {
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

.UOKlogo {
  width: 10vh;
  height: 5vh;
  position: absolute;
  top: 2vh;
  left: 3vh;
}

.UOKlogo:hover {
  cursor: pointer;
}

.inputDataFields {
  position: absolute;
  top: 20%;
  left: 33%;
  width: 100vh;
  height: 76vh;
}

.input {
  width: 65vh;
  height: 5vh;
  border: none;
  font-size: 2.3vh;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
  background-color: rgb(240, 238, 238);
  color: black;
  padding: 0.4vh 2vh;
}

.input:focus {
  outline: none;
  border-bottom: 2px solid black;
  transition-duration: 0.3s ease-in;
  background: transparent;
  font-weight: 450;
}

.registerButton {
  position: absolute;
  top: 80vh;
  left: 110vh;
  width: 20vh;
  height: 4.5vh;
  font-size: 2.6vh;
  font-weight: 550;
  border: none;
  color: black;
  font-family: "Rubik", sans-serif;
  transition: 0.1s;
}

.registerButton:hover {
  border-bottom: 2px solid black;
  cursor: pointer;
}

.backHomePage {
  position: absolute;
  top: 12vh;
  left: 3vh;
  width: 17vh;
  height: 4.5vh;
  font-family: "Rubik", sans-serif;
  border: none;
  font-size: 2.6vh;
  font-weight: 550;
}

.backHomePage:hover {
  border-bottom: 2px solid black;
  cursor: pointer;
}

.error-message {
  color: rgb(56, 55, 55);
  font-size: 2.5vh;
  font-family: "Rubik", sans-serif;
}
</style>