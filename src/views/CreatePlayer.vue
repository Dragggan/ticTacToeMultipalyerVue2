<template>
  <v-container class="h_100 d-flex flex-column">
    <span class="red--text" v-if="error">{{ errorGet }}</span>
    <div class="wrapper ma-auto">
      <v-form ref="form" lazy-validation class="">
        <v-text-field v-model="name" @focus="resetError" :rules="nameRules" label="Name" required></v-text-field>
        <v-btn :disabled="!name" color="success" class="mr-4 my-4" @click="create_player(name)">Create A Player</v-btn>
        <v-btn color="error" class="mr-4" @click="reset"> Reset Name </v-btn>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import { RESET_ERROR } from '../store/mutations-types';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'CreatePlayer',

  data() {
    return {
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      error: null
    };
  },
  methods: {
    ...mapActions(['create_player']),
    reset() {
      this.$refs.form.reset();
    },
    resetError() {
      this.$store.commit(RESET_ERROR);
    }
  },
  computed: {
    ...mapGetters(['errorGet'])
  },
  watch: {
    errorGet(newValue, oldValue) {
      this.error = newValue;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../shared/layout.scss';

.wrapper {
  max-width: 30%;
}
</style>
