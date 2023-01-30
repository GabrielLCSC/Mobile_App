<template>
  <div>
    <h2 class="tele">Téléphone</h2>

  </div>

  <div class="affich"  v-for="(item, index) in calls" v-bind:key="index">
      <h3 v-text="item.contactName"></h3>
      <h3 class="num" v-text="item.numero"></h3>
    <div class="flex">
      <p v-text="item.date"></p>
      <p v-text="item.heure"></p>

    </div>
    <hr>


  </div>
</template>

<script>
export default {
  name: 'HomeView',

  data() {
    return {
      text: 'Inconnu',

    }
  },
  methods: {

  },


  computed: {


    calls() {
      return this.$store.state.calls
    },


  },
}
</script>
<style scoped>
.affich{

}
.flex{
  display: flex;
  justify-content: space-around;
}

.num{
  font-weight: normal;
  font-size: medium;
  color: #a4a4a4;
}



</style>
