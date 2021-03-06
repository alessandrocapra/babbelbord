<template>
  <div>
    <h1> {{ player.name }} </h1>
    <p>Klik de onderwerpen aan, die liever vermeden worden binnen het spel. Vervolgens klik op opslaan om aanpassingen te bewaren.</p>
    <h2>Onderwerpen</h2>
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs4
                v-for="(topic,i) in topics"
                :key="i"
        >
          <v-btn large v-bind:class="topic.isDeselected ? 'disabled' : 'enabled'" v-on:click="changeTopicState(topic)">
            {{ topic.name }}
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>

    <div class="text-xs-center">
      <v-btn
        @click="savePlayerDetails"
        dark
        :loading="loading"
        @click.native="loader = 'loading'"
        :disabled="loading"
        color="deep-purple"
      >Opslaan
      </v-btn>

      <v-snackbar
        :timeout="timeout"
        color="green"
        v-model="snackbar"
      >
        Player updated, taking you back to players' list in a moment.
        <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
      </v-snackbar>

    </div>
  </div>
</template>

<script>
  import PlayersService from '@/services/PlayersService'
  import TopicsService from '@/services/TopicsService'

  export default {
    props: ['id'],
    data () {
      return {
        player: {},
        loader: null,
        loading: false,
        snackbar: false,
        timeout: 3000
      }
    },
    computed: {
      topics(){
        return this.$store.state.topics
      }
    },
    methods: {
      changeTopicState: (topic) => {
        topic.isDeselected = !topic.isDeselected
      },
      async savePlayerDetails() {
        for(var i = 0; i < this.topics.length; i++){
          if(this.player.skipTopics != null){
            if(this.topics[i].isDeselected){
              if(!this.player.skipTopics.includes(this.topics[i].id)) {
                this.player.skipTopics.push(this.topics[i].id)
              }
            }
            else {
              if (this.player.skipTopics.includes(this.topics[i].id)){
                this.player.skipTopics.splice(this.player.skipTopics.indexOf(this.topics[i].id), 1)
              }
            }
          } else {
            this.player.skipTopics = []
            if(this.topics[i].isDeselected){
              this.player.skipTopics.push(this.topics[i].id)
            }
          }
        }

        try {
          await PlayersService.update(this.player)
          this.snackbar = true
          setTimeout(() => {
            this.$router.go(-1)
          }, 3000);
          this.$store.dispatch('retrievePlayers')
        } catch(error) {
          this.error = error.response.data.error
        }
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    },
    async created() {
      console.log('this.player before: ', this.player)
      this.player = this.$store.getters.getPlayerById(this.id)

      // add isSelected to the topics array
      for (var i = 0; i < this.topics.length; i++){
        if(this.player.skipTopics == null)
          this.$set(this.topics[i], 'isDeselected', false)
        else {
          if(this.player.skipTopics.includes(this.topics[i].id))
            this.$set(this.topics[i], 'isDeselected', true)
          else
            this.$set(this.topics[i], 'isDeselected', false)
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  v-card-title > * {
    color: black;
  }

  .enabled {
    background: #ffc107!important;
  }

  .disabled {
    background: #9e9e9e!important;
  }

  .btn--large {
    width: 100%;
    height: 100px;
    font-size: 20px;
  }

</style>
