<template>
    <section >
        <div class = "characters">
            <--  hola --> 
            <div class = "characters__item"  v-for="character in characters" :key="character.id" >
               <CardCharacter :character="character"/>

            </div>
        </div>
    </section>



</template>

<script>
import CardCharacter from '@/components/CardCharacter.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
// Se importa el componente CardCharacter
    components: {
        CardCharacter
    },
// Se crea el setup
    setup() {
        const store = useStore()
// Esta función se encarga de obtener los personajes
        const characters = computed(() => {
            // Se retorna el estado charactersFilter
            return store.state.charactersFilter
        })
// Se ejecuta la función getCharacters
        onMounted(() => {
            store.dispatch('getCharacters')
        })
// Se retorna el objeto characters
        return {
            characters
        }
    }
}
</script>





<style lang="scss">
.characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 3rem 0;
}
</style>