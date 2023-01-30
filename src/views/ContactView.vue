<template>
  <div>
    <h2 class="tele">Téléphone</h2>
  </div>
  <div>
    <div v-for="contact in contacts" v-bind:key="contact.nom">
      <div class="contact">
        <p class="nom">{{ contact.nom }}</p>
        <p class="num">Numéro : {{ contact.numero }}</p>
      </div>
      <hr>



    </div>

  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ContactView',

  computed: {
    ...mapState(['contacts'])
  }
}

</script>
<style scoped>
.contact{

  margin-left: 20px;
}

.nom{
  font-size: large;
}

.num{
  font-size: medium;
  color: #a4a4a4;
}

</style>

