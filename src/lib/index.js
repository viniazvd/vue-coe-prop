import Vue from 'vue'

export default {
  created () {
    let { props } = this.$options

    if (!props) return

    console.log('before', props)
    console.log('-----')

    this._$coeprops = Object
      .entries(props)
      .reduce((acc, [ key, value ]) => {
        const bounded = Object.entries(value).reduce((newProps, [ type, fn ]) => {
          newProps[key] = {
            ...newProps[key],
            [type]: typeof fn === 'function' ? props[key][type].bind(this, type === 'validator' && this.$props[key]) : { ...props[key][type] }
          }

          return newProps
        }, {})

        acc = { ...acc, ...bounded }

        return acc
      }, {})

    console.log('-----')
    console.log('after', props)

    let strategies = Vue.config.optionMergeStrategies
    strategies.props = this._$coeprops
    console.log(strategies)
  }
}
