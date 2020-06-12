<template>
  <div>
    <PetTable species="dogs" :pets="dogs" />
  </div>
</template>

<script>
// import dogs from '@/data/dogs.js'
import PetTable from '@/components/PetTable'
import { mapState } from 'vuex'

export default {
  components: {
    PetTable
  },

  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
