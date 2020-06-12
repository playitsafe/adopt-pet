<template>
  <div>
    <PetTable species="cats" :pets="cats" />
  </div>
</template>

<script>
// import cats from '@/data/cats'
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
      'cats'
    ])
  }
}
</script>
