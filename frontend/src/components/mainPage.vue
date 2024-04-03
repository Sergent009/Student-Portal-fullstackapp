<template>
  <div class="container">
    <nav>
      <h1>Welcome To Karachi University</h1>
      <h2 class="nameChars">{{ $store.state.firstName }}{{$store.state.lastName}}</h2>
      <img class="UOKlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGsYWxz_BVyQta9BQMzCUwjxbBadyjR05DZhKH6-98g&s">
    <div class="logo" @click="showingSidebar">
    <svg class="sidebar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
    </div>
    </nav>

    <div class="mainsidebar" v-if="showSidebar">
      <div>
        <h2>Options  <svg class="optionslogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"/></svg>
        </h2>
        <hr>
        <div class="options">
          <div class="firsthr">
          <router-link :to = "{name: 'aboutUbit'}">
          <button>About UBIT</button>
          </router-link>
          <router-link :to = "{name: 'updInfo'}">
          <button>Update Info</button>
          </router-link>
          <button>See About Courses</button>
          <router-link :to = "{name: 'HomePage'}">
          <button>LogOut</button>
          </router-link>
          </div>
        </div>
      </div>
    </div>

  <div class="page" v-if="!showSidebar">
    <h1>University Of Karachi :</h1>
    <pre>The University of Karachi was established through the parliament as a federal university
in 1951. However, its roots can be traced back to 1947 when the University of Sindh was
established in Karachi. The University of Karachi was formed by upgrading the University
of Sindh's Karachi campus.

Over the years, the University of Karachi expanded its faculties and departments.
It gradually developed into a comprehensive institution offering undergraduate, graduate,
and postgraduate programs in various fields including arts, sciences, engineering, medicine,
business, law, and social sciences.</pre>
    <img class="uniPic" src="https://qiyamgah.com/wp-content/uploads/2023/05/karachi-university-caters-846-candidates-for-admission-test-1611493040-8828-1024x614.jpg" alt="">
  </div>

  </div>
</template>

<script>

export default {
  data(){
    return{
      showSidebar: false,
    }
  },

  methods:{
    showingSidebar(){
      this.showSidebar = !this.showSidebar
    },
  }
}
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

.logo{
  width: 6vh;
  height: 5vh;
  position: absolute;
  top: 1.5vh;
  right: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .1s;
}

.logo:hover{
  background: rgb(231, 230, 230);
  cursor: pointer;
  border-radius: 50%;
  width: 8vh;
  height: 6vh;
  position: absolute;
  top: 1vh;
  right: 3vh;
}

.sidebar{
  width: 5vh;
  height: 3.1vh;
  transition: .1s;
}

.mainsidebar{
  width: 55vh;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 0 0 5px 2px black;
}

h2{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  color: rgb(66, 65, 65);
}

.optionslogo{
  width: 6vh;
  height: 4vh;
}

.firsthr{
  margin-top: 15vh;
}

button{
  width: 55vh;
  height: 6vh;
  font-size: 3vh;
  font-weight: 600;
  font-family: "Rubik", sans-serif;
  border: none;
  background: white;
}

button:hover{
  background-color: rgb(221, 219, 219);
  color: rgb(66, 65, 65);
  cursor: pointer;
}

.uniPic{
  width: 40vh;
  height: 40vh;
  position: absolute;
  right: 0vh;
  top: 10vh;
}

.page h1{
  position: absolute;
  top: 7vh;
  left: 3vh;
  font-size: 6vh;
  font-family: "Rubik", sans-serif;
}

.page pre{
  position: absolute;
  top: 17vh;
  left: 3vh;
  font-size: 2.5vh;
  font-weight: 450;
  font-family: "Rubik", sans-serif;
}

.nameChars{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 16vh;
  width: 9vh;
  height: 5vh;
  text-transform: uppercase;
  background: rgb(231, 230, 230);
  color: rgb(61, 60, 60);
  border-radius: .7vh;
  font-family: "Rubik", sans-serif;
  font-weight: 440;
}

</style>