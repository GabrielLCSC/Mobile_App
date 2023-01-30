<template>
  <div>
    <h2 class="tele">Téléphone</h2>
    <div class="flex">
      <p class="txt">{{numeros}}</p>
      <p class="txt" v-if="isContactNumber(numeros)" v-text="contactName"></p>
    </div>

  </div>




<div class="btns">

  <div class="line">
    <button v-on:click="displayValue(1)" class="btn">1</button>
    <button v-on:click="displayValue(2)" class="btn">2</button>
    <button v-on:click="displayValue(3)" class="btn">3</button>
  </div>
  <div class="line">
    <button v-on:click="displayValue(4)" class="btn">4</button>
    <button v-on:click="displayValue(5)" class="btn">5</button>
    <button v-on:click="displayValue(6)" class="btn">6</button>
  </div>
  <div class="line">
    <button v-on:click="displayValue(7)" class="btn">7</button>
    <button v-on:click="displayValue(8)" class="btn">8</button>
    <button v-on:click="displayValue(9)" class="btn">9</button>
  </div>
  <div class="line">
    <button v-on:click="displayValue('#')" class="btn">#</button>
    <button v-on:click="displayValue(0)" class="btn">0</button>
    <button @click="deleteValue" class="btn">Supp</button>
  </div>
  <button v-on:click="ajoutCall" class="btn2">Call</button>

</div>


</template>
<script>


export default {
  name: 'ClavierView',


  data() {
    return {

      message: ""
    }
  },
  computed: {

    contacts() {
      return this.$store.state.contacts
    },
    numeros() {
      return this.$store.state.numeros.slice(0, 10);
    },

    calls() {
      return this.$store.state.calls
    },
    isContactNumber() {
      return (num) => this.contacts.some(contact => contact.numero === num);
    },
    contactName() {
      let contact = this.contacts.find(contact => contact.numero === this.numeros);
      return contact ? contact.nom : '';
    }

  },

  methods: {

    displayValue(number) {
      this.$store.commit('ajoutNum', number)
    },
    deleteValue() {
      this.$store.commit('deleteValue')
    },
    ajoutCall() {
      let date = new Date();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      this.$store.commit('ADD_TO_ARRAY', {
        numero:this.numeros,
        contactName:this.contactName,
        heure: hour + ":" + minutes + ":" + seconds,
        date: day + "/" + month + "/" + year,
      })
    }
  }

}
</script>
<style scoped>
.txt{
  font-size: larger;
}

.flex{
  height: 1px;
  display: flex;
  justify-content: center;
  gap: 5%;
}
.btns{
  margin-top: 90px;
  text-align: center;
}
.line{

}
.btn{
  border: solid white;
  font-size: larger;
  border-radius: 999px;
  height: 70px;
  width: 70px;
  margin: 5px;

}
.btn2{
  font-size: larger;
  border: solid white;
  color: white;
  font-weight: bold;
  background-color: #42b983;
  border-radius: 999px;
  height: 70px;
  width: 70px;
  margin: 5px;
}
.btn:hover{

  border: solid #42b983;
}
.btn2:hover{
  border: solid #42b983;
}

</style>
