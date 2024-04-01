<template>
  
<div class="container">
  <nav>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGsYWxz_BVyQta9BQMzCUwjxbBadyjR05DZhKH6-98g&s">
    <h1>Student Portal</h1>
  </nav>

  <div class="card register">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
    If You Don't Have An Account !
    <br><br>
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
    Click The Button Below To Register Your Account.
    <br><br>
    <router-link :to = "{name: 'RegisterPage'}">
    <button class="regButton">Register -></button>
    </router-link>
  </div>

  <div class="card login">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
    If You Have An Account !
    <br><br>
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
    Click The Button Below To Login To Your Account.
    <br><br>
    <router-link :to = "{name: 'LoginPage'}">
    <button class="logButton">Login -></button>
    </router-link>
  </div>


  <div class="footer">
    <div class="name">
      <p>Founder :</p>
      <p>Abdul Mannan Khan</p>
    </div>

    <a href="https://www.facebook.com">
      <svg class= "contacticons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
    </a>
    <a href="https://www.instagram.com">
      <svg class= "contacticons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
    </a>
    <a href="http://www.linkedin.com">
      <svg class= "contacticons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
    </a>

    <div class="text">All Right Reserved. @2024</div>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.container{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.icon{
  width: 3vh;
  height: 2vh;
}

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
}

img{
  width: 8vh;
  height: 5vh;
  position: absolute;
  top: 1.5vh;
  left: 3vh;
}

h1{
  font-size: 6vh;
  font-family: "Rubik", sans-serif;
  font-weight: 550;

}

.register{
  width: 35%;
  height: 26%;
  position: absolute;
  top: 22%;
  left: 7%;
  background: white;
  color: black;
  box-shadow: 0 0 5px 2px black;
  padding: 1% 2%;
  font-size: 2.7vh;
  font-weight: 550;
  font-family: "Rubik", sans-serif;
  border-radius: 2vh;
}

.regButton{
  border: none;
  background: transparent;
  transition: 0.3s;
  font-size: 3vh;
  font-weight: 550;
  color: rgb(83, 23, 143);
  font-family: "Rubik", sans-serif;
  font-weight: 550;
}

.regButton:hover{
  transform: translateX(10px);
  color: rgb(76, 125, 216);
  cursor: pointer;
  border-bottom: 1px solid cornflowerblue;
}

.login{
  width: 35%;
  height: 26%;
  position: absolute;
  top: 22%;
  left: 55%;
  background: white;
  color: black;
  box-shadow: 0 0 5px 2px black;
  padding: 1% 2%;
  font-size: 2.7vh;
  font-weight: 550;
  font-family: "Rubik", sans-serif;
  border-radius: 2vh;
}

.logButton{
  border: none;
  background: transparent;
  transition: 0.3s;
  font-size: 3vh;
  font-weight: 550;
  color: rgb(83, 23, 143);
  font-family: "Rubik", sans-serif;
  font-weight: 550;
}

.logButton:hover{
  transform: translateX(10px);
  color: rgb(76, 125, 216);
  cursor: pointer;
  border-bottom: 1px solid cornflowerblue;
}

.footer{
  position: absolute;
  bottom: 0;
  left: 0;
  background: white;
  width: 100%;
  height: 11%;
  box-shadow: 0 0 5px 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contacticons{
  width: 6vh;
  height: 5vh;
  transition: .1.5s ease-in-out;
}

.contacticons:hover{
  cursor: pointer;
  width: 6.5vh;
  height: 5.5vh;
}

.text{
  font-family: "Rubik", sans-serif;
  font-weight: 550;
  font-weight: 2.6vh;
  color: rgb(48, 47, 47);
  position: absolute;
  right: 5vh;
}

p{
  font-family: "Rubik", sans-serif;
  margin-top: 0vh;
  margin-left: -88vh;
  font-weight: 800;
  margin-bottom: 1vh;
  font-size: 2.5vh;
  text-decoration: underline;
  color: rgb(48, 47, 47);
}

</style>