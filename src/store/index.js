import { createStore } from 'vuex'

// Las mutaciones modifican a los states, pero esto se hace mediante las acciones
export default createStore({
  state: {
    //Creamos Arrays para almacenar los datos de los personajes y los filtros
    characters: [],
    charactersFilter: []
  },
  getters: {
  },
  mutations: {
    // Para modificar los datos de los personajes las mutations se usan para modificar los datos de los personajes en el state
    // Funcion que recibe dos parametros, el state(para acceso a las variables) y el payload(Data que se le envia)
    setCharacters(state, payload){
      //Asiganamos el valor de payload a la variable characters
      state.characters = payload
    },

    // Funcion que recibe dos parametros, el state(para acceso a las variables) y el payload(Data que se le envia)
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
  },


  actions: {
// Creamos una funcion asincrona para obtener los datos de los personajes mediante la API

// Se le manda el parametro commit para acceder a las mutations
  async getCharacters({commit}){
    try {

  // Se hace la peticion a la API -> Espera respuesta de la API
  const response = await fetch('https://rickandmortyapi.com/api/character')
  // Se convierte la respuesta a un formato JSON
  const data = await response.json()
  // Se envia la data a la mutacion setCharacters
  console.log(data.results);

  commit('setCharactersFilter', data.results)
  commit('setCharacters', data.results)


    } catch (error) {
      console.error(error);
      
    }
  
  }
},
  modules: {
  }
})