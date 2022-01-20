<template>
  <v-container fluid class="h_100 d-flex flex-column">
    <span class="red--text" v-if="error">{{ error_create_boardGet }}</span>
    <h1 v-if="playerGet">{{ playerGet.name }}</h1>
    <div class="d-flex flex-wrap">
      <div v-for="(board, i) in boardsGet" :key="board.id">
        <div class="board_wrapper ma-2" @click="enterRoom(board.id)">
          <p>Player Index: {{ i + 1 }}</p>
          <p>Number of players: {{ board.players }}</p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { io } from 'socket.io-client';
import { CREATE_BOARD } from '../store/action-types';
import { mapGetters } from 'vuex';

export default {
  name: 'ListPlayersBoards',
  data() {
    return {
      error: null
    };
  },
  methods: {
    enterRoom(boardid) {
      socket.emit('join_room', boardid, responseCode => {
        console.log(`Ack: ${responseCode}`);
        console.log(responseCode);
      });
    }
  },
  computed: {
    ...mapGetters(['error_create_boardGet', 'boardsGet', 'playerGet'])
  },
  watch: {
    error_create_boardGet(newValue, oldValue) {
      this.error = newValue;
    }
  },
  mounted() {
    this.$store.dispatch(CREATE_BOARD);
    if (this.playerGet) {
      const { id } = this.playerGet;
      const socket = io(process.env.VUE_APP_BASE_URL, {
        reconnectionDelayMax: 10000,
        query: {
          id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.board_wrapper {
  width: 10em;
  height: 5em;
  border: solid red 1px;
}
</style>
