<template>
  <div>
    name: {{ name }}
    lastName: {{ lastName }}
  </div>
</template>

<script>
import VueCoeProp from './lib'

export default {
  name: 'teste',

  mixins: [ VueCoeProp ],

  props: {
    name: {
      type: String
      // coeValidator: function (value) {
      //   console.log('this: ', this)
      //   return true
      // }
    },

    lastName: {
      type: String,
      required: true,
      validator: v => console.log('thissssss', this) || !!v,
      // validator: v => !!v,
      default: () => ''
    }
  },

  data () {
    return {
      dataType: false
    }
  }
}
</script>
