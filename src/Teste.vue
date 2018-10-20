<template>
  <div>
    name: {{ name }}
    lastName: {{ lastName }}
  </div>
</template>

<script>
import Vue from 'vue'
import VueCoeProp from './lib'

export default {
  name: 'teste',

  mixins: [ VueCoeProp ],

  props: {
    name: {
      type: String
    },

    lastName: {
      type: String,
      required: true,
      validator (v) {
        return console.log('this', this && this.hasError) || !!v
      }
    }
  },

  beforeCreate () {
    let strategies = Vue.config.optionMergeStrategies
    strategies.props = this._$coeprops

    console.log('strategies', strategies)
  },

  data () {
    return {
      hasError: false
    }
  }
}
</script>
