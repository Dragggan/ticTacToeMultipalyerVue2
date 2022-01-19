<template>
  <v-container class="d-flex">
    <v-form ref="form" lazy-validation class="ma-auto">
      <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
      <v-btn :disabled="!name" color="success" class="mr-4 my-4" @click="createPlayer">Create A Player</v-btn>
      <v-btn color="error" class="mr-4" @click="reset"> Reset Name </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {};
</script>
<script>
export default {
  name: 'CreatePlayer',

  data() {
    return {
      name: '',
      nameRules: [v => !!v || 'Name is required']
    };
  },
  methods: {
    createPlayer() {
      this.$refs.form.createPlayer();
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 30%;
  height: 100%;
}
</style>
