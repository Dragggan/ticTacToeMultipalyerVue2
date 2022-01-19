<template>
  <div>Game</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Game',
  async mounted() {
    console.log('%c  $==> ', 'color:red;font-size:12px;', process.env.VUE_APP_API_KEY);
    await axios
      .post(`${process.env.VUE_APP_BASE_URL}/player`, { name: 'test1', apikey: process.env.VUE_APP_API_KEY })
      .then(response => console.log('%c  response==> ', 'color:red;font-size:12px;', response))
      .catch(err => console.log('%c  err==> ', 'color:red;font-size:12px;', err));
  }
};
</script>

<style lang="scss" scoped></style>
