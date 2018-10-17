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
    },

    lastName: {
      type: String,
      required: true,
      validator: function (v) {
        return console.log('this', this && !!this.dataType) || (this && !!this.dataType)
      },
      default: () => ''
    }
  },

  // beforeCreate () {
  //   let strategies = Vue.config.optionMergeStrategies
  //   strategies.props = this._$coeprops
  // },

  data () {
    return {
      dataType: true
    }
  }
}
</script>
