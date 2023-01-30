<template>
  <h2 class="tele">Téléphone</h2>
  <div class="block">
    <form class="block" @submit.prevent="ajoutContact">
      <input class="input" type="text" placeholder="Nom..." v-model="contacts.nom"/>
      <input class="input" type="number" placeholder="Numéro..." v-model="contacts.numero"/>
      <button class="submit" type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddView",

  computed: {
    contacts() {
      return this.$store.state.contacts
    },
  },
  methods: {
    ajoutContact() {
      if(this.contacts.nom === "" || this.contacts.numero == null) return
      if(this.contacts.nom.length<1){
        this.error=false
        return
      }
      if(this.contacts.find(contact => contact.nom === this.contacts.nom)) return

      this.$store.commit('ajoutContact', {
        nom: this.contacts.nom,
        numero: this.contacts.numero.toString(),
      })

      this.error = false


    }
  }
}
</script>

<style scoped>
.block{
  display: grid;
}
.input{
  margin: 10px;
  padding: 10px;
  border: solid #42b983 1px;
  border-radius: 12px;

}

.submit{
  font-size: large;
  font-weight: bold;
  color: white;
  margin: 10px;
  padding: 10px;
  border: solid #2c3e50 1px;
  background-color: #42b983;
  border-radius: 12px;

}
</style>