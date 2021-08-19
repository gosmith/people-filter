<template>
  <div class="uk-container">
    <h3>Person filter</h3>
    <div class=" uk-flex uk-flex-center">
      <input class="uk-input uk-width-1-3@m" type="text" placeholder="Search" 
      v-model="searchTerm">
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="people.length">
      <div v-for="(person, index) in filterData" :key="index" class="uk-flex uk-flex-center">
        <div class="uk-width-1-3@m">
          <div class="uk-card uk-card-default uk-card-body uk-margin-small-bottom">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle"  :src="person.picture.large">
            </div>
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">{{ person.name.first }} {{ person.name.last }}</h3>
                <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">{{ person.dob.age }} Random years old</time></p>
                <p class=" uk-margin-remove-top">{{ person.location.city }}, {{ person.location.country }}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import getPeople from './composables/getPeople'

export default {
  components: {
  },
  setup() {
    const searchTerm = ref('')
    
    const {  people, error, load } = getPeople()
      load()
      
    const filterData = computed(() => {
      let filterData = people.value.filter((person) => {
        return person.name.first.toLowerCase().includes(searchTerm.value.toLowerCase())
      })
      return filterData
    })
    return { searchTerm, people, error, filterData }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
