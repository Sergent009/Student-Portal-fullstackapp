<template>
  
<div class="container">
  <nav>
    <h1>Student Portal</h1>
  </nav>

  <div class="card register">
    <p>If You Don't Have An Account !</p>
    <p>Click The Button Below To Register Your Account.</p>
    <router-link :to = "{name: 'RegisterPage'}">
    <button class="regButton">Register -></button>
    </router-link>
  </div>

  <div class="card login">
    <p>If You Have An Account !</p>
    <p>Click The Button Below To Login To Your Account.</p>
    <router-link :to = "{name: 'LoginPage'}">
    <button class="logButton">Login -></button>
    </router-link>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.container{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
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

h1{
  font-size: 6vh;
  font-family: "Rubik", sans-serif;
  font-weight: 550;

}

.register{
  width: 34%;
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
}

.regButton{
  border: none;
  background: transparent;
  transition: 0.3s;
  font-size: 17px;
  font-weight: 550;
  color: blue;
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
  width: 34%;
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
}

.logButton{
  border: none;
  background: transparent;
  transition: 0.3s;
  font-size: 17px;
  font-weight: 550;
  color: blue;
  font-family: "Rubik", sans-serif;
  font-weight: 550;
}

.logButton:hover{
  transform: translateX(10px);
  color: rgb(76, 125, 216);
  cursor: pointer;
  border-bottom: 1px solid cornflowerblue;
}

</style>