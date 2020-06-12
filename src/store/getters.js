export default {
  animalCounts: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state, getters) => {
    return state.pets.filter((pet) => {
      return pet.species === 'cat'
    })
  }
}
