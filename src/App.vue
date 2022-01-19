<template>
  <div id="app">
    <div id="nav">
      <router-link to="/createPlayer">About</router-link>
      <router-link to="/listPlayersBoards">About</router-link>
      <router-link to="/game">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
