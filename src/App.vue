<template>
  <div id="app">
    <teste :name="name" :last-name="lastName" />
  </div>
</template>

<script>
import Teste from './Teste'

export default {
  name: 'app',

  components: { Teste },

  data () {
    return {
      name: 'coe',
      lastName: 'mané'
    }
  }
}
</script>
