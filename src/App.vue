<template>

  <router-view/>
  <nav>
    <router-link to="/">Journal</router-link>
    <router-link to="/contact">Contacts</router-link>
    <router-link to="/clavier">Clavier</router-link>
    <router-link to="/add">+</router-link>
  </nav>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


nav {
  height: 90px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;

}

nav a {
  margin-top: 36px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
