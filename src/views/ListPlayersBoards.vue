<template>
  <v-container fluid class="h_100 d-flex flex-column">
    <span class="red--text" v-if="error"> {{ error_create_boardGet }}</span>
    <div class="text-center">
      player name:
      <h1 v-if="playerGet" class="text-center">{{ playerGet.name }}</h1>
    </div>
    <div class="d-flex flex-wrap wrapper">
      <v-card outlined elevation="3" class="ma-3" v-for="(board, i) in boardsGet" :key="board.id">
        <div class="board_wrapper ma-2" @click="enterRoom(board.id)">
          <p>Player Index: {{ i + 1 }}</p>
          <p>Number of players: {{ board.players }}</p>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import io from 'socket.io-client';
import { CREATE_BOARD } from '../store/action-types';
import { mapGetters } from 'vuex';

export default {
  name: 'ListPlayersBoards',
  data() {
    return {
      error: null,
      isConnected: false,
      socket: false
    };
  },
  methods: {
    async enterRoom(boardid) {
      this.socket.emit('join_room', boardid, responseCode => {
        console.log(`Ack: ${responseCode}`);
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
      this.socket = io('http://127.0.0.1:9898', {
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
  cursor: pointer;
}
</style>
