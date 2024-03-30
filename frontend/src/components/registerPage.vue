<template>
  <div class="container">
    <nav>
     <h1>Register Student</h1>
    </nav>

    <router-link :to = "{name: 'HomePage'}">
      <button class="backHomePage">Back</button>
    </router-link>

    <div class="inputDataFields">
      <div class="field">
        <input type="text" class="input" placeholder="Enter Your First Name .." v-model="firstname">
        <br><br><br>
      </div>
      <div class="field">
        <input type="text" class="input" placeholder="Enter Your Last Name .." v-model="lastname">
        <br><br><br>
      </div>
      <div class="field">
        <input type="number" class="input" placeholder="Enter Your Semester .." v-model="semester">
        <br><br><br>
      </div>
      <div class="field">
        <input type="email" class="input" placeholder="Enter Your Email Adress .." v-model="email">
        <br><br><br>
      </div>
      <div class="field">
        <input type="password" class="input" placeholder="Enter Your Password .." v-model="password">
        <br><br><br>
      </div>
    </div>

    <button class="registerButton" @click="registerStudent">Register</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      firstname: '',
      lastname: '',
      semester: null,
      email: '',
      password: ''
    }
  },

  methods: {
    async registerStudent(){
      try{
      await axios.post('http://localhost:3003/regST', {
        s_firstname: this.firstname,
        s_lastname: this.lastname,
        s_semester: this.semester,
        s_email: this.email,
        s_password: this.password
      })

        this.firstname = '',
        this.lastname = '',
        this.semester = null,
        this.email = '',
        this.password = ''

        setTimeout(() => {
          this.$router.push('/Home')
        }, 1000)
      }
      catch(err){
        console.log(err)
      }
    }
  }
}
</script>

<style>

.inputDataFields{
  position: absolute;
  top: 20%;
  left: 33%;
  width: 100vh;
  height: 76vh;
}

.input{
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

.input:focus{
  outline: none;
  border-bottom: 2px solid black;
  transition-duration: 0.3s ease-in;
  background: transparent;
  font-weight: 450;
}

.registerButton{
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
  transition: .1s;
}

.registerButton:hover{
  border-bottom: 2px solid black;
  cursor: pointer;
}

.backHomePage{
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

.backHomePage:hover{
  border-bottom: 2px solid black;
  cursor: pointer;
}

</style>