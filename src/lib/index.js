// import Vue from 'vue'

export default {
  beforeCreate () {
    let { props } = this.$options

    if (!props) return

    console.log('before', props)
    console.log('-----')

    props = Object
      .entries(props)
      .reduce((acc, [ key, value ]) => {
        const bounded = Object.entries(value).reduce((newProps, [ type, fn ]) => {
          newProps[key] = {
            ...newProps[key],
            [type]: typeof fn === 'function' ? props[key][type].bind(this) : { ...props[key][type] }
            // [type]: typeof fn === 'function' ? props[key][type].call(this, type === 'validator' && this.$props[key]) : { ...props[key][type] }
          }

          return newProps
        }, {})

        acc = { ...acc, ...bounded }

        return acc
      }, {})

    console.log('-----')
    console.log('after', props)

    // Vue.config.optionMergeStrategies.COE = function (toVal, fromVal) {
    //   console.log('DADSD', toVal, fromVal)

    //   return { ...vueCoeProps }
    // }

    // let strategies = Vue.config.optionMergeStrategies
    // strategies.props = strategies.COE

    // Vue.util.mergeOptions(this.$options.props, ...vueCoeProps)
  }
}
